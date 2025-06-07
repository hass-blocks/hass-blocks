import { getConfig, initialiseHass } from '@hass-blocks/hass-ts';
import { doCodegen } from '@lib/codegen';

import { Command, Option } from 'clipanion';
import { watchAndGenerate } from 'src/lib/codegen/watch-and-generate.ts';

export class GenCodeCommand extends Command {
  folder = Option.String();
  watch = Option.Boolean(
    'Stay connected to Home Assistant and regenerate when services and entities change',
  );

  override async execute(): Promise<void> {
    const client = await initialiseHass(getConfig());
    try {
      await doCodegen(client, this.folder);

      if (this.watch) {
        watchAndGenerate(client, this.folder);
      }
    } finally {
      await client.close();
    }
  }

  static override paths = [[`gen-code`]];
}
