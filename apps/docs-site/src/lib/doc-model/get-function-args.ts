import { ApiFunction, type ApiItem } from '@microsoft/api-extractor-model';
import { renderExcerptToTokens } from './render-excerpt-tokens';

export const getFunctionArgs = (member: ApiItem) =>
  member instanceof ApiFunction
    ? {
        returnValue: renderExcerptToTokens(member, member.returnTypeExcerpt),
        params: member.parameters.map((param) => ({
          name: param.name,
          excerptTokens: renderExcerptToTokens(
            member,
            param.parameterTypeExcerpt,
          ),
        })),
      }
    : {};
