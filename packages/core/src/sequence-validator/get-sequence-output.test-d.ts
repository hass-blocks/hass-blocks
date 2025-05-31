import type { Block } from '@core';
import type { GetSequenceOutput } from './get-sequence-output.ts';

describe('getSequenceOutput', () => {
  it('should correctly type a list of two actions', () => {
    type Sequence = [Block<string, number>, Block<number, boolean>];

    type Actual = GetSequenceOutput<Sequence>;

    expectTypeOf<Actual>().toExtend<boolean>();
  });
});
