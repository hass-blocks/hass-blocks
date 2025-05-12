import { readdir } from 'node:fs/promises';

import { Block, initialiseBlocks } from '@hass-blocks/core';
import { Command, Option } from 'clipanion';
import { join } from 'node:path';

export class LoadBlocks extends Command {
  folder = Option.String();

  override async execute(): Promise<void> {
    const { registry } = await initialiseBlocks();
    const files = await readdir(this.folder);

    const automations = (
      await Promise.all(
        files.map(async (file) => {
          const loadedFile = await import(join(this.folder, file));
          return Object.values(loadedFile);
        }),
      )
    )
      .flat()
      .filter((item) => item instanceof Block);

    await registry.registerAutomation(...automations);
  }
  static override paths = [[`load`]];
}
