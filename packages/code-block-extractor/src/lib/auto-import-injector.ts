import fs from 'fs';
import ts from 'typescript';
import * as path from 'path';

/**
 * Configuration for auto-import injection
 */
export interface IAutoImportInjectorConfig {
  /** Path to the package.json file */
  packageJsonPath: string;
  /** TypeScript compiler options for analysis */
  compilerOptions: ts.CompilerOptions;
}

/**
 * Package.json structure relevant to export resolution
 */
interface PackageJsonStructure {
  name?: string;
  main?: string;
  exports?: unknown;
}

/**
 * Result of auto-import injection
 */
export interface IAutoImportResult {
  /** Whether injection was successful */
  success: boolean;
  /** The code with injected imports (if successful) */
  code?: string;
  /** Error message (if unsuccessful) */
  error?: string;
  /** List of symbols that were auto-imported */
  injectedSymbols?: string[];
}

/**
 * Analyzes TypeScript code and automatically injects missing imports
 * for symbols that are exported by the current package.
 */
export class AutoImportInjector {
  private readonly config: IAutoImportInjectorConfig;
  private packageExportsCache: Set<string> | null = null;

  constructor(config: IAutoImportInjectorConfig) {
    this.config = config;
  }

  /**
   * Analyzes the code and injects missing imports for symbols exported by the package.
   *
   * @param code - The TypeScript code to analyze
   * @param packageName - Name of the package to import from
   * @param resolvedImportPath - Resolved path to import from
   * @returns Result with injected code or error
   */
  async injectMissingImports(
    code: string,
    _packageName: string,
    resolvedImportPath: string,
  ): Promise<IAutoImportResult> {
    try {
      const unresolvedSymbols = this.identifyUnresolvedSymbols(code);

      const packageExports = await this.getPackageExports();

      const symbolsToImport = unresolvedSymbols.filter((symbol) =>
        packageExports.has(symbol),
      );

      if (symbolsToImport.length === 0) {
        return {
          success: true,
          code,
          injectedSymbols: [],
        };
      }

      const codeWithImports = this.injectImports(
        code,
        symbolsToImport,
        resolvedImportPath,
      );

      return {
        success: true,
        code: codeWithImports,
        injectedSymbols: symbolsToImport,
      };
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : 'Unknown error';
      return {
        success: false,
        error: `Auto-import injection failed: ${errorMessage}`,
      };
    }
  }

  /**
   * Identifies unresolved symbols in TypeScript code by analyzing compiler diagnostics.
   *
   * @param code - The TypeScript code to analyze
   * @returns Array of unresolved symbol names
   */
  private identifyUnresolvedSymbols(code: string): string[] {
    const sourceFile = ts.createSourceFile(
      'temp.ts',
      code,
      ts.ScriptTarget.Latest,
      true,
    );

    const defaultHost = ts.createCompilerHost(this.config.compilerOptions);
    const host: ts.CompilerHost = {
      getSourceFile: (fileName) => {
        if (fileName === 'temp.ts') return sourceFile;
        return defaultHost.getSourceFile(fileName, ts.ScriptTarget.Latest);
      },
      writeFile: () => {
        /* NOOP */
      },
      getCurrentDirectory: () => process.cwd(),
      getDirectories: ts.sys.getDirectories,
      fileExists: (fileName) =>
        fileName === 'temp.ts' || ts.sys.fileExists(fileName),
      readFile: (fileName) => {
        if (fileName === 'temp.ts') return code;
        return ts.sys.readFile(fileName);
      },
      getCanonicalFileName: (fileName) => fileName,
      useCaseSensitiveFileNames: () => ts.sys.useCaseSensitiveFileNames,
      getNewLine: () => ts.sys.newLine,
      getDefaultLibFileName: (options) =>
        defaultHost.getDefaultLibFileName(options),
    };

    const program = ts.createProgram(
      ['temp.ts'],
      this.config.compilerOptions,
      host,
    );
    const diagnostics = ts.getPreEmitDiagnostics(program);

    const unresolvedSymbols = diagnostics
      .filter((diagnostic) => diagnostic.code === 2304)
      .map((diagnostic) => this.extractSymbolNameFromDiagnostic(diagnostic))
      .filter((name): name is string => name !== null);

    const existingImports = this.extractExistingImports(code);
    const filteredSymbols = unresolvedSymbols.filter(
      (symbol) => !existingImports.has(symbol),
    );

    return Array.from(new Set(filteredSymbols));
  }

