import EventEmitter from 'node:events';
import type { HassBlocksEvent, IEventBus } from '../types/index.ts';
import { v4 } from 'uuid';

const AUTOMATION_EVENT = 'AUTOMATION_EVENT';

/**
 * @public
 */
export class EventBus implements IEventBus {
  private bus = new EventEmitter();

  public emit<
    ET extends HassBlocksEvent['eventType'],
    T extends HassBlocksEvent & { eventType: ET },
  >(type: ET, event?: Omit<T, 'id' | 'timestamp' | 'eventType'>) {
    this.bus.emit(AUTOMATION_EVENT, {
      ...event,
      eventType: type,
      id: v4(),
      timestamp: new Date().toISOString(),
    });
  }

  public subscribe(callback: (event: HassBlocksEvent) => void) {
    this.bus.on(AUTOMATION_EVENT, callback);
  }
}
