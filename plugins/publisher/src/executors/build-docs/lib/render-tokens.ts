import { ApiItem, Excerpt } from '@microsoft/api-extractor-model';
import { component } from './components.ts';
import { getOriginalApiItemFromExcerptToken } from './get-original-api-item-from-excerpt-token.ts';
import { getItemLink } from './get-item-link.ts';

export const renderTokens = (context: ApiItem, excerpt: Excerpt) => {
  return excerpt.spannedTokens.map((token) => {
    const item = getOriginalApiItemFromExcerptToken(context, token);
    const link = item ? getItemLink(item) : undefined;

    const { openingTag: theComponent } = component('Token', {
      text: token.text,
      link,
    });

    return theComponent(true);
  });
};
