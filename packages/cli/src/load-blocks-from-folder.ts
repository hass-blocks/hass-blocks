import { Block } from '@hass-blocks/core';
import { readdir } from 'fs/promises';
import { join } from 'path';

export const loadBlocksFromFolder = async (automationsDir: string) => {
  const files = await readdir(automationsDir);
  console.log(files);
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
