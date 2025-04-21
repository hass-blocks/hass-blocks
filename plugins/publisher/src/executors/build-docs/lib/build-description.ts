import {
  ApiDocumentedItem,
  ApiFunction,
  ApiItem,
} from '@microsoft/api-extractor-model';
import { p } from 'ts-markdown';
import { DocComment } from '@microsoft/tsdoc';

const getSummarySectionText = (docComment: DocComment) => {
  const { summarySection } = docComment;
};

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
