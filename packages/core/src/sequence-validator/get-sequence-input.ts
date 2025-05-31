import type { Block } from '@core';

import type { InputType } from './input-type.ts';
import type { Pass } from './pass.ts';

/**
 * Given an array of blocks, get the input type from the first block
 *
 * @public
 */
export type GetSequenceInput<T extends ReadonlyArray<unknown>> =
  T extends readonly [Block<Pass, Pass>]
    ? Pass
    : T extends readonly [infer Only extends Block<unknown, unknown>]
      ? InputType<Only>
      : T extends readonly [infer First, ...infer Rest]
        ? First extends Block<Pass, Pass>
          ? GetSequenceInput<Rest>
          : First extends Block<unknown, unknown>
            ? InputType<First>
            : ['Item wasnt a block']
        : ['No valid array remaining'];
