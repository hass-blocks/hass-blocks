import type { Block } from '@core';
import type { SequenceValidatorRecursive } from './sequence-validator-recursive.ts';
import type { Prettify } from '@utils';

/**
 * Given an Input and Ouput type and an array of block types, this type
 * validates that they are a compatible sequence of blocks.
 *
 * So for input I, output O and blocks A and B, this type will produce compiler
 * errors unless I is compatible with A<I>, A<O> is compatible with B<I> and B<O>
 * is compatible with O
 *
 * @public
 */
export type ValidateSequence<
  TInput,
  TOutput,
  TSequence extends readonly Block<unknown, unknown>[],
  TBefore extends Block<unknown, unknown>[] = [],
> = Prettify<SequenceValidatorRecursive<TInput, TOutput, TSequence, TBefore>>;
