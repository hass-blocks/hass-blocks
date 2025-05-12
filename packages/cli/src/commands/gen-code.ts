import { getConfig, initialiseHass } from '@hass-blocks/hass-ts';
import { generateEntities } from '@lib/codegen/generate-entities/generate-entities.ts';
import { generateServiceCalls } from '@lib/codegen/generate-service-calls/generate-service-calls.ts';
import { generateOutputBarrel } from '@lib/codegen/utils/generate-output-barrel.ts';

import { Command, Option } from 'clipanion';

export default class GenCodeCommand extends Command {
  folder = Option.String();

  override async execute(): Promise<void> {
    const client = await initialiseHass(getConfig());
    try {
      const states = await client.getStates();
      const services = await client.getServices();
      await generateServiceCalls(this.folder, services);
      await generateEntities(this.folder, states);
      await generateOutputBarrel(this.folder);
    } finally {
      await client.close();
    }
  }

  static override paths = [[`gen-code`]];
}
