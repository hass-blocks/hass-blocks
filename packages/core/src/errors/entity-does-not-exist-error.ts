import { HassBlocksError } from './hass-blocks-error.ts';

/**
 * @public
 */
export class EntityDoesNotExistError extends HassBlocksError {
  public constructor(id: string) {
    super(`Entity '${id}' does not exist`);
  }
}
