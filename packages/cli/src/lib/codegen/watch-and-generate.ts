import type { IHomeAssistant } from '@hass-blocks/hass-ts';
import { doCodegen } from './do-codegen.ts';

const EVENTS_TO_TRIGGER_REGENERATE = [
  'homeassistant_start',
  'service_removed',
  'service_registered',
  'automation_reloaded',
  'component_loaded',
  'core_config_updated',
];

export const watchAndGenerate = (client: IHomeAssistant, folder: string) => {
  console.log('Watching Home Assistant for changes');

  client.on(async (event) => {
    if (
      'event_type' in event &&
      EVENTS_TO_TRIGGER_REGENERATE.includes(event.event_type)
    ) {
      console.log(`Detected ${event} event...`);
      await doCodegen(client, folder);
    }
  });
};
