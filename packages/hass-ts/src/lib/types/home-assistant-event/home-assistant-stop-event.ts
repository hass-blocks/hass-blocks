import type { BaseEvent } from './base-event.ts';

/**
 * Fired during the shutdown of Home Assistant, before homeassistant_final_write and then homeassistant_close
 *
 * @public
 */
export type HomeAssistantStopEvent = BaseEvent<'homeassistant_stop'>;
