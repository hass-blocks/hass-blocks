import type { BaseEvent } from './base-event.ts';

/**
 * Fired during the startup of Home Assistant, just before homeassistant_started
 *
 * @public
 */
export type HomeAssistantStartEvent = BaseEvent<'homeassistant_start'>;
