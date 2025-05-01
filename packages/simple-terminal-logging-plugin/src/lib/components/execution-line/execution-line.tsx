import { Box, Text } from 'ink';
import { LifeCycleEvent } from '../..//types/life-cycle-events.ts';
import Spinner from 'ink-spinner';

interface ExecutionLineProps {
  event: LifeCycleEvent;
}
const getIcon = (event: LifeCycleEvent) => {
  switch (event.eventType) {
    case 'block-failed':
      return '🚨';

    case 'sequence-aborted':
      return '🛑';

    case 'block-started':
      return <Spinner type="dots" />;

    case 'block-finished':
      return '👍';
  }
};

export const ExecutionLine = ({ event }: ExecutionLineProps) => {
  return (
    <Box flexDirection="row" width="100%">
      <Box width={4}>
        <Text> {getIcon(event)}</Text>
      </Box>
      <Box width={35}>
        <Text>{('parent' in event && event.parent?.name) || event.name}</Text>
      </Box>
      <Box width={30}>
        <Text>{event.type}</Text>
      </Box>
      <Box width={40}>
        <Text>{event.name}</Text>
      </Box>
    </Box>
  );
};
