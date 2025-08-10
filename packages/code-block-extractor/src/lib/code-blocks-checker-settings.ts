import { Checker } from './checker.ts';

/**
 * Configuration settings for the code blocks checker.
 */
export interface ICodeBlocksCheckerSettings {
  /** Array of paths to markdown files to process */
  markdownFiles: string[];
  /** Array of checkers to run against the code blocks */
  checkers: Checker[];
}
