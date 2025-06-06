import { Card } from '@chakra-ui/react/card';
import { Text } from '@chakra-ui/react/typography';
import type {
  HassBlocksEvent,
  IBlocksNode,
  LifeCycleEvent,
} from '@hass-blocks/core';
import { Handle, Node, Position, type NodeProps } from '@xyflow/react';
import { BlockStatus } from '@components';
import { BlocksContext } from 'app/providers/blocks';
import { useContext, useEffect, useState } from 'react';

type BlockNodeType = Node<{ block: IBlocksNode }, 'block'>;

type LifecyleEvents = Exclude<
  HassBlocksEvent,
  Exclude<HassBlocksEvent, LifeCycleEvent<string>>
>['eventType'];

export const BlockNode = ({ data }: NodeProps<BlockNodeType>) => {
  const { onEvent } = useContext(BlocksContext);
  const [status, setStatus] = useState<LifecyleEvents>('block-pending');

  useEffect(() => {
    onEvent((event: HassBlocksEvent) => {
      if (
        'block' in event &&
        event.eventType !== 'automation-registered' &&
        event.block.id === data.block.id
      ) {
        setStatus(event.eventType);
      }
    });
  }, [onEvent]);

  console.log('render');

  const title = data.block.type
    .replace(/-/g, ' ')
    .split(' ')
    .map((w) => w.charAt(0).toUpperCase() + w.substring(1).toLowerCase())
    .join(' ');
  return (
    <>
      <Handle type="target" position={Position.Top} />
      <Card.Root size="sm" width="15rem">
        <Card.Header width="100%">
          <Card.Title
            display={'flex'}
            gap={'0.5rem'}
            justifyContent={'space-between'}
          >
            <Text textAlign="center">{title}</Text>
            <BlockStatus status={status} />
          </Card.Title>
        </Card.Header>

        <Card.Body>
          <Text textAlign={'center'}>{data.block.name}</Text>
        </Card.Body>
      </Card.Root>
      <Handle type="source" position={Position.Bottom} id="a" />
    </>
  );
};
