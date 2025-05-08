export const normalisePath = (path: string) => {
  if (path.startsWith('/')) {
    return path;
  }
  return `/${path}`;
};
