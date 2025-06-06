import { Block, initialiseBlocks } from '@hass-blocks/core';
import { readdir } from 'node:fs/promises';
import { join } from 'node:path';
import { websocketServer } from '@hass-blocks/websocket-plugin';

const automationsDir = join(import.meta.dirname, 'automations');

const { registry } = await initialiseBlocks({
  plugins: [
    websocketServer({
      host: 'localhost',
      port: 8080,
      cors: {
        origin: '*',
        methods: ['GET', 'POST'],
      },
    }),
  ],
});

const files = await readdir(automationsDir);

const automations = (
  await Promise.all(
    files.map(async (file) => {
      const loadedFile = await import(join(automationsDir, file));
      return Object.values(loadedFile);
    }),
  )
)
  .flat()
  .filter((item) => item instanceof Block);

await registry.registerAutomation(...automations);
