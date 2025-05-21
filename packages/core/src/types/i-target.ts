import { AssertionError } from '../errors/assertion-error.ts';
import type { ITargetIds } from './i-target-ids.ts';
import type { IFullBlocksClient } from './i-full-blocks-client.ts';
import type { IMQTTConnection } from '@hass-blocks/hass-mqtt';

/**
 * @public
 *
 * Anything that can be a target for a service call
 */
export interface ITarget {
  /**
   * The ids that will actually be supplied to the service call
   */
  targetIds: ITargetIds;
  /**
   *
   * Called by the framework to validate that this target exists
   * and is operational
   * @param hass - an initialised Home Assistant instance
   * @param mqtt - an initialised connection to the Home Assistant MQTT broker
   */
  initialise(hass: IFullBlocksClient, mqtt: IMQTTConnection): Promise<void>;
}

/**
 * @public
 *
 * Will throw an error if the supplied target doesn't provide
 * entity ids
 *
 * @param target - A home assistant target
 */
export const assertTargetHasEntityIds: (
  target: ITarget,
) => asserts target is ITarget & {
  targetIds: ITarget['targetIds'] & { entity_id: string[] };
} = (target) => {
  if (!target.targetIds) {
    throw new AssertionError(`Target must have entity ids`);
  }
};
