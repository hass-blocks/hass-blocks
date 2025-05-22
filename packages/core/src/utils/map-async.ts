export const mapAsync = async <T extends readonly unknown[], U>(
  theArray: T | undefined,
  callback: (item: T[number]) => Promise<U>,
) => {
  return await Promise.all(
    theArray?.map(async (item) => {
      await callback(item);
    }) ?? [],
  );
};
