import type { Block } from '@core';
import type { OutputTypeKeepPromise } from './output-type-keep-promise.ts';
import type { InputType } from './input-type.ts';

/**
 * @public
 *
 * Rehydrate a sequence of blocks with its input and output types
 */
export type BlockRetainType<A extends readonly Block<unknown, unknown>[]> =
  A extends readonly [
    infer First extends Block<unknown, unknown>,
    ...infer Rest extends readonly Block<unknown, unknown>[],
  ]
    ? readonly [
        Block<InputType<First>, OutputTypeKeepPromise<First>>,
        ...BlockRetainType<Rest>,
      ]
    : readonly [];
