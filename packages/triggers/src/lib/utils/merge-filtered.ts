export const mergeFiltered = <
  T extends Record<string, unknown>,
  M extends Record<string, unknown | undefined>,
>(
  obj: T,
  toMerge: M,
) => {
  const filtered = Object.fromEntries(
    Object.entries(toMerge).flatMap(([key, value]) =>
      value ? [[key, value]] : [],
    ),
  );

  return { ...obj, ...filtered };
};
