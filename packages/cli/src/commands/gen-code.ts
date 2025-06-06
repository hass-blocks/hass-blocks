import {
  getConfig,
  initialiseHass,
  type IHomeAssistant,
} from '@hass-blocks/hass-ts';
import { generateFiles } from '@lib/codegen/generate-files.ts';
import { generateOutputBarrel } from '@lib/codegen/utils/generate-output-barrel.ts';

import { Command, Option } from 'clipanion';

const doCodegen = async (client: IHomeAssistant, folder: string) => {
  const states = await client.getStates();
  const services = await client.getServices();
  const areas = await client.getAreas();
  await generateFiles(folder, services, states, areas);
  await generateOutputBarrel(folder);
};

export default class GenCodeCommand extends Command {
  folder = Option.String();
  watch = Option.Boolean(
    'Stay connected to Home Assistant and regenerate when services and entities change',
  );

  override async execute(): Promise<void> {
    const client = await initialiseHass(getConfig());
    try {
      await doCodegen(client, this.folder);

      if (this.watch) {
        console.log('Watching Home Assistant for changes');
      }

      const regenerateEvents = [
        'homeassistant_start',
        'service_removed',
        'service_registered',
        'automation_reloaded',
        'component_loaded',
        'core_config_updated',
      ];

      client.subscribeToEvents(async (event) => {
        if (
          'event_type' in event &&
          regenerateEvents.includes(event.event_type)
        ) {
          await doCodegen(client, this.folder);
        }
      });
    } finally {
      await client.close();
    }
  }

  static override paths = [[`gen-code`]];
}
