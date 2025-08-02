import type { HassBlocksEvent } from './hass-blocks-event.ts';

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
  emit<
    ET extends HassBlocksEvent['eventType'],
    T extends HassBlocksEvent & { eventType: ET },
  >(
    type: ET,
    event?: Omit<T, 'id' | 'timestamp' | 'eventType'>,
  ): void;

  /**
   * Subscribe to the event bus
   *
   * @param callback - callback that is executed when an event is received
   */
  subscribe(callback: (event: HassBlocksEvent) => void): void;

  /**
   * Unsubscribe from the event bus
   *
   * @param callback - callback to remove from the event bus
   */
  unsubscribe(callback: (event: HassBlocksEvent) => void): void;

  /**
   * Get the number of listeners currently subscribed to the event bus
   */
  readonly listenerCount: number;
}
