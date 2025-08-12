import * as fs from 'fs';
import * as path from 'path';
import ts from 'typescript';
import { Checker, CodeBlock, ICheckResult, type IPreprocessor } from '@core';
import { compile } from './typescript-compiler.ts';

/** Supported TypeScript language identifiers (case-insensitive) */
const TYPESCRIPT_LANGUAGE_IDENTIFIERS = ['ts', 'typescript'] as const;

/** Default TypeScript compiler options used when tsconfig.json cannot be loaded */
const DEFAULT_COMPILER_OPTIONS: ts.CompilerOptions = {
  target: ts.ScriptTarget.ES2020,
  module: ts.ModuleKind.ESNext,
  strict: true,
  esModuleInterop: true,
  skipLibCheck: true,
  forceConsistentCasingInFileNames: true,
};

/**
 * Configuration interface for TypeScriptChecker.
 */
export interface ITypeScriptCheckerProps {
  /** Path to the tsconfig.json file */
  tsconfigPath: string;
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

  constructor(
    config: ITypeScriptCheckerProps,
    preprocessors: IPreprocessor[] = [],
  ) {
    super('typescript', preprocessors);
    this.config = config;
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
   * checker.canCheck(tsBlock);
   * checker.canCheck(jsBlock);
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
   * @param codeBlock - The TypeScript code block to validate (already preprocessed)
   * @returns A promise that resolves to a check result
   *
   * @remarks
   * This method performs TypeScript compilation on the preprocessed code block.
   * Import resolution and auto-import injection are handled by preprocessors.
   */
  protected async performCheck(codeBlock: CodeBlock): Promise<ICheckResult> {
    try {
      const compilerOptions = this.loadTsconfig();
      const fileType = this.determineFileType(codeBlock.language);

      const compileResult = await compile({
        compilerOptions,
        workingDirectory: this.config.workingDirectory,
        code: codeBlock.content,
        type: fileType,
      });

      if (compileResult.hasError) {
        return {
          success: false,
          message: this.formatDiagnostics(compileResult.diagnostics),
        };
      }

      return { success: true };
    } catch (error) {
      return this.createErrorResult('TypeScript check failed', error);
    }
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
    } catch {
      return DEFAULT_COMPILER_OPTIONS;
    }
  }

  /**
   * Determines the file type based on the language identifier.
   *
   * @param language The language identifier
   * @returns The file type for TypeScript compilation
   */
  private determineFileType(language: string): 'ts' | 'tsx' {
    return language.toLowerCase() === 'tsx' ? 'tsx' : 'ts';
  }

  /**
   * Creates a standardized error result.
   *
   * @param prefix The error message prefix
   * @param error The error that occurred
   * @returns A check result indicating failure
   */
  private createErrorResult(prefix: string, error: unknown): ICheckResult {
    const errorMessage =
      error instanceof Error ? error.message : 'Unknown error occurred';
    return {
      success: false,
      message: `${prefix}: ${errorMessage}`,
    };
  }

  /**
   * Formats TypeScript diagnostics into a readable error message.
   *
   * @param diagnostics - The TypeScript diagnostics
   * @returns A formatted error message
   */
  private formatDiagnostics(diagnostics: ReadonlyArray<ts.Diagnostic>): string {
    return diagnostics
      .map((diagnostic) => this.formatSingleDiagnostic(diagnostic))
      .join('\n');
  }

  /**
   * Formats a single TypeScript diagnostic into a readable error message.
   *
   * @param diagnostic - The TypeScript diagnostic
   * @returns A formatted error message for the diagnostic
   */
  private formatSingleDiagnostic(diagnostic: ts.Diagnostic): string {
    const message = ts.flattenDiagnosticMessageText(
      diagnostic.messageText,
      '\n',
    );

    if (diagnostic.file && diagnostic.start !== undefined) {
      const { line, character } = diagnostic.file.getLineAndCharacterOfPosition(
        diagnostic.start,
      );
      return `${diagnostic.file.fileName} (${line + 1},${character + 1}): ${message}`;
    }

    return message;
  }
}
