declare module 'tsx/esm/api' {
  // eslint-disable-next-line no-var
  var tsImport: (path: string, currentPath: string) => Promise<unknown>;
}
