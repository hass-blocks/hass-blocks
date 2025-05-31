import type { Block } from '@core';
import type { Pass } from './pass.ts';

/**
 * @public
 *
 *  Matches a two‐element sequence where the *first* block is `Block<Pass, Pass>`,
 *  and the *second* is anything. This is a base case, so returns the final sequence
 */
export type TwoPassBlocks<
  TSequence extends readonly Block<unknown, unknown>[],
  TBefore extends readonly Block<unknown, unknown>[],
> = TSequence extends readonly [
  infer First extends Block<Pass, Pass>,
  infer Next extends Block<unknown, unknown>,
]
  ? readonly [...TBefore, First, Next]
  : never;
