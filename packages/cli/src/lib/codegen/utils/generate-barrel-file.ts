import { factory } from 'typescript';
import { generateTsFile } from './generate-ts-file.ts';

export const generateBucketFile = async (folder: string, domains: string[]) => {
  const nodes = factory.createNodeArray(
    domains.map((domain) => {
      return factory.createImportDeclaration(
        undefined,
        undefined,
        factory.createStringLiteral(`./${domain}.ts`),
        undefined,
      );
    }),
  );

  await generateTsFile(folder, `index.ts`, factory.createNodeArray(nodes));
};
