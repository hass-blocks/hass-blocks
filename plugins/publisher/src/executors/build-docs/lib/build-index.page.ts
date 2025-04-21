import { ApiItem, ApiItemKind } from '@microsoft/api-extractor-model';
import { configureAndRender } from './configure-and-render.ts';
import { getDocSummary } from './get-doc-summary.ts';
import { frontmatter, p } from 'ts-markdown';
import { importStatement } from './components.ts';
import { buildTypeSection } from './build-type-section.ts';

export const buildIndexPage = async (item: ApiItem, folder: string) => {
  const members = item.members[0].members;

  const document = [
    frontmatter({
      title: item.displayName,
      description: getDocSummary(item),
    }),
    importStatement(),
    p(getDocSummary(item)),
    ...buildTypeSection('Functions', ApiItemKind.Function, members),
    ...buildTypeSection('Interfaces', ApiItemKind.Interface, members),
    ...buildTypeSection('Classes', ApiItemKind.Class, members),
    ...buildTypeSection('Type Aliases', ApiItemKind.TypeAlias, members),
  ];

  await configureAndRender(folder, 'index.md', document);
};
