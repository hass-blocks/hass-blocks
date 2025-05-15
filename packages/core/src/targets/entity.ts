import type { IHass, IEntity, IFullBlocksClient } from '@types';

import { EntityDoesNotExistError } from '@errors';

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

  public async initialise(hass: IFullBlocksClient): Promise<void> {
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
