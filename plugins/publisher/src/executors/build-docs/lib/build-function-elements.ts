import { h2 } from 'ts-markdown';
import { paramsTable } from './build-params-table.ts';
import { ApiFunction, ApiItem } from '@microsoft/api-extractor-model';
import { renderTokens } from './render-tokens.ts';
import { component } from './components.ts';

export const buildFunctionElements = async (item: ApiItem) => {
  const { openingTag, closingTag } = component("CodeBlock", {})
  if (item instanceof ApiFunction) {
    return [
      h2('Parameters'),
      paramsTable(item),
      h2('Return Type'),
      openingTag(false),
      ...renderTokens(item, item.returnTypeExcerpt),
      closingTag()
    ];
  }

  return [];
};
