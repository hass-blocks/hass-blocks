import type { Block } from '@core';

/**
 * Given an array of blocks, get the input type from the first block
 *
 * @public
 */
export type GetSequenceInput<T extends ReadonlyArray<unknown>> =
  T extends readonly [infer First, ...unknown[]]
    ? First extends Block<unknown, unknown>
      ? InputType<First>
      : never
    : never;

/**
 * Given an array of blocks, get the output type from the last block
 *
 * @public
 */
export type GetSequenceOutput<T extends ReadonlyArray<unknown>> =
  T extends readonly [...unknown[], infer Last]
    ? Last extends Block<unknown, unknown>
      ? OutputType<Last>
      : never
    : never;

/**
 * Given a block, extract the input type
 *
 * @public
 */
export type InputType<T extends Block<unknown, unknown>> = Exclude<
  T['inputType'],
  undefined
>;

/**
 * Given a block, extract the output type
 *
 * @public
 */
export type OutputType<T extends Block<unknown, unknown>> =
  Exclude<T['outputType'], undefined> extends Promise<infer T>
    ? T
    : Exclude<T['outputType'], undefined>;

/**
 * @public
 *
 * Block output type without undefined
 */
export type OutputTypeKeepPromise<T extends Block<unknown, unknown>> = Exclude<
  T['outputType'],
  undefined
>;

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
  I,
  O,
  A extends readonly Block<unknown, unknown>[],
> = A extends readonly [infer Only extends Block<unknown, unknown>]
  ? InputType<Only> extends Partial<I>
    ? OutputType<Only> extends O
      ? readonly [Only]
      : never
    : never
  : A extends readonly [
        infer First extends Block<unknown, unknown>,
        ...infer Rest extends readonly Block<unknown, unknown>[],
      ]
    ? InputType<First> extends Partial<I>
      ? readonly [
          First,
          ...ValidInputOutputSequence<OutputType<First>, O, Rest>,
        ]
      : never
    : never;

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
