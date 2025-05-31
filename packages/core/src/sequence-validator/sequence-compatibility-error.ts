import type { Block } from '@core';

/**
 * @public
 *
 * Detail about a sequence compatibility issue
 */
export type SequenceCompatibilityError<
  TInput,
  TOutput,
  TSequence extends readonly Block<unknown, unknown>[],
  TBefore extends readonly Block<unknown, unknown>[],
  TMessage extends string,
> = {
  message: TMessage;
  sequence: {
    input: TInput;
    output: TOutput;
  };
  context: {
    head: TSequence;
    tail: TBefore;
  };
  __error: true;
};
