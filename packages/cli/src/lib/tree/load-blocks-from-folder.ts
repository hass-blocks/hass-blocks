import { Block } from '@hass-blocks/core';
import { readdir } from 'node:fs/promises';
import { join } from 'node:path';

export const loadBlocksFromFolder = async (automationsDir: string) => {
  const files = await readdir(automationsDir);
  return (
    await Promise.all(
      files.map(async (file) => {
        const loadedFile = await import(join(automationsDir, file));
        return Object.values(loadedFile);
      }),
    )
  )
    .flat()
    .filter((item) => item instanceof Block);
};
