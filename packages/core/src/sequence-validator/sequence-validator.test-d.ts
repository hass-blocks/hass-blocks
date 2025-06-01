import { Block } from '@core';

import type { ServiceCallArgs } from '@building-blocks';
import type { ValidateSequence } from './validate-sequence.ts';
import type { Pass } from './pass.ts';
import type { InputType } from './input-type.ts';
import type { OutputType } from './output-type.ts';
import type { BlockTypeIsCompatibleWithSequence } from './block-type-is-compatible-with-sequence.ts';

describe('sequence validator', () => {
  it('case', () => {
    type Sequence = [
      Block<Partial<{ method: 'GET' }>, string>,
      Block<
        string,
        {
          message: string;
          title: string;
        }
      >,
      Block<Partial<{ title: string; message: string }> | undefined, void[]>,
    ];

    type InOne = InputType<Sequence[0]>;

    type StepOneCompatible = BlockTypeIsCompatibleWithSequence<
      InOne,
      { method: 'GET' }
    >;
    expectTypeOf<StepOneCompatible>().toExtend<true>();

    type OutOne = OutputType<Sequence[0]>;
    type InTwo = InputType<Sequence[1]>;
    type StepTwoCompatible = BlockTypeIsCompatibleWithSequence<InTwo, OutOne>;

    expectTypeOf<StepTwoCompatible>().toExtend<true>();

    type OutTwo = OutputType<Sequence[1]>;
    type InThree = InputType<Sequence[2]>;

    type StepThreeCompatible = BlockTypeIsCompatibleWithSequence<
      InThree,
      OutTwo
    >;

    expectTypeOf<StepThreeCompatible>().toExtend<true>();

    type Actual = ValidateSequence<
      Partial<{ method: 'GET' }>,
      void[],
      Sequence
    >;

    expectTypeOf<Actual>().toExtend<
      readonly [
        Block<
          Partial<{
            method: 'GET';
          }>,
          string
        >,
        Block<
          string,
          {
            message: string;
            title: string;
          }
        >,
        Block<
          | Partial<{
              title: string;
              message: string;
            }>
          | undefined,
          void[]
        >,
      ]
    >();
  });

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
