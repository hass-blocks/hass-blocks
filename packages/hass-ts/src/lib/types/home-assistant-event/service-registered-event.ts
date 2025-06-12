import type { BaseEvent } from './base-event.ts';

/**
 * This event is fired when a new service action has been registered within Home Assistant.
 *
 * @public
 */
export type ServiceRegisteredEvent = BaseEvent<
  'service_registered',
  {
    /**
     * The domain of the integration that offers this action. Example: light.
     */
    domain: string;
    /**
     * The name of the service action. Example: turn_on
     */
    service: string;
  }
>;
