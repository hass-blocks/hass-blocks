export const mapAsync = async <T extends unknown[], U>(
  theArray: T | undefined,
  callback: (item: T[number]) => Promise<U>,
) => {
  await Promise.all(
    theArray?.map(async (item) => {
      await callback(item);
    }) ?? [],
  );
};
