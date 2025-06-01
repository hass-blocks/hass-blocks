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

  currentState: HassEntity;
}
