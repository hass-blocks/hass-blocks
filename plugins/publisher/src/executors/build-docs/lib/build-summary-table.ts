import { ApiDeclaredItem, ApiItem } from '@microsoft/api-extractor-model';
import { component } from './components.ts';

export const summary = (item: ApiItem) => {
  if (item instanceof ApiDeclaredItem) {
    return component('SummaryTable', {
      name: item.displayName,
      type: item.kind,
      path: item.fileUrlPath,
    });
  }

  return {};
};
