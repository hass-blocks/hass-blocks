import { getRenderers, MarkdownEntry, tsMarkdown } from 'ts-markdown';
import { componentRenderer, importRenderer } from './components.ts';
import { kebabize } from './kebabize.ts';
import { join } from 'path';
import { createDirIfNotExists } from '../../../lib/create-dir-if-not-exists.ts';
import { writeFile } from 'fs/promises';
import { ApiItem } from '@microsoft/api-extractor-model';

export const configureAndRender = async (
  item: ApiItem,
  folder: string,
  document: MarkdownEntry[],
) => {
  const markdownString = tsMarkdown(document, {
    renderers: getRenderers({
      import: importRenderer,
      component: componentRenderer,
    }),
  });

  const fileName = join(folder, `${kebabize(item.displayName)}.md`);

  createDirIfNotExists(folder);
  await writeFile(fileName, markdownString);
};
