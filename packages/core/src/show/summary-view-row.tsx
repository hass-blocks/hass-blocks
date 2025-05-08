import type { HassBlocksEvent } from '../types/index.ts';
import { Box, Text } from 'ink';

interface SummaryViewRowProps {
  name: string;
  events: HassBlocksEvent[];
}

export const SummaryViewRow = ({ events }: SummaryViewRowProps) => {
  const parent = events.flatMap((item) => ('parent' in item ? [item] : []))[0];
  const id = events.flatMap((item) => ('triggerId' in item ? [item] : []))?.[0]
    ?.triggerId;
  return (
    <Box
      borderStyle="double"
      flexDirection="row"
      paddingLeft={3}
      paddingRight={3}
      gap={2}
    >
      <Box flexDirection="column" borderStyle={'single'} paddingX={1}>
        <Box flexDirection="row" gap={1}>
          <Box>
            <Text>Automation</Text>
          </Box>
          <Box>
            <Text>{parent?.name}</Text>
          </Box>
        </Box>
        <Box flexDirection="row" gap={1}>
          <Box>
            <Text>Trigger ID</Text>
          </Box>
          <Box>
            <Text>{id}</Text>
          </Box>
        </Box>
      </Box>
      <Box flexDirection="column" borderStyle={'single'} paddingX={1}>
        {events.map((event) => (
          <Box key={`${'id' in event && event.id}-row`} flexDirection="row">
            <Box width={11}>
              <Text>{event.eventType}</Text>
            </Box>
            <Box width={11}>
              <Text>{event.eventType}</Text>
            </Box>
            <Box width={40}>
              <Text>{'name' in event && event.name}</Text>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
