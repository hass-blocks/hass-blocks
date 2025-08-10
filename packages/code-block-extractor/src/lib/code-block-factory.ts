import { CodeBlock } from './code-block.ts';

/**
 * Creates a CodeBlock instance based on the language.
 */
export function createCodeBlock(
  language: string,
  content: string,
  filePath: string,
  startLine: number,
  endLine: number,
): CodeBlock {
  return new CodeBlock(content, filePath, startLine, endLine, language);
}
