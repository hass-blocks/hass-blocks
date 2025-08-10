import type { ITargetIds } from './i-target-ids.ts';
import type { IFullBlocksClient } from './i-full-blocks-client.ts';

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
  initialise(hass: IFullBlocksClient): Promise<void>;

  /**
   * Render a string version of this target
   */
  toString(): string;
}
