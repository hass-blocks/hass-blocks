import { CodeBlock } from './code-block.ts';

/**
 * Interface for preprocessing code blocks before they are checked.
 * Preprocessors can transform code blocks in various ways such as
 * formatting, adding comments, or modifying content.
 */
export interface IPreprocessor {
  /**
   * The name of the preprocessor.
   */
  readonly name: string;

  /**
   * Preprocesses a code block and returns the processed version.
   * @param codeBlock The code block to preprocess
   * @returns A promise that resolves to the processed code block
   */
  preprocess(codeBlock: CodeBlock): Promise<CodeBlock>;
}
