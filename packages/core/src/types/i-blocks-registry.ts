import type { IMutableNode } from './i-mutable-node.ts';
import type { ITriggerable } from './i-triggerable.ts';

/**
 * @public
 *
 * A blocks registery object - this is where you start registering automations
 */
export interface IBlocksRegistry {
  /**
   * Register an automation with Hass Blocks
   *
   * @param automation - The automation to be registered
   */
  registerAutomation(
    ...automation: (IMutableNode & ITriggerable)[]
  ): Promise<void>;
}
