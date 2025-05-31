/**
 * @public
 *
 * Returns never unless a type includes undefine
 * d
 */
export type MustIncludeUndefined<T> = undefined extends T ? T : never;
