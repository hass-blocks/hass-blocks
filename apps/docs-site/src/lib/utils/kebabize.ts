export const kebabize = (str: string | undefined) =>
  str?.replace(
    /[A-Z]+(?![a-z])|[A-Z]/g,
    ($, ofs) => (ofs ? '-' : '') + $.toLowerCase(),
  ) ?? '';
