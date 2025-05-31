import type { Block } from '@core';
import type { ExtractOutput } from './extract-output.ts';

/**
 * @public
 *
 * Block output type without undefined
 */
export type OutputTypeKeepPromise<T extends Block<unknown, unknown>> =
  ExtractOutput<ReturnType<T['run']>>;
