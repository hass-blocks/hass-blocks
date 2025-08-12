import { afterEach, describe, expect, it, vi } from 'vitest';
import { mockDeep, type MockProxy } from 'vitest-mock-extended';
import { Checker } from './checker.ts';
import { CodeBlock } from './code-block.ts';
import { ICheckResult } from './check-result.ts';
import { type IPreprocessor } from './preprocessor.ts';

afterEach(() => {
  vi.resetAllMocks();
});

function createMockCodeBlock(
  overrides: Partial<CodeBlock> = {},
): MockProxy<CodeBlock> {
  return mockDeep<CodeBlock>({
    content: 'test content',
    language: 'javascript',
    filePath: '/test.md',
    startLine: 1,
    endLine: 1,
    ...overrides,
  });
}

function createTestChecker(
  name = 'Test Checker',
  canCheckImpl: (codeBlock: CodeBlock) => boolean = () => true,
  checkImpl: (codeBlock: CodeBlock) => Promise<ICheckResult> = async () => ({
    success: true,
  }),
  preprocessors?: IPreprocessor[],
): Checker {
  return new (class extends Checker {
    canCheck(codeBlock: CodeBlock): boolean {
      return canCheckImpl(codeBlock);
    }

    protected async performCheck(codeBlock: CodeBlock): Promise<ICheckResult> {
      return checkImpl(codeBlock);
    }
  })(name, preprocessors);
}

