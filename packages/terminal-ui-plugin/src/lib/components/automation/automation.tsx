import type { IBlock } from '@hass-blocks/core';
import { Box, Text } from 'ink';
import type { LifeCycleEvent } from '../../types/index.ts';
import { ExecutionLine } from '../execution-line/index.ts';

interface AutomationProps {
  automation: IBlock<unknown, unknown>;
  events: LifeCycleEvent[];
}

export const Automation = ({ automation, events }: AutomationProps) => {
  const sortedEvents = events.toSorted((a, b) =>
    new Date(a.timestamp) > new Date(b.timestamp) ? 0 : 1,
  );
  const lastEvent = sortedEvents[sortedEvents.length - 1];
  return (
    <Box paddingX={2} flexDirection="column">
      <Box flexDirection="row">
        <Text bold color="green">
          {automation.name}
        </Text>
      </Box>
      <Box flexDirection="row">
        {lastEvent && <ExecutionLine event={lastEvent} />}
      </Box>
    </Box>
  );
};
