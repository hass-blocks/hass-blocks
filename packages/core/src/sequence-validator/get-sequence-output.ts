import type { Block } from '@core';

import type { OutputType } from './output-type.ts';
import type { Pass } from './pass.ts';

/**
 * Given an array of blocks, get the output type from the last block
 *
 * @public
 */
export type GetSequenceOutput<T extends ReadonlyArray<unknown>> =
  T extends readonly [Block<Pass, Pass>]
    ? Pass
    : T extends readonly [infer Only extends Block<unknown, unknown>]
      ? OutputType<Only>
      : T extends readonly [...infer Rest, infer Last]
        ? Last extends Block<Pass, Pass>
          ? GetSequenceOutput<Rest>
          : Last extends Block<unknown, unknown>
            ? OutputType<Last>
            : ['Item wasnt a block']
        : ['No valid arrray remaining'];
