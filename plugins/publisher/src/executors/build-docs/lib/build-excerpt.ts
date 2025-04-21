import { ApiDeclaredItem, ApiItem } from '@microsoft/api-extractor-model';
import { codeblock } from 'ts-markdown';
import { getCode } from './get-code.ts';

export const buildExcerpt = async (item: ApiItem) => {
  if (item instanceof ApiDeclaredItem) {
    return codeblock((await getCode(item.excerpt.text)).trim(), {
      language: 'TypeScript',
      fenced: '`',
    });
  }
  return {};
};
