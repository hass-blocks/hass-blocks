import type { Block } from '@core';
import type { GetSequenceInput } from './get-sequence-input.ts';

describe('getSequenceInput', () => {
  it('should correctly type a list of two actions', () => {
    type Sequence = [Block<string, number>, Block<number, boolean>];

    type Actual = GetSequenceInput<Sequence>;

    expectTypeOf<Actual>().toExtend<string>();
  });

  it('should not add undefined if void is at the start', () => {
    type Sequence = [Block<void, void>, Block<void, void>];

    type Actual = GetSequenceInput<Sequence>;

    expectTypeOf<Actual>().toExtend<void>();
  });
});
