import {
  ApiEnum,
  ApiEnumMember,
  ApiFunction,
  ApiInterface,
  ApiMethodSignature,
  ApiPropertySignature,
  type ApiItem,
} from '@microsoft/api-extractor-model';

import { renderExcerptToTokens } from './render-excerpt-to-tokens';
import { getFunctionArgs } from './get-function-args';

import type {
  EnumArgs,
  FunctionArgs,
  InterfaceArgs,
  PropertyArgs,
} from '@types';
import { getTsDocFromNode } from './get-tsdoc-from-node';
import type { EnumMemberArgs } from 'src/types/enum-member-args';

export const getMemberArgs = (
  member: ApiItem,
): InterfaceArgs | FunctionArgs | EnumArgs | undefined => {
  if (member instanceof ApiInterface) {
    return {
      members: member.members.flatMap<PropertyArgs | FunctionArgs>((item) => {
        if (item instanceof ApiPropertySignature) {
          return [
            {
              name: item.displayName,
              type: renderExcerptToTokens(item, item.propertyTypeExcerpt),
              tsDoc: getTsDocFromNode(item),
            },
          ];
        }

        if (
          item instanceof ApiMethodSignature ||
          item instanceof ApiEnumMember
        ) {
          const args = getFunctionArgs(item);
          return args ? [args] : [];
        }

        return [];
      }),
    };
  }

  if (member instanceof ApiEnum) {
    return {
      enumMembers: member.members.flatMap<EnumMemberArgs>((item) => {
        if (item instanceof ApiEnumMember) {
          return [
            {
              name: item.displayName,
              tsDoc: getTsDocFromNode(item),
            },
          ];
        }

        return [];
      }),
    };
  }

  if (member instanceof ApiFunction || member instanceof ApiMethodSignature) {
    return {
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
    };
  }

  return undefined;
};
