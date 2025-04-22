import { ApiDeclaredItem, ApiItem } from "@microsoft/api-extractor-model";

export const getDeclaredItemUrl = (item: ApiItem) => {
  if (item instanceof ApiDeclaredItem) {
    return `https://github.com/benwainwright/hass-blocks/blob/main/${item.fileUrlPath}`;
  }

  return ``
}
