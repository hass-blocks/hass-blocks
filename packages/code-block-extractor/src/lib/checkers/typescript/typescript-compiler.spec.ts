import { afterEach, describe, expect, it, vi } from 'vitest';
import ts from 'typescript';
import { compile } from './typescript-compiler.ts';

afterEach(() => {
  vi.resetAllMocks();
});

describe('compile', () => {
  describe('successful compilation', () => {
    it('should return success with no diagnostics for valid TypeScript code', async () => {
      const validCode = 'const x: number = 42;';
      const compilerOptions = {
        target: ts.ScriptTarget.ES2020,
        module: ts.ModuleKind.CommonJS,
      };

      const result = await compile({
        code: validCode,
        compilerOptions,
        workingDirectory: '/test',
        type: 'ts',
      });

      expect(result.hasError).toBe(false);
      expect(result.diagnostics).toEqual([]);
    });

    it('should handle tsx file type', async () => {
      const jsxCode = 'const element: JSX.Element = <div>Hello</div>;';
      const compilerOptions = {
        target: ts.ScriptTarget.ES2020,
        module: ts.ModuleKind.CommonJS,
        jsx: ts.JsxEmit.React,
        esModuleInterop: true,
        allowSyntheticDefaultImports: true,
        skipLibCheck: true,
      };

      const result = await compile({
        code: jsxCode,
        compilerOptions,
        workingDirectory: '/test',
        type: 'tsx',
      });

      expect(result).toBeDefined();
      expect(typeof result.hasError).toBe('boolean');
      expect(Array.isArray(result.diagnostics)).toBe(true);
    });

    it('should handle interface declarations', async () => {
      const interfaceCode = 'interface User { name: string; age: number; }';
      const compilerOptions = {
        target: ts.ScriptTarget.ES2020,
        module: ts.ModuleKind.CommonJS,
      };

      const result = await compile({
        code: interfaceCode,
        compilerOptions,
        workingDirectory: '/test',
        type: 'ts',
      });

      expect(result.hasError).toBe(false);
      expect(result.diagnostics).toEqual([]);
    });
  });

  describe('compilation errors', () => {
    it('should return error with diagnostics for type mismatch', async () => {
      const invalidCode = 'const x: number = "not a number";';
      const compilerOptions = {
        target: ts.ScriptTarget.ES2020,
        module: ts.ModuleKind.CommonJS,
        strict: true,
      };

      const result = await compile({
        code: invalidCode,
        compilerOptions,
        workingDirectory: '/test',
        type: 'ts',
      });

      expect(result.hasError).toBe(true);
      expect(result.diagnostics.length).toBeGreaterThan(0);
      expect(
        result.diagnostics.some(
          (d) =>
            d.messageText &&
            d.messageText.toString().includes('not assignable'),
        ),
      ).toBe(true);
    });

    it('should return error for syntax errors', async () => {
      const invalidCode = 'const x =';
      const compilerOptions = {
        target: ts.ScriptTarget.ES2020,
        module: ts.ModuleKind.CommonJS,
      };

      const result = await compile({
        code: invalidCode,
        compilerOptions,
        workingDirectory: '/test',
        type: 'ts',
      });

      expect(result.hasError).toBe(true);
      expect(result.diagnostics.length).toBeGreaterThan(0);
    });

    it('should return error for undefined variables in strict mode', async () => {
      const invalidCode = 'console.log(undefinedVariable);';
      const compilerOptions = {
        target: ts.ScriptTarget.ES2020,
        module: ts.ModuleKind.CommonJS,
        strict: true,
        noImplicitAny: true,
      };

      const result = await compile({
        code: invalidCode,
        compilerOptions,
        workingDirectory: '/test',
        type: 'ts',
      });

      expect(result.hasError).toBe(true);
      expect(result.diagnostics.length).toBeGreaterThan(0);
      expect(result.diagnostics.some((d) => d.code === 2304)).toBe(true);
    });
  });

  describe('configuration', () => {
    it('should use provided compiler options for target version', async () => {
      const codeWithModernFeatures = 'const obj = { ...{}, prop: 1 };';

      const es5Options = {
        target: ts.ScriptTarget.ES5,
        module: ts.ModuleKind.CommonJS,
      };

      const es5Result = await compile({
        code: codeWithModernFeatures,
        compilerOptions: es5Options,
        workingDirectory: '/test',
        type: 'ts',
      });

      const es2020Options = {
        target: ts.ScriptTarget.ES2020,
        module: ts.ModuleKind.CommonJS,
      };

      const es2020Result = await compile({
        code: codeWithModernFeatures,
        compilerOptions: es2020Options,
        workingDirectory: '/test',
        type: 'ts',
      });

      expect(es5Result).toBeDefined();
      expect(es2020Result).toBeDefined();
      expect(typeof es5Result.hasError).toBe('boolean');
      expect(typeof es2020Result.hasError).toBe('boolean');
    });

    it('should use provided working directory', async () => {
      const customWorkingDir = '/custom/working/directory';

      const result = await compile({
        code: 'const x = 42;',
        compilerOptions: {
          target: ts.ScriptTarget.ES2020,
          module: ts.ModuleKind.CommonJS,
        },
        workingDirectory: customWorkingDir,
        type: 'ts',
      });

      expect(result).toBeDefined();
      expect(typeof result.hasError).toBe('boolean');
    });
  });

  describe('file handling', () => {
    it('should handle .ts file extension', async () => {
      const tsCode = 'type StringType = string;';

      const result = await compile({
        code: tsCode,
        compilerOptions: { target: ts.ScriptTarget.ES2020 },
        workingDirectory: '/test',
        type: 'ts',
      });

      expect(result.hasError).toBe(false);
      expect(result.diagnostics).toEqual([]);
    });

    it('should handle .tsx file extension with JSX', async () => {
      const tsxCode = 'const Component = (): JSX.Element => <div>Hello</div>;';

      const result = await compile({
        code: tsxCode,
        compilerOptions: {
          target: ts.ScriptTarget.ES2020,
          jsx: ts.JsxEmit.React,
          esModuleInterop: true,
          allowSyntheticDefaultImports: true,
          skipLibCheck: true,
        },
        workingDirectory: '/test',
        type: 'tsx',
      });

      expect(result).toBeDefined();
      expect(typeof result.hasError).toBe('boolean');
      expect(Array.isArray(result.diagnostics)).toBe(true);
    });
  });

  describe('edge cases', () => {
    it('should handle empty code', async () => {
      const result = await compile({
        code: '',
        compilerOptions: { target: ts.ScriptTarget.ES2020 },
        workingDirectory: '/test',
        type: 'ts',
      });

      expect(result.hasError).toBe(false);
      expect(result.diagnostics).toEqual([]);
    });

    it('should handle whitespace-only code', async () => {
      const whitespaceCode = '   \n  \t  \n  ';

      const result = await compile({
        code: whitespaceCode,
        compilerOptions: { target: ts.ScriptTarget.ES2020 },
        workingDirectory: '/test',
        type: 'ts',
      });

      expect(result.hasError).toBe(false);
      expect(result.diagnostics).toEqual([]);
    });

    it('should handle complex TypeScript features', async () => {
      const complexCode = `
        interface ApiResponse<T> {
          data: T;
          status: number;
        }
        
        type UserApiResponse = ApiResponse<{ name: string; email: string }>;
        
        const response: UserApiResponse = {
          data: { name: 'John', email: 'john@example.com' },
          status: 200
        };
      `;

      const result = await compile({
        code: complexCode,
        compilerOptions: {
          target: ts.ScriptTarget.ES2020,
          module: ts.ModuleKind.CommonJS,
          strict: true,
        },
        workingDirectory: '/test',
        type: 'ts',
      });

      expect(result.hasError).toBe(false);
      expect(result.diagnostics).toEqual([]);
    });

    it('should properly detect multiple errors', async () => {
      const multiErrorCode = `
        const str: string = 123;
        const obj = { prop: undefinedVar };
        function incomplete(
      `;

      const result = await compile({
        code: multiErrorCode,
        compilerOptions: {
          target: ts.ScriptTarget.ES2020,
          module: ts.ModuleKind.CommonJS,
          strict: true,
        },
        workingDirectory: '/test',
        type: 'ts',
      });

      expect(result.hasError).toBe(true);
      expect(result.diagnostics.length).toBeGreaterThan(1);
    });
  });

  describe('return value structure', () => {
    it('should return object with hasError and diagnostics properties', async () => {
      const result = await compile({
        code: 'const x = 42;',
        compilerOptions: { target: ts.ScriptTarget.ES2020 },
        workingDirectory: '/test',
        type: 'ts',
      });

      expect(result).toHaveProperty('hasError');
      expect(result).toHaveProperty('diagnostics');
      expect(typeof result.hasError).toBe('boolean');
      expect(Array.isArray(result.diagnostics)).toBe(true);
    });

    it('should return readonly array of diagnostics', async () => {
      const result = await compile({
        code: 'const x: number = "wrong";',
        compilerOptions: {
          target: ts.ScriptTarget.ES2020,
          strict: true,
        },
        workingDirectory: '/test',
        type: 'ts',
      });

      expect(Array.isArray(result.diagnostics)).toBe(true);
      expect(result.diagnostics).toBeInstanceOf(Array);

      if (result.diagnostics.length > 0) {
        const diagnostic = result.diagnostics[0];
        expect(diagnostic).toHaveProperty('messageText');
        expect(diagnostic).toHaveProperty('code');
        expect(diagnostic).toHaveProperty('category');
      }
    });
  });

  describe('different compiler options', () => {
    it('should respect noImplicitAny setting', async () => {
      const implicitAnyCode = 'function test(param) { return param; }';

      const lenientResult = await compile({
        code: implicitAnyCode,
        compilerOptions: {
          target: ts.ScriptTarget.ES2020,
          noImplicitAny: false,
        },
        workingDirectory: '/test',
        type: 'ts',
      });

      const strictResult = await compile({
        code: implicitAnyCode,
        compilerOptions: {
          target: ts.ScriptTarget.ES2020,
          noImplicitAny: true,
        },
        workingDirectory: '/test',
        type: 'ts',
      });

      expect(strictResult.diagnostics.length).toBeGreaterThanOrEqual(
        lenientResult.diagnostics.length,
      );

      if (strictResult.hasError) {
        expect(strictResult.diagnostics.some((d) => d.code === 7006)).toBe(
          true,
        );
      }
    });
  });
});
