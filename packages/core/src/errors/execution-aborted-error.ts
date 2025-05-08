import { HassBlocksError } from './hass-blocks-error.ts';

/**
 * @public
 *
 * Blocks can throw this error at any time to abort the currently running
 * execution sequence
 */
export class ExecutionAbortedError extends HassBlocksError {
  public constructor(name: string) {
    super(`Execution '${name}' was aborted`);
  }
}
