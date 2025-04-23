import type { ApiPackage } from '@microsoft/api-extractor-model';

export const getUnscopedPackageName = (apiPackage: ApiPackage) => {
  const nameParts = apiPackage.displayName.split('/');
  return nameParts[nameParts.length - 1];
};
