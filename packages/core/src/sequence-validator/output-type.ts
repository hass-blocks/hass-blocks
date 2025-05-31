import type { Block } from '@core';
import type { ExtractOutput } from './extract-output.ts';

/**
 * Given a block, extract the output type
 *
 * @public
 */
export type OutputType<T extends Block<unknown, unknown>> = ExtractOutput<
  ReturnType<T['run']>
>;
