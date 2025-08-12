import { afterEach, describe, expect, it, vi } from 'vitest';
import { mockDeep, type MockProxy } from 'vitest-mock-extended';
import { CodeBlock } from './code-block.ts';
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

function createTestPreprocessor(
  name = 'Test Preprocessor',
  preprocessImpl: (codeBlock: CodeBlock) => Promise<CodeBlock> = async (
    block,
  ) => block,
): IPreprocessor {
  return {
    name,
    preprocess: preprocessImpl,
  };
}

describe('IPreprocessor interface contract', () => {
  describe('name property', () => {
    it('should have a readonly name property', () => {
      const preprocessorName = 'Test Preprocessor Name';
      const preprocessor = createTestPreprocessor(preprocessorName);

      expect(preprocessor.name).toBe(preprocessorName);
    });

    it('should maintain name property consistency', () => {
      const originalName = 'Original Name';
      const preprocessor = createTestPreprocessor(originalName);

      expect(preprocessor.name).toBe(originalName);
      expect(typeof preprocessor.name).toBe('string');
    });

    it('should require name to be a string', () => {
      const preprocessor = createTestPreprocessor('String Name');

      expect(typeof preprocessor.name).toBe('string');
      expect(preprocessor.name.length).toBeGreaterThan(0);
    });

    it('should support empty string as name', () => {
      const preprocessor = createTestPreprocessor('');

      expect(preprocessor.name).toBe('');
      expect(typeof preprocessor.name).toBe('string');
    });

    it('should support names with special characters', () => {
      const specialName = 'test-preprocessor_v2.0 (beta)';
      const preprocessor = createTestPreprocessor(specialName);

      expect(preprocessor.name).toBe(specialName);
    });
  });

  describe('preprocess method signature', () => {
    it('should have a preprocess method that accepts a CodeBlock', async () => {
      const mockBlock = createMockCodeBlock();
      const preprocessSpy = vi.fn().mockResolvedValue(mockBlock);
      const preprocessor = createTestPreprocessor('Test', preprocessSpy);

      await preprocessor.preprocess(mockBlock);

      expect(preprocessSpy).toHaveBeenCalledWith(mockBlock);
      expect(preprocessSpy).toHaveBeenCalledTimes(1);
    });

    it('should return a Promise<CodeBlock>', async () => {
      const mockBlock = createMockCodeBlock();
      const expectedBlock = createMockCodeBlock({
        content: 'modified content',
      });
      const preprocessor = createTestPreprocessor(
        'Test',
        async () => expectedBlock,
      );

      const result = preprocessor.preprocess(mockBlock);

      expect(result).toBeInstanceOf(Promise);
      const resolvedResult = await result;
      expect(resolvedResult).toBe(expectedBlock);
    });

    it('should accept CodeBlock instances with all properties', async () => {
      const testBlock = new CodeBlock(
        'function test() { return true; }',
        '/path/to/test.md',
        5,
        10,
        'javascript',
      );
      const preprocessSpy = vi.fn().mockResolvedValue(testBlock);
      const preprocessor = createTestPreprocessor('Test', preprocessSpy);

      await preprocessor.preprocess(testBlock);

      expect(preprocessSpy).toHaveBeenCalledWith(
        expect.objectContaining({
          content: 'function test() { return true; }',
          filePath: '/path/to/test.md',
          startLine: 5,
          endLine: 10,
          language: 'javascript',
        }),
      );
    });

    it('should handle async preprocessing operations', async () => {
      const mockBlock = createMockCodeBlock();
      const processedBlock = createMockCodeBlock({
        content: 'async processed',
      });
      const preprocessor = createTestPreprocessor('Async Test', async () => {
        await new Promise((resolve) => setTimeout(resolve, 10));
        return processedBlock;
      });

      const result = await preprocessor.preprocess(mockBlock);

      expect(result).toBe(processedBlock);
    });
  });

  describe('preprocess method behavior', () => {
    it('should be able to return the same CodeBlock instance', async () => {
      const mockBlock = createMockCodeBlock();
      const identityPreprocessor = createTestPreprocessor(
        'Identity',
        async (block) => block,
      );

      const result = await identityPreprocessor.preprocess(mockBlock);

      expect(result).toBe(mockBlock);
    });

    it('should be able to return a new CodeBlock instance', async () => {
      const originalBlock = createMockCodeBlock({ content: 'original' });
      const newBlock = createMockCodeBlock({ content: 'modified' });
      const preprocessor = createTestPreprocessor(
        'Modifier',
        async () => newBlock,
      );

      const result = await preprocessor.preprocess(originalBlock);

      expect(result).toBe(newBlock);
      expect(result).not.toBe(originalBlock);
    });

    it('should be able to modify CodeBlock content', async () => {
      const originalBlock = new CodeBlock(
        'hello world',
        'test.md',
        1,
        1,
        'text',
      );
      const preprocessor = createTestPreprocessor(
        'Uppercase',
        async (block) => {
          return new CodeBlock(
            block.content.toUpperCase(),
            block.filePath,
            block.startLine,
            block.endLine,
            block.language,
          );
        },
      );

      const result = await preprocessor.preprocess(originalBlock);

      expect(result.content).toBe('HELLO WORLD');
      expect(result.filePath).toBe('test.md');
      expect(result.startLine).toBe(1);
      expect(result.endLine).toBe(1);
      expect(result.language).toBe('text');
    });

    it('should be able to modify all CodeBlock properties', async () => {
      const originalBlock = new CodeBlock(
        'content',
        'original.md',
        1,
        5,
        'javascript',
      );
      const preprocessor = createTestPreprocessor(
        'Complete Modifier',
        async () => {
          return new CodeBlock(
            'modified content',
            'modified.md',
            10,
            20,
            'typescript',
          );
        },
      );

      const result = await preprocessor.preprocess(originalBlock);

      expect(result.content).toBe('modified content');
      expect(result.filePath).toBe('modified.md');
      expect(result.startLine).toBe(10);
      expect(result.endLine).toBe(20);
      expect(result.language).toBe('typescript');
    });

    it('should handle preprocessing that preserves block properties', async () => {
      const originalBlock = new CodeBlock(
        'const value = 42;',
        '/src/example.ts',
        15,
        15,
        'typescript',
      );
      const preprocessor = createTestPreprocessor(
        'Content Only',
        async (block) => {
          return new CodeBlock(
            block.content + '\n// processed',
            block.filePath,
            block.startLine,
            block.endLine,
            block.language,
          );
        },
      );

      const result = await preprocessor.preprocess(originalBlock);

      expect(result.content).toBe('const value = 42;\n// processed');
      expect(result.filePath).toBe('/src/example.ts');
      expect(result.startLine).toBe(15);
      expect(result.endLine).toBe(15);
      expect(result.language).toBe('typescript');
    });
  });

  describe('error handling', () => {
    it('should propagate errors from preprocess method', async () => {
      const mockBlock = createMockCodeBlock();
      const errorMessage = 'Preprocessing failed';
      const preprocessor = createTestPreprocessor('Failing', async () => {
        throw new Error(errorMessage);
      });

      await expect(preprocessor.preprocess(mockBlock)).rejects.toThrow(
        errorMessage,
      );
    });

    it('should handle synchronous errors in async preprocess method', async () => {
      const mockBlock = createMockCodeBlock();
      const preprocessor = createTestPreprocessor('Sync Error', async () => {
        throw new TypeError('Type error in preprocessing');
      });

      await expect(preprocessor.preprocess(mockBlock)).rejects.toThrow(
        'Type error in preprocessing',
      );
    });

    it('should handle promise rejection in preprocess method', async () => {
      const mockBlock = createMockCodeBlock();
      const preprocessor = createTestPreprocessor('Promise Rejection', () => {
        return Promise.reject(new Error('Promise rejected'));
      });

      await expect(preprocessor.preprocess(mockBlock)).rejects.toThrow(
        'Promise rejected',
      );
    });
  });
});

