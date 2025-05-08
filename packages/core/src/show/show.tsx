import type { EventBus } from '../core/index.ts';
import { useState, useEffect } from 'react';
import { StaticLogView } from './static-log-view.tsx';
import { Box, Text } from 'ink';
import type { HassBlocksEvent } from '../types/index.ts';
import { SummaryView } from './summary-view.tsx';

interface ShowProps {
  staticLog: boolean;
  events: EventBus;
}
export const Show = ({ staticLog, events }: ShowProps) => {
  const [logs, setLogs] = useState<(HassBlocksEvent & { id: string })[]>([]);

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    events.subscribe((event) => {
      if (event.eventType !== 'hass-state-changed') {
        setLogs((logs) => [...logs, event]);
      }
    });
  }, []);

  return (
    <Box flexDirection="column" margin={1}>
      <Text color="green" bold>
        Hass Blocks started...
      </Text>
      {staticLog ? (
        <StaticLogView events={logs} />
      ) : (
        <SummaryView events={logs} />
      )}
    </Box>
  );
};
