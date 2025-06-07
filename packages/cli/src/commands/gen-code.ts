import { getConfig, initialiseHass } from '@hass-blocks/hass-ts';
import { boolean, command, string } from '@drizzle-team/brocli';
import { doCodegen, watchAndGenerate } from '@lib/codegen';

export const genCode = command({
  name: 'genCode',
  options: {
    folder: string().required(),
    watch: boolean(),
  },
  handler: async (options) => {
    const client = await initialiseHass(getConfig());
    try {
      await doCodegen(client, options.folder);

      if (options.watch) {
        watchAndGenerate(client, options.folder);
      }
    } finally {
      await client.close();
    }
  },
});
