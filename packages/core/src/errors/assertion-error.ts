import { HassBlocksError } from './hass-blocks-error.ts';

export class AssertionError extends HassBlocksError {
  public constructor(details: string) {
    super(details);
  }
}
