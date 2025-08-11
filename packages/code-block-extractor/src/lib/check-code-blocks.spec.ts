import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { mockDeep, type MockProxy } from 'vitest-mock-extended';
import fs from 'fs/promises';
import { checkCodeBlocks } from './check-code-blocks.ts';
import { MarkdownFile } from './markdown-file.ts';
import { Checker } from './checker.ts';
import { CodeBlock } from './code-block.ts';
import type { ICodeBlocksCheckerSettings } from './code-blocks-checker-settings.ts';

vi.mock('fs/promises');

afterEach(() => {
  vi.resetAllMocks();
});

function createMockChecker(name = 'MockChecker'): MockProxy<Checker> {
  return mockDeep<Checker>({
    name,
    codeBlocks: [],
    canCheck: vi.fn().mockReturnValue(true),
    check: vi.fn().mockResolvedValue({ success: true }),
    addCodeBlock: vi.fn(),
    checkAll: vi.fn().mockResolvedValue(undefined),
  });
}

describe('checkCodeBlocks', () => {
  describe('file processing', () => {
    it('should read markdown files and create MarkdownFile instances', async () => {
      expect.assertions(5);
      const mockContent = '# Test\n\n```typescript\nconst x = 42;\n```';
      vi.mocked(fs.readFile).mockResolvedValue(mockContent);

      const settings: ICodeBlocksCheckerSettings = {
        markdownFiles: ['/path/to/test.md'],
        checkers: [],
      };

      const { files: result } = await checkCodeBlocks(settings);

      expect(vi.mocked(fs.readFile)).toHaveBeenCalledWith(
        '/path/to/test.md',
        'utf-8',
      );
      expect(result).toHaveLength(1);
      if (result[0]) {
        expect(result[0]).toBeInstanceOf(MarkdownFile);
        expect(result[0].codeBlocks).toHaveLength(1);
      }
    });

    it('should process multiple markdown files', async () => {
      vi.mocked(fs.readFile)
        .mockResolvedValueOnce('# File 1\n\n```js\nconsole.log("1");\n```')
        .mockResolvedValueOnce('# File 2\n\n```ts\nconst x = 2;\n```');

      const settings: ICodeBlocksCheckerSettings = {
        markdownFiles: ['/path/to/file1.md', '/path/to/file2.md'],
        checkers: [],
      };

      const { files: result } = await checkCodeBlocks(settings);

      expect(vi.mocked(fs.readFile)).toHaveBeenCalledTimes(2);
      expect(vi.mocked(fs.readFile)).toHaveBeenCalledWith(
        '/path/to/file1.md',
        'utf-8',
      );
      expect(vi.mocked(fs.readFile)).toHaveBeenCalledWith(
        '/path/to/file2.md',
        'utf-8',
      );
      expect(result).toHaveLength(2);
      expect(result[0]).toBeInstanceOf(MarkdownFile);
      expect(result[1]).toBeInstanceOf(MarkdownFile);
    });

    it('should handle empty markdown files', async () => {
      expect.assertions(2);
      vi.mocked(fs.readFile).mockResolvedValue('');

      const settings: ICodeBlocksCheckerSettings = {
        markdownFiles: ['/path/to/empty.md'],
        checkers: [],
      };

      const { files: result } = await checkCodeBlocks(settings);

      expect(result).toHaveLength(1);
      if (result[0]) {
        expect(result[0].codeBlocks).toHaveLength(0);
      }
    });
  });

  describe('checker integration', () => {
    beforeEach(() => {
      vi.mocked(fs.readFile).mockResolvedValue(
        '# Test\n\n```typescript\nconst x = 42;\n```',
      );
    });

    it('should add all code blocks to each checker', async () => {
      expect.assertions(6);
      const checker1 = createMockChecker('Checker1');
      const checker2 = createMockChecker('Checker2');

      const settings: ICodeBlocksCheckerSettings = {
        markdownFiles: ['/path/to/test.md'],
        checkers: [checker1, checker2],
      };

      await checkCodeBlocks(settings);

      expect(checker1.addCodeBlock).toHaveBeenCalledTimes(1);
      expect(checker2.addCodeBlock).toHaveBeenCalledTimes(1);

      const firstCall = vi.mocked(checker1.addCodeBlock).mock.calls[0];
      if (firstCall) {
        const addedBlock = firstCall[0];
        expect(addedBlock).toBeInstanceOf(CodeBlock);
        expect(addedBlock.language).toBe('typescript');
        expect(addedBlock.content).toBe('const x = 42;');
      }
    });

    it('should add code blocks from multiple files to each checker', async () => {
      expect.assertions(3);
      vi.mocked(fs.readFile)
        .mockResolvedValueOnce('```js\ncode1\n```')
        .mockResolvedValueOnce('```ts\ncode2\n```');

      const checker = createMockChecker();
      const settings: ICodeBlocksCheckerSettings = {
        markdownFiles: ['/file1.md', '/file2.md'],
        checkers: [checker],
      };

      await checkCodeBlocks(settings);

      expect(checker.addCodeBlock).toHaveBeenCalledTimes(2);
      const calls = vi.mocked(checker.addCodeBlock).mock.calls;
      if (calls[0] && calls[1]) {
        expect(calls[0][0].content).toBe('code1');
        expect(calls[1][0].content).toBe('code2');
      }
    });

    it('should call checkAll on each checker', async () => {
      const checker1 = createMockChecker('Checker1');
      const checker2 = createMockChecker('Checker2');

      const settings: ICodeBlocksCheckerSettings = {
        markdownFiles: ['/path/to/test.md'],
        checkers: [checker1, checker2],
      };

      await checkCodeBlocks(settings);

      expect(checker1.checkAll).toHaveBeenCalledTimes(1);
      expect(checker2.checkAll).toHaveBeenCalledTimes(1);
    });

    it('should handle checkers with no code blocks to process', async () => {
      expect.assertions(4);
      vi.mocked(fs.readFile).mockResolvedValue('# No code blocks here');

      const checker = createMockChecker();
      const settings: ICodeBlocksCheckerSettings = {
        markdownFiles: ['/path/to/no-code.md'],
        checkers: [checker],
      };

      const { files: result } = await checkCodeBlocks(settings);

      expect(checker.addCodeBlock).not.toHaveBeenCalled();
      expect(checker.checkAll).toHaveBeenCalledTimes(1);
      expect(result).toHaveLength(1);
      if (result[0]) {
        expect(result[0].codeBlocks).toHaveLength(0);
      }
    });
  });

  describe('error handling', () => {
    it('should propagate file reading errors', async () => {
      const error = new Error('File not found');
      vi.mocked(fs.readFile).mockRejectedValue(error);

      const settings: ICodeBlocksCheckerSettings = {
        markdownFiles: ['/nonexistent.md'],
        checkers: [],
      };

      await expect(checkCodeBlocks(settings)).rejects.toThrow('File not found');
    });

    it('should propagate checker errors', async () => {
      vi.mocked(fs.readFile).mockResolvedValue('```js\ncode\n```');

      const failingChecker = createMockChecker();
      vi.mocked(failingChecker.checkAll).mockRejectedValue(
        new Error('Checker failed'),
      );

      const settings: ICodeBlocksCheckerSettings = {
        markdownFiles: ['/test.md'],
        checkers: [failingChecker],
      };

      await expect(checkCodeBlocks(settings)).rejects.toThrow('Checker failed');
    });
  });

  describe('return value', () => {
    it('should return MarkdownFile instances with processed code blocks', async () => {
      expect.assertions(5);
      const markdownContent = `# Test

\`\`\`typescript
const greeting = "Hello, World!";
console.log(greeting);
\`\`\`

Some text here.

\`\`\`javascript
function add(a, b) {
  return a + b;
}
\`\`\``;

      vi.mocked(fs.readFile).mockResolvedValue(markdownContent);

      const checker = createMockChecker();
      const settings: ICodeBlocksCheckerSettings = {
        markdownFiles: ['/complex.md'],
        checkers: [checker],
      };

      const { files: result } = await checkCodeBlocks(settings);

      expect(result).toHaveLength(1);
      const markdownFile = result[0];
      if (markdownFile) {
        expect(markdownFile).toBeInstanceOf(MarkdownFile);
        expect(markdownFile.codeBlocks).toHaveLength(2);
        if (markdownFile.codeBlocks[0] && markdownFile.codeBlocks[1]) {
          expect(markdownFile.codeBlocks[0].language).toBe('typescript');
          expect(markdownFile.codeBlocks[1].language).toBe('javascript');
        }
      }
    });

    it('should maintain file path information in returned MarkdownFile instances', async () => {
      expect.assertions(1);
      vi.mocked(fs.readFile).mockResolvedValue('```js\ntest\n```');

      const filePath = '/path/to/specific/file.md';
      const settings: ICodeBlocksCheckerSettings = {
        markdownFiles: [filePath],
        checkers: [],
      };

      const { files } = await checkCodeBlocks(settings);

      if (files[0] && files[0].codeBlocks[0]) {
        expect(files[0].codeBlocks[0].filePath).toBe(filePath);
      }
    });
  });

  describe('execution order', () => {
    it('should process files, then add blocks to checkers, then run checks', async () => {
      const executionOrder: string[] = [];

      vi.mocked(fs.readFile).mockImplementation(() => {
        executionOrder.push('readFile');
        return Promise.resolve('```js\ncode\n```');
      });

      const checker = createMockChecker();
      vi.mocked(checker.addCodeBlock).mockImplementation(() => {
        executionOrder.push('addCodeBlock');
      });
      vi.mocked(checker.checkAll).mockImplementation(() => {
        executionOrder.push('checkAll');
        return Promise.resolve();
      });

      const settings: ICodeBlocksCheckerSettings = {
        markdownFiles: ['/test.md'],
        checkers: [checker],
      };

      await checkCodeBlocks(settings);

      expect(executionOrder).toEqual(['readFile', 'addCodeBlock', 'checkAll']);
    });
  });
});
