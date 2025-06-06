import { generateNodeGraph, layoutNodes } from '@lib';
import { BlocksContext } from 'app/providers/blocks.tsx';
import { useCallback, useContext, useEffect, useMemo } from 'react';
import {
  addEdge,
  ReactFlow,
  useEdgesState,
  useNodesState,
  type Connection,
  type Edge,
  type Node,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

import { useParams } from 'react-router';
import { updateNodeByActivityStatus } from 'app/lib/update-active-nodes';
import { Heading } from '@chakra-ui/react/typography';
import { useAutomation } from '@hooks';
import { BlockNode } from '@components';

const Automation = () => {
  const { id } = useParams<'id'>();
  const automation = useAutomation(id);
  const [nodes, setNodes, onNodesChange] = useNodesState<Node>([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState<Edge>([]);

  const onConnect = useCallback(
    (connection: Connection) => setEdges((eds) => addEdge(connection, eds)),
    [setEdges],
  );

  const nodeTypes = useMemo(() => ({ block: BlockNode }), []);

  useEffect(() => {
    (async () => {
      if (automation) {
        const graph = layoutNodes(generateNodeGraph(automation));
        setNodes(graph.nodes);
        setEdges(graph.edges);
      }
    })();
  }, [automation, setEdges, setNodes]);

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Heading>{automation?.name}</Heading>
      <ReactFlow
        nodeTypes={nodeTypes}
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
