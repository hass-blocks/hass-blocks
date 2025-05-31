import type { Block } from '@core';
import type { RawInputType } from './raw-input-type.ts';

/**
 * Given a block, extract the input type and remove undefined from void
 *
 * @public
 */
export type InputType<T extends Block<unknown, unknown>> =
  void extends RawInputType<T>
    ? undefined extends RawInputType<T>
      ? Exclude<RawInputType<T>, undefined>
      : RawInputType<T>
    : RawInputType<T>;
