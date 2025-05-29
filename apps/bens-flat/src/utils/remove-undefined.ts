export const removeUndefined = <T extends object>(obj: T) =>
  Object.fromEntries(
    Object.entries(obj).flatMap(([key, value]) =>
      value ? [[key, value]] : [],
    ),
  );
