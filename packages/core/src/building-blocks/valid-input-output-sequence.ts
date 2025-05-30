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
export type GetSequenceInput<T extends ReadonlyArray<unknown>> = Prettify<
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
        : ['No valid array remaining']
>;

/**
 * Given an array of blocks, get the output type from the last block
 *
 * @public
 */
export type GetSequenceOutput<T extends ReadonlyArray<unknown>> = Prettify<
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
        : ['No valid arrray remaining']
>;

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
> = Prettify<
  TSequence extends readonly [infer Only extends Block<Pass, Pass>]
    ? readonly [Only]
    : TSequence extends readonly [infer Only extends Block<unknown, unknown>]
      ? InputType<Only> extends (
          TInput extends void
            ? MustIncludeUndefined<InputType<Only>>
            : Partial<TInput>
        )
        ? OutputType<Only> extends TOutput
          ? readonly [Only]
          : ["Tail - output Type doesn't match sequence output type"]
        : ['Tail - Block input type doesnt match sequence input type']
      : TSequence extends readonly [
            infer First extends Block<Pass, Pass>,
            infer Next extends Block<unknown, unknown>,
          ]
        ? readonly [First, Next]
        : TSequence extends readonly [
              infer First extends Block<Pass, Pass>,
              infer Next extends Block<unknown, unknown>,
              ...infer Rest extends readonly Block<unknown, unknown>[],
            ]
          ? InputType<Next> extends TInput
            ? readonly [
                First,
                Next,
                ...ValidInputOutputSequence<OutputType<Next>, TOutput, Rest>,
              ]
            : never
          : TSequence extends readonly [
                infer First extends Block<unknown, unknown>,
                ...infer Rest extends readonly Block<unknown, unknown>[],
              ]
            ? InputType<First> extends (
                TInput extends void
                  ? MustIncludeUndefined<InputType<First>>
                  : Partial<TInput>
              )
              ? readonly [
                  First,
                  ...ValidInputOutputSequence<OutputType<First>, TOutput, Rest>,
                ]
              : ['Input type of first block doesnt match sequence input type']
            : ['No valid array remaining']
>;

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
