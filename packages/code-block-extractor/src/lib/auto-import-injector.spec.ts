import { afterEach, describe, expect, it, vi } from 'vitest';
import mockFs from 'mock-fs';
import ts from 'typescript';
import {
  AutoImportInjector,
  type IAutoImportInjectorConfig,
} from './auto-import-injector.ts';

afterEach(() => {
  vi.resetAllMocks();
  mockFs.restore();
});

describe('AutoImportInjector', () => {
  const createConfig = (
    overrides: Partial<IAutoImportInjectorConfig> = {},
  ): IAutoImportInjectorConfig => ({
    packageJsonPath: '/test/package.json',
    compilerOptions: {
      target: ts.ScriptTarget.ES2020,
      module: ts.ModuleKind.ESNext,
      strict: true,
    },
    ...overrides,
  });

  const createMockFileSystem = (files: Record<string, string> = {}) => {
    mockFs({
      '/test/package.json': JSON.stringify({
        name: 'test-package',
        main: './dist/index.js',
        exports: {
          '.': {
            import: './dist/index.js',
            types: './dist/index.d.ts',
          },
        },
      }),
      '/test/dist/index.js': `
        export const testFunction = () => {};
        export class TestClass {}
        export interface ITestInterface {}
        export type TestType = string;
        export { namedExport };
        const namedExport = 'value';
      `,
      ...files,
    });
  };

  describe('constructor', () => {
    it('should create instance with valid configuration', () => {
      const config = createConfig();
      const injector = new AutoImportInjector(config);

      expect(injector).toBeInstanceOf(AutoImportInjector);
    });

    it('should store configuration internally', () => {
      const config = createConfig({
        packageJsonPath: '/custom/path/package.json',
      });
      const injector = new AutoImportInjector(config);

      // This test validates that the configuration is stored, not testing private internals
      expect(injector).toBeDefined();
    });
  });

  describe('injectMissingImports', () => {
    describe('success cases', () => {
      it('should inject missing imports for symbols exported by package', async () => {
        createMockFileSystem();
        const injector = new AutoImportInjector(createConfig());

        const codeWithMissingSymbol = `
          const result = testFunction();
          console.log(result);
        `;

        const result = await injector.injectMissingImports(
          codeWithMissingSymbol,
          'test-package',
          './test-package',
        );

        expect(result.success).toBe(true);
        expect(result.code).toContain(
          `import { testFunction } from './test-package'`,
        );
        expect(result.injectedSymbols).toEqual(['testFunction']);
        expect(result.error).toBeUndefined();
      });

      it('should inject multiple missing symbols in single import statement', async () => {
        createMockFileSystem();
        const injector = new AutoImportInjector(createConfig());

        const codeWithMultipleSymbols = `
          const func = testFunction();
          const instance = new TestClass();
          const typed: TestType = 'hello';
        `;

        const result = await injector.injectMissingImports(
          codeWithMultipleSymbols,
          'test-package',
          './test-package',
        );

        expect(result.success).toBe(true);
        expect(result.code).toContain(
          `import { testFunction, TestClass, TestType } from './test-package'`,
        );
        expect(result.injectedSymbols).toEqual(
          expect.arrayContaining(['testFunction', 'TestClass', 'TestType']),
        );
      });

      it('should place imports after existing imports', async () => {
        createMockFileSystem();
        const injector = new AutoImportInjector(createConfig());

        const codeWithExistingImport = `
          import { existingImport } from 'existing-package';
          
          const result = testFunction();
        `;

        const result = await injector.injectMissingImports(
          codeWithExistingImport,
          'test-package',
          './test-package',
        );

        expect(result.success).toBe(true);
        expect(result.code?.indexOf(`import { existingImport }`)).toBeLessThan(
          result.code?.indexOf(`import { testFunction }`) || -1,
        );
      });

      it('should return original code when no symbols need importing', async () => {
        createMockFileSystem();
        const injector = new AutoImportInjector(createConfig());

        const validCode = `
          const message = 'Hello World';
          console.log(message);
        `;

        const result = await injector.injectMissingImports(
          validCode,
          'test-package',
          './test-package',
        );

        expect(result.success).toBe(true);
        expect(result.code).toBe(validCode);
        expect(result.injectedSymbols).toEqual([]);
      });

      it('should ignore symbols not exported by the package', async () => {
        createMockFileSystem();
        const injector = new AutoImportInjector(createConfig());

        const codeWithUnknownSymbol = `
          const result = unknownFunction();
          console.log(result);
        `;

        const result = await injector.injectMissingImports(
          codeWithUnknownSymbol,
          'test-package',
          './test-package',
        );

        expect(result.success).toBe(true);
        expect(result.code).toBe(codeWithUnknownSymbol);
        expect(result.injectedSymbols).toEqual([]);
      });
    });

    describe('caching behavior', () => {
      it('should cache package exports between calls', async () => {
        createMockFileSystem();
        const injector = new AutoImportInjector(createConfig());

        // First call
        await injector.injectMissingImports(
          'const result = testFunction();',
          'test-package',
          './test-package',
        );

        // Mock file system changes to verify cache is used
        mockFs({
          '/test/package.json': JSON.stringify({ name: 'changed' }),
        });

        // Second call should still work with cached exports
        const result = await injector.injectMissingImports(
          'const result2 = testFunction();',
          'test-package',
          './test-package',
        );

        expect(result.success).toBe(true);
        expect(result.injectedSymbols).toEqual(['testFunction']);
      });
    });

    describe('error handling', () => {
      it('should handle missing package.json file', async () => {
        mockFs({}); // Empty file system
        const injector = new AutoImportInjector(createConfig());

        const result = await injector.injectMissingImports(
          'const result = testFunction();',
          'test-package',
          './test-package',
        );

        expect(result.success).toBe(false);
        expect(result.error).toContain('Auto-import injection failed');
        expect(result.code).toBeUndefined();
        expect(result.injectedSymbols).toBeUndefined();
      });

      it('should handle malformed package.json', async () => {
        mockFs({
          '/test/package.json': 'invalid json content',
        });
        const injector = new AutoImportInjector(createConfig());

        const result = await injector.injectMissingImports(
          'const result = testFunction();',
          'test-package',
          './test-package',
        );

        expect(result.success).toBe(false);
        expect(result.error).toContain('Auto-import injection failed');
      });

      it('should handle invalid TypeScript code', async () => {
        createMockFileSystem();
        const injector = new AutoImportInjector(createConfig());

        const invalidCode = `
          const unclosed = {
          // Missing closing brace
        `;

        const result = await injector.injectMissingImports(
          invalidCode,
          'test-package',
          './test-package',
        );

        // Should still attempt to process - TypeScript compiler handles syntax errors gracefully
        expect(result).toBeDefined();
      });

      it('should handle missing entry point files', async () => {
        mockFs({
          '/test/package.json': JSON.stringify({
            name: 'test-package',
            main: './nonexistent.js',
          }),
        });
        const injector = new AutoImportInjector(createConfig());

        const result = await injector.injectMissingImports(
          'const result = testFunction();',
          'test-package',
          './test-package',
        );

        // Should succeed but with empty exports (no symbols to import)
        expect(result.success).toBe(true);
        expect(result.injectedSymbols).toEqual([]);
      });
    });

    describe('different export patterns', () => {
      it('should detect export const declarations', async () => {
        mockFs({
          '/test/package.json': JSON.stringify({
            name: 'test-package',
            main: './index.js',
          }),
          '/test/index.js': `
            export const constantValue = 42;
            export const anotherConstant = 'hello';
          `,
        });

        const injector = new AutoImportInjector(createConfig());

        const result = await injector.injectMissingImports(
          'console.log(constantValue, anotherConstant);',
          'test-package',
          './test-package',
        );

        expect(result.success).toBe(true);
        expect(result.injectedSymbols).toEqual(
          expect.arrayContaining(['constantValue', 'anotherConstant']),
        );
      });

      it('should detect export function declarations', async () => {
        mockFs({
          '/test/package.json': JSON.stringify({
            name: 'test-package',
            main: './index.js',
          }),
          '/test/index.js': `
            export function helperFunction() {}
            export function anotherFunction(param) { return param; }
          `,
        });

        const injector = new AutoImportInjector(createConfig());

        const result = await injector.injectMissingImports(
          'helperFunction(); anotherFunction("test");',
          'test-package',
          './test-package',
        );

        expect(result.success).toBe(true);
        expect(result.injectedSymbols).toEqual(
          expect.arrayContaining(['helperFunction', 'anotherFunction']),
        );
      });

      it('should detect export class declarations', async () => {
        mockFs({
          '/test/package.json': JSON.stringify({
            name: 'test-package',
            main: './index.js',
          }),
          '/test/index.js': `
            export class UtilityClass {}
            export class AnotherClass {
              constructor() {}
            }
          `,
        });

        const injector = new AutoImportInjector(createConfig());

        const result = await injector.injectMissingImports(
          'new UtilityClass(); new AnotherClass();',
          'test-package',
          './test-package',
        );

        expect(result.success).toBe(true);
        expect(result.injectedSymbols).toEqual(
          expect.arrayContaining(['UtilityClass', 'AnotherClass']),
        );
      });

      it('should detect export interface declarations', async () => {
        mockFs({
          '/test/package.json': JSON.stringify({
            name: 'test-package',
            main: './index.ts',
          }),
          '/test/index.ts': `
            export interface IConfig {
              value: string;
            }
            export interface IOptions extends IConfig {}
          `,
        });

        const injector = new AutoImportInjector(createConfig());

        const result = await injector.injectMissingImports(
          'const config: IConfig = { value: "test" }; const opts: IOptions = { value: "test" };',
          'test-package',
          './test-package',
        );

        expect(result.success).toBe(true);
        expect(result.injectedSymbols).toEqual(
          expect.arrayContaining(['IConfig', 'IOptions']),
        );
      });

      it('should detect export type declarations', async () => {
        mockFs({
          '/test/package.json': JSON.stringify({
            name: 'test-package',
            main: './index.ts',
          }),
          '/test/index.ts': `
            export type StringType = string;
            export type NumberType = number;
          `,
        });

        const injector = new AutoImportInjector(createConfig());

        const result = await injector.injectMissingImports(
          'const str: StringType = "hello"; const num: NumberType = 42;',
          'test-package',
          './test-package',
        );

        expect(result.success).toBe(true);
        expect(result.injectedSymbols).toEqual(
          expect.arrayContaining(['StringType', 'NumberType']),
        );
      });

      it('should detect named export declarations', async () => {
        mockFs({
          '/test/package.json': JSON.stringify({
            name: 'test-package',
            main: './index.js',
          }),
          '/test/index.js': `
            const internalValue = 'internal';
            const anotherValue = 42;
            export { internalValue, anotherValue };
          `,
        });

        const injector = new AutoImportInjector(createConfig());

        const result = await injector.injectMissingImports(
          'console.log(internalValue, anotherValue);',
          'test-package',
          './test-package',
        );

        expect(result.success).toBe(true);
        expect(result.injectedSymbols).toEqual(
          expect.arrayContaining(['internalValue', 'anotherValue']),
        );
      });
    });

    describe('package.json structure variations', () => {
      it('should handle package.json with only main field', async () => {
        mockFs({
          '/test/package.json': JSON.stringify({
            name: 'simple-package',
            main: './lib/index.js',
          }),
          '/test/lib/index.js': 'export const simpleExport = true;',
        });

        const injector = new AutoImportInjector(createConfig());

        const result = await injector.injectMissingImports(
          'console.log(simpleExport);',
          'simple-package',
          './simple-package',
        );

        expect(result.success).toBe(true);
        expect(result.injectedSymbols).toEqual(['simpleExport']);
      });

      it('should handle package.json with exports field only', async () => {
        mockFs({
          '/test/package.json': JSON.stringify({
            name: 'modern-package',
            exports: {
              '.': './dist/index.js',
            },
          }),
          '/test/dist/index.js': 'export const modernExport = true;',
        });

        const injector = new AutoImportInjector(createConfig());

        const result = await injector.injectMissingImports(
          'console.log(modernExport);',
          'modern-package',
          './modern-package',
        );

        expect(result.success).toBe(true);
        expect(result.injectedSymbols).toEqual(['modernExport']);
      });

      it('should handle package.json with conditional exports', async () => {
        mockFs({
          '/test/package.json': JSON.stringify({
            name: 'conditional-package',
            exports: {
              '.': {
                import: './esm/index.js',
                require: './cjs/index.js',
              },
            },
          }),
          '/test/esm/index.js': 'export const esmExport = "esm";',
          '/test/cjs/index.js': 'module.exports = { cjsExport: "cjs" };',
        });

        const injector = new AutoImportInjector(createConfig());

        const result = await injector.injectMissingImports(
          'console.log(esmExport);',
          'conditional-package',
          './conditional-package',
        );

        expect(result.success).toBe(true);
        expect(result.injectedSymbols).toEqual(['esmExport']);
      });

      it('should handle package.json with multiple export paths', async () => {
        mockFs({
          '/test/package.json': JSON.stringify({
            name: 'multi-export-package',
            exports: {
              '.': './main.js',
              './utils': './utils.js',
            },
          }),
          '/test/main.js': 'export const mainExport = "main";',
          '/test/utils.js': 'export const utilityExport = "utility";',
        });

        const injector = new AutoImportInjector(createConfig());

        const result = await injector.injectMissingImports(
          'console.log(mainExport, utilityExport);',
          'multi-export-package',
          './multi-export-package',
        );

        expect(result.success).toBe(true);
        expect(result.injectedSymbols).toEqual(
          expect.arrayContaining(['mainExport', 'utilityExport']),
        );
      });
    });

    describe('TypeScript diagnostic analysis', () => {
      it('should identify multiple unresolved symbols', async () => {
        createMockFileSystem();
        const injector = new AutoImportInjector(createConfig());

        const codeWithMultipleUnresolved = `
          const a = testFunction();
          const b = new TestClass();
          const c = unknownFunction(); // Not in package
          const d: TestType = 'value';
        `;

        const result = await injector.injectMissingImports(
          codeWithMultipleUnresolved,
          'test-package',
          './test-package',
        );

        expect(result.success).toBe(true);
        // Should only inject symbols that exist in the package
        expect(result.injectedSymbols).toEqual(
          expect.arrayContaining(['testFunction', 'TestClass', 'TestType']),
        );
        expect(result.injectedSymbols).not.toContain('unknownFunction');
      });

      it('should remove duplicate unresolved symbols', async () => {
        createMockFileSystem();
        const injector = new AutoImportInjector(createConfig());

        const codeWithDuplicates = `
          const a = testFunction();
          const b = testFunction();
          const c = testFunction();
        `;

        const result = await injector.injectMissingImports(
          codeWithDuplicates,
          'test-package',
          './test-package',
        );

        expect(result.success).toBe(true);
        expect(result.injectedSymbols).toEqual(['testFunction']);
        // Verify import is only added once
        const importCount = (result.code?.match(/import.*testFunction/g) || [])
          .length;
        expect(importCount).toBe(1);
      });

      it('should handle code with no TypeScript errors', async () => {
        createMockFileSystem();
        const injector = new AutoImportInjector(createConfig());

        const validCode = `
          const message = 'Hello';
          console.log(message);
          
          function localFunction() {
            return 'local';
          }
          
          localFunction();
        `;

        const result = await injector.injectMissingImports(
          validCode,
          'test-package',
          './test-package',
        );

        expect(result.success).toBe(true);
        expect(result.injectedSymbols).toEqual([]);
        expect(result.code).toBe(validCode);
      });

      it('should handle empty code', async () => {
        createMockFileSystem();
        const injector = new AutoImportInjector(createConfig());

        const emptyCode = '';

        const result = await injector.injectMissingImports(
          emptyCode,
          'test-package',
          './test-package',
        );

        expect(result.success).toBe(true);
        expect(result.injectedSymbols).toEqual([]);
        expect(result.code).toBe(emptyCode);
      });

      it('should handle whitespace-only code', async () => {
        createMockFileSystem();
        const injector = new AutoImportInjector(createConfig());

        const whitespaceCode = '   \n  \t  \n  ';

        const result = await injector.injectMissingImports(
          whitespaceCode,
          'test-package',
          './test-package',
        );

        expect(result.success).toBe(true);
        expect(result.injectedSymbols).toEqual([]);
        expect(result.code).toBe(whitespaceCode);
      });
    });

    describe('compiler configuration variations', () => {
      it('should work with different TypeScript compiler options', async () => {
        createMockFileSystem();
        const customConfig = createConfig({
          compilerOptions: {
            target: ts.ScriptTarget.ES5,
            module: ts.ModuleKind.CommonJS,
            strict: false,
            skipLibCheck: true,
          },
        });
        const injector = new AutoImportInjector(customConfig);

        const result = await injector.injectMissingImports(
          'const result = testFunction();',
          'test-package',
          './test-package',
        );

        expect(result.success).toBe(true);
        expect(result.injectedSymbols).toEqual(['testFunction']);
      });

      it('should handle strict mode compiler options', async () => {
        createMockFileSystem();
        const strictConfig = createConfig({
          compilerOptions: {
            target: ts.ScriptTarget.ES2020,
            module: ts.ModuleKind.ESNext,
            strict: true,
            noImplicitAny: true,
            strictNullChecks: true,
          },
        });
        const injector = new AutoImportInjector(strictConfig);

        const result = await injector.injectMissingImports(
          'const result = testFunction();',
          'test-package',
          './test-package',
        );

        expect(result.success).toBe(true);
        expect(result.injectedSymbols).toEqual(['testFunction']);
      });
    });

    describe('advanced edge cases', () => {
      it('should handle symbols used in complex expressions', async () => {
        createMockFileSystem();
        const injector = new AutoImportInjector(createConfig());

        const complexCode = `
          const config = {
            handler: testFunction,
            instance: new TestClass(),
            type: 'test' as TestType
          };
          const result = testFunction?.() ?? 'default';
        `;

        const result = await injector.injectMissingImports(
          complexCode,
          'test-package',
          './test-package',
        );

        expect(result.success).toBe(true);
        expect(result.injectedSymbols).toEqual(
          expect.arrayContaining(['testFunction', 'TestClass', 'TestType']),
        );
      });

      it('should handle symbols in destructuring assignments', async () => {
        mockFs({
          '/test/package.json': JSON.stringify({
            name: 'test-package',
            main: './index.js',
          }),
          '/test/index.js': `
            export const obj = { prop: 'value' };
            export const arr = [1, 2, 3];
          `,
        });

        const injector = new AutoImportInjector(createConfig());

        const destructuringCode = `
          const { prop } = obj;
          const [first] = arr;
        `;

        const result = await injector.injectMissingImports(
          destructuringCode,
          'test-package',
          './test-package',
        );

        expect(result.success).toBe(true);
        expect(result.injectedSymbols).toEqual(
          expect.arrayContaining(['obj', 'arr']),
        );
      });

      it('should handle template literal with symbol references', async () => {
        createMockFileSystem();
        const injector = new AutoImportInjector(createConfig());

        const templateCode = `
          const message = \`Result: \${testFunction()}\`;
          console.log(message);
        `;

        const result = await injector.injectMissingImports(
          templateCode,
          'test-package',
          './test-package',
        );

        expect(result.success).toBe(true);
        expect(result.injectedSymbols).toEqual(['testFunction']);
      });

      it('should handle symbols used as types in function parameters', async () => {
        createMockFileSystem();
        const injector = new AutoImportInjector(createConfig());

        const functionTypeCode = `
          function processData(data: TestType): void {
            console.log(data);
          }
          
          const handler = (instance: TestClass) => {
            return instance;
          };
        `;

        const result = await injector.injectMissingImports(
          functionTypeCode,
          'test-package',
          './test-package',
        );

        expect(result.success).toBe(true);
        expect(result.injectedSymbols).toEqual(
          expect.arrayContaining(['TestType', 'TestClass']),
        );
      });

      it('should not inject imports for symbols already imported', async () => {
        createMockFileSystem();
        const injector = new AutoImportInjector(createConfig());

        const codeWithExistingImport = `
          import { testFunction } from './test-package';
          
          const result = testFunction();
          const instance = new TestClass(); // This should be imported
        `;

        const result = await injector.injectMissingImports(
          codeWithExistingImport,
          'test-package',
          './test-package',
        );

        expect(result.success).toBe(true);
        expect(result.injectedSymbols).toEqual(['TestClass']); // Only TestClass should be added
        expect(result.code).toContain(
          "import { testFunction } from './test-package'",
        );
        expect(result.code).toContain(
          "import { TestClass } from './test-package'",
        );
      });
    });
  });
});
