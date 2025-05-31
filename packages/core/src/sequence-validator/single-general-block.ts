import type { Block } from '@core';
import type { SequenceCompatibilityError } from './sequence-compatibility-error.ts';
import type { BlockTypeIsCompatibleWithSequence } from './block-type-is-compatible-with-sequence.ts';
import type { InputType } from './input-type.ts';
import type { OutputType } from './output-type.ts';

/**
 * @public
 *
 * Match the input and outputs of a sequence containing a single, normal block
 */
export type SingleGeneralBlock<
  TSequence extends readonly Block<unknown, unknown>[],
  TBefore extends readonly Block<unknown, unknown>[],
  TInput,
  TOutput,
> = TSequence extends readonly [infer Only extends Block<unknown, unknown>]
  ? BlockTypeIsCompatibleWithSequence<InputType<Only>, TInput> extends true
    ? BlockTypeIsCompatibleWithSequence<OutputType<Only>, TOutput> extends true
      ? readonly [...TBefore, Only]
      : SequenceCompatibilityError<
          TInput,
          TOutput,
          TSequence,
          TBefore,
          'Single block sequence - block output not compatible with sequence output'
        >
    : SequenceCompatibilityError<
        TInput,
        TOutput,
        TSequence,
        TBefore,
        'Single block sequence - block input not compatible with sequence input'
      >
  : never;
