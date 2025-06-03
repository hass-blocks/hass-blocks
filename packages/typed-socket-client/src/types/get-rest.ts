// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type GetRest<T extends any[]> = T extends [unknown, ...infer Rest]
  ? Rest
  : never;
