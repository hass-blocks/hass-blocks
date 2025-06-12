import type { BaseEvent } from './base-event.ts';

/**
 * Fired during the startup of Home Assistant, after homeassistant_start
 *
 * @public
 */
export type HomeAssistantStartedEvent = BaseEvent<'homeassistant_started'>;
