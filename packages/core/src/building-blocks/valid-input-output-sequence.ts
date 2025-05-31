import type { Block } from '@core';
import type { BlockOutput, StopOutput } from '@types';

/**
 * @public
 *
 * Prettify a type
 */
export type Prettify<T> = {
  [K in keyof T]: T[K];
} & {};

/**
 * Given an array of blocks, get the input type from the first block
 *
 * @public
 */
export type GetSequenceInput<T extends ReadonlyArray<unknown>> =
  T extends readonly [Block<Pass, Pass>]
    ? Pass
    : T extends readonly [infer Only extends Block<unknown, unknown>]
      ? InputType<Only>
      : T extends readonly [infer First, ...infer Rest]
        ? First extends Block<Pass, Pass>
          ? GetSequenceInput<Rest>
          : First extends Block<unknown, unknown>
            ? InputType<First>
            : ['Item wasnt a block']
        : ['No valid array remaining'];

/**
 * Given an array of blocks, get the output type from the last block
 *
 * @public
 */
export type GetSequenceOutput<T extends ReadonlyArray<unknown>> =
  T extends readonly [Block<Pass, Pass>]
    ? Pass
    : T extends readonly [infer Only extends Block<unknown, unknown>]
      ? OutputType<Only>
      : T extends readonly [...infer Rest, infer Last]
        ? Last extends Block<Pass, Pass>
          ? GetSequenceOutput<Rest>
          : Last extends Block<unknown, unknown>
            ? OutputType<Last>
            : ['Item wasnt a block']
        : ['No valid arrray remaining'];

/**
 * @public
 *
 * Given a block, extract the input type
 */
export type RawInputType<T extends Block<unknown, unknown>> = Parameters<
  T['run']
>[1];

/**
 * Given a block, extract the input type and remove undefined from void
 *
 * @public
 */
export type InputType<T extends Block<unknown, unknown>> =
  void extends RawInputType<T>
    ? undefined extends RawInputType<T>
      ? Exclude<RawInputType<T>, undefined>
      : RawInputType<T>
    : RawInputType<T>;

/**
 * @public
 *
 * Given the return type of a block, extract its output type
 */
export type ExtractOutput<TAny> =
  TAny extends Promise<infer TPromiseType>
    ? ExtractOutput<TPromiseType>
    : TAny extends Exclude<BlockOutput<infer TBlockType>, StopOutput>
      ? TBlockType
      : never;

/**
 * Given a block, extract the output type
 *
 * @public
 */
export type OutputType<T extends Block<unknown, unknown>> = ExtractOutput<
  ReturnType<T['run']>
>;

/**
 * @public
 *
 * Assign to the input and output paramters of a block to indicate a passthrough block
 */
export interface Pass {
  __pass: 'pass';
}

/**
 * @public
 *
 * Block output type without undefined
 */
export type OutputTypeKeepPromise<T extends Block<unknown, unknown>> =
  ExtractOutput<ReturnType<T['run']>>;

/**
 * Given an Input and Ouput type and an array of block types, this type
 * validates that they are a compatible sequence of blocks.
 *
 * So for input I, output O and blocks A and B, this type will produce compiler
 * errors unless I is compatible with A<I>, A<O> is compatible with B<I> and B<O>
 * is compatible with O
 *
 * @public
 */
export type ValidInputOutputSequence<
  TInput,
  TOutput,
  TSequence extends readonly Block<unknown, unknown>[],
  TBefore extends PossibleRecursion[] = [],
> = RecurseSequence<
  TBefore,
  TInput,
  TOutput,
  CheckScenarios<TInput, TOutput, TSequence>
>;

type RecurseInstruction<
  TInput,
  TOutput,
  TSequence extends readonly Block<unknown, unknown>[],
> = {
  __recurse: true;
  in: TInput;
  out: TOutput;
  sequence: TSequence;
};

type PossibleRecursion =
  | Block<unknown, unknown>
  | RecurseInstruction<unknown, unknown, readonly Block<unknown, unknown>[]>
  | SequenceCompatibilityError<
      unknown,
      unknown,
      readonly Block<unknown, unknown>[],
      string
    >;
export type RecurseSequenceDebug<
  TBefore extends PossibleRecursion[],
  TInput,
  TOutput,
  TSequence extends readonly PossibleRecursion[],
> = TSequence extends readonly []
  ? TBefore
  : TSequence extends readonly [infer Error extends { __error: true }]
    ? [Error]
    : TSequence extends readonly [
          infer Recurse extends {
            __recurse: true;
            in: unknown;
            out: unknown;
            sequence: readonly Block<unknown, unknown>[];
          },
        ]
      ? [Recurse]
      : TSequence extends readonly [
            infer First extends Block<unknown, unknown>,
            ...infer Rest extends PossibleRecursion[],
          ]
        ? RecurseSequenceDebug<[...TBefore, First], TInput, TOutput, Rest>
        : TBefore;

