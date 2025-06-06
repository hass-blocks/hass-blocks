import type { IHass } from './i-hass.ts';
import type { Event } from '@hass-blocks/hass-ts';
import type { IMutableNode } from './i-mutable-node.ts';
import type { ITriggerable } from './i-triggerable.ts';
import type { IBlocksNode } from './i-blocks-node.ts';
import type { ISerialisable } from './i-serialiseble.ts';

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
  getAutomations(): (IBlocksNode & ISerialisable)[];

  /**
   * Register an automation
   */
  registerAutomation(
    ...automation: (IMutableNode & ITriggerable)[]
  ): Promise<void>;

  /**
   * Register a callback that fires when a particular entity changes state
   *
   * @param id - The id to listen for
   * @param callback - Callback that will fire when the state changess
   */
  onStateChanged(id: string, callback: (event: Event) => void): Promise<void>;
}
