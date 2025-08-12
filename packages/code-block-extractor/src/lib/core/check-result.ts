/**
 * Represents a successful check result.
 */
export interface ICheckResultSuccess {
  success: true;
}

/**
 * Represents a failed check result.
 */
export interface ICheckResultFailure {
  success: false;
  message: string;
}

/**
 * Union type representing the result of a code block check.
 */
export type ICheckResult = ICheckResultSuccess | ICheckResultFailure;
