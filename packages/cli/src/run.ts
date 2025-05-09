import { join } from 'path';
import { cwd } from 'process';
import { termost } from 'termost';
import { loadBlocksFromFolder } from './load-blocks-from-folder.ts';
import { printBlocksTree } from './print-blocks-tree.tsx';

interface TreeContext {
  folder: string;
}

const program = termost({
  name: 'hass-blocks-cli',
  description: 'CLI description',
  version: '0.0.1',
});

program
  .command<TreeContext>({
    name: 'tree',
    description: 'Produce a node tree for Hass Blocks automations',
  })
  .option({
    key: 'folder',
    name: 'folder',
    description: 'Folder containing your automations',
  })
  .task({
    async handler(context) {
      console.log({ context });
      const automationsDir = join(cwd(), context.folder);
      console.log(`Loading automations from ${automationsDir}`);
      const blocks = await loadBlocksFromFolder(automationsDir);
      console.log(`Loaded`);
      await printBlocksTree(blocks);
    },
  });
