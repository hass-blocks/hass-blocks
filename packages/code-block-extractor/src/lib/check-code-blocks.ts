import { readFile } from 'fs/promises';
import { MarkdownFile } from './markdown-file.ts';
import type { ICodeBlocksCheckerSettings } from './code-blocks-checker-settings.ts';

interface CheckCodeResult {
  files: MarkdownFile[];
  hasErrors: boolean;
}

/**
 * Main entry point for checking code blocks in markdown files.
 *
 * This function processes markdown files, extracts code blocks from them,
 * runs the specified checkers against the code blocks, and returns the
 * processed markdown files with check results.
 *
 * @param settings - Configuration containing markdown file paths and checkers
 * @returns Promise resolving to an array of MarkdownFile instances with check results
 */
export async function checkCodeBlocks(
  settings: ICodeBlocksCheckerSettings,
): Promise<CheckCodeResult> {
  const { markdownFiles, checkers } = settings;

  const markdownFilePromises = markdownFiles.map(async (filePath) => {
    const content = await readFile(filePath, 'utf-8');
    return new MarkdownFile(content, filePath);
  });

  const processedFiles = await Promise.all(markdownFilePromises);

  for (const checker of checkers) {
    for (const markdownFile of processedFiles) {
      for (const codeBlock of markdownFile.codeBlocks) {
        checker.addCodeBlock(codeBlock);
      }
    }
  }

  const checkPromises = checkers.map(
    async (checker) => await checker.checkAll(),
  );

  await Promise.all(checkPromises);

  const hasErrors = Boolean(
    processedFiles.find((file) =>
      file.codeBlocks.find((block) => block.hasErrors),
    ),
  );

  return { files: processedFiles, hasErrors };
}
