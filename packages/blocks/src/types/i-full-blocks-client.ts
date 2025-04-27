import { IBlock } from './i-block.ts';
import { IHass } from './i-hass.ts';

/**
 * @public
 *
 * The full version of the blocks client - only available to plugins
 */
export interface IFullBlocksClient extends IHass {
  /**
   * Reload the home assistant state cache
   */
  loadStates(): Promise<void>;

  /**
   * Register a trigger with Home Assistant
   *
   * @param trigger - the trigger details - see {@link https://www.home-assistant.io/docs/automation/trigger/} for more details
   * @param callback - callback that will be executed when the trigger fires
   */
  registerTrigger(
    trigger: Record<string, unknown>,
    callback: (event: unknown) => void | Promise<void>,
  ): Promise<void>;

  /**
   * Get a list of automations currently registered
   */
  getAutomations(): IBlock<unknown, unknown>[];

  /**
   * Register an automation
   */
  registerAutomation(automation: IBlock<unknown, unknown>): Promise<void>;
}
