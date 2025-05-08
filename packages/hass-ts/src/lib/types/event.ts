import type { Context } from './context.ts';
import type { State } from './state.ts';

/**
 * @public
 */
export interface Event {
  data: {
    entity_id: string;
    new_state: State;
    old_state: State;
  };
  event_type: string;
  time_fired: string;
  origin: string;
  context: Context;
}
