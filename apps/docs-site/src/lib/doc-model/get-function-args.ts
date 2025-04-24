import {
  ApiFunction,
  ApiMethodSignature,
  type ApiItem,
} from '@microsoft/api-extractor-model';

import { renderExcerptToTokens } from './render-excerpt-to-tokens';

import type { FunctionArgs } from '@types';
import { getTsDocFromNode } from './get-tsdoc-from-node';

export const getFunctionArgs = (member: ApiItem): FunctionArgs | undefined =>
  member instanceof ApiFunction || member instanceof ApiMethodSignature
    ? {
        name: member.displayName,
        signature: member.excerpt.text,
        returnValue: renderExcerptToTokens(member, member.returnTypeExcerpt),
        tsDoc: getTsDocFromNode(member),
        params: member.parameters.map((param) => ({
          name: param.name,
          excerptTokens: renderExcerptToTokens(
            member,
            param.parameterTypeExcerpt,
          ),
        })),
      }
    : undefined;
