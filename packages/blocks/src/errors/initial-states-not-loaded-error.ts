import { HassBlocksError } from './hass-blocks-error.ts';

/**
 * @public
 */
export class InitialStatesNotLoadedError extends HassBlocksError {
  public constructor() {
    super('Initial states were not loaded!');
  }
}
