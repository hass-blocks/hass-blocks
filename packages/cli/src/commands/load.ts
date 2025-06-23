import { command, string } from '@drizzle-team/brocli';
import { getConfig, initialiseHass } from '@hass-blocks/hass-ts';
import { doCodegen, watchAndGenerate } from '@lib/codegen';
import { createBlocks } from '@lib/create-blocks';
import { loadBlocks } from '@lib/load';
import { join } from 'path';

export const load = command({
  name: 'load',
  options: {
    folder: string().required().desc('The folder to load automations from'),
    websocketPort: string(),
    packageManager: string().default('pnpm'),
    websocketHost: string(),
  },
  handler: async (options) => {
    await createBlocks(options.folder, options.packageManager);

    console.log(`Initialising hass-blocks`);
    const client = await initialiseHass(getConfig());
    await doCodegen(client, join(options.folder, '.blocks'));
    watchAndGenerate(client, join(options.folder, '.blocks'));

    await loadBlocks(
      options.folder,
      options.websocketHost,
      options.websocketPort,
    );
  },
});
