import { AssertionError } from '../errors/assertion-error.ts';
import type { IHass } from './i-hass.ts';
import type { ITargetIds } from './i-target-ids.ts';

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
   */
  validate(hass: IHass): Promise<void>;

  /**
   * Entity ids supplied by this target
   */
  entityIds: string[];

  /**
   * Device ids supplied by the target
   */
  deviceIds: string[];

  /**
   * Area ids supplied by the target
   */
  areaIds: string[];
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
