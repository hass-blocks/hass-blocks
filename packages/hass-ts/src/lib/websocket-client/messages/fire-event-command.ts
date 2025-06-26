import type { Command } from './command.ts';

/**
 * Websocket command to fire an event on the Home Assistant event bus
 *
 * @public
 */
export interface FireEventCommand extends Command {
  /**
   * Type of command on the Websocket API
   */
  type: 'fire_event';

  /**
   * Type of event
   */
  event_type: string;

  /**
   * Data associated with the event (optional)
   */
  event_data?: Record<string, unknown> | undefined;
}
