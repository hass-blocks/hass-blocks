import type { MustIncludeUndefined } from '@utils';

/**
 * @public
 *
 * Compares a block with a sequence and determins of the inputs and outputs
 * are compatible
 */
export type BlockTypeIsCompatibleWithSequence<TFirstBlock, TSequenceInput> = [
  Exclude<TFirstBlock, undefined>,
] extends [
  TSequenceInput extends void
    ? MustIncludeUndefined<TFirstBlock>
    : Partial<TSequenceInput>,
]
  ? true
  : false;
