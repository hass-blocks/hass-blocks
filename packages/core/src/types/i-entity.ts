import type { HassEntity } from './hass-events.ts';
import type { ITarget } from './i-target.ts';

/**
 * @public
 *
 * Any Home Assistant entity
 */
export interface IEntity<
  I extends `${string}.${string}` = `${string}.${string}`,
> extends ITarget {
  /**
   * The ids that will actually be supplied to the service call
   */
  targetIds: {
    entity_id: I[];
  };

  /**
   * If this entity has been initialised with a registered automation, this will return the current state
   * of the entity within Home Assistant
   */
  currentState: HassEntity;
}
