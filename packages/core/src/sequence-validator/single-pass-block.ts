import type { Block } from '@core';

import type { Pass } from './pass.ts';

/**
 * @public
 *
 * If a sequence of length one is a pass block, just return it
 */
export type SinglePassBlock<
  TSequence extends readonly Block<unknown, unknown>[],
  TBefore extends readonly Block<unknown, unknown>[],
> = TSequence extends readonly [infer Only extends Block<Pass, Pass>]
  ? readonly [...TBefore, Only]
  : never;
