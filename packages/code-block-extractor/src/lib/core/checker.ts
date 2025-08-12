import { CodeBlock } from './code-block.ts';
import { ICheckResult } from './check-result.ts';
import { IPreprocessor } from './preprocessor.ts';

/**
 * Abstract base class for code block checkers.
 */
export abstract class Checker {
  private readonly _codeBlocks: CodeBlock[] = [];
  private readonly _name: string;
  private readonly _preprocessors: IPreprocessor[];

  constructor(name: string, preprocessors: IPreprocessor[] = []) {
    this._name = name;
    this._preprocessors = preprocessors;
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
   * @param codeBlock The code block to add
   */
  addCodeBlock(codeBlock: CodeBlock): void {
    if (this.canCheck(codeBlock)) {
      this._codeBlocks.push(codeBlock);
    }
  }

  /**
   * Checks all stored code blocks and stores the results.
   * @throws Error if checking any code block fails
   */
  async checkAll(): Promise<void> {
    for (const codeBlock of this._codeBlocks) {
      try {
        const result = await this.check(codeBlock);
        codeBlock.storeCheckResult(this._name, result);
      } catch (error) {
        const errorMessage =
          error instanceof Error ? error.message : 'Unknown error';
        const failureResult: ICheckResult = {
          success: false,
          message: `Failed to check code block: ${errorMessage}`,
        };
        codeBlock.storeCheckResult(this._name, failureResult);
      }
    }
  }

  /**
   * Determines if this checker can check the given code block.
   * @param codeBlock The code block to evaluate
   * @returns True if this checker can process the code block
   */
  abstract canCheck(codeBlock: CodeBlock): boolean;

  /**
   * Checks a single code block and returns the result.
   * Applies all preprocessors in sequence before calling the concrete check implementation.
   * @param codeBlock The code block to check
   * @returns A promise that resolves to the check result
   */
  async check(codeBlock: CodeBlock): Promise<ICheckResult> {
    let processedBlock = codeBlock;

    for (const preprocessor of this._preprocessors) {
      processedBlock = await preprocessor.preprocess(processedBlock);
    }

    return this.performCheck(processedBlock);
  }

  /**
   * Performs the actual check on the (potentially preprocessed) code block.
   * Subclasses should implement this method instead of check.
   * @param codeBlock The preprocessed code block to check
   * @returns A promise that resolves to the check result
   */
  protected abstract performCheck(codeBlock: CodeBlock): Promise<ICheckResult>;
}
