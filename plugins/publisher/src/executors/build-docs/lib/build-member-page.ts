import { ApiItem } from '@microsoft/api-extractor-model';
import { h1, p, frontmatter, h2 } from 'ts-markdown';
import { toTitleCase } from './to-title-case.ts';
import { buildExcerpt } from './build-excerpt.ts';
import { summary } from './build-summary-table.ts';
import { paramsTable } from './build-params-table.ts';
import { configureAndRender } from './configure-and-render.ts';
import { importStatement } from './components.ts';
import { getDocSummary } from './get-doc-summary.ts';

export const buildMemberPage = async (item: ApiItem, folder: string) => {
  const markdownDocument = [
    frontmatter({
      title: toTitleCase(item.displayName),
    }),
    importStatement(),
    h1(item.displayName),
    p(getDocSummary(item)),
    summary(item),
    h2('Signature'),
    await buildExcerpt(item),
    h2('Parameters'),
    paramsTable(item),
  ];

  await configureAndRender(item, folder, markdownDocument);
};
