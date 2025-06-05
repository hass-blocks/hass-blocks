import type { HassBlocksEvent } from '@hass-blocks/core';
import type { Graph } from './graph';
import type { Node } from '@xyflow/react';

export const updateNodeByActivityStatus = (
  event: HassBlocksEvent,
  graph: Graph,
): Graph => {
  if (!('block' in event)) {
    return graph;
  }

  const index = graph.nodes.findIndex((item) => {
    return event.block.id === item.id;
  });

  if (index < 0) {
    return graph;
  }

  const foundBlock: Node = Object.assign({}, graph.nodes[index]);

  const statusMap: Record<(typeof event)['eventType'], string> = {
    'automation-registered': 'white',
    'block-pending': '#ebe534',
    'block-started': '#3462eb',
    'block-finished': '##3462eb',
    'block-failed': '#eb4c34',
    'sequence-aborted': '##615e5d',
  };

  if (!foundBlock.style) {
    foundBlock.style = {};
  }

  foundBlock.style.backgroundColor = statusMap[event.eventType];

  const start = graph.nodes.slice(0, index);
  const end = graph.nodes.slice(index + 1);

  return { ...graph, nodes: [...start, foundBlock, ...end] };
};
