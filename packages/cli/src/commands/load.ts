import { command, string } from '@drizzle-team/brocli';
import { getConfig, initialiseHass } from '@hass-blocks/hass-ts';
import { doCodegen, watchAndGenerate } from '@lib/codegen';
import { loadBlocks } from '@lib/load';

export const load = command({
  name: 'load',
  options: {
    folder: string().required(),
    websocketPort: string(),
    websocketHost: string(),
    codegenOutput: string(),
  },
  handler: async (options) => {
    await loadBlocks(
      options.folder,
      options.websocketHost,
      options.websocketPort,
    );

    if (options.codegenOutput) {
      const client = await initialiseHass(getConfig());
      await doCodegen(client, options.codegenOutput);
      watchAndGenerate(client, options.codegenOutput);
    }
  },
});
