import { IEventBus } from '@hass-blocks/blocks';
import { LifeCycleEvent } from '../../types/index.ts';
import { ExecutionLine } from '../execution-line/index.ts';
import { useEffect, useState } from 'react';

export interface ExecutionListProps {
  eventBus: IEventBus;
}

export const ExecutionList = ({ eventBus }: ExecutionListProps) => {
  const [events, setEvents] = useState<LifeCycleEvent[]>([]);

  useEffect(() => {
    eventBus.subscribe((event) => {
      if (
        event.eventType === 'block-started' ||
        event.eventType === 'block-finished' ||
        event.eventType === 'block-failed' ||
        event.eventType === 'sequence-aborted' ||
        event.eventType === 'block-pending'
      ) {
        setEvents((events) => [...events, event]);
      }
    });
  }, []);

  return Object.values(
    events.reduce<Record<string, LifeCycleEvent[]>>(
      (accum, event) => ({
        ...accum,
        [event.executeId]: [...(accum[event.executeId] ?? []), event].toSorted(
          (a, b) => (new Date(a.timestamp) > new Date(b.timestamp) ? 1 : 0),
        ),
      }),
      {},
    ),
  )
    .map((events) => events[events.length - 1])
    .flatMap((event) => (event ? [event] : []))
    .map((event) => <ExecutionLine event={event} />);
};