describe('Checker', () => {
  describe('constructor and name property', () => {
    it('should set the name property from constructor parameter', () => {
      const checkerName = 'Custom Test Checker';
      const checker = createTestChecker(checkerName);

      expect(checker.name).toBe(checkerName);
    });

    it('should use default name when provided', () => {
      const checker = createTestChecker();

      expect(checker.name).toBe('Test Checker');
    });
  });

  describe('codeBlocks getter', () => {
    it('should return an empty readonly array initially', () => {
      const checker = createTestChecker();

      expect(checker.codeBlocks).toEqual([]);
      expect(Array.isArray(checker.codeBlocks)).toBe(true);
    });

    it('should contain correct blocks after adding', () => {
      const canCheckSpy = vi.fn().mockReturnValue(true);
      const checker = createTestChecker('Test', canCheckSpy);
      const mockBlock1 = createMockCodeBlock({ language: 'typescript' });
      const mockBlock2 = createMockCodeBlock({ language: 'javascript' });

      checker.addCodeBlock(mockBlock1);
      checker.addCodeBlock(mockBlock2);

      expect(checker.codeBlocks).toHaveLength(2);
      expect(checker.codeBlocks[0]).toBe(mockBlock1);
      expect(checker.codeBlocks[1]).toBe(mockBlock2);
    });

    it('should reflect changes after blocks are added', () => {
      const canCheckSpy = vi.fn().mockReturnValue(true);
      const checker = createTestChecker('Test', canCheckSpy);
      const mockBlock = createMockCodeBlock();

      expect(checker.codeBlocks).toHaveLength(0);

      checker.addCodeBlock(mockBlock);

      expect(checker.codeBlocks).toHaveLength(1);
      expect(checker.codeBlocks[0]).toBe(mockBlock);
    });
  });

  describe('addCodeBlock method', () => {
    it('should add blocks when canCheck returns true', () => {
      const canCheckSpy = vi.fn().mockReturnValue(true);
      const checker = createTestChecker('Test', canCheckSpy);
      const mockBlock = createMockCodeBlock();

      checker.addCodeBlock(mockBlock);

      expect(canCheckSpy).toHaveBeenCalledWith(mockBlock);
      expect(checker.codeBlocks).toHaveLength(1);
      expect(checker.codeBlocks[0]).toBe(mockBlock);
    });

    it('should not add blocks when canCheck returns false', () => {
      const canCheckSpy = vi.fn().mockReturnValue(false);
      const checker = createTestChecker('Test', canCheckSpy);
      const mockBlock = createMockCodeBlock();

      checker.addCodeBlock(mockBlock);

      expect(canCheckSpy).toHaveBeenCalledWith(mockBlock);
      expect(checker.codeBlocks).toHaveLength(0);
    });

    it('should call canCheck for each block and only add accepted ones', () => {
      const canCheckSpy = vi
        .fn()
        .mockReturnValueOnce(true)
        .mockReturnValueOnce(false)
        .mockReturnValueOnce(true);
      const checker = createTestChecker('Test', canCheckSpy);
      const mockBlock1 = createMockCodeBlock({ language: 'typescript' });
      const mockBlock2 = createMockCodeBlock({ language: 'python' });
      const mockBlock3 = createMockCodeBlock({ language: 'javascript' });

      checker.addCodeBlock(mockBlock1);
      checker.addCodeBlock(mockBlock2);
      checker.addCodeBlock(mockBlock3);

      expect(canCheckSpy).toHaveBeenCalledTimes(3);
      expect(canCheckSpy).toHaveBeenNthCalledWith(1, mockBlock1);
      expect(canCheckSpy).toHaveBeenNthCalledWith(2, mockBlock2);
      expect(canCheckSpy).toHaveBeenNthCalledWith(3, mockBlock3);
      expect(checker.codeBlocks).toHaveLength(2);
      expect(checker.codeBlocks[0]).toBe(mockBlock1);
      expect(checker.codeBlocks[1]).toBe(mockBlock3);
    });

    it('should work with checker that accepts all blocks', () => {
      const canCheckSpy = vi.fn().mockReturnValue(true);
      const checker = createTestChecker('All Languages', canCheckSpy);
      const mockBlocks = [
        createMockCodeBlock({ language: 'typescript' }),
        createMockCodeBlock({ language: 'javascript' }),
        createMockCodeBlock({ language: 'python' }),
        createMockCodeBlock({ language: '' }),
      ];

      mockBlocks.forEach((block) => {
        checker.addCodeBlock(block);
      });

      expect(canCheckSpy).toHaveBeenCalledTimes(4);
      expect(checker.codeBlocks).toHaveLength(4);
    });

    it('should work with checker that accepts no blocks', () => {
      const canCheckSpy = vi.fn().mockReturnValue(false);
      const checker = createTestChecker('No Languages', canCheckSpy);
      const mockBlocks = [
        createMockCodeBlock({ language: 'typescript' }),
        createMockCodeBlock({ language: 'javascript' }),
        createMockCodeBlock({ language: 'python' }),
      ];

      mockBlocks.forEach((block) => {
        checker.addCodeBlock(block);
      });

      expect(canCheckSpy).toHaveBeenCalledTimes(3);
      expect(checker.codeBlocks).toHaveLength(0);
    });
  });

  describe('checker instance independence', () => {
    it('should maintain independent state across checker instances', () => {
      const canCheck1 = vi.fn().mockReturnValue(true);
      const canCheck2 = vi.fn().mockReturnValue(true);
      const checker1 = createTestChecker('Checker 1', canCheck1);
      const checker2 = createTestChecker('Checker 2', canCheck2);

      const mockBlock1 = createMockCodeBlock({ content: 'block 1' });
      const mockBlock2 = createMockCodeBlock({ content: 'block 2' });

      checker1.addCodeBlock(mockBlock1);
      checker2.addCodeBlock(mockBlock2);

      expect(checker1.codeBlocks).toHaveLength(1);
      expect(checker1.codeBlocks[0]).toBe(mockBlock1);

      expect(checker2.codeBlocks).toHaveLength(1);
      expect(checker2.codeBlocks[0]).toBe(mockBlock2);

      expect(checker1.codeBlocks).not.toContain(mockBlock2);
      expect(checker2.codeBlocks).not.toContain(mockBlock1);
    });
  });

  describe('abstract method contracts', () => {
    it('should call the provided canCheck implementation', () => {
      const canCheckSpy = vi.fn().mockReturnValue(false);
      const checker = createTestChecker('Test', canCheckSpy);
      const mockBlock = createMockCodeBlock({ language: 'typescript' });

      const result = checker.canCheck(mockBlock);

      expect(canCheckSpy).toHaveBeenCalledWith(mockBlock);
      expect(result).toBe(false);
    });

    it('should call the provided check implementation', async () => {
      const expectedResult: ICheckResult = {
        success: false,
        message: 'Test failure',
      };
      const checkSpy = vi.fn().mockResolvedValue(expectedResult);
      const checker = createTestChecker('Test', () => true, checkSpy);
      const mockBlock = createMockCodeBlock({ content: 'test content' });

      const result = await checker.check(mockBlock);

      expect(checkSpy).toHaveBeenCalledWith(mockBlock);
      expect(result).toBe(expectedResult);
    });
  });

  describe('checkAll method', () => {
    it('should check all code blocks and call storeCheckResult on each', async () => {
      const successResult: ICheckResult = { success: true };
      const failureResult: ICheckResult = {
        success: false,
        message: 'Test failure',
      };
      const checkSpy = vi
        .fn()
        .mockResolvedValueOnce(successResult)
        .mockResolvedValueOnce(failureResult);
      const checkerName = 'Test Checker';
      const checker = createTestChecker(checkerName, () => true, checkSpy);

      const mockBlock1 = createMockCodeBlock({ content: 'valid code' });
      const mockBlock2 = createMockCodeBlock({ content: 'invalid code' });

      checker.addCodeBlock(mockBlock1);
      checker.addCodeBlock(mockBlock2);

      await checker.checkAll();

      expect(checkSpy).toHaveBeenCalledTimes(2);
      expect(checkSpy).toHaveBeenNthCalledWith(1, mockBlock1);
      expect(checkSpy).toHaveBeenNthCalledWith(2, mockBlock2);

      expect(mockBlock1.storeCheckResult).toHaveBeenCalledWith(
        checkerName,
        successResult,
      );
      expect(mockBlock2.storeCheckResult).toHaveBeenCalledWith(
        checkerName,
        failureResult,
      );
    });

    it('should handle empty code block collection', async () => {
      const checkSpy = vi.fn();
      const checker = createTestChecker('Test', () => true, checkSpy);

      await expect(checker.checkAll()).resolves.toBeUndefined();
      expect(checkSpy).not.toHaveBeenCalled();
    });

    it('should process all blocks in sequence', async () => {
      const results = [
        { success: true } as ICheckResult,
        { success: false, message: 'Error 1' } as ICheckResult,
        { success: true } as ICheckResult,
      ];
      const checkSpy = vi
        .fn()
        .mockResolvedValueOnce(results[0])
        .mockResolvedValueOnce(results[1])
        .mockResolvedValueOnce(results[2]);
      const checkerName = 'Multi Test Checker';
      const checker = createTestChecker(checkerName, () => true, checkSpy);

      const mockBlocks = [
        createMockCodeBlock({ content: 'block 1' }),
        createMockCodeBlock({ content: 'block 2' }),
        createMockCodeBlock({ content: 'block 3' }),
      ];

      mockBlocks.forEach((block) => {
        checker.addCodeBlock(block);
      });

      await checker.checkAll();

      expect(checkSpy).toHaveBeenCalledTimes(3);
      mockBlocks.forEach((block, index) => {
        expect(checkSpy).toHaveBeenNthCalledWith(index + 1, block);
        expect(block.storeCheckResult).toHaveBeenCalledWith(
          checkerName,
          results[index],
        );
      });
    });

    it('should use checker name when storing results', async () => {
      const customName = 'Custom Checker Name';
      const result: ICheckResult = { success: true };
      const checkSpy = vi.fn().mockResolvedValue(result);
      const checker = createTestChecker(customName, () => true, checkSpy);
      const mockBlock = createMockCodeBlock();

      checker.addCodeBlock(mockBlock);
      await checker.checkAll();

      expect(mockBlock.storeCheckResult).toHaveBeenCalledWith(
        customName,
        result,
      );
    });
  });

  describe('preprocessor support', () => {
    describe('constructor with preprocessors', () => {
      it('should accept no preprocessors (backward compatibility)', () => {
        const checker = createTestChecker('Test Checker');

        expect(checker).toBeDefined();
        expect(checker.name).toBe('Test Checker');
      });

      it('should accept undefined preprocessors', () => {
        const checker = createTestChecker(
          'Test Checker',
          () => true,
          async () => ({ success: true }),
          undefined,
        );

        expect(checker).toBeDefined();
        expect(checker.name).toBe('Test Checker');
      });

      it('should accept an empty array of preprocessors', () => {
        const checker = createTestChecker(
          'Test Checker',
          () => true,
          async () => ({ success: true }),
          [],
        );

        expect(checker).toBeDefined();
        expect(checker.name).toBe('Test Checker');
      });

      it('should accept a single preprocessor', () => {
        const preprocessor: IPreprocessor = {
          name: 'test-preprocessor',
          preprocess: async (block: CodeBlock) => block,
        };
        const checker = createTestChecker(
          'Test Checker',
          () => true,
          async () => ({ success: true }),
          [preprocessor],
        );

        expect(checker).toBeDefined();
        expect(checker.name).toBe('Test Checker');
      });

      it('should accept multiple preprocessors', () => {
        const preprocessor1: IPreprocessor = {
          name: 'preprocessor-1',
          preprocess: async (block: CodeBlock) => block,
        };
        const preprocessor2: IPreprocessor = {
          name: 'preprocessor-2',
          preprocess: async (block: CodeBlock) => block,
        };
        const checker = createTestChecker(
          'Test Checker',
          () => true,
          async () => ({ success: true }),
          [preprocessor1, preprocessor2],
        );

        expect(checker).toBeDefined();
        expect(checker.name).toBe('Test Checker');
      });
    });

    describe('check method with preprocessors', () => {
      it('should call check directly when no preprocessors are provided', async () => {
        const originalBlock = new CodeBlock(
          'original content',
          'test.md',
          1,
          5,
          'javascript',
        );
        const checkSpy = vi.fn().mockResolvedValue({ success: true });
        const checker = createTestChecker('Test', () => true, checkSpy);

        await checker.check(originalBlock);

        expect(checkSpy).toHaveBeenCalledWith(originalBlock);
        expect(checkSpy).toHaveBeenCalledTimes(1);
      });

      it('should apply a single preprocessor before checking', async () => {
        const originalBlock = new CodeBlock(
          'original content',
          'test.md',
          1,
          5,
          'javascript',
        );
        const processedBlock = new CodeBlock(
          'processed content',
          'test.md',
          1,
          5,
          'javascript',
        );

        const preprocessSpy = vi.fn().mockReturnValue(processedBlock);
        const preprocessor: IPreprocessor = {
          name: 'test-preprocessor',
          preprocess: preprocessSpy,
        };

        const checkSpy = vi.fn().mockResolvedValue({ success: true });
        const checker = createTestChecker('Test', () => true, checkSpy, [
          preprocessor,
        ]);

        await checker.check(originalBlock);

        expect(preprocessSpy).toHaveBeenCalledWith(originalBlock);
        expect(preprocessSpy).toHaveBeenCalledTimes(1);
        expect(checkSpy).toHaveBeenCalledWith(processedBlock);
        expect(checkSpy).toHaveBeenCalledTimes(1);
      });

      it('should apply multiple preprocessors in the correct order', async () => {
        const originalBlock = new CodeBlock(
          'original',
          'test.md',
          1,
          5,
          'javascript',
        );
        const block1 = new CodeBlock(
          'processed-1',
          'test.md',
          1,
          5,
          'javascript',
        );
        const block2 = new CodeBlock(
          'processed-2',
          'test.md',
          1,
          5,
          'javascript',
        );
        const finalBlock = new CodeBlock(
          'processed-3',
          'test.md',
          1,
          5,
          'javascript',
        );

        const preprocess1Spy = vi.fn().mockReturnValue(block1);
        const preprocess2Spy = vi.fn().mockReturnValue(block2);
        const preprocess3Spy = vi.fn().mockReturnValue(finalBlock);

        const preprocessor1: IPreprocessor = {
          name: 'preprocessor-1',
          preprocess: preprocess1Spy,
        };
        const preprocessor2: IPreprocessor = {
          name: 'preprocessor-2',
          preprocess: preprocess2Spy,
        };
        const preprocessor3: IPreprocessor = {
          name: 'preprocessor-3',
          preprocess: preprocess3Spy,
        };

        const checkSpy = vi.fn().mockResolvedValue({ success: true });
        const checker = createTestChecker('Test', () => true, checkSpy, [
          preprocessor1,
          preprocessor2,
          preprocessor3,
        ]);

        await checker.check(originalBlock);

        expect(preprocess1Spy).toHaveBeenCalledWith(originalBlock);
        expect(preprocess2Spy).toHaveBeenCalledWith(block1);
        expect(preprocess3Spy).toHaveBeenCalledWith(block2);
        expect(checkSpy).toHaveBeenCalledWith(finalBlock);

        expect(preprocess1Spy).toHaveBeenCalledTimes(1);
        expect(preprocess2Spy).toHaveBeenCalledTimes(1);
        expect(preprocess3Spy).toHaveBeenCalledTimes(1);
        expect(checkSpy).toHaveBeenCalledTimes(1);
      });

      it('should chain preprocessor outputs correctly', async () => {
        const originalBlock = new CodeBlock(
          'HELLO',
          'test.md',
          1,
          5,
          'javascript',
        );

        const toLowerPreprocessor: IPreprocessor = {
          name: 'to-lower',
          preprocess: async (block: CodeBlock) =>
            new CodeBlock(
              block.content.toLowerCase(),
              block.filePath,
              block.startLine,
              block.endLine,
              block.language,
            ),
        };

        const addPrefixPreprocessor: IPreprocessor = {
          name: 'add-prefix',
          preprocess: async (block: CodeBlock) =>
            new CodeBlock(
              'prefix-' + block.content,
              block.filePath,
              block.startLine,
              block.endLine,
              block.language,
            ),
        };

        const checkSpy = vi.fn().mockResolvedValue({ success: true });
        const checker = createTestChecker('Test', () => true, checkSpy, [
          toLowerPreprocessor,
          addPrefixPreprocessor,
        ]);

        await checker.check(originalBlock);

        const expectedBlock = expect.objectContaining({
          content: 'prefix-hello',
          filePath: 'test.md',
          startLine: 1,
          endLine: 5,
          language: 'javascript',
        });

        expect(checkSpy).toHaveBeenCalledWith(expectedBlock);
      });

      it('should handle preprocessor that modifies code block properties', async () => {
        const originalBlock = new CodeBlock(
          'content',
          'original.md',
          10,
          20,
          'typescript',
        );

        const modifyingPreprocessor: IPreprocessor = {
          name: 'modifier',
          preprocess: async (block: CodeBlock) =>
            new CodeBlock(
              block.content.toUpperCase(),
              'modified.md',
              100,
              200,
              'javascript',
            ),
        };

        const checkSpy = vi.fn().mockResolvedValue({ success: true });
        const checker = createTestChecker('Test', () => true, checkSpy, [
          modifyingPreprocessor,
        ]);

        await checker.check(originalBlock);

        expect(checkSpy).toHaveBeenCalledWith(
          expect.objectContaining({
            content: 'CONTENT',
            filePath: 'modified.md',
            startLine: 100,
            endLine: 200,
            language: 'javascript',
          }),
        );
      });

      it('should handle empty preprocessors array', async () => {
        const originalBlock = new CodeBlock(
          'content',
          'test.md',
          1,
          5,
          'javascript',
        );
        const checkSpy = vi.fn().mockResolvedValue({ success: true });
        const checker = createTestChecker('Test', () => true, checkSpy, []);

        await checker.check(originalBlock);

        expect(checkSpy).toHaveBeenCalledWith(originalBlock);
        expect(checkSpy).toHaveBeenCalledTimes(1);
      });

      it('should preserve original block when preprocessor returns the same instance', async () => {
        const originalBlock = new CodeBlock(
          'content',
          'test.md',
          1,
          5,
          'javascript',
        );

        const identityPreprocessor: IPreprocessor = {
          name: 'identity',
          preprocess: async (block: CodeBlock) => block,
        };

        const checkSpy = vi.fn().mockResolvedValue({ success: true });
        const checker = createTestChecker('Test', () => true, checkSpy, [
          identityPreprocessor,
        ]);

        await checker.check(originalBlock);

        expect(checkSpy).toHaveBeenCalledWith(originalBlock);
      });

      it('should work with async check implementation and preprocessors', async () => {
        const originalBlock = new CodeBlock(
          'original',
          'test.md',
          1,
          5,
          'javascript',
        );
        const processedBlock = new CodeBlock(
          'processed',
          'test.md',
          1,
          5,
          'javascript',
        );

        const preprocessor: IPreprocessor = {
          name: 'test-preprocessor',
          preprocess: async () => processedBlock,
        };

        const expectedResult: ICheckResult = {
          success: false,
          message: 'Async check failed',
        };
        const checkSpy = vi.fn().mockImplementation(async () => {
          await new Promise((resolve) => setTimeout(resolve, 10));
          return expectedResult;
        });

        const checker = createTestChecker('Test', () => true, checkSpy, [
          preprocessor,
        ]);

        const result = await checker.check(originalBlock);

        expect(checkSpy).toHaveBeenCalledWith(processedBlock);
        expect(result).toBe(expectedResult);
      });
    });

    describe('checkAll method with preprocessors', () => {
      it('should apply preprocessors to each block during checkAll', async () => {
        const processed1 = new CodeBlock(
          'CONTENT1',
          'test1.md',
          1,
          5,
          'javascript',
        );
        const processed2 = new CodeBlock(
          'CONTENT2',
          'test2.md',
          10,
          15,
          'typescript',
        );

        const preprocessSpy = vi
          .fn()
          .mockReturnValueOnce(processed1)
          .mockReturnValueOnce(processed2);

        const preprocessor: IPreprocessor = {
          name: 'uppercase',
          preprocess: preprocessSpy,
        };

        const checkSpy = vi.fn().mockResolvedValue({ success: true });
        const checker = createTestChecker('Test', () => true, checkSpy, [
          preprocessor,
        ]);

        const realBlock1 = new CodeBlock(
          'content1',
          'test1.md',
          1,
          5,
          'javascript',
        );
        const realBlock2 = new CodeBlock(
          'content2',
          'test2.md',
          10,
          15,
          'typescript',
        );

        vi.spyOn(realBlock1, 'storeCheckResult');
        vi.spyOn(realBlock2, 'storeCheckResult');

        checker.addCodeBlock(realBlock1);
        checker.addCodeBlock(realBlock2);

        await checker.checkAll();

        expect(preprocessSpy).toHaveBeenCalledTimes(2);
        expect(preprocessSpy).toHaveBeenNthCalledWith(1, realBlock1);
        expect(preprocessSpy).toHaveBeenNthCalledWith(2, realBlock2);

        expect(checkSpy).toHaveBeenCalledTimes(2);
        expect(checkSpy).toHaveBeenNthCalledWith(1, processed1);
        expect(checkSpy).toHaveBeenNthCalledWith(2, processed2);
      });

      it('should apply multiple preprocessors in order for each block during checkAll', async () => {
        const stage1 = new CodeBlock('stage1', 'test.md', 1, 5, 'javascript');
        const stage2 = new CodeBlock('stage2', 'test.md', 1, 5, 'javascript');

        const preprocess1Spy = vi.fn().mockReturnValue(stage1);
        const preprocess2Spy = vi.fn().mockReturnValue(stage2);

        const preprocessor1: IPreprocessor = {
          name: 'preprocessor-1',
          preprocess: preprocess1Spy,
        };
        const preprocessor2: IPreprocessor = {
          name: 'preprocessor-2',
          preprocess: preprocess2Spy,
        };

        const checkSpy = vi.fn().mockResolvedValue({ success: true });
        const checker = createTestChecker('Test', () => true, checkSpy, [
          preprocessor1,
          preprocessor2,
        ]);

        const realBlock = new CodeBlock('test', 'test.md', 1, 5, 'javascript');
        vi.spyOn(realBlock, 'storeCheckResult');

        checker.addCodeBlock(realBlock);
        await checker.checkAll();

        expect(preprocess1Spy).toHaveBeenCalledWith(realBlock);
        expect(preprocess2Spy).toHaveBeenCalledWith(stage1);
        expect(checkSpy).toHaveBeenCalledWith(stage2);
      });

      it('should handle different preprocessor results for different blocks', async () => {
        const languagePreprocessor: IPreprocessor = {
          name: 'language-specific',
          preprocess: async (block: CodeBlock) => {
            if (block.language === 'javascript') {
              return new CodeBlock(
                '// JS\n' + block.content,
                block.filePath,
                block.startLine,
                block.endLine,
                block.language,
              );
            } else if (block.language === 'typescript') {
              return new CodeBlock(
                '// TS\n' + block.content,
                block.filePath,
                block.startLine,
                block.endLine,
                block.language,
              );
            }
            return block;
          },
        };

        const checkSpy = vi.fn().mockResolvedValue({ success: true });
        const checker = createTestChecker('Test', () => true, checkSpy, [
          languagePreprocessor,
        ]);

        const realJsBlock = new CodeBlock(
          'js code',
          'test.js.md',
          1,
          5,
          'javascript',
        );
        const realTsBlock = new CodeBlock(
          'ts code',
          'test.ts.md',
          10,
          15,
          'typescript',
        );

        vi.spyOn(realJsBlock, 'storeCheckResult');
        vi.spyOn(realTsBlock, 'storeCheckResult');

        checker.addCodeBlock(realJsBlock);
        checker.addCodeBlock(realTsBlock);

        await checker.checkAll();

        expect(checkSpy).toHaveBeenCalledTimes(2);
        expect(checkSpy).toHaveBeenNthCalledWith(
          1,
          expect.objectContaining({
            content: '// JS\njs code',
            language: 'javascript',
          }),
        );
        expect(checkSpy).toHaveBeenNthCalledWith(
          2,
          expect.objectContaining({
            content: '// TS\nts code',
            language: 'typescript',
          }),
        );
      });
    });

    describe('edge cases with preprocessors', () => {
      it('should handle preprocessor that throws an error', async () => {
        const originalBlock = new CodeBlock(
          'content',
          'test.md',
          1,
          5,
          'javascript',
        );

        const throwingPreprocessor: IPreprocessor = {
          name: 'throwing',
          preprocess: async () => {
            throw new Error('Preprocessor error');
          },
        };

        const checkSpy = vi.fn().mockResolvedValue({ success: true });
        const checker = createTestChecker('Test', () => true, checkSpy, [
          throwingPreprocessor,
        ]);

        await expect(checker.check(originalBlock)).rejects.toThrow(
          'Preprocessor error',
        );
        expect(checkSpy).not.toHaveBeenCalled();
      });

      it('should continue processing if one preprocessor in chain throws', async () => {
        const originalBlock = new CodeBlock(
          'content',
          'test.md',
          1,
          5,
          'javascript',
        );
        const processedBlock = new CodeBlock(
          'processed',
          'test.md',
          1,
          5,
          'javascript',
        );

        const workingPreprocessor1: IPreprocessor = {
          name: 'working-1',
          preprocess: async () => processedBlock,
        };

        const throwingPreprocessor: IPreprocessor = {
          name: 'throwing',
          preprocess: async () => {
            throw new Error('Middle preprocessor error');
          },
        };

        const workingPreprocessor2: IPreprocessor = {
          name: 'working-2',
          preprocess: async (block: CodeBlock) => block,
        };

        const checkSpy = vi.fn().mockResolvedValue({ success: true });
        const checker = createTestChecker('Test', () => true, checkSpy, [
          workingPreprocessor1,
          throwingPreprocessor,
          workingPreprocessor2,
        ]);

        await expect(checker.check(originalBlock)).rejects.toThrow(
          'Middle preprocessor error',
        );
        expect(checkSpy).not.toHaveBeenCalled();
      });

      it('should handle preprocessor returning null or undefined gracefully', async () => {
        const originalBlock = new CodeBlock(
          'content',
          'test.md',
          1,
          5,
          'javascript',
        );

        const nullReturningPreprocessor: IPreprocessor = {
          name: 'null-returning',
          preprocess: async () => null as unknown as CodeBlock,
        };

        const checkSpy = vi.fn().mockResolvedValue({ success: true });
        const checker = createTestChecker('Test', () => true, checkSpy, [
          nullReturningPreprocessor,
        ]);

        await checker.check(originalBlock);

        expect(checkSpy).toHaveBeenCalledWith(null);
      });

      it('should handle large number of preprocessors', async () => {
        const originalBlock = new CodeBlock('0', 'test.md', 1, 5, 'javascript');

        const preprocessors: IPreprocessor[] = [];
        for (let i = 1; i <= 10; i++) {
          preprocessors.push({
            name: `preprocessor-${i}`,
            preprocess: async (block: CodeBlock) =>
              new CodeBlock(
                String(Number(block.content) + 1),
                block.filePath,
                block.startLine,
                block.endLine,
                block.language,
              ),
          });
        }

        const checkSpy = vi.fn().mockResolvedValue({ success: true });
        const checker = createTestChecker(
          'Test',
          () => true,
          checkSpy,
          preprocessors,
        );

        await checker.check(originalBlock);

        expect(checkSpy).toHaveBeenCalledWith(
          expect.objectContaining({
            content: '10',
          }),
        );
      });

      it('should maintain preprocessor isolation between different checker instances', async () => {
        const block = new CodeBlock('original', 'test.md', 1, 5, 'javascript');

        const preprocessor1: IPreprocessor = {
          name: 'preprocessor-1',
          preprocess: async (b: CodeBlock) =>
            new CodeBlock(
              'processed-1',
              b.filePath,
              b.startLine,
              b.endLine,
              b.language,
            ),
        };

        const preprocessor2: IPreprocessor = {
          name: 'preprocessor-2',
          preprocess: async (b: CodeBlock) =>
            new CodeBlock(
              'processed-2',
              b.filePath,
              b.startLine,
              b.endLine,
              b.language,
            ),
        };

        const checkSpy1 = vi.fn().mockResolvedValue({ success: true });
        const checkSpy2 = vi.fn().mockResolvedValue({ success: true });

        const checker1 = createTestChecker('Checker1', () => true, checkSpy1, [
          preprocessor1,
        ]);
        const checker2 = createTestChecker('Checker2', () => true, checkSpy2, [
          preprocessor2,
        ]);

        await checker1.check(block);
        await checker2.check(block);

        expect(checkSpy1).toHaveBeenCalledWith(
          expect.objectContaining({ content: 'processed-1' }),
        );
        expect(checkSpy2).toHaveBeenCalledWith(
          expect.objectContaining({ content: 'processed-2' }),
        );
      });
    });
  });
});
