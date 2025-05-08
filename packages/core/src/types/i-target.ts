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
}
