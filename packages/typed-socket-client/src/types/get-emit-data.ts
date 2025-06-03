export type GetEmitData<T> = T extends (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any,
  emit: (data: infer TEmitData) => void,
) => unknown
  ? TEmitData
  : never;
