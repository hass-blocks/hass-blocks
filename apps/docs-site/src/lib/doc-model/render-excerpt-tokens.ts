import {
  ApiItem,
  ExcerptTokenKind,
  type Excerpt,
} from '@microsoft/api-extractor-model';
import { getOriginalApiItemFromExcerptToken } from './get-original-api-item-from-excerpt-token';
import { kebabize } from '../kebabize';

export type ExcerptToken = ExcerptTokenWithLink | ExcerptTokenWithoutLink;

interface ExcerptTokenWithLink {
  text: string;
  url: string;
}

interface ExcerptTokenWithoutLink {
  text: string;
}

export const renderExcerptToTokens = (
  context: ApiItem,
  excerpt: Excerpt,
): ExcerptToken[] => {
  return excerpt.spannedTokens.map((token) => {
    if (token.kind === ExcerptTokenKind.Reference) {
      const item = getOriginalApiItemFromExcerptToken(context, token);
      return {
        text: token.text,
        url: kebabize(item?.displayName ?? ''),
      };
    }
    return { text: token.text };
  });
};
