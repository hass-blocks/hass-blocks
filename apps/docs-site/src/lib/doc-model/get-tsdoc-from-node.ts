import {
  ApiDocumentedItem,
  type ApiItem,
} from '@microsoft/api-extractor-model';
import { parseTsDoc } from './parse-ts-doc';

export const getTsDocFromNode = (item: ApiItem) => {
  if (!(item instanceof ApiDocumentedItem) || !item.tsdocComment) {
    return undefined;
  }

  return parseTsDoc(item.tsdocComment);
};
