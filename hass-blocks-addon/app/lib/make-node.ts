import type { IBlocksNode } from '@hass-blocks/core';
import type { Node } from '@xyflow/react';

export const makeNode = (node: IBlocksNode): Node => {
  return {
    id: node.id,
    type: 'block',
    position: {
      x: 0,
      y: 0,
    },
    data: {
      label: node.name,
      block: node,
    },
  };
};
