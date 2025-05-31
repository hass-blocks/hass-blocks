import { factory, type ExpressionStatement } from 'typescript';
import type { DeclareGlobalBlock } from '../utils/declare-global-block.ts';
import type { ImportStatement } from '../utils/import-statement.ts';
import { generateTsFile } from '../utils/generate-ts-file.ts';
import { join } from 'path';

export const buildEntityFile = async (
  folder: string,
  domain: string,
  globalBlock: () => DeclareGlobalBlock,
  generateEntities: () => ExpressionStatement[],
  coreImport: ImportStatement,
) => {
  const declareGlobalBlock = globalBlock();
  const entities = generateEntities();
  await generateTsFile(
    join(folder, `entities`),
    `${domain}.ts`,
    factory.createNodeArray([
      coreImport.buildNode(),
      factory.createIdentifier('\n'),
      declareGlobalBlock.buildNode(),
      factory.createIdentifier('\n'),
      ...entities,
    ]),
  );
};
