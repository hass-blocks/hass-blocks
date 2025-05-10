import type { Event } from '../../../types/index.ts';

export interface EventMessage {
  id: number;
  type: 'event';
  event: Event;
}
