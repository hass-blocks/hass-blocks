import * as fs from 'fs';
import * as path from 'path';
import * as ts from 'typescript';
import { resolve } from 'resolve.exports';
import { compile } from './typescript-compiler.ts';
import { AutoImportInjector } from './auto-import-injector.ts';
import { Checker } from './checker.ts';
import { CodeBlock } from './code-block.ts';
import { ICheckResult } from './check-result.ts';

/** Supported TypeScript language identifiers (case-insensitive) */
const TYPESCRIPT_LANGUAGE_IDENTIFIERS = ['ts', 'typescript'] as const;

/**
 * Configuration interface for TypeScriptChecker.
 */
export interface ITypeScriptCheckerProps {
  /** Path to the tsconfig.json file */
  tsconfigPath: string;
  /** Path to the package.json file */
  packageJsonPath: string;
  /** Working directory for compilation */
  workingDirectory: string;
}

/**
 * TypeScript code block checker implementation.
 *
 * This checker validates TypeScript code blocks found in markdown files.
 * It recognizes both 'ts' and 'typescript' language identifiers in a case-insensitive manner.
 */
export class TypeScriptChecker extends Checker {
  private readonly config: ITypeScriptCheckerProps;
  private readonly autoImportInjector: AutoImportInjector;

  constructor(config: ITypeScriptCheckerProps) {
    super('typescript');
    this.config = config;
    this.autoImportInjector = new AutoImportInjector({
      packageJsonPath: config.packageJsonPath,
      compilerOptions: this.loadTsconfig(),
    });
  }

  /**
   * Determines if this checker can validate the given code block.
   *
   * @param codeBlock - The code block to evaluate
   * @returns `true` if the code block has a TypeScript language identifier ('ts' or 'typescript', case-insensitive), `false` otherwise
   *
   * @example
   * ```typescript
   * const checker = new TypeScriptChecker();
   * const tsBlock = new CodeBlock('const x = 1;', '/test.md', 1, 1, 'ts');
   * const jsBlock = new CodeBlock('const x = 1;', '/test.md', 1, 1, 'js');
   *
   * checker.canCheck(tsBlock); // returns true
   * checker.canCheck(jsBlock); // returns false
   * ```
   */
  canCheck(codeBlock: CodeBlock): boolean {
    const normalizedLanguage = codeBlock.language.toLowerCase();
    return TYPESCRIPT_LANGUAGE_IDENTIFIERS.includes(
      normalizedLanguage as (typeof TYPESCRIPT_LANGUAGE_IDENTIFIERS)[number],
    );
  }

  /**
   * Validates a single TypeScript code block and returns the result.
   *
   * @param codeBlock - The TypeScript code block to validate
   * @returns A promise that resolves to a check result
   *
   * @remarks
   * This method performs import resolution as a preprocessing step before TypeScript compilation.
   * It resolves package imports to actual file paths using the package.json exports/main fields.
   */
  async check(codeBlock: CodeBlock): Promise<ICheckResult> {
    try {
      const packageJsonContent = fs.readFileSync(
        this.config.packageJsonPath,
        'utf8',
      );
      const packageJson = JSON.parse(packageJsonContent);
      const packageName = packageJson.name;

      if (!packageName) {
        return {
          success: false,
          message: 'Package name not found in package.json',
        };
      }

      const transformResult = await this.resolveImports(
        codeBlock.content,
        packageName,
        packageJson,
      );

      if (!transformResult.success) {
        return transformResult;
      }

      const compilerOptions = this.loadTsconfig();
      const fileType: 'ts' | 'tsx' =
        codeBlock.language.toLowerCase() === 'tsx' ? 'tsx' : 'ts';

      const compileResult = await compile({
        compilerOptions,
        workingDirectory: this.config.workingDirectory,
        code: transformResult.content,
        type: fileType,
      });

      if (compileResult.hasError) {
        return {
          success: false,
          message: this.formatDiagnostics(compileResult.diagnostics),
        };
      }

      return {
        success: true,
      };
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : 'Unknown error occurred';
      return {
        success: false,
        message: `TypeScript check failed: ${errorMessage}`,
      };
    }
  }

