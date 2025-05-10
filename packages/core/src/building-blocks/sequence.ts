import { ExecutionMode } from '@types';
import type { Block } from '@core';

import type {
  ValidInputOutputSequence,
  BlockRetainType,
  GetSequenceInput,
  GetSequenceOutput,
} from './valid-input-output-sequence.ts';
import { automation } from './automation.ts';

/**
 * @public
 *
 * Block that takes a series of blocks and executes them either in sequence or
 * in parallel
 */
export const sequence = <
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  const A extends readonly any[],
  I = GetSequenceInput<A>,
  O = GetSequenceOutput<A>,
>(
  ...actions: BlockRetainType<A> & A & ValidInputOutputSequence<I, O, A>
): Block<I, O> => {
  return automation({
    name: 'Sequence',
    mode: ExecutionMode.Parallel,
    then: actions,
  });
};
