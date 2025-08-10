import { type PromiseExecutor, logger } from '@nx/devkit';
import * as path from 'path';
import {
  checkCodeBlocks,
  TypeScriptChecker,
} from '@hass-blocks/code-block-extractor';

interface VerityDocsExecutorProps {
  markdownFiles: string[];
  tsconfigPath: string;
}

export const verifyDocsExecutor: PromiseExecutor<
  VerityDocsExecutorProps
> = async (options, context) => {
  try {
    const { root } = context;
    const projectRoot = path.join(root, path.dirname(options.tsconfigPath));
    const packageJson = path.join(projectRoot, `package.json`);

    process.chdir(projectRoot);

    const typescriptChecker = new TypeScriptChecker({
      tsconfigPath: path.join(root, options.tsconfigPath),
      packageJsonPath: packageJson,
      workingDirectory: process.cwd(),
    });

    const { files, hasErrors } = await checkCodeBlocks({
      checkers: [typescriptChecker],
      markdownFiles: options.markdownFiles.map((item) => path.join(root, item)),
    });

    if (!hasErrors) {
      const blockCount = files.reduce(
        (accum, file) => file.codeBlocks.length + accum,
        0,
      );

      logger.info(
        `Successfully checked ${blockCount} blocks across ${files.length} files`,
      );

      return {
        success: true,
      };
    }

    files.forEach((item) => {
      const withErrors = item.codeBlocks.filter((block) => block.hasErrors);
      if (withErrors.length > 0) {
        logger.error(`${withErrors.length} errors found in ${item.filePath}`);

        withErrors.forEach((block) => {
          logger.error(`\nLines ${block.startLine} to ${block.endLine}:`);
          block.failedCheckResults.entries().forEach(([key, value]) => {
            logger.error(`[${key}] ${value.message}`);
          });
        });
      }
    });

    return {
      success: false,
    };
  } catch (error) {
    logger.error(error);
    return { success: false };
  }
};

export default verifyDocsExecutor;
