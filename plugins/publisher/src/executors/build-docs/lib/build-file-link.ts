import { ApiDeclaredItem, ApiItem } from '@microsoft/api-extractor-model';
import { link } from 'ts-markdown';

export const buildFileLink = (item: ApiItem) => {
  if (item instanceof ApiDeclaredItem) {
    const url = `https://github.com/benwainwright/hass-blocks/blob/main/${item.fileUrlPath}`;
    return link({
      text: item.fileUrlPath,
      href: url,
    });
  }
  return {};
};
