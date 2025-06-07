import { Block, initialiseBlocks } from '@hass-blocks/core';
import { websocketServer } from '@hass-blocks/websocket-plugin';
import { readdir, stat } from 'fs/promises';
import path, { join } from 'path';

export const loadBlocks = async (
  folder: string,
  websocketHost?: string,
  websocketPort?: string,
) => {
  const plugins =
    websocketPort && websocketHost
      ? [
          websocketServer({
            host: websocketHost,
            port: Number(websocketPort),
            cors: {
              origin: '*',
              methods: ['GET', 'POST'],
            },
          }),
        ]
      : [];
  const { registry } = await initialiseBlocks({ plugins });
  const files = await readdir(folder);

  const automations = (
    await Promise.all(
      files.map(async (file) => {
        const filePath = join(folder, file);
        const stats = await stat(filePath);

        if (!stats.isFile() || path.extname(file) !== '.ts') {
          return;
        }

        const loadedFile = await import(filePath);
        return Object.values(loadedFile);
      }),
    )
  )
    .flat()
    .flatMap((item) => (item ? [item] : []))
    .filter((item) => item instanceof Block);

  await registry.registerAutomation(...automations);
};
