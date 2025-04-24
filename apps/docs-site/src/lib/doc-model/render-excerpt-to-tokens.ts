import {
  ApiItem,
  ExcerptTokenKind,
  type Excerpt,
} from '@microsoft/api-extractor-model';
import { getOriginalApiItemFromExcerptToken } from './get-original-api-item-from-excerpt-token';

import { kebabize } from '../utils/kebabize';

import type { ExcerptToken } from '@types';

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
