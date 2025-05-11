import { join } from 'node:path';
import { cwd } from 'node:process';

import { Command, Option } from 'clipanion';
import { loadBlocksFromFolder } from '@lib/tree/load-blocks-from-folder.ts';
import { printBlocksTree } from '@lib/tree/print-blocks-tree.tsx';

export default class PrintTreeCommand extends Command {
  folder = Option.String();

  static override paths = [[`print-tree`]];

  override async execute(): Promise<number | void> {
    const automationsDir = join(cwd(), this.folder ?? '');
    const blocks = await loadBlocksFromFolder(automationsDir);
    await printBlocksTree(blocks);
  }
}
