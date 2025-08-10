import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { mockDeep, type MockProxy } from 'vitest-mock-extended';
import mockFs from 'mock-fs';
import * as resolveExports from 'resolve.exports';
import { compile } from './typescript-compiler.ts';
import { AutoImportInjector } from './auto-import-injector.ts';
import {
  TypeScriptChecker,
  type ITypeScriptCheckerProps,
} from './typescript-checker.ts';
import { CodeBlock } from './code-block.ts';

vi.mock('resolve.exports');
vi.mock('./typescript-compiler.ts');
vi.mock('./auto-import-injector.ts');

afterEach(() => {
  mockFs.restore();
  vi.resetAllMocks();
});

function createMockCodeBlock(
  overrides: Partial<CodeBlock> = {},
): MockProxy<CodeBlock> {
  return mockDeep<CodeBlock>({
    content: 'console.log("test");',
    language: 'typescript',
    filePath: '/test.md',
    startLine: 1,
    endLine: 1,
    ...overrides,
  });
}

describe('TypeScriptChecker', () => {
  describe('constructor and name property', () => {
    it('should have name "typescript"', () => {
      vi.mocked(compile).mockResolvedValue({
        hasError: false,
        diagnostics: [],
      });
      vi.mocked(AutoImportInjector).mockImplementation(
        () =>
          ({
            injectMissingImports: vi.fn().mockImplementation(async (code) => ({
              success: true,
              code,
              injectedSymbols: [],
            })),
          }) as any,
      );

      const props: ITypeScriptCheckerProps = {
        tsconfigPath: '/test/tsconfig.json',
        packageJsonPath: '/test/package.json',
        workingDirectory: '/workspace',
      };
      const checker = new TypeScriptChecker(props);

      expect(checker.name).toBe('typescript');
    });
  });

  describe('constructor with ITypeScriptCheckerProps', () => {
    it('should accept configuration object with tsconfigPath, packageJsonPath and workingDirectory', () => {
      vi.mocked(compile).mockResolvedValue({
        hasError: false,
        diagnostics: [],
      });
      vi.mocked(AutoImportInjector).mockImplementation(
        () =>
          ({
            injectMissingImports: vi.fn().mockImplementation(async (code) => ({
              success: true,
              code,
              injectedSymbols: [],
            })),
          }) as any,
      );

      const props: ITypeScriptCheckerProps = {
        tsconfigPath: '/path/to/tsconfig.json',
        packageJsonPath: '/path/to/package.json',
        workingDirectory: '/workspace',
      };

      const checker = new TypeScriptChecker(props);

      expect(checker.name).toBe('typescript');
    });
  });

  describe('canCheck method', () => {
    let checker: TypeScriptChecker;

    beforeEach(() => {
      vi.mocked(compile).mockResolvedValue({
        hasError: false,
        diagnostics: [],
      });
      vi.mocked(AutoImportInjector).mockImplementation(
        () =>
          ({
            injectMissingImports: vi.fn().mockImplementation(async (code) => ({
              success: true,
              code,
              injectedSymbols: [],
            })),
          }) as any,
      );

      const props: ITypeScriptCheckerProps = {
        tsconfigPath: '/test/tsconfig.json',
        packageJsonPath: '/test/package.json',
        workingDirectory: '/workspace',
      };
      checker = new TypeScriptChecker(props);
    });

    it.each([
      'ts',
      'typescript',
      'TypeScript',
      'TS',
      'TYPESCRIPT',
      'Typescript',
      'tYpEsCrIpT',
      'Ts',
    ])(
      'should return true for TypeScript language identifier "%s" (case-insensitive)',
      (language) => {
        const mockBlock = createMockCodeBlock({ language });

        expect(checker.canCheck(mockBlock)).toBe(true);
      },
    );

    it.each([
      'javascript',
      'js',
      'python',
      'java',
      'c#',
      '',
      '   ',
      'typescript-react',
      'tsx',
    ])(
      'should return false for non-TypeScript language identifier "%s"',
      (language) => {
        const mockBlock = createMockCodeBlock({ language });

        expect(checker.canCheck(mockBlock)).toBe(false);
      },
    );
  });

  describe('check method', () => {
    let checker: TypeScriptChecker;

    beforeEach(() => {
      vi.mocked(compile).mockResolvedValue({
        hasError: false,
        diagnostics: [],
      });
      vi.mocked(AutoImportInjector).mockImplementation(
        () =>
          ({
            injectMissingImports: vi.fn().mockImplementation(async (code) => ({
              success: true,
              code,
              injectedSymbols: [],
            })),
          }) as any,
      );

      const props: ITypeScriptCheckerProps = {
        tsconfigPath: '/test/tsconfig.json',
        packageJsonPath: '/test/package.json',
        workingDirectory: '/workspace',
      };
      checker = new TypeScriptChecker(props);

      mockFs({
        '/test/package.json': JSON.stringify({
          name: 'test-package',
          main: './index.js',
        }),
      });
    });

    afterEach(() => {
      vi.resetAllMocks();
    });

    it('should return a Promise<ICheckResult> from check method', async () => {
      const mockBlock = createMockCodeBlock({
        content: 'const x: number = 42;',
        language: 'typescript',
      });

      const result = checker.check(mockBlock);

      expect(result).toBeInstanceOf(Promise);

      const resolvedResult = await result;
      expect(resolvedResult).toHaveProperty('success');
      expect(typeof resolvedResult.success).toBe('boolean');
    });

    it('should successfully process TypeScript code blocks', async () => {
      const mockBlock = createMockCodeBlock({
        content: 'interface User { name: string; }',
        language: 'typescript',
      });

      const result = await checker.check(mockBlock);

      expect(result).toBeDefined();
      expect(typeof result.success).toBe('boolean');
    });

    it.each([
      { content: 'type User = { id: number; }', language: 'ts' },
      { content: 'enum Color { Red, Green, Blue }', language: 'typescript' },
      {
        content: 'class MyClass { private value: string; }',
        language: 'TypeScript',
      },
    ])(
      'should handle TypeScript syntax: $content',
      async ({ content, language }) => {
        const mockBlock = createMockCodeBlock({ content, language });

        const result = await checker.check(mockBlock);
        expect(result).toBeDefined();
        expect(typeof result.success).toBe('boolean');
      },
    );

    it('should return a well-formed ICheckResult with success property', async () => {
      const mockBlock = createMockCodeBlock({
        content: 'const greeting: string = "Hello";',
        language: 'typescript',
      });

      const result = await checker.check(mockBlock);

      expect(result).toHaveProperty('success');
      expect(typeof result.success).toBe('boolean');

      if (result.success) {
        expect.assertions(3);
        expect(result).toEqual({ success: true });
      } else {
        expect.assertions(5);
        expect(result).toHaveProperty('message');
        expect(typeof result.message).toBe('string');
        expect(result.message.length).toBeGreaterThan(0);
      }
    });
  });

  describe('when checking TypeScript code with package imports', () => {
    let checker: TypeScriptChecker;

    beforeEach(() => {
      vi.mocked(compile).mockResolvedValue({
        hasError: false,
        diagnostics: [],
      });
      vi.mocked(AutoImportInjector).mockImplementation(
        () =>
          ({
            injectMissingImports: vi.fn().mockImplementation(async (code) => ({
              success: true,
              code,
              injectedSymbols: [],
            })),
          }) as any,
      );

      const props: ITypeScriptCheckerProps = {
        tsconfigPath: '/workspace/tsconfig.json',
        packageJsonPath: '/workspace/package.json',
        workingDirectory: '/workspace',
      };
      checker = new TypeScriptChecker(props);
    });

    afterEach(() => {
      vi.resetAllMocks();
      mockFs.restore();
    });

    describe('successful resolution behavior', () => {
      beforeEach(() => {
        mockFs({
          '/workspace/package.json': JSON.stringify({
            name: 'test-package',
            main: './dist/index.js',
          }),
        });
        vi.mocked(resolveExports.resolve).mockReturnValue(['./dist/index.js']);
      });

      it('should return success with code where import specifier is replaced with resolved path', async () => {
        const codeContent = `import { someFunction } from 'test-package';`;
        const mockBlock = createMockCodeBlock({
          content: codeContent,
          language: 'typescript',
        });

        const result = await checker.check(mockBlock);

        expect(result.success).toBe(true);
        expect(vi.mocked(compile)).toHaveBeenCalledWith({
          compilerOptions: expect.any(Object),
          workingDirectory: '/workspace',
          code: `import { someFunction } from '/workspace/dist/index.js';`,
          type: 'ts',
        });
      });

      it('should resolve imports when package.json has main field', async () => {
        mockFs({
          '/workspace/package.json': JSON.stringify({
            name: 'my-package',
            main: './lib/main.js',
          }),
        });
        vi.mocked(resolveExports.resolve).mockReturnValue(['./lib/main.js']);

        const codeContent = `import utils from 'my-package';`;
        const mockBlock = createMockCodeBlock({
          content: codeContent,
          language: 'typescript',
        });

        const result = await checker.check(mockBlock);

        expect(result.success).toBe(true);
        expect(vi.mocked(compile)).toHaveBeenCalledWith({
          compilerOptions: expect.any(Object),
          workingDirectory: '/workspace',
          code: `import utils from '/workspace/lib/main.js';`,
          type: 'ts',
        });
        expect(vi.mocked(resolveExports.resolve)).toHaveBeenCalledWith(
          { name: 'my-package', main: './lib/main.js' },
          '.',
        );
      });

      it('should resolve imports when package.json has exports field', async () => {
        const packageJson = {
          name: 'exports-package',
          exports: {
            '.': './dist/index.js',
            './utils': './dist/utils.js',
          },
        };
        mockFs({
          '/workspace/package.json': JSON.stringify(packageJson),
        });
        vi.mocked(resolveExports.resolve).mockReturnValue(['./dist/index.js']);

        const codeContent = `import * as pkg from 'exports-package';`;
        const mockBlock = createMockCodeBlock({
          content: codeContent,
          language: 'typescript',
        });

        const result = await checker.check(mockBlock);

        expect(result.success).toBe(true);
        expect(vi.mocked(compile)).toHaveBeenCalledWith({
          compilerOptions: expect.any(Object),
          workingDirectory: '/workspace',
          code: `import * as pkg from '/workspace/dist/index.js';`,
          type: 'ts',
        });
        expect(vi.mocked(resolveExports.resolve)).toHaveBeenCalledWith(
          packageJson,
          '.',
        );
      });

      it('should replace multiple imports from same package correctly', async () => {
        const codeContent = `import { foo } from 'test-package';
import { bar } from 'test-package';
import baz from 'test-package';`;
        const mockBlock = createMockCodeBlock({
          content: codeContent,
          language: 'typescript',
        });

        const result = await checker.check(mockBlock);

        expect(result.success).toBe(true);
        expect(vi.mocked(compile)).toHaveBeenCalledWith({
          compilerOptions: expect.any(Object),
          workingDirectory: '/workspace',
          code: `import { foo } from '/workspace/dist/index.js';
import { bar } from '/workspace/dist/index.js';
import baz from '/workspace/dist/index.js';`,
          type: 'ts',
        });
      });
    });

    describe('import pattern recognition behavior', () => {
      beforeEach(() => {
        mockFs({
          '/workspace/package.json': JSON.stringify({
            name: 'pattern-test',
            main: './build/index.js',
          }),
        });
        vi.mocked(resolveExports.resolve).mockReturnValue(['./build/index.js']);
      });

      it('should resolve and replace named imports', async () => {
        const codeContent = `import { Component, useState } from 'pattern-test';`;
        const mockBlock = createMockCodeBlock({
          content: codeContent,
          language: 'typescript',
        });

        const result = await checker.check(mockBlock);

        expect(result.success).toBe(true);
        expect(vi.mocked(compile)).toHaveBeenCalledWith({
          compilerOptions: expect.any(Object),
          workingDirectory: '/workspace',
          code: `import { Component, useState } from '/workspace/build/index.js';`,
          type: 'ts',
        });
      });

      it('should resolve and replace default imports', async () => {
        const codeContent = `import React from 'pattern-test';`;
        const mockBlock = createMockCodeBlock({
          content: codeContent,
          language: 'typescript',
        });

        const result = await checker.check(mockBlock);

        expect(result.success).toBe(true);
        expect(vi.mocked(compile)).toHaveBeenCalledWith({
          compilerOptions: expect.any(Object),
          workingDirectory: '/workspace',
          code: `import React from '/workspace/build/index.js';`,
          type: 'ts',
        });
      });

      it('should resolve and replace namespace imports', async () => {
        const codeContent = `import * as TestLib from 'pattern-test';`;
        const mockBlock = createMockCodeBlock({
          content: codeContent,
          language: 'typescript',
        });

        const result = await checker.check(mockBlock);

        expect(result.success).toBe(true);
        expect(vi.mocked(compile)).toHaveBeenCalledWith({
          compilerOptions: expect.any(Object),
          workingDirectory: '/workspace',
          code: `import * as TestLib from '/workspace/build/index.js';`,
          type: 'ts',
        });
      });

      it('should replace mixed imports on multiple lines correctly', async () => {
        const codeContent = `import { helper } from 'pattern-test';
import DefaultExport from 'pattern-test';
import * as Namespace from 'pattern-test';`;
        const mockBlock = createMockCodeBlock({
          content: codeContent,
          language: 'typescript',
        });

        const result = await checker.check(mockBlock);

        expect(result.success).toBe(true);
        expect(vi.mocked(compile)).toHaveBeenCalledWith({
          compilerOptions: expect.any(Object),
          workingDirectory: '/workspace',
          code: `import { helper } from '/workspace/build/index.js';
import DefaultExport from '/workspace/build/index.js';
import * as Namespace from '/workspace/build/index.js';`,
          type: 'ts',
        });
      });
    });

    describe('non-matching import behavior', () => {
      beforeEach(() => {
        mockFs({
          '/workspace/package.json': JSON.stringify({
            name: 'my-package',
            main: './dist/index.js',
          }),
        });
        vi.mocked(resolveExports.resolve).mockReturnValue(['./dist/index.js']);
      });

      it('should leave imports from other packages unchanged', async () => {
        const codeContent = `import { something } from 'other-package';
import { local } from 'my-package';`;
        const mockBlock = createMockCodeBlock({
          content: codeContent,
          language: 'typescript',
        });

        const result = await checker.check(mockBlock);

        expect(result.success).toBe(true);
        expect(vi.mocked(compile)).toHaveBeenCalledWith({
          compilerOptions: expect.any(Object),
          workingDirectory: '/workspace',
          code: `import { something } from 'other-package';
import { local } from '/workspace/dist/index.js';`,
          type: 'ts',
        });
      });

      it('should leave relative imports unchanged', async () => {
        const codeContent = `import { helper } from './utils';
import config from '../config';
import { local } from 'my-package';`;
        const mockBlock = createMockCodeBlock({
          content: codeContent,
          language: 'typescript',
        });

        const result = await checker.check(mockBlock);

        expect(result.success).toBe(true);
        expect(vi.mocked(compile)).toHaveBeenCalledWith({
          compilerOptions: expect.any(Object),
          workingDirectory: '/workspace',
          code: `import { helper } from './utils';
import config from '../config';
import { local } from '/workspace/dist/index.js';`,
          type: 'ts',
        });
      });

      it('should return success with unchanged code when no imports present', async () => {
        const codeContent = `const x = 42;
function test() { return 'hello'; }`;
        const mockBlock = createMockCodeBlock({
          content: codeContent,
          language: 'typescript',
        });

        const result = await checker.check(mockBlock);

        expect(result.success).toBe(true);
        expect(vi.mocked(compile)).toHaveBeenCalledWith({
          compilerOptions: expect.any(Object),
          workingDirectory: '/workspace',
          code: codeContent,
          type: 'ts',
        });
      });
    });

    describe('error handling behavior', () => {
      it('should return failure with descriptive error when package.json does not exist', async () => {
        mockFs({});

        const codeContent = `import { test } from 'some-package';`;
        const mockBlock = createMockCodeBlock({
          content: codeContent,
          language: 'typescript',
        });

        const result = await checker.check(mockBlock);

        expect(result.success).toBe(false);
        if (!result.success) {
          expect.assertions(3);
          expect(result.message).toContain('package.json');
          expect(result.message).toContain('ENOENT');
        }
      });

      it('should return failure with parse error when package.json has invalid JSON', async () => {
        mockFs({
          '/workspace/package.json': '{ invalid json content',
        });

        const codeContent = `import { test } from 'some-package';`;
        const mockBlock = createMockCodeBlock({
          content: codeContent,
          language: 'typescript',
        });

        const result = await checker.check(mockBlock);

        expect(result.success).toBe(false);
        if (!result.success) {
          expect.assertions(3);
          expect(result.message).toContain('JSON');
          expect(result.message).toContain('Expected property');
        }
      });

      it('should return failure when package.json lacks name field', async () => {
        mockFs({
          '/workspace/package.json': JSON.stringify({
            version: '1.0.0',
            main: './dist/index.js',
          }),
        });

        const codeContent = `import { test } from 'some-package';`;
        const mockBlock = createMockCodeBlock({
          content: codeContent,
          language: 'typescript',
        });

        const result = await checker.check(mockBlock);

        expect(result.success).toBe(false);
        if (!result.success) {
          expect.assertions(3);
          expect(result.message).toContain('name');
          expect(result.message).toContain('package.json');
        }
      });

      it('should return failure when entry point cannot be resolved', async () => {
        mockFs({
          '/workspace/package.json': JSON.stringify({
            name: 'test-package',
            main: './dist/index.js',
          }),
        });
        vi.mocked(resolveExports.resolve).mockReturnValue([]);

        const codeContent = `import { test } from 'test-package';`;
        const mockBlock = createMockCodeBlock({
          content: codeContent,
          language: 'typescript',
        });

        const result = await checker.check(mockBlock);

        expect(result.success).toBe(false);
        if (!result.success) {
          expect.assertions(3);
          expect(result.message).toContain('resolve');
          expect(result.message).toContain('entry point');
        }
      });

      it('should return failure with details when resolve.exports throws', async () => {
        mockFs({
          '/workspace/package.json': JSON.stringify({
            name: 'test-package',
            main: './dist/index.js',
          }),
        });
        vi.mocked(resolveExports.resolve).mockImplementation(() => {
          throw new Error('Resolution failed due to circular exports');
        });

        const codeContent = `import { test } from 'test-package';`;
        const mockBlock = createMockCodeBlock({
          content: codeContent,
          language: 'typescript',
        });

        const result = await checker.check(mockBlock);

        expect(result.success).toBe(false);
        if (!result.success) {
          expect.assertions(3);
          expect(result.message).toContain('Resolution failed');
          expect(result.message).toContain('circular exports');
        }
      });
    });

    describe('edge cases behavior', () => {
      it('should return success with empty code when given empty code block', async () => {
        mockFs({
          '/workspace/package.json': JSON.stringify({ name: 'test-package' }),
        });

        const mockBlock = createMockCodeBlock({
          content: '',
          language: 'typescript',
        });

        const result = await checker.check(mockBlock);

        expect(result.success).toBe(true);
        expect(vi.mocked(compile)).toHaveBeenCalledWith({
          compilerOptions: expect.any(Object),
          workingDirectory: '/workspace',
          code: '',
          type: 'ts',
        });
      });

      it('should work correctly with complex exports conditions', async () => {
        const complexPackageJson = {
          name: 'complex-package',
          exports: {
            '.': {
              import: './esm/index.js',
              require: './cjs/index.js',
              types: './types/index.d.ts',
            },
            './utils': {
              import: './esm/utils.js',
              require: './cjs/utils.js',
            },
          },
        };
        mockFs({
          '/workspace/package.json': JSON.stringify(complexPackageJson),
        });
        vi.mocked(resolveExports.resolve).mockReturnValue(['./esm/index.js']);

        const codeContent = `import { main } from 'complex-package';`;
        const mockBlock = createMockCodeBlock({
          content: codeContent,
          language: 'typescript',
        });

        const result = await checker.check(mockBlock);

        expect(result.success).toBe(true);
        expect(vi.mocked(compile)).toHaveBeenCalledWith({
          compilerOptions: expect.any(Object),
          workingDirectory: '/workspace',
          code: `import { main } from '/workspace/esm/index.js';`,
          type: 'ts',
        });
        expect(vi.mocked(resolveExports.resolve)).toHaveBeenCalledWith(
          complexPackageJson,
          '.',
        );
      });

      it('should work correctly with scoped packages', async () => {
        mockFs({
          '/workspace/package.json': JSON.stringify({
            name: '@org/scoped-package',
            main: './lib/index.js',
          }),
        });
        vi.mocked(resolveExports.resolve).mockReturnValue(['./lib/index.js']);

        const codeContent = `import { feature } from '@org/scoped-package';`;
        const mockBlock = createMockCodeBlock({
          content: codeContent,
          language: 'typescript',
        });

        const result = await checker.check(mockBlock);

        expect(result.success).toBe(true);
        expect(vi.mocked(compile)).toHaveBeenCalledWith({
          compilerOptions: expect.any(Object),
          workingDirectory: '/workspace',
          code: `import { feature } from '/workspace/lib/index.js';`,
          type: 'ts',
        });
      });
    });
  });

  describe('inheritance from Checker', () => {
    it('should extend the Checker abstract class with required properties and methods', () => {
      vi.mocked(compile).mockResolvedValue({
        hasError: false,
        diagnostics: [],
      });
      vi.mocked(AutoImportInjector).mockImplementation(
        () =>
          ({
            injectMissingImports: vi.fn().mockImplementation(async (code) => ({
              success: true,
              code,
              injectedSymbols: [],
            })),
          }) as any,
      );

      const props: ITypeScriptCheckerProps = {
        tsconfigPath: '/test/tsconfig.json',
        packageJsonPath: '/test/package.json',
        workingDirectory: '/workspace',
      };
      const checker = new TypeScriptChecker(props);

      expect(checker).toBeInstanceOf(TypeScriptChecker);
      expect(checker.name).toBeDefined();
      expect(typeof checker.canCheck).toBe('function');
      expect(typeof checker.check).toBe('function');
      expect(typeof checker.addCodeBlock).toBe('function');
      expect(typeof checker.checkAll).toBe('function');
      expect(checker.codeBlocks).toBeDefined();
      expect(Array.isArray(checker.codeBlocks)).toBe(true);
    });

    it('should selectively add code blocks based on canCheck method', () => {
      vi.mocked(compile).mockResolvedValue({
        hasError: false,
        diagnostics: [],
      });
      vi.mocked(AutoImportInjector).mockImplementation(
        () =>
          ({
            injectMissingImports: vi.fn().mockImplementation(async (code) => ({
              success: true,
              code,
              injectedSymbols: [],
            })),
          }) as any,
      );

      const props: ITypeScriptCheckerProps = {
        tsconfigPath: '/test/tsconfig.json',
        packageJsonPath: '/test/package.json',
        workingDirectory: '/workspace',
      };
      const checker = new TypeScriptChecker(props);
      const tsBlock = createMockCodeBlock({ language: 'typescript' });
      const jsBlock = createMockCodeBlock({ language: 'javascript' });

      checker.addCodeBlock(tsBlock);
      checker.addCodeBlock(jsBlock);

      expect(checker.codeBlocks).toHaveLength(1);
      expect(checker.codeBlocks[0]).toBe(tsBlock);
    });

    it('should process all added blocks through checkAll method', async () => {
      vi.mocked(compile).mockResolvedValue({
        hasError: false,
        diagnostics: [],
      });
      vi.mocked(AutoImportInjector).mockImplementation(
        () =>
          ({
            injectMissingImports: vi.fn().mockImplementation(async (code) => ({
              success: true,
              code,
              injectedSymbols: [],
            })),
          }) as any,
      );

      mockFs({
        '/test/package.json': JSON.stringify({
          name: 'test-package',
          main: './index.js',
        }),
      });

      const props: ITypeScriptCheckerProps = {
        tsconfigPath: '/test/tsconfig.json',
        packageJsonPath: '/test/package.json',
        workingDirectory: '/workspace',
      };
      const checker = new TypeScriptChecker(props);
      const mockBlock1 = createMockCodeBlock({
        content: 'type Test = string;',
        language: 'typescript',
      });
      const mockBlock2 = createMockCodeBlock({
        content: 'interface ITest { value: number; }',
        language: 'ts',
      });

      checker.addCodeBlock(mockBlock1);
      checker.addCodeBlock(mockBlock2);

      await expect(checker.checkAll()).resolves.toBeUndefined();

      expect(mockBlock1.storeCheckResult).toHaveBeenCalledWith(
        'typescript',
        expect.any(Object),
      );
      expect(mockBlock2.storeCheckResult).toHaveBeenCalledWith(
        'typescript',
        expect.any(Object),
      );
    });
  });
});
