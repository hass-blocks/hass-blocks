import type { Block } from '@core';
import type { DoRecurse } from './do-recurse.ts';
import type { SequenceCompatibilityError } from './sequence-compatibility-error.ts';

/**
 * @public
 *
 * The output of CheckScenarios - a list of either blocks, errors, or instructions
 * to recurse again
 */
export type CheckOutput =
  | readonly Block<unknown, unknown>[]
  | DoRecurse<
      unknown,
      unknown,
      readonly Block<unknown, unknown>[],
      readonly Block<unknown, unknown>[]
    >
  | SequenceCompatibilityError<
      unknown,
      unknown,
      readonly Block<unknown, unknown>[],
      readonly Block<unknown, unknown>[],
      string
    >;
