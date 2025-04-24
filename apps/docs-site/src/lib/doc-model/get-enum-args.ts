import { ApiEnum, type ApiItem } from '@microsoft/api-extractor-model';

export const getEnumArgs = (member: ApiItem) => {
  return member instanceof ApiEnum ? {} : {};
};
