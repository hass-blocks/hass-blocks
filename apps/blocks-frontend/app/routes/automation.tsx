import { Text } from '@chakra-ui/react';
import { HassBlocksEvent, IBlocksNode } from '@hass-blocks/core';
import { generateNodeGraph, layoutNodes } from '@lib';
import { BlocksContext } from 'app/providers/blocks.tsx';
import { useCallback, useContext, useEffect, useState } from 'react';
import {
  addEdge,
  ReactFlow,
  useEdgesState,
  useNodesState,
  type Connection,
  type Edge,
  type Node,
} from '@xyflow/react';
import { useParams } from 'react-router';
import '@xyflow/react/dist/style.css';
import { updateNodeByActivityStatus } from 'app/lib/update-active-nodes';

const Automation = () => {
  const client = useContext(BlocksContext);

  const { id } = useParams<'id'>();
  const [nodes, setNodes, onNodesChange] = useNodesState<Node>([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState<Edge>([]);
  const [event, setEvent] = useState<HassBlocksEvent[]>([]);

  const onConnect = useCallback(
    (connection: Connection) => setEdges((eds) => addEdge(connection, eds)),
    [setEdges],
  );

  const [automation, setAutomation] = useState<IBlocksNode | undefined>();

  useEffect(() => {
    client?.hassBlocksEvent((event) => {
      if ('block' in event && event.block.id === id) {
        setEvent((events) => [...events, event]);
      }
    });
  }, [client, id]);

  useEffect(() => {
    (async () => {
      if (automation && nodes.length === 0) {
        const graph = layoutNodes(generateNodeGraph(automation));
        setNodes(graph.nodes);
        setEdges(graph.edges);
      }

      if (id && !automation) {
        const theAutomation = await client?.getAutomationById(id);
        setAutomation(theAutomation);
      }
    })();
  }, [client, id, automation, nodes.length, setEdges, setNodes, edges, nodes]);

  useEffect(() => {
    const lastEvent = event[event.length - 1];
    if (lastEvent) {
      setNodes(
        (nodes) =>
          updateNodeByActivityStatus(lastEvent, { nodes, edges }).nodes,
      );
    }
  }, [event, edges, setNodes]);

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Text textStyle="4xl" as={'h2'}>
        <h1>{automation?.name}</h1>
      </Text>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
      />
    </div>
  );
};

export default Automation;
