import { IBlocksNode } from '@hass-blocks/core';
import { Box, Text } from 'ink';

interface BlocksTreeNodeProps {
  block: IBlocksNode;
  level: number;
}

export const BlocksTreeNode = ({ block, level }: BlocksTreeNodeProps) => {
  return (
    <Box flexDirection="column" paddingLeft={level * 2}>
      <Text>{block.name}</Text>
      {block.children?.map((child, index) => (
        <BlocksTreeNode
          key={`${index}-${level}-node-${child.id}`}
          block={child}
          level={level + 1}
        />
      ))}
    </Box>
  );
};
