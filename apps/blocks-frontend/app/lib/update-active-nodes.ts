import type { HassBlocksEvent } from '@hass-blocks/core';
import type { Graph } from './graph';
import type { Node } from '@xyflow/react';

export const updateNodeByActivityStatus = (
  event: HassBlocksEvent,
  graph: Graph,
): Graph => {
  console.log('Update');
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

  const statusMap: Record<
    (typeof event)['eventType'],
    { backgroundColor: string; color: string }
  > = {
    'automation-registered': { backgroundColor: 'white', color: 'black' },
    'block-pending': { backgroundColor: '#ebe534', color: 'black' },
    'block-started': { backgroundColor: '#3462eb', color: 'white' },
    'block-finished': { backgroundColor: '#3462eb', color: 'white' },
    'block-failed': { backgroundColor: '#eb4c34', color: 'white' },
    'sequence-aborted': { backgroundColor: '#615e5d', color: 'white' },
  };

  if (!foundBlock.style) {
    foundBlock.style = {};
  }

  foundBlock.style.backgroundColor = statusMap[event.eventType].backgroundColor;
  foundBlock.style.color = statusMap[event.eventType].color;

  const start = graph.nodes.slice(0, index);
  const end = graph.nodes.slice(index + 1);

  return { ...graph, nodes: [...start, foundBlock, ...end] };
};
