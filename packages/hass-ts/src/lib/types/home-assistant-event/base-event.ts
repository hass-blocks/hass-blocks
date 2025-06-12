import type { Context } from '../context.ts';

/**
 * The shared properties present on any events fired on the Home Assistant event bus
 *
 * @public
 */
export interface BaseEvent<TType extends string, TData = never> {
  /**
   * Data associated with this specific event
   */
  data: TData;
  /**
   * Type of the event. Example: call_service
   */
  event_type: TType;
  /**
   * When the event was fired. Example: 2022-01-28T12:19:53.736380+00:00.
   */
  time_fired: string;

  /**
   * Origin of the event. REMOTE (coming in from the API, e.g. a webhook) or LOCAL (everything else).
   */
  origin: 'REMOTE' | 'LOCAL';

  /**
   * Context associated with the event
   */
  context: Context;
}
