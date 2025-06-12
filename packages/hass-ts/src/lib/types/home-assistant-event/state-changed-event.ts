import type { State } from '../state.ts';
import type { BaseEvent } from './base-event.ts';
/**
 * This event is fired when a state has changed. It contains the entity identifier and both the new_state and old_state of the entity as state objects.
 *
 * @public
 */
export type StateChangedEvent = BaseEvent<
  'state_changed',
  {
    /**
     * Identifier of the entity that has changed. Example: light.kitchen
     */
    entity_id: string;
    /**
     * The previous state of the entity before it changed. Omitted if the state is set for the first time.
     */
    new_state: State;
    /**
     * The new state of the entity. Omitted if the state has been removed.
     */
    old_state: State;
  }
>;
