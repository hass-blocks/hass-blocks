import { afterEach, describe, expect, it, vi } from 'vitest';
import { MarkdownFile } from './markdown-file.ts';
import { CodeBlock } from './code-block.ts';

afterEach(() => {
  vi.resetAllMocks();
});

describe('MarkdownFile', () => {
  describe('constructor', () => {
    it('should accept markdown content and filePath parameters', () => {
      const markdownContent = '# Test\n\nSome content';
      const filePath = '/path/to/test.md';

      const extractor = new MarkdownFile(markdownContent, filePath);

      expect(extractor).toBeInstanceOf(MarkdownFile);
    });
  });

  describe('codeBlocks property', () => {
    it('should be a readonly property that returns an array', () => {
      const extractor = new MarkdownFile('', '/test.md');

      expect(Array.isArray(extractor.codeBlocks)).toBe(true);
    });

    it('should return empty array for empty markdown', () => {
      const extractor = new MarkdownFile('', '/test.md');

      expect(extractor.codeBlocks).toEqual([]);
    });

    it('should return empty array for markdown with no code blocks', () => {
      const markdown = `# Title

This is a paragraph with some text.

## Another heading

More text without any code blocks.

* List item 1
* List item 2`;

      const extractor = new MarkdownFile(markdown, '/docs/guide.md');

      expect(extractor.codeBlocks).toEqual([]);
    });

    it('should return CodeBlock instance for single typescript code block with correct filePath', () => {
      const markdown = `# Title

Some text before.

\`\`\`typescript
const message = "hello world";
console.log(message);
\`\`\`

Some text after.`;

      const filePath = '/docs/example.md';
      const extractor = new MarkdownFile(markdown, filePath);
      const blocks = extractor.codeBlocks;

      expect(blocks).toHaveLength(1);
      expect(blocks[0]!).toBeInstanceOf(CodeBlock);
      expect(blocks[0]!.content).toBe(
        'const message = "hello world";\nconsole.log(message);',
      );
      expect(blocks[0]!.filePath).toBe('/docs/example.md');
      expect(blocks[0]!.startLine).toBe(5);
      expect(blocks[0]!.endLine).toBe(7);
      expect(blocks[0]!.language).toBe('typescript');
    });

    it('should return CodeBlock instance for single ts code block with correct filePath', () => {
      const markdown = `# Title

\`\`\`ts
interface User {
  name: string;
}
\`\`\``;

      const filePath = '/src/types.md';
      const extractor = new MarkdownFile(markdown, filePath);
      const blocks = extractor.codeBlocks;

      expect(blocks).toHaveLength(1);
      expect(blocks[0]!).toBeInstanceOf(CodeBlock);
      expect(blocks[0]!.content).toBe('interface User {\n  name: string;\n}');
      expect(blocks[0]!.filePath).toBe('/src/types.md');
      expect(blocks[0]!.startLine).toBe(3);
      expect(blocks[0]!.endLine).toBe(6);
      expect(blocks[0]!.language).toBe('ts');
    });

    it('should return CodeBlock instance for javascript language', () => {
      const markdown = `# Examples

\`\`\`javascript
const user = { name: "John" };
\`\`\``;

      const filePath = '/docs/js-example.md';
      const extractor = new MarkdownFile(markdown, filePath);
      const blocks = extractor.codeBlocks;

      expect(blocks).toHaveLength(1);
      expect(blocks[0]!).toBeInstanceOf(CodeBlock);
      expect(blocks[0]!.filePath).toBe('/docs/js-example.md');
      expect(blocks[0]!.content).toBe('const user = { name: "John" };');
      expect(blocks[0]!.language).toBe('javascript');
    });

    it('should return CodeBlock instance for js language', () => {
      const markdown = `# Examples

\`\`\`js
const user = { name: "John" };
\`\`\``;

      const filePath = '/docs/js-example.md';
      const extractor = new MarkdownFile(markdown, filePath);
      const blocks = extractor.codeBlocks;

      expect(blocks).toHaveLength(1);
      expect(blocks[0]!).toBeInstanceOf(CodeBlock);
      expect(blocks[0]!.filePath).toBe('/docs/js-example.md');
      expect(blocks[0]!.content).toBe('const user = { name: "John" };');
      expect(blocks[0]!.language).toBe('js');
    });

    it('should return CodeBlock instances for different languages with correct filePath', () => {
      const markdown = `# Examples

\`\`\`python
def hello():
    print("world")
\`\`\`

\`\`\`json
{
  "name": "example"
}
\`\`\``;

      const filePath = '/docs/multi-lang.md';
      const extractor = new MarkdownFile(markdown, filePath);
      const blocks = extractor.codeBlocks;

      expect(blocks).toHaveLength(2);

      expect(blocks[0]!).toBeInstanceOf(CodeBlock);
      expect(blocks[0]!.filePath).toBe('/docs/multi-lang.md');
      expect(blocks[0]!.content).toBe('def hello():\n    print("world")');
      expect(blocks[0]!.language).toBe('python');

      expect(blocks[1]!).toBeInstanceOf(CodeBlock);
      expect(blocks[1]!.filePath).toBe('/docs/multi-lang.md');
      expect(blocks[1]!.content).toBe('{\n  "name": "example"\n}');
      expect(blocks[1]!.language).toBe('json');
    });

    it('should return CodeBlock instances for mixed code blocks', () => {
      const markdown = `# Mixed Examples

TypeScript:
\`\`\`typescript
type User = { name: string };
\`\`\`

JavaScript:
\`\`\`javascript
const user = { name: "John" };
\`\`\`

TypeScript (ts):
\`\`\`ts
const x: number = 5;
\`\`\``;

      const filePath = '/docs/mixed.md';
      const extractor = new MarkdownFile(markdown, filePath);
      const blocks = extractor.codeBlocks;

      expect(blocks).toHaveLength(3);

      expect(blocks[0]!).toBeInstanceOf(CodeBlock);
      expect(blocks[0]!.filePath).toBe('/docs/mixed.md');
      expect(blocks[0]!.content).toBe('type User = { name: string };');
      expect(blocks[0]!.language).toBe('typescript');

      expect(blocks[1]!).toBeInstanceOf(CodeBlock);
      expect(blocks[1]!.filePath).toBe('/docs/mixed.md');
      expect(blocks[1]!.content).toBe('const user = { name: "John" };');
      expect(blocks[1]!.language).toBe('javascript');

      expect(blocks[2]!).toBeInstanceOf(CodeBlock);
      expect(blocks[2]!.filePath).toBe('/docs/mixed.md');
      expect(blocks[2]!.content).toBe('const x: number = 5;');
      expect(blocks[2]!.language).toBe('ts');
    });

    it('should return CodeBlock instance for code blocks without language specification', () => {
      const markdown = `# Test

\`\`\`
const x = 5;
const y = 10;
\`\`\``;

      const filePath = '/docs/no-lang.md';
      const extractor = new MarkdownFile(markdown, filePath);
      const blocks = extractor.codeBlocks;

      expect(blocks).toHaveLength(1);
      expect(blocks[0]!).toBeInstanceOf(CodeBlock);
      expect(blocks[0]!.content).toBe('const x = 5;\nconst y = 10;');
      expect(blocks[0]!.filePath).toBe('/docs/no-lang.md');
      expect(blocks[0]!.startLine).toBe(3);
      expect(blocks[0]!.endLine).toBe(5);
      expect(blocks[0]!.language).toBe('');
    });

    it('should handle complex markdown with mixed content and multiple code blocks', () => {
      const markdown = `# API Documentation

## Overview
This is a comprehensive guide.

### Code Example 1
Here's how to initialize:

\`\`\`typescript
import { Client } from './client';

const client = new Client({
  url: 'http://localhost:3000'
});
\`\`\`

> **Note**: Make sure the server is running.

### Configuration

You can also use a config file:

\`\`\`json
{
  "client": {
    "url": "http://localhost:3000",
    "timeout": 5000
  }
}
\`\`\`

### Usage

Basic usage example:

\`\`\`javascript
client.connect()
  .then(() => console.log('Connected'))
  .catch(err => console.error(err));
\`\`\`

## Advanced Features

For advanced users, you can use:

\`\`\`ts
type Config = {
  advanced: boolean;
};
\`\`\`

That's all for now!`;

      const filePath = '/docs/api.md';
      const extractor = new MarkdownFile(markdown, filePath);
      const blocks = extractor.codeBlocks;

      expect(blocks).toHaveLength(4);

      expect(blocks[0]!).toBeInstanceOf(CodeBlock);
      expect(blocks[0]!.filePath).toBe('/docs/api.md');
      expect(blocks[0]!.content).toBe(`import { Client } from './client';

const client = new Client({
  url: 'http://localhost:3000'
});`);
      expect(blocks[0]!.startLine).toBe(8);
      expect(blocks[0]!.endLine).toBe(13);

      expect(blocks[1]!).toBeInstanceOf(CodeBlock);
      expect(blocks[1]!.filePath).toBe('/docs/api.md');

      expect(blocks[2]!).toBeInstanceOf(CodeBlock);
      expect(blocks[2]!.filePath).toBe('/docs/api.md');

      expect(blocks[3]!).toBeInstanceOf(CodeBlock);
      expect(blocks[3]!.filePath).toBe('/docs/api.md');
      expect(blocks[3]!.content).toBe(
        'type Config = {\n  advanced: boolean;\n};',
      );
      expect(blocks[3]!.language).toBe('ts');
    });

    it('should correctly calculate line numbers for multiple blocks', () => {
      const markdown = `Line 1
Line 2

\`\`\`typescript
// This starts at line 4
const first = true;
\`\`\`

Line after first block
Another line

\`\`\`javascript
// This starts at line 11  
const second = false;
\`\`\`

Final line`;

      const filePath = '/docs/lines.md';
      const extractor = new MarkdownFile(markdown, filePath);
      const blocks = extractor.codeBlocks;

      expect(blocks).toHaveLength(2);

      expect(blocks[0]!.filePath).toBe('/docs/lines.md');
      expect(blocks[0]!.startLine).toBe(4);
      expect(blocks[0]!.endLine).toBe(6);

      expect(blocks[1]!.filePath).toBe('/docs/lines.md');
      expect(blocks[1]!.startLine).toBe(12);
      expect(blocks[1]!.endLine).toBe(14);
    });

    it('should handle empty code blocks correctly', () => {
      const markdown = `# Test

\`\`\`typescript
\`\`\`

\`\`\`javascript

\`\`\``;

      const filePath = '/docs/empty.md';
      const extractor = new MarkdownFile(markdown, filePath);
      const blocks = extractor.codeBlocks;

      expect(blocks).toHaveLength(2);

      expect(blocks[0]!).toBeInstanceOf(CodeBlock);
      expect(blocks[0]!.content).toBe('');
      expect(blocks[0]!.filePath).toBe('/docs/empty.md');
      expect(blocks[0]!.language).toBe('typescript');

      expect(blocks[1]!).toBeInstanceOf(CodeBlock);
      expect(blocks[1]!.content).toBe('');
      expect(blocks[1]!.filePath).toBe('/docs/empty.md');
      expect(blocks[1]!.language).toBe('javascript');
    });

    it('should ignore inline code and only extract fenced code blocks', () => {
      const markdown = `# Test

This has \`inline code\` in it.

And also a \`const variable = "value"\` inline.

But this is a real code block:

\`\`\`typescript
const realCode = true;
\`\`\`

More \`inline\` code here.`;

      const filePath = '/docs/inline.md';
      const extractor = new MarkdownFile(markdown, filePath);
      const blocks = extractor.codeBlocks;

      expect(blocks).toHaveLength(1);
      expect(blocks[0]!).toBeInstanceOf(CodeBlock);
      expect(blocks[0]!.content).toBe('const realCode = true;');
      expect(blocks[0]!.filePath).toBe('/docs/inline.md');
      expect(blocks[0]!.language).toBe('typescript');
    });

    it('should verify that all instances have the correct filePath from constructor', () => {
      const markdown = `# Test

\`\`\`typescript
const ts = true;
\`\`\`

\`\`\`javascript
const js = true;
\`\`\`

\`\`\`python
py = True
\`\`\``;

      const filePath = '/specific/path/test.md';
      const extractor = new MarkdownFile(markdown, filePath);
      const blocks = extractor.codeBlocks;

      expect(blocks).toHaveLength(3);

      blocks.forEach((block: CodeBlock) => {
        expect(block.filePath).toBe('/specific/path/test.md');
      });
    });

    it('should return CodeBlock instances for all languages using instanceof checks', () => {
      const markdown = `# Type Verification

\`\`\`typescript
const tsCode: string = "test";
\`\`\`

\`\`\`ts
type TsType = string;
\`\`\`

\`\`\`javascript
const jsCode = "test";
\`\`\`

\`\`\`js
const jsCode2 = "test";
\`\`\`

\`\`\`python
py_code = "test"
\`\`\`

\`\`\`json
{"test": true}
\`\`\`

\`\`\`
const noLang = "test";
\`\`\``;

      const filePath = '/docs/types.md';
      const extractor = new MarkdownFile(markdown, filePath);
      const blocks = extractor.codeBlocks;

      expect(blocks).toHaveLength(7);

      blocks.forEach((block) => {
        expect(block).toBeInstanceOf(CodeBlock);
      });
    });
  });
});
