import { trigger } from '@hass-blocks/core';
import { removeUndefined } from '@utils';

/**
 * @public
 *
 * A Home Assistant context
 */
export interface Context {
  /**
   * The user ID that triggered the event
   */
  user_id?: string | string[];

  /**
   * The event id
   */
  id?: string | string[];

  /**
   * The context parent
   */
  parent_id?: string | string[];
}

/**
 * @public
 *
 * Triggered when a specific event is fired on the Home Assistant event bus.
 * See {@link https://www.home-assistant.io/docs/configuration/events/}
 *
 * @param event - Details of the event
 */
export const eventIsFired = (event: {
  /**
   * The type of
   */
  type: string[];
  data?: Record<string, unknown>;
  context?: Context;
  name?: string;
}) => {
  return trigger({
    name: `When event ${event.type.join(' ')} is fired`,
    trigger: removeUndefined({
      platform: 'event',
      event_data: event.data,
      event_context: event.context,
      event_type: event.type,
    }),
  });
};
