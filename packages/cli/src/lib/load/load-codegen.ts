import { existsSync } from 'fs';
import path from 'path';

export const loadCodegen = async (folder: string) => {
  const thePath = path.resolve(folder, `.blocks`, `index.ts`);

  if (existsSync(thePath)) {
    console.log(`Loading codegen`);
    await import(thePath);
  } else {
    throw new Error('Codegen index file not found...');
  }
};
