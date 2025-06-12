import type { BaseEvent } from './base-event.ts';

/**
 * This event is fired when an automation is triggered.
 *
 * @public
 */
export type AutomationTriggeredEvent = BaseEvent<
  'automation_triggered',
  {
    /**
     * The name of the automation.
     */
    name: string;
    /**
     * The identifier of the automation.
     */
    entity_id: string;
  }
>;
