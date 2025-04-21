import { ApiPackage } from '@microsoft/api-extractor-model';

/**
 * Workaround for the weird TS error when I actually import ApiItem
 */
export type ApiItemType = ApiPackage['members'][number];
