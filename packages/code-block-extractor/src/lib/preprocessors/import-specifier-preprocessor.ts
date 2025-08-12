import * as path from 'path';
import { resolve } from 'resolve.exports';
import { CodeBlock } from '../core/code-block.ts';
import { IPreprocessor } from '../core/preprocessor.ts';

/**
 * Valid JavaScript identifier pattern for import statements.
 */
const IDENTIFIER_PATTERN = '[$a-zA-Z_][$a-zA-Z0-9_]*';

/**
 * Configuration interface for ImportSpecifierPreprocessor.
 */
export interface IImportSpecifierPreprocessorConfig {
  /** Name of the package to resolve imports for */
  packageName: string;
  /** Path to the package.json file */
  packageJsonPath: string;
  /** Optional parsed package.json object to avoid re-reading */
  packageJson?: {
    name: string;
    main?: string;
    exports?: unknown;
  };
}

/**
 * Preprocessor that replaces package imports with resolved file paths.
 *
 * This preprocessor handles different import patterns:
 * - Named imports: import { foo, bar } from 'package'
 * - Default imports: import defaultExport from 'package'
 * - Namespace imports: import * as namespace from 'package'
 *
 * It uses resolve.exports to resolve the package entry point according
 * to the package.json exports/main fields.
 */
export class ImportSpecifierPreprocessor implements IPreprocessor {
  readonly name = 'import-specifier-replacement';

  private readonly config: IImportSpecifierPreprocessorConfig;

  constructor(config: IImportSpecifierPreprocessorConfig) {
    this.config = config;
  }

  /**
   * Preprocesses a code block by replacing package imports with resolved file paths.
   *
   * @param codeBlock The code block to preprocess
   * @returns A promise that resolves to the processed code block
   */
  async preprocess(codeBlock: CodeBlock): Promise<CodeBlock> {
    const { packageName } = this.config;

    const importPatterns = this.createImportPatterns(packageName);
    const lines = codeBlock.content.split('\n');

    const hasImportsFromPackage = this.hasMatchingImports(
      codeBlock.content,
      importPatterns,
      lines,
    );

    if (!hasImportsFromPackage) {
      return codeBlock;
    }

    const resolvedPath = this.resolveEntryPoint();

    const transformedContent = this.replaceImports(
      codeBlock.content,
      importPatterns,
      lines,
      packageName,
      resolvedPath,
    );

    if (transformedContent !== codeBlock.content) {
      return new CodeBlock(
        transformedContent,
        codeBlock.filePath,
        codeBlock.startLine,
        codeBlock.endLine,
        codeBlock.language,
      );
    }

    return codeBlock;
  }

  /**
   * Creates regex patterns for different import types.
   *
   * @param packageName The name of the package to match
   * @returns Array of regex patterns for different import styles
   */
  private createImportPatterns(packageName: string): RegExp[] {
    const escapedPackageName = this.escapeRegExp(packageName);

    return [
      new RegExp(
        `import\\s*\\{[^}]*\\}\\s*from\\s*(['"])${escapedPackageName}\\1`,
        'g',
      ),
      new RegExp(
        `import\\s+${IDENTIFIER_PATTERN}\\s+from\\s*(['"])${escapedPackageName}\\1`,
        'g',
      ),
      new RegExp(
        `import\\s*\\*\\s*as\\s+${IDENTIFIER_PATTERN}\\s+from\\s*(['"])${escapedPackageName}\\1`,
        'g',
      ),
    ];
  }

  /**
   * Checks if a match should be skipped due to being in a comment or template literal.
   *
   * @param content The full content being processed
   * @param matchIndex The index of the current match
   * @param lines The content split into lines
   * @returns True if the match should be skipped
   */
  private shouldSkipMatch(
    content: string,
    matchIndex: number,
    lines: string[],
  ): boolean {
    const beforeMatch = content.substring(0, matchIndex);
    const lineNumber = beforeMatch.split('\n').length - 1;
    const line = lines[lineNumber];

    if (!line) {
      return true;
    }

    const trimmedLine = line.trim();
    if (
      trimmedLine.startsWith('//') ||
      trimmedLine.startsWith('*') ||
      (trimmedLine.startsWith('/*') && trimmedLine.includes('*/'))
    ) {
      return true;
    }

    const beforeThis = content.substring(0, matchIndex);
    const backtickCount = (beforeThis.match(/`/g) || []).length;
    return backtickCount % 2 === 1;
  }

  /**
   * Checks if the content has any imports matching the given patterns.
   *
   * @param content The content to check
   * @param importPatterns The regex patterns to match against
   * @param lines The content split into lines
   * @returns True if matching imports are found
   */
  private hasMatchingImports(
    content: string,
    importPatterns: RegExp[],
    lines: string[],
  ): boolean {
    for (const pattern of importPatterns) {
      pattern.lastIndex = 0;

      let match;
      while ((match = pattern.exec(content)) !== null) {
        if (!this.shouldSkipMatch(content, match.index, lines)) {
          return true;
        }
      }
    }

    return false;
  }

  /**
   * Replaces imports in the content with the resolved path.
   *
   * @param content The content to transform
   * @param importPatterns The regex patterns to match against
   * @param lines The content split into lines
   * @param packageName The name of the package being replaced
   * @param resolvedPath The resolved path to replace with
   * @returns The transformed content
   */
  private replaceImports(
    content: string,
    importPatterns: RegExp[],
    lines: string[],
    packageName: string,
    resolvedPath: string,
  ): string {
    let transformedContent = content;

    for (const pattern of importPatterns) {
      transformedContent = transformedContent.replace(
        pattern,
        (match, ...args) => {
          const matchIndex = args[args.length - 2];

          if (this.shouldSkipMatch(content, matchIndex, lines)) {
            return match;
          }

          const quoteMatch = match.match(/(['"])[^'"]*\1/);
          if (quoteMatch) {
            const quoteChar = quoteMatch[0][0];
            return match.replace(
              new RegExp(`(['"])${this.escapeRegExp(packageName)}\\1`),
              `${quoteChar}${resolvedPath}${quoteChar}`,
            );
          }
          return match;
        },
      );
    }

    return transformedContent;
  }

  /**
   * Resolves the entry point from package.json using resolve.exports.
   *
   * @returns The resolved entry point path
   * @throws Error if resolution fails or no entry point found
   */
  private resolveEntryPoint(): string {
    const packageJson = this.config.packageJson ?? {
      name: this.config.packageName,
    };

    try {
      const resolved = resolve(packageJson, '.');
      if (resolved && resolved.length > 0 && resolved[0]) {
        const packageDir = path.dirname(this.config.packageJsonPath);
        return path.resolve(packageDir, resolved[0]);
      } else {
        throw new Error(
          `Cannot resolve entry point for package '${this.config.packageName}'`,
        );
      }
    } catch (error) {
      if (error instanceof Error) {
        throw error;
      } else {
        throw new Error(
          `Cannot resolve entry point for package '${this.config.packageName}'`,
        );
      }
    }
  }

  /**
   * Escapes special regex characters in a string.
   *
   * @param str The string to escape
   * @returns The escaped string
   */
  private escapeRegExp(str: string): string {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }
}
