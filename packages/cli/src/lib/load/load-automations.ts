import path, { join } from 'path';
import { readdir, stat } from 'fs/promises';
import { loadCodegen } from './load-codegen.ts';
import { isAutomation } from './is-automation.ts';

export const loadAutomations = async (folder: string) => {
  await loadCodegen(folder);
  const files = await readdir(folder);

  return (
    await Promise.all(
      files.map(async (file) => {
        const filePath = path.resolve(folder, join(folder, file));
        const stats = await stat(filePath);

        if (!stats.isFile() || path.extname(file) !== '.ts') {
          return;
        }

        const loadedFile = (await import(filePath)) as Record<string, unknown>;

        return Object.values(loadedFile);
      }),
    )
  )
    .flat()
    .flatMap((item) => (item ? [item] : []))
    .filter(isAutomation);
};
