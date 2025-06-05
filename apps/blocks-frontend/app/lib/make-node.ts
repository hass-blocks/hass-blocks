import type { IBlocksNode } from '@hass-blocks/core';
import type { Node } from '@xyflow/react';

export const makeNode = (node: IBlocksNode): Node => {
  const colorMap: Record<string, { backgroundColor: string; color: string }> = {
    assertion: { backgroundColor: '#ff0072', color: 'white' },
    action: { backgroundColor: '#6ede87', color: 'white' },
    trigger: { backgroundColor: '#4934eb', color: 'white' },
    'service-call': { backgroundColor: '#eb34eb', color: 'white' },
    'if-then-else': { backgroundColor: '#34eb4f', color: 'black' },
    'execute-concurrently': { backgroundColor: '#eb7a34', color: 'black' },
    automation: { backgroundColor: '#e2eb34', color: 'black' },
    default: { backgroundColor: 'white', color: 'black' },
  };

  return {
    id: node.id,
    position: {
      x: 0,
      y: 0,
    },
    data: {
      label: node.name,
    },
    style: colorMap[node.type] ?? { backgroundColor: 'white', color: 'black' },
  };
};
