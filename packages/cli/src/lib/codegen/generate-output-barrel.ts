import { factory } from 'typescript';
import { generateTsFile } from './generate-ts-file.ts';

export const generateOutputBarrel = async (folder: string) => {
  const nodes = factory.createNodeArray([
    factory.createExportDeclaration(
      undefined,
      false,
      undefined,
      factory.createStringLiteral(`./entities/index.ts`),
      undefined,
    ),
    factory.createExportDeclaration(
      undefined,
      false,
      undefined,
      factory.createStringLiteral(`./services/index.ts`),
      undefined,
    ),
  ]);

  await generateTsFile(folder, `index.ts`, factory.createNodeArray(nodes));
};
