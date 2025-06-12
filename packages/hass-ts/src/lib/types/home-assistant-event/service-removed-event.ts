import type { BaseEvent } from './base-event.ts';

/**
 * This event is fired when a state has changed. It contains the entity identifier and both
 * the new_state and old_state of the entity as state objects.
 *
 * @public
 */
export type ServiceRemovedEvent = BaseEvent<
  'service_removed',
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
