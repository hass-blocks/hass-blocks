import type { BaseEvent } from './base-event.ts';

/**
 * This event is fired when an service action is performed
 *
 * @public
 */
export type CallServiceEvent = BaseEvent<
  'call_service',
  {
    /**
     * Domain of the action. Example: light.
     */
    domain: string;
    /**
     * The service action that is performed. Example: turn_on
     */
    service: string;

    /**
     * Dictionary with the call parameters. Example: \{ 'brightness': 120 \}.
     */
    service_data: Record<string, unknown>;
    /**
     * String with a unique call id. Example: 23123-4.
     */
    service_call_id: string;
  }
>;
