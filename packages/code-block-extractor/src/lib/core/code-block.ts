import { ICheckResult, type ICheckResultFailure } from './check-result.ts';

/**
 * Represents a code block extracted from markdown files.
 */
export class CodeBlock {
  /**
   * The code content of the block.
   */
  readonly content: string;

  /**
   * The file path of the markdown file containing this code block.
   */
  readonly filePath: string;

  /**
   * The starting line number of the code block in the markdown file (1-based).
   */
  readonly startLine: number;

  /**
   * The ending line number of the code block in the markdown file (1-based).
   */
  readonly endLine: number;

  /**
   * The detected language of the code block.
   */
  readonly language: string;

  private readonly _checkResults: Map<string, ICheckResult> = new Map();

  constructor(
    content: string,
    filePath: string,
    startLine: number,
    endLine: number,
    language: string,
  ) {
    this.content = content;
    this.filePath = filePath;
    this.startLine = startLine;
    this.endLine = endLine;
    this.language = language;
  }

  /**
   * Stores a check result from a named checker.
   */
  storeCheckResult(checkerName: string, result: ICheckResult): void {
    this._checkResults.set(checkerName, result);
  }

  /**
   * Returns all check results.
   */
  get allCheckResults(): ReadonlyMap<string, ICheckResult> {
    return this._checkResults;
  }

  get hasErrors(): boolean {
    return this.failedCheckResults.size > 0;
  }

  /**
   * Returns only the failed check results.
   */
  get failedCheckResults(): ReadonlyMap<string, ICheckResultFailure> {
    const failedResults = new Map<string, ICheckResultFailure>();
    for (const [checkerName, result] of this._checkResults) {
      if (!result.success) {
        failedResults.set(checkerName, result);
      }
    }
    return failedResults;
  }
}
