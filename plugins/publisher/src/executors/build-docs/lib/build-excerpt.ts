import { ApiDeclaredItem, ApiItem } from '@microsoft/api-extractor-model';
import { codeblock } from 'ts-markdown';
import * as prettier from 'prettier';

const getCode = async (code: string) => {
  try {
    return await prettier.format(code, { parser: 'typescript' });
  } catch {
    return await prettier.format(`${code} { }`, { parser: 'typescript' });
  }
};

export const buildExcerpt = async (item: ApiItem) => {
  if (item instanceof ApiDeclaredItem) {
    return codeblock((await getCode(item.excerpt.text)).trim(), {
      language: 'TypeScript',
      fenced: '`',
    });
  }
  return {};
};
