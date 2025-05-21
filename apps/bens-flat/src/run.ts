import { Block, type ILogger, initialiseBlocks } from '@hass-blocks/core';
import { readdir } from 'node:fs/promises';
import { join } from 'node:path';
import { terminalUi } from '@hass-blocks/terminal-ui-plugin';

const automationsDir = join(import.meta.dirname, 'automations');

const nullLogger: ILogger = {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  trace: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  debug: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  info: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  warn: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  error: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  fatal: () => {},
};

const { registry } = await initialiseBlocks({
  plugins: [terminalUi()],
  logger: nullLogger,
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
