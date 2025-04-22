import { ApiItem, ApiItemKind } from '@microsoft/api-extractor-model';
import { h2 } from 'ts-markdown';
import { component } from './components.ts';
import { getDocSummary } from './get-doc-summary.ts';
import { getItemLink } from './get-item-link.ts';

export const buildTypeSection = (
  title: string,
  kind: ApiItemKind,
  members: readonly ApiItem[],
) => {
  const things = members.filter((member) => member.kind === kind);

  return things.length > 0
    ? [
        h2(title),
        component('MemberTable', {
          members: things.map((member) => ({
            name: member.displayName,
            url: getItemLink(member),
            kind: member.kind.toString(),
            description: getDocSummary(member),
          })),
        }),
      ]
    : [];
};
