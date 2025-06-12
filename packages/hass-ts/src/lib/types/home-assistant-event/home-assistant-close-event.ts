import type { BaseEvent } from './base-event.ts';

/**
 * Fired during the shutdown of Home Assistant, after homeassistant_stop and homeassistant_final_write
 *
 * @public
 */
export type HomeAssistantCloseEvent = BaseEvent<'homeassistant_close'>;
