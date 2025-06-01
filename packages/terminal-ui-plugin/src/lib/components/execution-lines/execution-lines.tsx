import type { IEventBus } from '@hass-blocks/core';
import type { LifeCycleEvent } from '@types';
import { useEffect, useState } from 'react';
import { ExecutionList } from '../execution-list/execution-list.tsx';

export interface ExecutionLinesProps {
  eventBus: IEventBus;
}

export const ExecutionLines = ({ eventBus }: ExecutionLinesProps) => {
  const [events, setEvents] = useState<LifeCycleEvent[]>([]);

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    eventBus.subscribe((event) => {
      if (
        (event.eventType === 'block-started' ||
          event.eventType === 'block-finished' ||
          event.eventType === 'block-failed' ||
          event.eventType === 'sequence-aborted') &&
        event.type !== 'automation'
      ) {
        setEvents((events) => [...events, event]);
      }
    });
  }, []);

  return <ExecutionList events={events} />;
};
