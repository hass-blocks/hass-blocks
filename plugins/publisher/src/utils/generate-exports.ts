export const generateExports = (
  exports:
    | string
    | Record<
        string,
        | string
        | {
            types?: string;
            require?: string;
            import?: string;
            development?: string;
            default?: string;
          }
      >
    | undefined,
) => {
  const isPackageWithObjectExports = exports && typeof exports !== 'string';

  if (!isPackageWithObjectExports) {
    return undefined;
  }

  const realExports = Object.entries(exports)
    .filter(([key]) => key !== './package.json')
    .flatMap(([key, value]) =>
      typeof value !== 'string' ? [{ key, value }] : [],
    )
    .flatMap(({ key, value }) =>
      typeof value['development'] === 'string' ? [{ key, value }] : [],
    )
    .flatMap(({ key, value }) =>
      typeof value['types'] === 'string' ? [{ key, value }] : [],
    )
    .map(({ key, value }) => ({
      output: value.types ?? '',
      entry: value.development ?? '',
      name: key,
    }));

  if (realExports.length === 0) {
    return undefined;
  }

  return realExports;
};
