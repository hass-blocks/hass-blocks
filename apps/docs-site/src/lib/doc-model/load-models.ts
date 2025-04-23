import { ApiModel } from '@microsoft/api-extractor-model';
import { readdir } from 'fs/promises';
import { join } from 'path';

export const loadModels = async (folder: string) => {
  const model = new ApiModel();
  const files = await readdir(folder);

  const packages = files
    .filter((file) => file.endsWith('.json'))
    .map((file) => {
      return model.loadPackage(join(folder, file));
    });

  return { packages, model };
};
