import { IBlock } from './i-block.ts';

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
  registerAutomation(automation: IBlock<unknown, unknown>): Promise<void>;
}
