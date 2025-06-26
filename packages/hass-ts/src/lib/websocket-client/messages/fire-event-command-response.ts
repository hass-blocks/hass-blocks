import type { Context } from '@types';

/**
 * Response returned when firing an event on the Home Assistant event bus
 *
 * @public
 */
export interface FireEventCommandResponse {
  /**
   * Context associated with the event
   */
  context: Context;
}
