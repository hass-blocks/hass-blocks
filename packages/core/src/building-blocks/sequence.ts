import { ExecutionMode } from '@types';
import type { Block } from '@core';

import { automation } from './automation.ts';
import type {
  BlockRetainType,
  GetSequenceInput,
  GetSequenceOutput,
  ValidateSequence,
} from '@sequence-validator';

/**
 * @public
 *
 * Block that takes a series of blocks and executes them either in sequence or
 * in parallel
 */
export const sequence = <
  const TSequence extends readonly Block<unknown, unknown>[],
  TInput = GetSequenceInput<TSequence>,
  TOutput = GetSequenceOutput<TSequence>,
>(
  ...actions: BlockRetainType<TSequence> &
    TSequence &
    ValidateSequence<TInput, TOutput, TSequence>
): Block<TInput, TOutput> => {
  return automation<TSequence, TInput, TOutput>({
    name: 'Sequence',
    mode: ExecutionMode.Parallel,
    then: actions,
  });
};
