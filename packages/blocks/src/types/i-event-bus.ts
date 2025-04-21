import { HassBlocksEvent } from './hass-blocks-event.ts';

/**
 * @public
 * 
 * The Hass Blocks internal event bus
 */
export interface IEventBus {
  /**
   * Emit an event on the bus
   * 
   * @param event - the event to be emitted
   */
  emit: (event: HassBlocksEvent) => void;
  
  /**
   * Subscribe to the event bus
   * 
   * @param callback - callback that is executed when an event is received
   */
  subscribe: (
    callback: (
      event: HassBlocksEvent & { id: string; timestamp: string },
    ) => void,
  ) => void;
}
