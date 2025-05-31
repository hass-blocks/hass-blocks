import type { Block } from '@core';

/**
 * @public
 *
 * Instruct the sequence recursor to perform a recursion
 */
export type DoRecurse<
  TInput,
  TOutput,
  TSequence extends readonly Block<unknown, unknown>[],
  TBefore extends readonly Block<unknown, unknown>[],
> = {
  __recurse: true;
  in: TInput;
  out: TOutput;
  sequence: TSequence;
  before: TBefore;
};
