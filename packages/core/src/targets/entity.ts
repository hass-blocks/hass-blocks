import type { IEntity, IFullBlocksClient } from '@types';

import { EntityDoesNotExistError } from '@errors';
import type { IMQTTConnection } from '@hass-blocks/hass-mqtt';

/**
 * @public
 *
 * An entity id
 */

export class Entity<I extends `${string}.${string}`> implements IEntity<I> {
  public constructor(private theId: I) {}

  get targetIds() {
    return {
      entity_id: [this.theId],
    };
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public async initialise(
    hass: IFullBlocksClient,
    _mqtt: IMQTTConnection,
  ): Promise<void> {
    try {
      hass.getState(this.theId);
    } catch (error) {
      EntityDoesNotExistError.RethrowWithNewPath(error, this.theId);
    }
  }
}

/**
 * @public
 *
 * An entity target
 *
 * @param targets - One or more entity or other targets
 */
export const entity = <I extends `${string}.${string}`>(id: I): IEntity<I> => {
  return new Entity(id);
};
