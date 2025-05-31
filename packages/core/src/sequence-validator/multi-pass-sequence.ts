import type { Block } from '@core';
import type { BlockTypeIsCompatibleWithSequence } from './block-type-is-compatible-with-sequence.ts';
import type { DoRecurse } from './do-recurse.ts';
import type { SequenceCompatibilityError } from './sequence-compatibility-error.ts';
import type { InputType } from './input-type.ts';
import type { Pass } from './pass.ts';
import type { OutputType } from './output-type.ts';

/**
 * @public
 *
 * Match sequences that contain pass multiple passes.
 */
export type MultiPassSequence<
  TSequence extends readonly Block<unknown, unknown>[],
  TBefore extends readonly Block<unknown, unknown>[],
  TInput,
  TOutput,
> = TSequence extends readonly [
  infer First extends Block<Pass, Pass>,
  infer Next extends Block<unknown, unknown>,
  ...infer Rest extends readonly Block<unknown, unknown>[],
]
  ? BlockTypeIsCompatibleWithSequence<InputType<Next>, TInput> extends true
    ? DoRecurse<OutputType<Next>, TOutput, Rest, [...TBefore, First, Next]>
    : Next extends Block<Pass, Pass>
      ? DoRecurse<TInput, TOutput, Rest, [...TBefore, First, Next]>
      : SequenceCompatibilityError<
          TInput,
          TOutput,
          TSequence,
          TBefore,
          'Multi pass sequence not compatible'
        >
  : never;
