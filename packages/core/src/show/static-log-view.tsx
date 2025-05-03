import { HassBlocksEvent } from '../types/index.ts';
import { StaticLogLine } from './static-log-line.tsx';
import { Box } from 'ink';

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
