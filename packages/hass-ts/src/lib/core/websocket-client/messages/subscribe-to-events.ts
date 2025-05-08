import type { Command } from './command.ts';

export interface SubscribeToEventsMessage extends Command {
  type: 'subscribe_events';
  event_type?: string;
}