  /**
   * Extracts the symbol name from a TypeScript diagnostic message.
   *
   * @param diagnostic - The TypeScript diagnostic
   * @returns The symbol name or null if not extractable
   */
  private extractSymbolNameFromDiagnostic(
    diagnostic: ts.Diagnostic,
  ): string | null {
    const message = ts.flattenDiagnosticMessageText(
      diagnostic.messageText,
      '\n',
    );
    const match = message.match(/Cannot find name '([^']+)'/);
    return match?.[1] ?? null;
  }

  /**
   * Extracts existing imported symbols from TypeScript code.
   *
   * @param code - The TypeScript code to analyze
   * @returns Set of already imported symbol names
   */
  private extractExistingImports(code: string): Set<string> {
    const sourceFile = ts.createSourceFile(
      'temp.ts',
      code,
      ts.ScriptTarget.Latest,
      true,
    );

    const importedSymbols = new Set<string>();

    const visit = (node: ts.Node) => {
      if (ts.isImportDeclaration(node) && node.importClause) {
        // Handle named imports: import { foo, bar } from 'module'
        if (
          node.importClause.namedBindings &&
          ts.isNamedImports(node.importClause.namedBindings)
        ) {
          node.importClause.namedBindings.elements.forEach((element) => {
            importedSymbols.add(element.name.text);
          });
        }

        if (node.importClause.name) {
          importedSymbols.add(node.importClause.name.text);
        }

        if (
          node.importClause.namedBindings &&
          ts.isNamespaceImport(node.importClause.namedBindings)
        ) {
          importedSymbols.add(node.importClause.namedBindings.name.text);
        }
      }

      ts.forEachChild(node, visit);
    };

    visit(sourceFile);
    return importedSymbols;
  }

  /**
   * Gets all symbols exported by the current package.
   *
   * @returns Set of exported symbol names
   */
  private async getPackageExports(): Promise<Set<string>> {
    if (this.packageExportsCache) {
      return this.packageExportsCache;
    }

    try {
      const packageJsonContent = fs.readFileSync(
        this.config.packageJsonPath,
        'utf8',
      );
      const packageJson = JSON.parse(packageJsonContent);

      const exports = new Set<string>();
      const entryPoints = this.resolveAllEntryPoints(packageJson);

      for (const entryPoint of entryPoints) {
        try {
          const entryCode = fs.readFileSync(entryPoint, 'utf8');
          const entryExports = this.extractExportsFromCode(entryCode);
          entryExports.forEach((exp) => exports.add(exp));
        } catch {
          continue;
        }
      }

      this.packageExportsCache = exports;
      return exports;
    } catch (error) {
      throw new Error(
        `Failed to analyze package exports: ${error instanceof Error ? error.message : 'Unknown error'}`,
      );
    }
  }

  /**
   * Resolves all possible entry points from package.json.
   *
   * @param packageJson - Parsed package.json content
   * @returns Array of absolute paths to entry point files
   */
  private resolveAllEntryPoints(packageJson: PackageJsonStructure): string[] {
    const packageDir = path.dirname(this.config.packageJsonPath);
    const entryPoints: string[] = [];

    if (packageJson.main) {
      entryPoints.push(path.resolve(packageDir, packageJson.main));
    }

    if (packageJson.exports) {
      const addExportPath = (exportValue: unknown) => {
        if (typeof exportValue === 'string') {
          entryPoints.push(path.resolve(packageDir, exportValue));
        } else if (typeof exportValue === 'object' && exportValue !== null) {
          Object.values(exportValue).forEach((value) => {
            if (typeof value === 'string') {
              entryPoints.push(path.resolve(packageDir, value));
            }
          });
        }
      };

      if (typeof packageJson.exports === 'object') {
        Object.values(packageJson.exports).forEach(addExportPath);
      } else {
        addExportPath(packageJson.exports);
      }
    }

    return entryPoints;
  }

  /**
   * Extracts exported symbols from TypeScript/JavaScript code.
   *
   * @param code - The source code to analyze
   * @returns Array of exported symbol names
   */
  private extractExportsFromCode(code: string): string[] {
    const sourceFile = ts.createSourceFile(
      'temp.ts',
      code,
      ts.ScriptTarget.Latest,
      true,
    );

    const exports: string[] = [];

    const visit = (node: ts.Node) => {
      if (ts.isVariableStatement(node) && this.hasExportModifier(node)) {
        node.declarationList.declarations.forEach((decl) => {
          if (ts.isIdentifier(decl.name)) {
            exports.push(decl.name.text);
          }
        });
      }

      if (
        ts.isFunctionDeclaration(node) &&
        this.hasExportModifier(node) &&
        node.name
      ) {
        exports.push(node.name.text);
      }

      if (
        ts.isClassDeclaration(node) &&
        this.hasExportModifier(node) &&
        node.name
      ) {
        exports.push(node.name.text);
      }

      if (ts.isInterfaceDeclaration(node) && this.hasExportModifier(node)) {
        exports.push(node.name.text);
      }

      if (ts.isTypeAliasDeclaration(node) && this.hasExportModifier(node)) {
        exports.push(node.name.text);
      }

      if (
        ts.isExportDeclaration(node) &&
        node.exportClause &&
        ts.isNamedExports(node.exportClause)
      ) {
        node.exportClause.elements.forEach((element) => {
          exports.push(element.name.text);
        });
      }

      ts.forEachChild(node, visit);
    };

    visit(sourceFile);
    return exports;
  }

  /**
   * Checks if a node has an export modifier.
   *
   * @param node - The TypeScript node to check
   * @returns True if the node has an export modifier
   */
  private hasExportModifier(node: ts.Node): boolean {
    return (
      ts.canHaveModifiers(node) &&
      ts
        .getModifiers(node)
        ?.some((modifier) => modifier.kind === ts.SyntaxKind.ExportKeyword) ===
        true
    );
  }

  /**
   * Injects import statements into TypeScript code.
   *
   * @param code - The original code
   * @param symbolsToImport - Array of symbol names to import
   * @param importPath - The path to import from
   * @returns Code with injected imports
   */
  private injectImports(
    code: string,
    symbolsToImport: string[],
    importPath: string,
  ): string {
    const sourceFile = ts.createSourceFile(
      'temp.ts',
      code,
      ts.ScriptTarget.Latest,
      true,
    );

    const importStatement = ts.factory.createImportDeclaration(
      undefined, // modifiers
      ts.factory.createImportClause(
        false, // not type-only
        undefined, // no default import
        ts.factory.createNamedImports(
          symbolsToImport.map((symbol) =>
            ts.factory.createImportSpecifier(
              false, // not type-only
              undefined, // no property name (same as exported name)
              ts.factory.createIdentifier(symbol),
            ),
          ),
        ),
      ),
      ts.factory.createStringLiteral(importPath),
    );

    const transformer: ts.TransformerFactory<ts.SourceFile> = () => {
      return (sourceFile) => {
        const existingImports = sourceFile.statements.filter(
          ts.isImportDeclaration,
        );
        const otherStatements = sourceFile.statements.filter(
          (stmt) => !ts.isImportDeclaration(stmt),
        );

        const newStatements = [
          ...existingImports,
          importStatement,
          ...otherStatements,
        ];

        return ts.factory.updateSourceFile(sourceFile, newStatements);
      };
    };

    const result = ts.transform(sourceFile, [transformer]);
    const printer = ts.createPrinter({
      newLine: ts.NewLineKind.LineFeed,
      removeComments: false,
      omitTrailingSemicolon: false,
    });

    const transformedSourceFile = result.transformed[0];
    if (!transformedSourceFile) {
      throw new Error('Transformation failed: no transformed source file');
    }
    const transformedCode = printer
      .printFile(transformedSourceFile)
      .replace(/"/g, "'"); // Convert double quotes to single quotes for consistency

    result.dispose();

    return transformedCode;
  }
}
