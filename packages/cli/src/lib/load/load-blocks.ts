import { Block, initialiseBlocks } from '@hass-blocks/core';
import { readdir } from 'fs/promises';
import { join } from 'path';

export const loadBlocks = async (folder: string) => {
  const { registry } = await initialiseBlocks();
  const files = await readdir(folder);

  const automations = (
    await Promise.all(
      files.map(async (file) => {
        const loadedFile = await import(join(folder, file));
        return Object.values(loadedFile);
      }),
    )
  )
    .flat()
    .filter((item) => item instanceof Block);

  await registry.registerAutomation(...automations);
};