describe('Multiple preprocessors chaining concept', () => {
  describe('sequential preprocessing', () => {
    it('should support chaining multiple preprocessors manually', async () => {
      const originalBlock = new CodeBlock('hello', 'test.md', 1, 1, 'text');

      const uppercaseProcessor = createTestPreprocessor(
        'Uppercase',
        async (block) => {
          return new CodeBlock(
            block.content.toUpperCase(),
            block.filePath,
            block.startLine,
            block.endLine,
            block.language,
          );
        },
      );

      const prefixProcessor = createTestPreprocessor(
        'Prefix',
        async (block) => {
          return new CodeBlock(
            '>> ' + block.content,
            block.filePath,
            block.startLine,
            block.endLine,
            block.language,
          );
        },
      );

      const step1Result = await uppercaseProcessor.preprocess(originalBlock);
      const finalResult = await prefixProcessor.preprocess(step1Result);

      expect(finalResult.content).toBe('>> HELLO');
    });

    it('should maintain type safety through multiple processing steps', async () => {
      const originalBlock = new CodeBlock(
        'test',
        'file.md',
        5,
        10,
        'javascript',
      );

      const processors: IPreprocessor[] = [
        createTestPreprocessor(
          'Step1',
          async (block) =>
            new CodeBlock(
              'step1-' + block.content,
              block.filePath,
              block.startLine,
              block.endLine,
              block.language,
            ),
        ),
        createTestPreprocessor(
          'Step2',
          async (block) =>
            new CodeBlock(
              'step2-' + block.content,
              block.filePath,
              block.startLine,
              block.endLine,
              block.language,
            ),
        ),
        createTestPreprocessor(
          'Step3',
          async (block) =>
            new CodeBlock(
              'step3-' + block.content,
              block.filePath,
              block.startLine,
              block.endLine,
              block.language,
            ),
        ),
      ];

      let currentBlock = originalBlock;
      for (const processor of processors) {
        currentBlock = await processor.preprocess(currentBlock);
        expect(currentBlock).toBeInstanceOf(CodeBlock);
      }

      expect(currentBlock.content).toBe('step3-step2-step1-test');
      expect(currentBlock.filePath).toBe('file.md');
      expect(currentBlock.startLine).toBe(5);
      expect(currentBlock.endLine).toBe(10);
      expect(currentBlock.language).toBe('javascript');
    });

    it('should handle array of preprocessors with reduce pattern', async () => {
      const originalBlock = new CodeBlock('1', 'test.md', 1, 1, 'text');

      const incrementProcessors: IPreprocessor[] = Array.from(
        { length: 5 },
        (_, i) =>
          createTestPreprocessor(`Increment${i + 1}`, async (block) => {
            const currentValue = parseInt(block.content, 10);
            return new CodeBlock(
              String(currentValue + 1),
              block.filePath,
              block.startLine,
              block.endLine,
              block.language,
            );
          }),
      );

      const finalResult = await incrementProcessors.reduce(
        async (blockPromise, processor) => {
          const block = await blockPromise;
          return processor.preprocess(block);
        },
        Promise.resolve(originalBlock),
      );

      expect(finalResult.content).toBe('6');
    });

    it('should demonstrate preprocessor composition with different transformations', async () => {
      const originalBlock = new CodeBlock(
        'function example() { return "test"; }',
        'example.js',
        1,
        1,
        'javascript',
      );

      const commentProcessor = createTestPreprocessor(
        'Add Comment',
        async (block) => {
          return new CodeBlock(
            '// Auto-generated\n' + block.content,
            block.filePath,
            block.startLine,
            block.endLine + 1,
            block.language,
          );
        },
      );

      const formatProcessor = createTestPreprocessor(
        'Format',
        async (block) => {
          return new CodeBlock(
            block.content.replace(/\s+/g, ' ').trim(),
            block.filePath,
            block.startLine,
            block.endLine,
            block.language,
          );
        },
      );

      const languageProcessor = createTestPreprocessor(
        'Update Language',
        async (block) => {
          return new CodeBlock(
            block.content,
            block.filePath,
            block.startLine,
            block.endLine,
            'typescript',
          );
        },
      );

      let processedBlock = await commentProcessor.preprocess(originalBlock);
      processedBlock = await formatProcessor.preprocess(processedBlock);
      processedBlock = await languageProcessor.preprocess(processedBlock);

      expect(processedBlock.content).toBe(
        '// Auto-generated function example() { return "test"; }',
      );
      expect(processedBlock.filePath).toBe('example.js');
      expect(processedBlock.language).toBe('typescript');
      expect(processedBlock.endLine).toBe(2);
    });
  });

  describe('preprocessor independence', () => {
    it('should ensure each preprocessor is independent and stateless', async () => {
      const block1 = new CodeBlock('block1', 'file1.md', 1, 1, 'text');
      const block2 = new CodeBlock('block2', 'file2.md', 2, 2, 'text');

      const statelessProcessor = createTestPreprocessor(
        'Stateless',
        async (block) => {
          return new CodeBlock(
            'processed-' + block.content,
            block.filePath,
            block.startLine,
            block.endLine,
            block.language,
          );
        },
      );

      const result1 = await statelessProcessor.preprocess(block1);
      const result2 = await statelessProcessor.preprocess(block2);

      expect(result1.content).toBe('processed-block1');
      expect(result2.content).toBe('processed-block2');
      expect(result1.filePath).toBe('file1.md');
      expect(result2.filePath).toBe('file2.md');
    });

    it('should allow same preprocessor to be used multiple times', async () => {
      const originalBlock = new CodeBlock('test', 'file.md', 1, 1, 'text');

      const doubleProcessor = createTestPreprocessor(
        'Double',
        async (block) => {
          return new CodeBlock(
            block.content + block.content,
            block.filePath,
            block.startLine,
            block.endLine,
            block.language,
          );
        },
      );

      const firstResult = await doubleProcessor.preprocess(originalBlock);
      const secondResult = await doubleProcessor.preprocess(firstResult);
      const thirdResult = await doubleProcessor.preprocess(secondResult);

      expect(firstResult.content).toBe('testtest');
      expect(secondResult.content).toBe('testtesttesttest');
      expect(thirdResult.content).toBe('testtesttesttesttesttesttesttest');
    });

    it('should support different preprocessors with same names', async () => {
      const block = new CodeBlock('input', 'test.md', 1, 1, 'text');

      const processor1 = createTestPreprocessor(
        'Transformer',
        async (block) => {
          return new CodeBlock(
            'output1',
            block.filePath,
            block.startLine,
            block.endLine,
            block.language,
          );
        },
      );

      const processor2 = createTestPreprocessor(
        'Transformer',
        async (block) => {
          return new CodeBlock(
            'output2',
            block.filePath,
            block.startLine,
            block.endLine,
            block.language,
          );
        },
      );

      const result1 = await processor1.preprocess(block);
      const result2 = await processor2.preprocess(block);

      expect(processor1.name).toBe('Transformer');
      expect(processor2.name).toBe('Transformer');
      expect(result1.content).toBe('output1');
      expect(result2.content).toBe('output2');
    });
  });

  describe('complex chaining scenarios', () => {
    it('should handle conditional preprocessing based on block properties', async () => {
      const jsBlock = new CodeBlock(
        'console.log("test");',
        'test.js',
        1,
        1,
        'javascript',
      );
      const tsBlock = new CodeBlock(
        'console.log("test");',
        'test.ts',
        1,
        1,
        'typescript',
      );

      const languageSpecificProcessor = createTestPreprocessor(
        'Language Specific',
        async (block) => {
          if (block.language === 'javascript') {
            return new CodeBlock(
              '// JS file\n' + block.content,
              block.filePath,
              block.startLine,
              block.endLine + 1,
              block.language,
            );
          } else if (block.language === 'typescript') {
            return new CodeBlock(
              '// TS file\n' + block.content,
              block.filePath,
              block.startLine,
              block.endLine + 1,
              block.language,
            );
          }
          return block;
        },
      );

      const jsResult = await languageSpecificProcessor.preprocess(jsBlock);
      const tsResult = await languageSpecificProcessor.preprocess(tsBlock);

      expect(jsResult.content).toBe('// JS file\nconsole.log("test");');
      expect(tsResult.content).toBe('// TS file\nconsole.log("test");');
    });

    it('should support complex transformation chains with validation', async () => {
      const originalBlock = new CodeBlock(
        '  HELLO WORLD  ',
        'test.md',
        1,
        1,
        'text',
      );

      const trimProcessor = createTestPreprocessor('Trim', async (block) => {
        return new CodeBlock(
          block.content.trim(),
          block.filePath,
          block.startLine,
          block.endLine,
          block.language,
        );
      });

      const lowercaseProcessor = createTestPreprocessor(
        'Lowercase',
        async (block) => {
          return new CodeBlock(
            block.content.toLowerCase(),
            block.filePath,
            block.startLine,
            block.endLine,
            block.language,
          );
        },
      );

      const validateProcessor = createTestPreprocessor(
        'Validate',
        async (block) => {
          if (block.content.length === 0) {
            throw new Error('Empty content not allowed');
          }
          return block;
        },
      );

      const step1 = await trimProcessor.preprocess(originalBlock);
      const step2 = await lowercaseProcessor.preprocess(step1);
      const finalResult = await validateProcessor.preprocess(step2);

      expect(finalResult.content).toBe('hello world');
    });
  });
});
