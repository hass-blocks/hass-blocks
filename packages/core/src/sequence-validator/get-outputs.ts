import type { Block } from '@core';
import type { OutputType } from './output-type.ts';

/**
 * Get all of the outputs of a sequence of blocks
 *
 * @public
 */
export type GetOutputs<T extends readonly Block<unknown, unknown>[]> =
  T extends readonly [
    infer First extends Block<unknown, unknown>,
    ...infer Rest extends Block<unknown, unknown>[],
  ]
    ? readonly [OutputType<First>, ...GetOutputs<Rest>]
    : readonly [];
