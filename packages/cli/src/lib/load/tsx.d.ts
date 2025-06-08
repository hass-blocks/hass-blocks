declare module 'tsx/esm/api' {
  // eslint-disable-next-line no-var
  var tsImport: (path: string, parentPath: string) => Promise<unknown>;
}
