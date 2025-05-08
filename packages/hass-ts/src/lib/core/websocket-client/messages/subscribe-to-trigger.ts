import type { Command } from './command.ts';

export interface SubscribeToTriggerMessage extends Command {
  type: 'subscribe_trigger';
  trigger: Record<string, unknown>;
}
