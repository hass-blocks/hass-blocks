import type { Block } from '@core';
import type { BlockOutput } from './block-output.ts';

export type IBlockRunner = <TInput, TOutput>(
  block: Block<TInput, TOutput>,
) => (input: TInput) => Promise<BlockOutput<TOutput>>;
