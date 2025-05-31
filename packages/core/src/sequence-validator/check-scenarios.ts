import type { Block } from '@core';
import type { SinglePassBlock } from './single-pass-block.ts';
import type { SingleGeneralBlock } from './single-general-block.ts';
import type { MultiPassSequence } from './multi-pass-sequence.ts';
import type { NonPassSequence } from './non-pass-sequence.ts';
import type { TwoPassBlocks } from './two-pass-blocks.ts';
import type { SequenceCompatibilityError } from './sequence-compatibility-error.ts';

/**
 * @public
 *
 * Sequence validator phase one - check a number of scenarios and generate error messages or
 * instructions to recurse again if needed
 */
export type CheckScenarios<
  TInput,
  TOutput,
  TSequence extends readonly Block<unknown, unknown>[],
  TBefore extends readonly Block<unknown, unknown>[],
> =
  SinglePassBlock<TSequence, TBefore> extends never
    ? SingleGeneralBlock<TSequence, TBefore, TInput, TOutput> extends never
      ? TwoPassBlocks<TSequence, TBefore> extends never
        ? MultiPassSequence<TSequence, TBefore, TInput, TOutput> extends never
          ? NonPassSequence<TSequence, TBefore, TInput, TOutput> extends never
            ? SequenceCompatibilityError<
                TInput,
                TOutput,
                TSequence,
                TBefore,
                'No compatible sequences found'
              >
            : NonPassSequence<TSequence, TBefore, TInput, TOutput>
          : MultiPassSequence<TSequence, TBefore, TInput, TOutput>
        : TwoPassBlocks<TSequence, TBefore>
      : SingleGeneralBlock<TSequence, TBefore, TInput, TOutput>
    : SinglePassBlock<TSequence, TBefore>;
