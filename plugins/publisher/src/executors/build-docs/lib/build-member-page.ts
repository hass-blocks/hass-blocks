import { ApiItem } from '@microsoft/api-extractor-model';
import { h1, p, frontmatter, h2 } from 'ts-markdown';
import { toTitleCase } from './to-title-case.ts';
import { buildExcerpt } from './build-excerpt.ts';
import { summary } from './build-summary-table.ts';
import { configureAndRender } from './configure-and-render.ts';
import { importStatement } from './components.ts';
import { getDocSummary } from './get-doc-summary.ts';
import { kebabize } from './kebabize.ts';
import { trimLinebreak } from './trim-line-breaks.ts';
import { buildFunctionElements } from './build-function-elements.ts';

export const buildMemberPage = async (item: ApiItem, folder: string) => {
  const title = item.displayName.charAt(0).match(/[a-z]/)
    ? toTitleCase(item.displayName)
    : item.displayName;

  const markdownDocument = [
    frontmatter({
      title,
    }),
    importStatement(),
    h1(item.displayName),
    p(trimLinebreak(getDocSummary(item))),
    summary(item),
    h2('Signature'),
    await buildExcerpt(item),
    ...(await buildFunctionElements(item)),
  ];

  await configureAndRender(
    folder,
    `${kebabize(item.displayName)}.md`,
    markdownDocument,
  );
};
