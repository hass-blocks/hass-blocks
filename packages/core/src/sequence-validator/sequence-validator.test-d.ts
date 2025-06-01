import { Block } from '@core';
import type { ServiceCallArgs } from '@building-blocks';

import type { ValidateSequence } from './validate-sequence.ts';
import type { Pass } from './pass.ts';

describe('sequence validator', () => {
  it('handles multiple pass blocks in a row', () => {
    type Sequence = [
      Block<void, void>,
      Block<void, void>,
      Block<Pass, Pass>,
      Block<Partial<ServiceCallArgs<{ foo: string }>> | undefined, void>,
      Block<Partial<ServiceCallArgs<{ foo: string }>> | undefined, void>,
    ];

    type Actual = ValidateSequence<void, void, Sequence>;

    expectTypeOf<Actual>().toExtend<
      readonly [
        Block<void, void>,
        Block<void, void>,
        Block<Pass, Pass>,
        Block<Partial<ServiceCallArgs<{ foo: string }>> | undefined, void>,
        Block<Partial<ServiceCallArgs<{ foo: string }>> | undefined, void>,
      ]
    >();
  });

  it('doesnt fail if input props are optional', () => {
    type Sequence = [
      Block<string, { two: string }>,
      Block<{ two?: string }, number>,
    ];

    type Actual = ValidateSequence<string, number, Sequence>;

    expectTypeOf<Actual>().toExtend<
      readonly [Block<string, { two: string }>, Block<{ two?: string }, number>]
    >();
  });
  it('work with two simple items', () => {
    type Sequence = [Block<void, void>, Block<void, number>];

    type Actual = ValidateSequence<void, number, Sequence>;

    expectTypeOf<Actual>().toExtend<
      readonly [Block<void, void>, Block<void, number>]
    >();
  });

  it('correctly handles servicecalls', () => {
    type Sequence = [
      Block<void, void>,
      Block<
        Partial<{ command: string[]; delay_secs: number }> | undefined,
        void
      >,
    ];

    type Actual = ValidateSequence<void, void, Sequence>;

    expectTypeOf<Actual>().toExtend<
      readonly [
        Block<void, void | Pass>,
        Block<
          Partial<{ command: string[]; delay_secs: number }> | undefined,
          void
        >,
      ]
    >();
  });

  it('should work with a longer list of items', () => {
    type Sequence = [
      Block<string, void>,
      Block<void, void>,
      Block<void, void>,
      Block<void, number>,
    ];

    type Actual = ValidateSequence<string, number, Sequence>;

    expectTypeOf<Actual>().toExtend<
      readonly [
        Block<string, void>,
        Block<void, void>,
        Block<void, void>,
        Block<void, number>,
      ]
    >();
  });

  it('should remain compatible when void is next to object types', () => {
    type Sequence = [
      Block<string, void>,
      Block<void, void>,
      Block<{ foo: string } | undefined, void>,
      Block<void, number>,
    ];

    type Actual = ValidateSequence<string, number, Sequence>;

    expectTypeOf<Actual>().toExtend<
      readonly [
        Block<string, void>,
        Block<void, void>,
        Block<{ foo: string } | undefined, void>,
        Block<void, number>,
      ]
    >();
  });
});
