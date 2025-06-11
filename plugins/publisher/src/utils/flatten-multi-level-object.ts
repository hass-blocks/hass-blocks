export const convertObjectToPathEntries = (
  obj: object,
  parentPath?: string,
): { path: string; value: string }[] => {
  return Object.entries(obj).flatMap(([key, value]) => {
    const fullParentPath = parentPath ? `${parentPath}.${key}` : key;
    return typeof value !== 'object'
      ? { path: fullParentPath, value }
      : convertObjectToPathEntries(value, fullParentPath);
  });
};

export const flattenMultiLevelObject = (obj: object) => {
  return Object.fromEntries(
    convertObjectToPathEntries(obj).map(({ path, value }) => [path, value]),
  );
};
