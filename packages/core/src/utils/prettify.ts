/**
 * @public
 *
 * Prettify a type
 */
export type Prettify<T> = {
  [K in keyof T]: T[K];
} & {};
