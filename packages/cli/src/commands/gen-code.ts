import { getConfig, initialiseHass } from '@hass-blocks/hass-ts';
import { generateEntities } from '@lib/codegen/generate-entities.ts';
import { Command, Option } from 'clipanion';

export default class GenCodeCommand extends Command {
  folder = Option.String();

  override async execute(): Promise<number | void> {
    const client = await initialiseHass(getConfig());
    const states = await client.getStates();
    await client.close();

    await generateEntities(this.folder, states);
  }

  static override paths = [[`gen-code`]];
}
