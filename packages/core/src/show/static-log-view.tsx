import { Box } from 'ink';

import type { HassBlocksEvent } from '@types';

import { StaticLogLine } from './static-log-line.tsx';

interface StaticLogView {
  events: (HassBlocksEvent & {
    id: string;
  })[];
}
export const StaticLogView = ({ events }: StaticLogView) => {
  return (
    <Box marginTop={1} flexDirection="column" width="100%">
      {events.map((event) => (
        <StaticLogLine key={`log-line-${event.id}`} event={event} />
      ))}
    </Box>
  );
};
