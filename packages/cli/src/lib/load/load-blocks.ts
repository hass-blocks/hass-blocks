import { Block, initialiseBlocks } from '@hass-blocks/core';
import { websocketServer } from '@hass-blocks/websocket-plugin';
import { readdir } from 'fs/promises';
import { join } from 'path';

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
        const loadedFile = await import(join(folder, file));
        return Object.values(loadedFile);
      }),
    )
  )
    .flat()
    .filter((item) => item instanceof Block);

  await registry.registerAutomation(...automations);
};
