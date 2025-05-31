import type { Block } from '@core';
import type { GetOutputs } from '../sequence-validator/get-outputs.ts';
import type { OutputType } from '../sequence-validator/output-type.ts';

/**
 * Get all of the results of a sequence of blocks
 *
 * @public
 */
export type GetResults<T extends readonly Block<unknown, unknown>[]> =
  T extends readonly [
    infer First extends Block<unknown, unknown>,
    ...infer Rest extends Block<unknown, unknown>[],
  ]
    ? readonly [
        { continue: boolean; output: OutputType<First> },
        ...GetOutputs<Rest>,
      ]
    : readonly [];
