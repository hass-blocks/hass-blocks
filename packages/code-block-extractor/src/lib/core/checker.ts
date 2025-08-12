import { CodeBlock } from './code-block.ts';
import { ICheckResult } from './check-result.ts';

/**
 * Abstract base class for code block checkers.
 */
export abstract class Checker {
  private readonly _codeBlocks: CodeBlock[] = [];
  private readonly _name: string;

  constructor(name: string) {
    this._name = name;
  }

  /**
   * Returns the name of this checker.
   */
  get name(): string {
    return this._name;
  }

  /**
   * Returns the code blocks that can be checked by this checker.
   */
  get codeBlocks(): readonly CodeBlock[] {
    return this._codeBlocks;
  }

  /**
   * Adds a code block to this checker if it can be checked.
   */
  addCodeBlock(codeBlock: CodeBlock): void {
    if (this.canCheck(codeBlock)) {
      this._codeBlocks.push(codeBlock);
    }
  }

  /**
   * Checks all stored code blocks and stores the results.
   */
  async checkAll(): Promise<void> {
    for (const codeBlock of this._codeBlocks) {
      const result = await this.check(codeBlock);
      codeBlock.storeCheckResult(this._name, result);
    }
  }

  /**
   * Determines if this checker can check the given code block.
   */
  abstract canCheck(codeBlock: CodeBlock): boolean;

  /**
   * Checks a single code block and returns the result.
   */
  abstract check(codeBlock: CodeBlock): Promise<ICheckResult>;
}
