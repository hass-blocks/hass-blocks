import type { CallServiceCommand } from '@hass-blocks/hass-ts';
import type {
  GetSequenceInput,
  GetSequenceOutput,
  InputType,
  OutputType,
  Pass,
  RollupErrors,
  ValidInputOutputSequence,
} from './valid-input-output-sequence.ts';
import { Block } from '@core';
import type { ITarget } from '@types';
import type { ServiceCallArgs } from './service-call.ts';

describe('rollup errors', () => {
  it('correctly rolls up a single error sequence', () => {
    type Sequence = readonly [
      Block<void, void>,
      Block<void, void>,
      {
        input: void;
        output: void;
        sequence: [
          Block<Pass, Pass>,
          Block<
            | Partial<
                ServiceCallArgs<{
                  foo: string;
                }>
              >
            | undefined,
            void
          >,
          Block<
            | Partial<
                ServiceCallArgs<{
                  foo: string;
                }>
              >
            | undefined,
            void
          >,
        ];
        message: 'Multi pass sequence not compatible';
        __error: true;
      },
    ];

    type Actual = RollupErrors<Sequence>;

    expectTypeOf<Actual>().toExtend<{
      context: {
        before: [Block<void, void>, Block<void, void>];
        sequence: [
          Block<Pass, Pass>,
          Block<
            | Partial<
                ServiceCallArgs<{
                  foo: string;
                }>
              >
            | undefined,
            void
          >,
          Block<
            | Partial<
                ServiceCallArgs<{
                  foo: string;
                }>
              >
            | undefined,
            void
          >,
        ];
      };
      message: 'Multi pass sequence not compatible';
      input: void;
      output: void;
    }>();
  });
});

describe('validInputOutputSequence', () => {
  it('handles multiple pass blocks in a row', () => {
    type Sequence = [
      Block<void, void>,
      Block<void, void>,
      Block<Pass, Pass>,
      Block<Partial<ServiceCallArgs<{ foo: string }>> | undefined, void>,
      Block<Partial<ServiceCallArgs<{ foo: string }>> | undefined, void>,
    ];

    type Actual = ValidInputOutputSequence<void, void, Sequence>;

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

    type Actual = ValidInputOutputSequence<string, number, Sequence>;

    expectTypeOf<Actual>().toExtend<
      readonly [Block<string, { two: string }>, Block<{ two?: string }, number>]
    >();
  });
  it('work with two simple items', () => {
    type Sequence = [Block<void, void>, Block<void, number>];

    type Actual = ValidInputOutputSequence<void, number, Sequence>;

    expectTypeOf<Actual>().toExtend<
      readonly [Block<void, void>, Block<void, number>]
    >();
  });

  it('correctly handles servicecalls', () => {
    type ServiceCallArgs<P> = {
      target?: ITarget;
      params: Omit<CallServiceCommand<P>, 'id' | 'type' | 'target'>;
    };

    type Sequence = [
      Block<void, void>,
      Block<
        | Partial<ServiceCallArgs<{ command: string[]; delay_secs: number }>>
        | undefined,
        void
      >,
    ];

    type Actual = ValidInputOutputSequence<void, void, Sequence>;

    expectTypeOf<Actual>().toExtend<
      readonly [
        Block<void, void | Pass>,
        Block<
          | Partial<ServiceCallArgs<{ command: string[]; delay_secs: number }>>
          | undefined,
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

    type Actual = ValidInputOutputSequence<string, number, Sequence>;

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

    type Actual = ValidInputOutputSequence<string, number, Sequence>;

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

describe('getSequenceOutput', () => {
  it('should correctly type a list of two actions', () => {
    type Sequence = [Block<string, number>, Block<number, boolean>];

    type Actual = GetSequenceOutput<Sequence>;

    expectTypeOf<Actual>().toExtend<boolean>();
  });
});

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

describe('extractOutput', () => {
  it('workss correctly with a simple block', () => {
    type Actual = OutputType<Block<string, number>>;

    expectTypeOf<Actual>().toExtend<number>();
  });
});

describe('inputType', () => {
  it('works correctly with a block that has undefined in the input type', () => {
    type Actual = InputType<Block<{ foo: string } | undefined, number>>;

    expectTypeOf<Actual>().toExtend<{ foo: string } | undefined>();
  });
});
