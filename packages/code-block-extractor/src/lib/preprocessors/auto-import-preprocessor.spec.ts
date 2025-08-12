import { describe, expect, it } from 'vitest';
import ts from 'typescript';
import { CodeBlock } from '../core/code-block.ts';
import { AutoImportPreprocessor } from './auto-import-preprocessor.ts';

function createMockCodeBlock(
  content: string,
  overrides: Partial<CodeBlock> = {},
): CodeBlock {
  return new CodeBlock(
    content,
    overrides.filePath ?? '/test.md',
    overrides.startLine ?? 1,
    overrides.endLine ?? 1,
    overrides.language ?? 'typescript',
  );
}

describe('AutoImportPreprocessor', () => {
  describe('constructor', () => {
    it('should accept packageName, packageJsonPath, resolvedImportPath, and compilerOptions', () => {
      const packageName = '@test-package';
      const packageJsonPath = '/path/to/package.json';
      const resolvedImportPath = '../core/test-package';
      const compilerOptions = {
        target: ts.ScriptTarget.ES2020,
        module: ts.ModuleKind.ESNext,
        strict: true,
      };

      const preprocessor = new AutoImportPreprocessor({
        packageName,
        packageJsonPath,
        resolvedImportPath,
        compilerOptions,
      });

      expect(preprocessor.name).toBe('auto-import-injection');
      expect(preprocessor).toBeInstanceOf(AutoImportPreprocessor);
    });

    it('should store configuration internally', () => {
      const packageJsonPath = '/test/package.json';
      const compilerOptions = {
        target: ts.ScriptTarget.ES2015,
        module: ts.ModuleKind.CommonJS,
      };

      const preprocessor = new AutoImportPreprocessor({
        packageName: '@test',
        packageJsonPath,
        resolvedImportPath: './test',
        compilerOptions,
      });

      expect(preprocessor.name).toBe('auto-import-injection');
    });

    it('should accept minimal configuration', () => {
      const preprocessor = new AutoImportPreprocessor({
        packageName: '@minimal',
        packageJsonPath: '/minimal/package.json',
        resolvedImportPath: './minimal',
        compilerOptions: {},
      });

      expect(preprocessor.name).toBe('auto-import-injection');
    });

    it('should handle package names with special characters', () => {
      const packageName = '@scoped/package-name_v2.test+special';

      const preprocessor = new AutoImportPreprocessor({
        packageName,
        packageJsonPath: '/special/package.json',
        resolvedImportPath: './special',
        compilerOptions: {},
      });

      expect(preprocessor).toBeInstanceOf(AutoImportPreprocessor);
    });

    it('should handle different compiler option configurations', () => {
      const compilerOptions = {
        target: ts.ScriptTarget.Latest,
        module: ts.ModuleKind.Node16,
        strict: false,
        declaration: true,
        sourceMap: true,
        esModuleInterop: true,
      };

      const preprocessor = new AutoImportPreprocessor({
        packageName: '@complex',
        packageJsonPath: '/complex/package.json',
        resolvedImportPath: './complex',
        compilerOptions,
      });

      expect(preprocessor.name).toBe('auto-import-injection');
    });
  });

  describe('name property', () => {
    it('should return "auto-import-injection"', () => {
      const preprocessor = new AutoImportPreprocessor({
        packageName: '@test',
        packageJsonPath: '/test/package.json',
        resolvedImportPath: './test',
        compilerOptions: {},
      });

      expect(preprocessor.name).toBe('auto-import-injection');
    });

    it('should have consistent name regardless of configuration', () => {
      const preprocessor1 = new AutoImportPreprocessor({
        packageName: '@package1',
        packageJsonPath: '/path1/package.json',
        resolvedImportPath: './path1',
        compilerOptions: {},
      });

      const preprocessor2 = new AutoImportPreprocessor({
        packageName: '@package2',
        packageJsonPath: '/path2/package.json',
        resolvedImportPath: './path2',
        compilerOptions: { strict: true },
      });

      expect(preprocessor1.name).toBe('auto-import-injection');
      expect(preprocessor2.name).toBe('auto-import-injection');
      expect(preprocessor1.name).toBe(preprocessor2.name);
    });
  });

  describe('preprocess method - integration tests', () => {
    it('should return original block when no symbols need imports', async () => {
      const codeContent = 'console.log("Hello, world!");';

      const preprocessor = new AutoImportPreprocessor({
        packageName: '@test-package',
        packageJsonPath: '/test/package.json',
        resolvedImportPath: './test-package',
        compilerOptions: {},
      });

      const codeBlock = createMockCodeBlock(codeContent);
      const result = await preprocessor.preprocess(codeBlock);

      expect(result).toBe(codeBlock);
      expect(result.content).toBe(codeContent);
    });

    it('should preserve original CodeBlock metadata when no changes are made', async () => {
      const originalContent = 'const x = 1;';

      const preprocessor = new AutoImportPreprocessor({
        packageName: '@test',
        packageJsonPath: '/test/package.json',
        resolvedImportPath: './test',
        compilerOptions: {},
      });

      const originalFilePath = '/path/to/file.md';
      const originalStartLine = 5;
      const originalEndLine = 10;
      const originalLanguage = 'typescript';

      const codeBlock = createMockCodeBlock(originalContent, {
        filePath: originalFilePath,
        startLine: originalStartLine,
        endLine: originalEndLine,
        language: originalLanguage,
      });

      const result = await preprocessor.preprocess(codeBlock);

      expect(result).toBe(codeBlock);
      expect(result.filePath).toBe(originalFilePath);
      expect(result.startLine).toBe(originalStartLine);
      expect(result.endLine).toBe(originalEndLine);
      expect(result.language).toBe(originalLanguage);
    });

    it('should handle empty code blocks gracefully', async () => {
      const emptyContent = '';

      const preprocessor = new AutoImportPreprocessor({
        packageName: '@multi-test',
        packageJsonPath: '/multi/package.json',
        resolvedImportPath: './multi-test',
        compilerOptions: {},
      });

      const codeBlock = createMockCodeBlock(emptyContent);
      const result = await preprocessor.preprocess(codeBlock);

      expect(result).toBe(codeBlock);
      expect(result.content).toBe(emptyContent);
    });

    it('should handle code with existing imports correctly', async () => {
      const originalContent =
        'import { existing } from "other-package";\nconsole.log(existing);';

      const preprocessor = new AutoImportPreprocessor({
        packageName: '@preserve',
        packageJsonPath: '/preserve/package.json',
        resolvedImportPath: './preserve',
        compilerOptions: {},
      });

      const originalFilePath = '/markdown/example.md';
      const originalStartLine = 15;
      const originalEndLine = 20;
      const originalLanguage = 'typescript';

      const codeBlock = createMockCodeBlock(originalContent, {
        filePath: originalFilePath,
        startLine: originalStartLine,
        endLine: originalEndLine,
        language: originalLanguage,
      });

      const result = await preprocessor.preprocess(codeBlock);

      expect(result).toBe(codeBlock);
      expect(result.content).toBe(originalContent);
    });
  });

  describe('preprocess method - error handling', () => {
    it('should return original CodeBlock when package.json does not exist', async () => {
      const originalContent = 'console.log("Hello, world!");';

      const preprocessor = new AutoImportPreprocessor({
        packageName: '@no-changes',
        packageJsonPath: '/nonexistent/package.json',
        resolvedImportPath: './no-changes',
        compilerOptions: {},
      });

      const codeBlock = createMockCodeBlock(originalContent);
      const result = await preprocessor.preprocess(codeBlock);

      expect(result).toBe(codeBlock);
      expect(result.content).toBe(originalContent);
    });

    it('should handle invalid compiler options gracefully', async () => {
      const originalContent = 'console.log("test");';

      const preprocessor = new AutoImportPreprocessor({
        packageName: '@unchanged',
        packageJsonPath: '/unchanged/package.json',
        resolvedImportPath: './unchanged',
        compilerOptions: {} as ts.CompilerOptions,
      });

      const codeBlock = createMockCodeBlock(originalContent);
      const result = await preprocessor.preprocess(codeBlock);

      expect(result).toBe(codeBlock);
    });

    it('should handle malformed TypeScript code gracefully', async () => {
      const malformedContent = 'const x = {';

      const preprocessor = new AutoImportPreprocessor({
        packageName: '@empty',
        packageJsonPath: '/empty/package.json',
        resolvedImportPath: './empty',
        compilerOptions: {},
      });

      const codeBlock = createMockCodeBlock(malformedContent);
      const result = await preprocessor.preprocess(codeBlock);

      expect(result).toBe(codeBlock);
      expect(result.content).toBe(malformedContent);
    });

    it('should handle code blocks with only whitespace', async () => {
      const whitespaceContent = '   \n\t  \n   ';

      const preprocessor = new AutoImportPreprocessor({
        packageName: '@whitespace',
        packageJsonPath: '/whitespace/package.json',
        resolvedImportPath: './whitespace',
        compilerOptions: {},
      });

      const codeBlock = createMockCodeBlock(whitespaceContent);
      const result = await preprocessor.preprocess(codeBlock);

      expect(result).toBe(codeBlock);
      expect(result.content).toBe(whitespaceContent);
    });
  });

  describe('preprocess method - additional error cases', () => {
    it('should handle invalid package.json structure', async () => {
      const originalContent = 'testFunction();';

      const preprocessor = new AutoImportPreprocessor({
        packageName: '@error-test',
        packageJsonPath: '/error/package.json',
        resolvedImportPath: './error',
        compilerOptions: {},
      });

      const codeBlock = createMockCodeBlock(originalContent);
      const result = await preprocessor.preprocess(codeBlock);

      expect(result).toBe(codeBlock);
      expect(result.content).toBe(originalContent);
    });

    it('should handle complex TypeScript syntax gracefully', async () => {
      const complexContent = `
interface TestInterface<T> {
  value: T;
}
class TestClass implements TestInterface<string> {
  value = "test";
}`;

      const preprocessor = new AutoImportPreprocessor({
        packageName: '@exception-test',
        packageJsonPath: '/exception/package.json',
        resolvedImportPath: './exception',
        compilerOptions: {},
      });

      const codeBlock = createMockCodeBlock(complexContent);
      const result = await preprocessor.preprocess(codeBlock);

      expect(result).toBe(codeBlock);
      expect(result.content).toBe(complexContent);
    });

    it('should handle large code blocks without issues', async () => {
      const largeContent = 'console.log("test");'.repeat(100);

      const preprocessor = new AutoImportPreprocessor({
        packageName: '@timeout-test',
        packageJsonPath: '/timeout/package.json',
        resolvedImportPath: './timeout',
        compilerOptions: {},
      });

      const codeBlock = createMockCodeBlock(largeContent);
      const result = await preprocessor.preprocess(codeBlock);

      expect(result).toBe(codeBlock);
      expect(result.content).toBe(largeContent);
    });

    it('should handle special characters in package names', async () => {
      const originalContent = 'testFunction();';

      const preprocessor = new AutoImportPreprocessor({
        packageName: '@scoped/package-name_v2.test+special',
        packageJsonPath: '/malformed/package.json',
        resolvedImportPath: './malformed',
        compilerOptions: {},
      });

      const codeBlock = createMockCodeBlock(originalContent);
      const result = await preprocessor.preprocess(codeBlock);

      expect(result).toBe(codeBlock);
      expect(result.content).toBe(originalContent);
    });

    it('should handle different language identifiers', async () => {
      const originalContent = 'const x = 1;';

      const preprocessor = new AutoImportPreprocessor({
        packageName: '@undefined-test',
        packageJsonPath: '/undefined/package.json',
        resolvedImportPath: './undefined',
        compilerOptions: {},
      });

      const codeBlock = createMockCodeBlock(originalContent, {
        language: 'javascript',
      });
      const result = await preprocessor.preprocess(codeBlock);

      expect(result).toBe(codeBlock);
      expect(result.content).toBe(originalContent);
      expect(result.language).toBe('javascript');
    });
  });

  describe('preprocess method - edge cases', () => {
    it('should handle different compiler target versions', async () => {
      const content = 'const x = 1;';

      const preprocessor = new AutoImportPreprocessor({
        packageName: '@large-test',
        packageJsonPath: '/large/package.json',
        resolvedImportPath: './large',
        compilerOptions: {
          target: ts.ScriptTarget.ES5,
          module: ts.ModuleKind.CommonJS,
        },
      });

      const codeBlock = createMockCodeBlock(content);
      const result = await preprocessor.preprocess(codeBlock);

      expect(result).toBe(codeBlock);
    });

    it('should handle strict mode compiler options', async () => {
      const content = 'let x: any;';

      const preprocessor = new AutoImportPreprocessor({
        packageName: '@complex',
        packageJsonPath: '/complex/package.json',
        resolvedImportPath: './complex',
        compilerOptions: {
          strict: true,
          noImplicitAny: true,
        },
      });

      const codeBlock = createMockCodeBlock(content);
      const result = await preprocessor.preprocess(codeBlock);

      expect(result).toBe(codeBlock);
    });

    it('should handle different resolved import path formats', async () => {
      const testCases = [
        './relative/path',
        '../parent/path',
        '/absolute/path',
        '@scoped/package',
        'package-name',
        './path/with-dashes_and.dots',
      ];

      for (const resolvedImportPath of testCases) {
        const originalContent = 'const x = 1;';

        const preprocessor = new AutoImportPreprocessor({
          packageName: '@path-test',
          packageJsonPath: '/path-test/package.json',
          resolvedImportPath,
          compilerOptions: {},
        });

        const codeBlock = createMockCodeBlock(originalContent);
        const result = await preprocessor.preprocess(codeBlock);

        expect(result).toBe(codeBlock);
        expect(result.content).toBe(originalContent);
      }
    });

    it('should handle various code block languages', async () => {
      const jsContent = 'console.log("hello");';

      const preprocessor = new AutoImportPreprocessor({
        packageName: '@js-test',
        packageJsonPath: '/js-test/package.json',
        resolvedImportPath: './js-test',
        compilerOptions: {},
      });

      const codeBlock = createMockCodeBlock(jsContent, {
        language: 'javascript',
      });
      const result = await preprocessor.preprocess(codeBlock);

      expect(result).toBe(codeBlock);
      expect(result.language).toBe('javascript');
    });

    it('should handle concurrent preprocess calls', async () => {
      const content1 = 'const x = 1;';
      const content2 = 'const y = 2;';

      const preprocessor = new AutoImportPreprocessor({
        packageName: '@concurrent',
        packageJsonPath: '/concurrent/package.json',
        resolvedImportPath: './concurrent',
        compilerOptions: {},
      });

      const codeBlock1 = createMockCodeBlock(content1);
      const codeBlock2 = createMockCodeBlock(content2);

      const [result1, result2] = await Promise.all([
        preprocessor.preprocess(codeBlock1),
        preprocessor.preprocess(codeBlock2),
      ]);

      expect(result1).toBe(codeBlock1);
      expect(result2).toBe(codeBlock2);
      expect(result1.content).toBe(content1);
      expect(result2.content).toBe(content2);
    });
  });
});
