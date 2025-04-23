import {
  ApiInterface,
  ApiPropertySignature,
  type ApiItem,
} from '@microsoft/api-extractor-model';
import { renderExcerptToTokens } from './render-excerpt-tokens';
import { getDocSummary } from './get-doc-summary';

export const getInterfaceArgs = (member: ApiItem) => {
  return member instanceof ApiInterface
    ? {
        members: member.members.map((item) =>
          item instanceof ApiPropertySignature
            ? {
                name: item.displayName,
                type: renderExcerptToTokens(item, item.propertyTypeExcerpt),
                description: getDocSummary(item),
              }
            : {},
        ),
      }
    : {};
};