export type RecurseSequence<
  TBefore extends PossibleRecursion[],
  TInput,
  TOutput,
  TSequence extends readonly PossibleRecursion[],
> = TSequence extends readonly []
  ? TBefore
  : TSequence extends readonly [infer Error extends { __error: true }]
    ? [Error]
    : TSequence extends readonly [
          infer Recurse extends {
            __recurse: true;
            in: unknown;
            out: unknown;
            sequence: readonly Block<unknown, unknown>[];
          },
        ]
      ? [
          ...ValidInputOutputSequence<
            Recurse['in'],
            Recurse['out'],
            Recurse['sequence'],
            TBefore
          >,
        ]
      : TSequence extends readonly [
            infer First extends Block<unknown, unknown>,
            ...infer Rest extends PossibleRecursion[],
          ]
        ? RecurseSequence<[...TBefore, First], TInput, TOutput, Rest>
        : TBefore;

export type CheckScenarios<
  TInput,
  TOutput,
  TSequence extends readonly Block<unknown, unknown>[],
> =
  SinglePassBlock<TSequence> extends never
    ? SingleGeneralBlock<TSequence, TInput, TOutput> extends never
      ? TwoPassBlocks<TSequence> extends never
        ? MultiPassSequence<TSequence, TInput, TOutput> extends never
          ? NonPassSequence<TSequence, TInput, TOutput> extends never
            ? [
                SequenceCompatibilityError<
                  TInput,
                  TOutput,
                  TSequence,
                  'No compatible sequences found'
                >,
              ]
            : NonPassSequence<TSequence, TInput, TOutput>
          : MultiPassSequence<TSequence, TInput, TOutput>
        : TwoPassBlocks<TSequence>
      : SingleGeneralBlock<TSequence, TInput, TOutput>
    : SinglePassBlock<TSequence>;

/**
 * @public
 *
 * If a sequence of length one is a pass block, just return it
 */
type SinglePassBlock<TSequence extends readonly Block<unknown, unknown>[]> =
  TSequence extends readonly [infer Only extends Block<Pass, Pass>]
    ? readonly [Only]
    : never;

/**
 * @public
 *
 * Match the input and outputs of a sequence containing a single, normal block
 */
type SingleGeneralBlock<
  TSequence extends readonly Block<unknown, unknown>[],
  TInput,
  TOutput,
> = TSequence extends readonly [infer Only extends Block<unknown, unknown>]
  ? BlockTypeIsCompabibleWithSequence<InputType<Only>, TInput> extends true
    ? BlockTypeIsCompabibleWithSequence<OutputType<Only>, TOutput> extends true
      ? readonly [Only]
      : [
          SequenceCompatibilityError<
            TInput,
            TOutput,
            TSequence,
            'Single block sequence - block output not compatible with sequence output'
          >,
        ]
    : [
        SequenceCompatibilityError<
          TInput,
          TOutput,
          TSequence,
          'Single block sequence - block input not compatible with sequence input'
        >,
      ]
  : never;

/**
 * @public
 *
 * Sequence compatibility error
 */
export type SequenceCompatibilityError<
  TInput,
  TOutput,
  TSequence extends readonly Block<unknown, unknown>[],
  TMessage extends string,
> = {
  input: TInput;
  output: TOutput;
  sequence: TSequence;
  message: TMessage;
  __error: true;
};

/**
 * @public
 *
 *  Matches a two‐element sequence where the *first* block is `Block<Pass, Pass>`,
 *      and the *second* is anything
 */
export type TwoPassBlocks<
  TSequence extends readonly Block<unknown, unknown>[],
> = TSequence extends readonly [
  infer First extends Block<Pass, Pass>,
  infer Next extends Block<unknown, unknown>,
]
  ? readonly [First, Next]
  : never;

/**
 * @public
 *
 * Match sequences that contain pass multiple passes
 */
type MultiPassSequence<
  TSequence extends readonly Block<unknown, unknown>[],
  TInput,
  TOutput,
> = TSequence extends readonly [
  infer First extends Block<Pass, Pass>,
  infer Next extends Block<unknown, unknown>,
  ...infer Rest extends readonly Block<unknown, unknown>[],
]
  ? BlockTypeIsCompabibleWithSequence<InputType<Next>, TInput> extends true
    ? readonly [
        First,
        Next,
        RecurseInstruction<OutputType<Next>, TOutput, Rest>,
      ]
    : Next extends Block<Pass, Pass>
      ? readonly [First, Next, RecurseInstruction<TInput, TOutput, Rest>]
      : [
          SequenceCompatibilityError<
            TInput,
            TOutput,
            TSequence,
            'Multi pass sequence not compatible'
          >,
        ]
  : never;

