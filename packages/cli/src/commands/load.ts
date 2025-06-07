import { getConfig, initialiseHass } from '@hass-blocks/hass-ts';
import { doCodegen, watchAndGenerate } from '@lib/codegen';
import { loadBlocks } from '@lib/load';
import { Command, Option } from 'clipanion';

export class LoadBlocks extends Command {
  folder = Option.String('Folder to load automations from ', {
    required: true,
  });

  codegenOutput = Option.String(
    'If supplied, will watch home assistant and automatically generate entities, services and areas for use in your automation',
  );

  override async execute(): Promise<void> {
    await loadBlocks(this.folder);

    if (this.codegenOutput) {
      const client = await initialiseHass(getConfig());
      await doCodegen(client, this.codegenOutput);
      watchAndGenerate(client, this.codegenOutput);
    }
  }
  static override paths = [[`load`]];
}
