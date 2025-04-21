import { ApiDocumentedItem, ApiItem } from '@microsoft/api-extractor-model';
import { p } from 'ts-markdown';

export const buildDescription = (item: ApiItem) => {
  if (
    item instanceof ApiDocumentedItem &&
    item.tsdocComment &&
    item.displayName === 'action'
  ) {
    const { summarySection } = item.tsdocComment;
    console.log(summarySection.nodes);
    return p(summarySection ?? '');
  }

  return {};
};
