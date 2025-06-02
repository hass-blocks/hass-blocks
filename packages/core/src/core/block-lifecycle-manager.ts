import type { BlockOutput, HassBlocksEvent, IEventBus } from '@types';
import type { Block } from './block.ts';
import { v4 } from 'uuid';

export class BlockLifecyleManager<TInput = unknown, TOutput = unknown> {
  public readonly executionId: string;
  public constructor(
    private events: IEventBus,
    private triggerId: string,
    public readonly block: Block<TInput, TOutput>,
    private parent?: Block<unknown, unknown>,
  ) {
    this.executionId = v4();
  }

  private emit<
    ET extends HassBlocksEvent['eventType'],
    T extends HassBlocksEvent & { eventType: ET },
  >(type: ET, event: Omit<T, 'id' | 'timestamp' | 'eventType'>) {
    this.events.emit(type, event);
    this.events.emit('log-event', {
      level: 'trace',
      module: 'executor',
      message: JSON.stringify({ type, event }),
    });
  }

  private getEventArgs() {
    return {
      executeId: this.executionId,
      triggerId: this.triggerId,
      type: this.block.type,
      name: this.block.name,
      block: this.block.toJson(),
      ...(this.parent ? { parent: this.parent.toJson() } : {}),
    };
  }

  public started() {
    this.emit('block-started', this.getEventArgs());
  }

  public pending() {
    this.emit('block-pending', this.getEventArgs());
  }

  public finished<TOut>(output: BlockOutput<TOut>) {
    this.emit('block-finished', { ...output, ...this.getEventArgs(), output });
  }

  public aborted() {
    this.emit('sequence-aborted', this.getEventArgs());
  }

  public failed(error: Error) {
    this.emit('block-failed', {
      ...this.getEventArgs(),
      error,
      message: error.message,
    });
  }
}
