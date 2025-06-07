import { boolean, command, string } from '@drizzle-team/brocli';
import { createBlocks } from '@lib/create-blocks';

export const create = command({
  name: 'create',
  options: {
    folder: string().required(),
    force: boolean(),
    packageManger: string().default('pnpm'),
  },
  handler: async (options) => {
    await createBlocks(options.folder, options.packageManger, options.force);
  },
});
