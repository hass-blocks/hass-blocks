import type { Block } from '@core';
import type { MustIncludeUndefined } from '@utils';

export type ResolveToAnythingIfCompatible<
  TSequenceInput,
  TNextBlockInput,
  TOutput,
> = [TNextBlockInput] extends [
  TSequenceInput extends void
    ? MustIncludeUndefined<TNextBlockInput>
    : Partial<TSequenceInput>,
]
  ? Block<TNextBlockInput, TOutput>
  : never;
