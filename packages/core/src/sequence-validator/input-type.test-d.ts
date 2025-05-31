import type { Block } from '@core';
import type { InputType } from './input-type.ts';

describe('inputType', () => {
  it('works correctly with a block that has undefined in the input type', () => {
    type Actual = InputType<Block<{ foo: string } | undefined, number>>;

    expectTypeOf<Actual>().toExtend<{ foo: string } | undefined>();
  });
});
