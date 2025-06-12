import type { Command } from './command.ts';

/**
 * The message sent to the server when the user wishes to subscribe
 * to a trigger of some kind
 *
 * @public
 */
export interface SubscribeToTriggerMessage extends Command {
  /**
   * The type of command
   */
  type: 'subscribe_trigger';

  /**
   * An object containing the details of the trigger see {@link https://www.home-assistant.io/docs/automation/trigger/}
   */
  trigger: Record<string, unknown>;
}
