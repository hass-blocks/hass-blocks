import type { BaseEvent } from './base-event.ts';

/**
 * This event is fired when automations have been reloaded and thus might have changed.
 *
 * @public
 */
export type AutomationReloadedEvent = BaseEvent<'automation_reloaded'>;
