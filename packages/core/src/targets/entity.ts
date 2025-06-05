import type { HassEntity, IEntity, IFullBlocksClient } from '@types';

import { EntityDoesNotExistError } from '@errors';
import type { IMQTTConnection } from '@hass-blocks/hass-mqtt';

/**
 * @public
 *
 * An entity id
 */

export class Entity<I extends `${string}.${string}`> implements IEntity<I> {
  public readonly name;

  private _currentState: HassEntity | undefined;

  public constructor(
    private theId: I,
    friendlyName?: string,
  ) {
    this.name = friendlyName ?? theId;
  }

  get currentState(): HassEntity {
    if (!this._currentState) {
      throw new Error(
        "Entity has not been initialised! Put it in the target array of any block that is attached to a registered automation and you'll be able to get its state",
      );
    }
    return this._currentState;
  }

  get targetIds() {
    return {
      entity_id: [this.theId],
    };
  }

  public toString() {
    return this.name;
  }

  public async initialise(
    hass: IFullBlocksClient,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _mqtt: IMQTTConnection,
  ): Promise<void> {
    try {
      this._currentState = hass.getEntity(this.theId);
      hass.onStateChanged(this.theId, (event) => {
        this._currentState = event.data.new_state;
      });
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
export const entity = <I extends `${string}.${string}`>(
  id: I,
  friendlyName?: string,
): IEntity<I> => {
  return new Entity(id, friendlyName);
};
