import { afterEach, describe, expect, it, vi } from 'vitest';
import { mockDeep, type MockProxy } from 'vitest-mock-extended';
import { Checker } from './checker.ts';
import { CodeBlock } from './code-block.ts';
import { ICheckResult } from './check-result.ts';

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
): Checker {
  return new (class extends Checker {
    canCheck(codeBlock: CodeBlock): boolean {
      return canCheckImpl(codeBlock);
    }

    async check(codeBlock: CodeBlock): Promise<ICheckResult> {
      return checkImpl(codeBlock);
    }
  })(name);
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
});
