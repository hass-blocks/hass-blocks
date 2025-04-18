import { HassLegoError } from "./hass-lego-error.ts";

/**
 * @public
 */
export class ExecutionAbortedError extends HassLegoError {
  public constructor(name: string) {
    super(`Execution '${name}' was aborted`);
  }
}
