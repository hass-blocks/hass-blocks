import { Block, initialiseBlocks } from '@hass-blocks/core';
import { readdir } from 'node:fs/promises';
import { join } from 'node:path';
import { logLifecycleEvents } from '@hass-blocks/simple-terminal-logging-plugin';

const automationsDir = join(import.meta.dirname, 'automations');

const { registry } = await initialiseBlocks({
  plugins: [logLifecycleEvents()],
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
