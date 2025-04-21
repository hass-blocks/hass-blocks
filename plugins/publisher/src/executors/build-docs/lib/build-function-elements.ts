import { codeblock, h2, p } from 'ts-markdown';
import { paramsTable } from './build-params-table.ts';
import { ApiFunction, ApiItem } from '@microsoft/api-extractor-model';
import { getCode } from './get-code.ts';

export const buildFunctionElements = async (item: ApiItem) => {
  if (item instanceof ApiFunction) {
    return [
      h2('Parameters'),
      paramsTable(item),
      h2('Return Type'),
      codeblock((await getCode(item.returnTypeExcerpt.text)).trim(), {
        language: 'TypeScript',
        fenced: '`',
      }),
    ];
  }

  return [];
};
