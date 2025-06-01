/**
 * @public
 *
 * Removes void from a union type, unless void is the only constituent of that type
 */
export type RemoveVoidIfNotOnlyVoid<T> =
  Exclude<T, void> extends never ? void : Exclude<T, void>;
