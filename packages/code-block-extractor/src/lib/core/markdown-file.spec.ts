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
      expect(blocks[0]).toBeInstanceOf(CodeBlock);
      expect(blocks[0]).toMatchObject({
        content: 'const message = "hello world";\nconsole.log(message);',
        filePath: '/docs/example.md',
        startLine: 5,
        endLine: 7,
        language: 'typescript',
      });
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
      expect(blocks[0]).toBeInstanceOf(CodeBlock);
      expect(blocks[0]).toMatchObject({
        content: 'interface User {\n  name: string;\n}',
        filePath: '/src/types.md',
        startLine: 3,
        endLine: 6,
        language: 'ts',
      });
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
      expect(blocks[0]).toBeInstanceOf(CodeBlock);
      expect(blocks[0]).toMatchObject({
        content: 'const user = { name: "John" };',
        filePath: '/docs/js-example.md',
        language: 'javascript',
      });
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
      expect(blocks[0]).toBeInstanceOf(CodeBlock);
      expect(blocks[0]).toMatchObject({
        content: 'const user = { name: "John" };',
        filePath: '/docs/js-example.md',
        language: 'js',
      });
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

      expect(blocks[0]).toBeInstanceOf(CodeBlock);
      expect(blocks[0]).toMatchObject({
        content: 'def hello():\n    print("world")',
        filePath: '/docs/multi-lang.md',
        language: 'python',
      });

      expect(blocks[1]).toBeInstanceOf(CodeBlock);
      expect(blocks[1]).toMatchObject({
        content: '{\n  "name": "example"\n}',
        filePath: '/docs/multi-lang.md',
        language: 'json',
      });
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

      expect(blocks[0]).toBeInstanceOf(CodeBlock);
      expect(blocks[0]).toMatchObject({
        content: 'type User = { name: string };',
        filePath: '/docs/mixed.md',
        language: 'typescript',
      });

      expect(blocks[1]).toBeInstanceOf(CodeBlock);
      expect(blocks[1]).toMatchObject({
        content: 'const user = { name: "John" };',
        filePath: '/docs/mixed.md',
        language: 'javascript',
      });

      expect(blocks[2]).toBeInstanceOf(CodeBlock);
      expect(blocks[2]).toMatchObject({
        content: 'const x: number = 5;',
        filePath: '/docs/mixed.md',
        language: 'ts',
      });
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
      expect(blocks[0]).toBeInstanceOf(CodeBlock);
      expect(blocks[0]).toMatchObject({
        content: 'const x = 5;\nconst y = 10;',
        filePath: '/docs/no-lang.md',
        startLine: 3,
        endLine: 5,
        language: '',
      });
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

      expect(blocks[0]).toBeInstanceOf(CodeBlock);
      expect(blocks[0]).toMatchObject({
        filePath: '/docs/api.md',
        content: `import { Client } from './client';

const client = new Client({
  url: 'http://localhost:3000'
});`,
        startLine: 8,
        endLine: 13,
      });

      expect(blocks[1]).toBeInstanceOf(CodeBlock);
      expect(blocks[1]).toMatchObject({
        filePath: '/docs/api.md',
      });

      expect(blocks[2]).toBeInstanceOf(CodeBlock);
      expect(blocks[2]).toMatchObject({
        filePath: '/docs/api.md',
      });

      expect(blocks[3]).toBeInstanceOf(CodeBlock);
      expect(blocks[3]).toMatchObject({
        filePath: '/docs/api.md',
        content: 'type Config = {\n  advanced: boolean;\n};',
        language: 'ts',
      });
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

      expect(blocks[0]).toMatchObject({
        filePath: '/docs/lines.md',
        startLine: 4,
        endLine: 6,
      });

      expect(blocks[1]).toMatchObject({
        filePath: '/docs/lines.md',
        startLine: 12,
        endLine: 14,
      });
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

      expect(blocks[0]).toBeInstanceOf(CodeBlock);
      expect(blocks[0]).toMatchObject({
        content: '',
        filePath: '/docs/empty.md',
        language: 'typescript',
      });

      expect(blocks[1]).toBeInstanceOf(CodeBlock);
      expect(blocks[1]).toMatchObject({
        content: '',
        filePath: '/docs/empty.md',
        language: 'javascript',
      });
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
      expect(blocks[0]).toBeInstanceOf(CodeBlock);
      expect(blocks[0]).toMatchObject({
        content: 'const realCode = true;',
        filePath: '/docs/inline.md',
        language: 'typescript',
      });
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
