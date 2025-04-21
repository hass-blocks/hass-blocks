import * as prettier from 'prettier';

export const getCode = async (code: string) => {
  try {
    return await prettier.format(code, { parser: 'typescript' });
  } catch {
    return await prettier.format(`${code} { }`, { parser: 'typescript' });
  }
};
