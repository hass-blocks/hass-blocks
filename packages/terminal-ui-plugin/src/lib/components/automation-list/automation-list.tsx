import type { IBlock, IEventBus } from '@hass-blocks/core';
import type { IFullBlocksClient } from '@hass-blocks/core';
import { useEffect, useState } from 'react';
import { Automation } from '../automation/automation.tsx';
import type { LifeCycleEvent } from '../../types/index.ts';
import { Box } from 'ink';

interface AutomationListProps {
  hass: IFullBlocksClient;
  bus: IEventBus;
}
export const AutomationList = ({ hass, bus }: AutomationListProps) => {
  const [events, setEvents] = useState<LifeCycleEvent[]>([]);
  const [automations, setAutomations] = useState<IBlock<unknown, unknown>[]>(
    [],
  );

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    bus.subscribe((event) => {
      if (
        event.eventType === 'block-started' ||
        event.eventType === 'block-finished' ||
        event.eventType === 'block-failed' ||
        event.eventType === 'sequence-aborted'
      ) {
        setEvents((events) => [...events, event]);
      }
    });
  }, []);

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    bus.subscribe((event) => {
      if (event.eventType === 'automation-registered') {
        const newAutomations = hass.getAutomations();
        setAutomations(newAutomations);
      }
    });
  }, []);

  return (
    <Box flexDirection="column" gap={1} padding={2} flexWrap="wrap" height={40}>
      {automations.map((automation) => (
        <Automation
          key={`automation-box-${automation.id}`}
          automation={automation}
          events={events.filter((event) =>
            'parent' in event
              ? event.parent.id === automation.id
              : event.block.id === automation.id,
          )}
        />
      ))}
    </Box>
  );
};
