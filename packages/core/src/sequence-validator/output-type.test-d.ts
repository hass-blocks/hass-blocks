import type { Block } from '@core';
import type { OutputType } from './output-type.ts';

describe('extractOutput', () => {
  it('workss correctly with a simple block', () => {
    type Actual = OutputType<Block<string, number>>;

    expectTypeOf<Actual>().toExtend<number>();
  });
});
