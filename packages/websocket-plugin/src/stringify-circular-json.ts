export const stringifyCircularJSON = (obj: unknown) => {
  const seen = new WeakSet();
  return JSON.stringify(obj, (_key, value) => {
    if (value !== null && typeof value === 'object') {
      if (seen.has(value)) return;

      seen.add(value);
    }

    return value;
  });
};
