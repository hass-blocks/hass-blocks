import { EventBus } from './event-bus.ts';

describe('EventBus', () => {
  it('should call subscribed callback when event is emitted', () => {
    const eventBus = new EventBus();
    const callback = vi.fn();

    eventBus.subscribe(callback);
    eventBus.emit('log-event', {
      message: 'test message',
      module: 'test',
      level: 'info',
    });

    expect(callback).toHaveBeenCalledOnce();
  });

  it('should not call callback after unsubscribing', () => {
    const eventBus = new EventBus();
    const callback = vi.fn();

    eventBus.subscribe(callback);
    eventBus.unsubscribe(callback);
    eventBus.emit('log-event', {
      message: 'test message',
      module: 'test',
      level: 'info',
    });

    expect(callback).not.toHaveBeenCalled();
  });

  it('should expose listenerCount getter', () => {
    const eventBus = new EventBus();

    expect(eventBus.listenerCount).toBe(0);
  });

  it('should return correct listener count after subscribing', () => {
    const eventBus = new EventBus();
    const callback = vi.fn();

    eventBus.subscribe(callback);

    expect(eventBus.listenerCount).toBe(1);
  });

  it('should decrease listener count after unsubscribing', () => {
    const eventBus = new EventBus();
    const callback = vi.fn();

    eventBus.subscribe(callback);
    expect(eventBus.listenerCount).toBe(1);

    eventBus.unsubscribe(callback);
    expect(eventBus.listenerCount).toBe(0);
  });
});
