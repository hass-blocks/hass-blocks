import EventEmitter from 'events';
import { HassBlocksEvent, IEventBus } from '../types/index.ts';
import { v4 } from 'uuid';

const AUTOMATION_EVENT = 'AUTOMATION_EVENT';

/**
 * @public
 */
export class EventBus implements IEventBus {
  private bus = new EventEmitter();

  public emit(event: HassBlocksEvent) {
    this.bus.emit(AUTOMATION_EVENT, {
      ...event,
      id: v4(),
      timestamp: new Date().toISOString(),
    });
  }

  public subscribe(
    callback: (
      event: HassBlocksEvent & { id: string; timestamp: string },
    ) => void,
  ) {
    this.bus.on(AUTOMATION_EVENT, callback);
  }
}
