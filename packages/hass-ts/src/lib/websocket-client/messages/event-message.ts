import type { HomeAssistantEvent } from '@types';

export interface EventMessage {
  id: number;
  type: 'event';
  event: HomeAssistantEvent;
}
