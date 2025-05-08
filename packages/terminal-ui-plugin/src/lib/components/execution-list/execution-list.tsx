import type { LifeCycleEvent } from '../../types/index.ts';
import { ExecutionLine } from '../execution-line/index.tsx';

export interface ExecutionListProps {
  events: LifeCycleEvent[];
}

export const ExecutionList = ({ events }: ExecutionListProps) =>
  Object.values(
    events.reduce<Record<string, LifeCycleEvent[]>>(
      (accum, event) => ({
        // biome-ignore lint/performance/noAccumulatingSpread: <explanation>
        ...accum,
        [event.triggerId]: [...(accum[event.triggerId] ?? []), event].toSorted(
          (a, b) => (new Date(a.timestamp) > new Date(b.timestamp) ? 0 : 1),
        ),
      }),
      {},
    ),
  )
    .map((events) => events[events.length - 1])
    .flatMap((event) => (event ? [event] : []))
    .map((event) => <ExecutionLine key={event.id} event={event} />);
