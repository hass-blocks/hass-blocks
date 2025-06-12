import type { BaseEvent } from './base-event.ts';

/**
 * Fired during the shutdown of Home Assistant, after homeassistant_stop but before homeassistant_close
 *
 * @public
 */
export type HomeAssistantFinalWriteEvent =
  BaseEvent<'homeassistant_final_write'>;
