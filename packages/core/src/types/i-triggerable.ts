import type { ITrigger } from './i-trigger.ts';

/**
 * A node that can be triggered
 *
 * @public
 */
export interface ITriggerable {
  /**
   * The trigger for this node
   */
  trigger: ITrigger | ITrigger[];
}
