import type { Block } from '@hass-blocks/core';
import { Box, render } from 'ink';
import { BlocksTreeNode } from './blocks-tree.tsx';

export const printBlocksTree = async (blocks: Block[]) => {
  const { waitUntilExit } = render(
    <Box flexDirection="column">
      {blocks.map((block) => (
        <BlocksTreeNode block={block} level={0} key={`root-${block.id}`} />
      ))}
    </Box>,
  );

  await waitUntilExit();
};
