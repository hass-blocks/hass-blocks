import { HassBlocksError } from './hass-blocks-error.ts';

/**
 * @public
 */
export class ExecutionAbortedError extends HassBlocksError {
  public constructor(name: string) {
    super(`Execution '${name}' was aborted`);
  }
}
