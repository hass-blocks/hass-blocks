import type { BaseEvent } from './base-event.ts';

/**
 * This event is fired when a script is run. A script can be invoked by a user or triggered by an automation.
 * The resulting changes can be tracked because all related events will share the same context as this event.
 *
 * @public
 */
export type ScriptStartedEvent = BaseEvent<
  'sript_started',
  {
    /**
     * Name of the script that was run.
     */
    name: string;
    /**
     * Identifier of the script that was run.
     */
    entity_id: string;
  }
>;
