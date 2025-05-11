/**
 * @public
 *
 * Base class for all errors thrown by this framework
 */
export class HassBlocksError extends Error {
  constructor(message: string, cause?: unknown) {
    super(message, { cause });
  }
}
