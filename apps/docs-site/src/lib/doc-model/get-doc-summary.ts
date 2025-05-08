import {
  ApiDocumentedItem,
  type ApiItem,
} from '@microsoft/api-extractor-model';
import { parseTsDoc } from './parse-ts-doc';

export const getDocSummary = (item: ApiItem) => {
  if (item instanceof ApiDocumentedItem && item.tsdocComment) {
    return parseTsDoc(item.tsdocComment).summary;
  }

  return [];
};
