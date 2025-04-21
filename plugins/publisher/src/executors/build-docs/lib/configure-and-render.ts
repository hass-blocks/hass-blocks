import { getRenderers, MarkdownEntry, tsMarkdown } from 'ts-markdown';
import { componentRenderer, importRenderer } from './components.ts';
import { join } from 'path';
import { createDirIfNotExists } from '../../../lib/create-dir-if-not-exists.ts';
import { writeFile } from 'fs/promises';
import { lineBreakRenderer } from './soft-break-renderer.ts';

export const configureAndRender = async (
  folder: string,
  fileName: string,
  document: MarkdownEntry[],
) => {
  const markdownString = tsMarkdown(document, {
    renderers: getRenderers({
      import: importRenderer,
      component: componentRenderer,
      linebreak: lineBreakRenderer,
    }),
  });

  const fullFilePath = join(folder, fileName);

  createDirIfNotExists(folder);
  await writeFile(fullFilePath, markdownString);
};
