import type { BaseEvent } from './base-event.ts';

/**
 * This event is fired when the core configuration is updated, for example when the location has been changed.
 *
 * @public
 */
export type CoreConfigUpdatedEvent = BaseEvent<'core_config_updated'>;
