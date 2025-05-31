import type { Block } from '@core';

/**
 * @public
 *
 * Given a block, extract the input type
 */
export type RawInputType<T extends Block<unknown, unknown>> = Parameters<
  T['run']
>[1];
