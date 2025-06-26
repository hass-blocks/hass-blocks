import { doCodegen, watchAndGenerate } from './codegen/index.ts';
import { createBlocks } from './create-blocks/index.ts';
import { loadBlocks } from './load/index.ts';

import { getConfig, initialiseHass } from '@hass-blocks/hass-ts';
import { join } from 'path';

const [, , folder] = process.argv;

if (!folder) {
  throw new Error("First argument must be 'folder'");
}

await createBlocks(folder, 'pnpm');

console.log(`Initialising hass-blocks`);

const client = await initialiseHass(getConfig());
await doCodegen(client, join(folder, '.blocks'));
watchAndGenerate(client, join(folder, '.blocks'));

await loadBlocks(folder, '0.0.0.0', 8080);
