import type { Block } from '@core';
import type { IEventBus } from './i-event-bus.ts';
import type { IHass } from './i-hass.ts';
import type { BlockOutput } from './block-output.ts';

/**
 * @public
 *
 * Execution context and utilities supplied to each running block
 */
export interface IRunContext<I> {
  /**
   * An initialised blocks client,
   */
  hass: IHass;

  /**
   * The input for this block - usually the output from the last one
   */
  input: I;

  /**
   * An initialised event bus
   */
  events?: IEventBus;

  /**
   * uuid trigger id, unique to this particular trigger sequence
   */
  triggerId?: string;

  /**
   * When called with a block, it will return a function that can be used
   * to execute that block
   */
  runner: <TInput, TOutput>(
    block: Block<TInput, TOutput>,
  ) => (input: TInput) => Promise<BlockOutput<TOutput>>;
}