export type HasErrors<TSequence> = TSequence extends readonly [infer Only]
  ? Only extends { __error: true; sequence: unknown }
    ? true
    : false
  : TSequence extends readonly [infer First, ...infer Rest]
    ? First extends { __error: true; sequence: unknown }
      ? true
      : HasErrors<Rest>
    : false;

export type RollupErrors<TSequence> =
  HasErrors<TSequence> extends true
    ? RollupErrorsRecurse<[], TSequence>
    : TSequence;

export type RollupErrorsRecurse<
  TBefore extends unknown[],
  TSequence,
> = TSequence extends readonly [infer Only]
  ? Only extends { __error: true; sequence: unknown }
    ? PresentError<Only, Only['sequence'], TBefore>
    : [...TBefore, Only]
  : TSequence extends readonly [infer First, ...infer Rest]
    ? First extends { __error: true; sequence: unknown }
      ? PresentError<First, First['sequence'], TBefore>
      : RollupErrorsRecurse<[...TBefore, First], Rest>
    : [];

export type PresentError<T, TSequence, TBefore> = T extends {
  __error: true;
  message: string;
  input: unknown;
  output: unknown;
}
  ? {
      context: { before: TBefore; sequence: TSequence };
      message: T['message'];
      input: T['input'];
      output: T['output'];
    }
  : never;

/**
 * @public
 *
 * Compares a block with a sequence and determins of the inputs and outputs
 * are compatible
 */
export type BlockTypeIsCompabibleWithSequence<TFirstBlock, TSequenceInput> = [
  TFirstBlock,
] extends [
  TSequenceInput extends void
    ? MustIncludeUndefined<TFirstBlock>
    : Partial<TSequenceInput>,
]
  ? true
  : false;

export type ResolveToAnythingIfCompatible<
  TSequenceInput,
  TNextBlockInput,
  TOutput,
> = [TNextBlockInput] extends [
  TSequenceInput extends void
    ? MustIncludeUndefined<TNextBlockInput>
    : Partial<TSequenceInput>,
]
  ? Block<TNextBlockInput, TOutput>
  : never;

/**
 * @public
 *
 * Compares a block with a sequence and determins of the inputs and outputs
 * are compatible
 */
export type BlockOutputIsCompatibleWithSequence<
  TFirstBlock extends Block<unknown, unknown>,
  TSequenceOutput,
> = [OutputType<TFirstBlock>] extends [
  TSequenceOutput extends void
    ? MustIncludeUndefined<OutputType<TFirstBlock>>
    : Partial<TSequenceOutput>,
]
  ? true
  : false;

type NonPassSequence<
  TSequence extends readonly Block<unknown, unknown>[],
  TInput,
  TOutput,
> = TSequence extends readonly [
  infer First extends Block<unknown, unknown>,
  ...infer Rest extends readonly Block<unknown, unknown>[],
]
  ? BlockTypeIsCompabibleWithSequence<InputType<First>, TInput> extends true
    ? readonly [First, RecurseInstruction<OutputType<First>, TOutput, Rest>]
    : [
        SequenceCompatibilityError<
          TInput,
          TOutput,
          TSequence,
          'General two block sequence - blocks not compatible'
        >,
      ]
  : never;

/**
 * @public
 *
 * Returns never unless a type includes undefine
 * d
 */
export type MustIncludeUndefined<T> = undefined extends T ? T : never;

/**
 * Get all of the outputs of a sequence of blocks
 *
 * @public
 */
export type GetOutputs<T extends readonly Block<unknown, unknown>[]> =
  T extends readonly [
    infer First extends Block<unknown, unknown>,
    ...infer Rest extends Block<unknown, unknown>[],
  ]
    ? readonly [OutputType<First>, ...GetOutputs<Rest>]
    : readonly [];

/**
 * Get all of the results of a sequence of blocks
 *
 * @public
 */
export type GetResults<T extends readonly Block<unknown, unknown>[]> =
  T extends readonly [
    infer First extends Block<unknown, unknown>,
    ...infer Rest extends Block<unknown, unknown>[],
  ]
    ? readonly [
        { continue: boolean; output: OutputType<First> },
        ...GetOutputs<Rest>,
      ]
    : readonly [];

/**
 * @public
 *
 * Rehydrate a sequence of blocks with its input and output types
 */
export type BlockRetainType<A extends readonly Block<unknown, unknown>[]> =
  A extends readonly [
    infer First extends Block<unknown, unknown>,
    ...infer Rest extends readonly Block<unknown, unknown>[],
  ]
    ? readonly [
        Block<InputType<First>, OutputTypeKeepPromise<First>>,
        ...BlockRetainType<Rest>,
      ]
    : readonly [];
