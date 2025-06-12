import type { BaseEvent } from './base-event.ts';

/**
 * This event is fired when a data entry flow has changed and is used
 * by the frontend to reload the flow state.
 *
 * @public
 */
export type DataFlowProgressedEvent = BaseEvent<
  'data_flow_progressed',
  {
    /**
     * The flow handler.
     */
    handler: string;
    /**
     * Identification of the flow.
     */
    flow_id: string;
  }
>;
