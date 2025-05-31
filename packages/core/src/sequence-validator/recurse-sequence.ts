import type { Block } from '@core';
import type { CheckOutput } from './check-output.ts';
import type { SequenceValidatorRecursive } from './sequence-validator-recursive.ts';

/**
 * @public
 *
 * Sequence validator phase two - once all the checking has been done, iterate through the check results
 * and recurse back on the sequence validator if a recurse instruction is found
 */
export type RecurseSequence<TCheckOutput extends CheckOutput> =
  TCheckOutput extends infer Error extends { __error: true }
    ? Omit<Error, '__error'>
    : TCheckOutput extends infer Recurse extends {
          __recurse: true;
          in: unknown;
          out: unknown;
          before: readonly Block<unknown, unknown>[];
          sequence: readonly Block<unknown, unknown>[];
        }
      ? SequenceValidatorRecursive<
          Recurse['in'],
          Recurse['out'],
          Recurse['sequence'],
          Recurse['before']
        >
      : TCheckOutput;
