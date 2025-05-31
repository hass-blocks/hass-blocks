import type { Block } from '@core';
import type { RecurseSequence } from './recurse-sequence.ts';
import type { CheckScenarios } from './check-scenarios.ts';

export type SequenceValidatorRecursive<
  TInput,
  TOutput,
  TSequence extends readonly Block<unknown, unknown>[],
  TBefore extends readonly Block<unknown, unknown>[] = [],
> = TSequence extends []
  ? TBefore
  : RecurseSequence<CheckScenarios<TInput, TOutput, TSequence, TBefore>>;
