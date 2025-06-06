import type { ITrigger } from './i-trigger.ts';

export interface ITriggerable {
  trigger: ITrigger | ITrigger[];
}
