import EventEmitter from 'node:events';
import { v4 } from 'uuid';

import type { HassBlocksEvent, IEventBus } from '@types';

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

  public unsubscribe(callback: (event: HassBlocksEvent) => void) {
    this.bus.off(AUTOMATION_EVENT, callback);
  }

  public get listenerCount(): number {
    return this.bus.listenerCount(AUTOMATION_EVENT);
  }
}
