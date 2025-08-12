import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { mockDeep, type MockProxy } from 'vitest-mock-extended';

import { CodeBlock } from '@core';

import { compile } from './typescript-compiler.ts';
import {
  TypeScriptChecker,
  type ITypeScriptCheckerProps,
} from './typescript-checker.ts';

vi.mock('./typescript-compiler.ts');

afterEach(() => {
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

      const props: ITypeScriptCheckerProps = {
        tsconfigPath: '/test/tsconfig.json',
        workingDirectory: '/workspace',
      };
      const checker = new TypeScriptChecker(props);

      expect(checker.name).toBe('typescript');
    });
  });

  describe('constructor with ITypeScriptCheckerProps', () => {
    it('should accept configuration object with tsconfigPath and workingDirectory', () => {
      vi.mocked(compile).mockResolvedValue({
        hasError: false,
        diagnostics: [],
      });

      const props: ITypeScriptCheckerProps = {
        tsconfigPath: '/path/to/tsconfig.json',
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

      const props: ITypeScriptCheckerProps = {
        tsconfigPath: '/test/tsconfig.json',
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
      'TypeScriptt',
      'tss',
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

      const props: ITypeScriptCheckerProps = {
        tsconfigPath: '/test/tsconfig.json',
        workingDirectory: '/workspace',
      };
      checker = new TypeScriptChecker(props);
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

    it('should pass code directly to compiler without preprocessing when no preprocessors are provided', async () => {
      const codeContent = 'const value: string = "test";';
      const mockBlock = createMockCodeBlock({
        content: codeContent,
        language: 'typescript',
      });

      await checker.check(mockBlock);

      expect(vi.mocked(compile)).toHaveBeenCalledWith({
        compilerOptions: expect.any(Object),
        workingDirectory: '/workspace',
        code: codeContent,
        type: 'ts',
      });
    });
  });

  describe('inheritance from Checker', () => {
    it('should extend the Checker abstract class with required properties and methods', () => {
      vi.mocked(compile).mockResolvedValue({
        hasError: false,
        diagnostics: [],
      });

      const props: ITypeScriptCheckerProps = {
        tsconfigPath: '/test/tsconfig.json',
        workingDirectory: '/workspace',
      };
      const checker = new TypeScriptChecker(props);

      expect(checker).toHaveProperty('name');
      expect(checker).toHaveProperty('codeBlocks');
      expect(checker).toHaveProperty('canCheck');
      expect(checker).toHaveProperty('check');
      expect(checker).toHaveProperty('addCodeBlock');
      expect(checker).toHaveProperty('checkAll');
    });

    it('should selectively add code blocks based on canCheck method', () => {
      vi.mocked(compile).mockResolvedValue({
        hasError: false,
        diagnostics: [],
      });

      const props: ITypeScriptCheckerProps = {
        tsconfigPath: '/test/tsconfig.json',
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

      const props: ITypeScriptCheckerProps = {
        tsconfigPath: '/test/tsconfig.json',
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
