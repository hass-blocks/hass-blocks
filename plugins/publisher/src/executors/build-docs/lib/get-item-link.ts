import { ApiItem } from '@microsoft/api-extractor-model';
import { kebabize } from './kebabize.ts';

export const getItemLink = (item: ApiItem) => {
  return kebabize(item.displayName);
};
