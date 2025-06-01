import { getConfig, initialiseHass } from '@hass-blocks/hass-ts';
import { generateFiles } from '@lib/codegen/generate-files.ts';
import { generateOutputBarrel } from '@lib/codegen/utils/generate-output-barrel.ts';

import { Command, Option } from 'clipanion';

export default class GenCodeCommand extends Command {
  folder = Option.String();

  override async execute(): Promise<void> {
    const client = await initialiseHass(getConfig());
    try {
      const states = await client.getStates();
      const services = await client.getServices();
      await generateFiles(this.folder, services, states);
      await generateOutputBarrel(this.folder);
    } finally {
      await client.close();
    }
  }

  static override paths = [[`gen-code`]];
}