  /**
   * Resolves package imports in the code content to actual file paths.
   *
   * @param content - The code content to process
   * @param packageName - The name of the package to resolve imports for
   * @param packageJson - The parsed package.json object
   * @returns Result with transformed code content or error
   */
  private async resolveImports(
    content: string,
    packageName: string,
    packageJson: { name: string; main?: string; exports?: unknown },
  ): Promise<
    { success: true; content: string } | { success: false; message: string }
  > {
    const importPatterns = [
      new RegExp(
        `import\\s*\\{[^}]*\\}\\s*from\\s*['"]${this.escapeRegExp(packageName)}['"]`,
        'g',
      ),
      new RegExp(
        `import\\s+\\w+\\s+from\\s*['"]${this.escapeRegExp(packageName)}['"]`,
        'g',
      ),
      new RegExp(
        `import\\s*\\*\\s*as\\s+\\w+\\s+from\\s*['"]${this.escapeRegExp(packageName)}['"]`,
        'g',
      ),
    ];

    let transformedContent = content;
    let hasImportsFromPackage = false;

    try {
      for (const pattern of importPatterns) {
        transformedContent = transformedContent.replace(pattern, (match) => {
          hasImportsFromPackage = true;
          const resolvedPath = this.resolveEntryPoint(packageJson);
          if (resolvedPath) {
            return match.replace(
              new RegExp(`['"]${this.escapeRegExp(packageName)}['"]`),
              `'${resolvedPath}'`,
            );
          } else {
            throw new Error(
              `Cannot resolve entry point for package '${packageName}'`,
            );
          }
        });
      }
    } catch (error) {
      if (hasImportsFromPackage) {
        const errorMessage =
          error instanceof Error ? error.message : 'Resolution failed';
        return { success: false, message: errorMessage };
      }
    }

    try {
      const resolvedPath = this.resolveEntryPoint(packageJson);
      if (resolvedPath) {
        const autoImportResult =
          await this.autoImportInjector.injectMissingImports(
            transformedContent,
            packageName,
            resolvedPath,
          );

        if (autoImportResult.success && autoImportResult.code) {
          transformedContent = autoImportResult.code;
        }
      }
    } catch (error) {
      console.warn(
        'Auto-import injection failed:',
        error instanceof Error ? error.message : 'Unknown error',
      );
    }

    return { success: true, content: transformedContent };
  }

  /**
   * Resolves the entry point from package.json using exports or main field.
   *
   * @param packageJson - The parsed package.json object
   * @returns The resolved entry point path or null if not found
   */
  private resolveEntryPoint(packageJson: {
    name: string;
    main?: string;
    exports?: unknown;
  }): string | null {
    const resolved = resolve(packageJson, '.');
    if (resolved && resolved.length > 0 && resolved[0]) {
      const packageDir = path.dirname(this.config.packageJsonPath);
      return path.resolve(packageDir, resolved[0]);
    }
    return null;
  }

  /**
   * Loads TypeScript compiler options from tsconfig.json.
   *
   * @returns The TypeScript compiler options
   */
  private loadTsconfig(): ts.CompilerOptions {
    try {
      const tsconfigContent = fs.readFileSync(this.config.tsconfigPath, 'utf8');
      const tsconfig = JSON.parse(tsconfigContent);

      const parsedConfig = ts.parseJsonConfigFileContent(
        tsconfig,
        ts.sys,
        path.dirname(this.config.tsconfigPath),
      );

      return parsedConfig.options;
    } catch (error) {
      return {
        target: ts.ScriptTarget.ES2020,
        module: ts.ModuleKind.ESNext,
        strict: true,
        esModuleInterop: true,
        skipLibCheck: true,
        forceConsistentCasingInFileNames: true,
      };
    }
  }

  /**
   * Formats TypeScript diagnostics into a readable error message.
   *
   * @param diagnostics - The TypeScript diagnostics
   * @returns A formatted error message
   */
  private formatDiagnostics(diagnostics: ReadonlyArray<ts.Diagnostic>): string {
    return diagnostics
      .map((diagnostic) => {
        const message = ts.flattenDiagnosticMessageText(
          diagnostic.messageText,
          '\n',
        );

        if (diagnostic.file && diagnostic.start !== undefined) {
          const { line, character } =
            diagnostic.file.getLineAndCharacterOfPosition(diagnostic.start);
          return `${diagnostic.file.fileName} (${line + 1},${character + 1}): ${message}`;
        }

        return message;
      })
      .join('\n');
  }

  /**
   * Escapes special regex characters in a string.
   *
   * @param str - The string to escape
   * @returns The escaped string
   */
  private escapeRegExp(str: string): string {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }
}
