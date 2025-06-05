import type { IBlocksNode } from '@hass-blocks/core';
import type { Edge, Node } from '@xyflow/react';
import { makeNode } from './make-node';

export const generateNodeGraph = (
  node: IBlocksNode,
  parentNode?: Node,
): {
  nodes: Node[];
  edges: Edge[];
} => {
  const currentNode = makeNode(node);

  const link: Edge[] = parentNode
    ? [
        {
          id: `${parentNode.id}-${node.id}`,
          source: parentNode.id,
          animated: true,
          target: node.id,
        },
      ]
    : [];

  const children = node?.children?.flatMap((child) =>
    generateNodeGraph(child, currentNode),
  );

  return {
    nodes: [
      currentNode,
      ...(children?.map((child) => child.nodes) ?? []),
    ].flat(),
    edges: [link, ...(children?.map((child) => child.edges) ?? [])].flat(),
  };
};
