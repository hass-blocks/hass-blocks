import type { Block } from '@core';
import type { BlockTypeIsCompatibleWithSequence } from './block-type-is-compatible-with-sequence.ts';
import type { DoRecurse } from './do-recurse.ts';
import type { SequenceCompatibilityError } from './sequence-compatibility-error.ts';
import type { InputType } from './input-type.ts';
import type { OutputType } from './output-type.ts';

/**
 * @public
 *
 * This is the general case - where there are two blocks that aren't passthrough blocks
 * it checks there input and output compatibility and either returns an error a direction
 * to recurse
 */
export type NonPassSequence<
  TSequence extends readonly Block<unknown, unknown>[],
  TBefore extends readonly Block<unknown, unknown>[],
  TInput,
  TOutput,
> = TSequence extends readonly [
  infer First extends Block<unknown, unknown>,
  ...infer Rest extends readonly Block<unknown, unknown>[],
]
  ? BlockTypeIsCompatibleWithSequence<InputType<First>, TInput> extends true
    ? DoRecurse<OutputType<First>, TOutput, Rest, [...TBefore, First]>
    : SequenceCompatibilityError<
        TInput,
        TOutput,
        TSequence,
        TBefore,
        'General two block sequence - blocks not compatible'
      >
  : never;
