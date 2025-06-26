import { factory, type ExpressionStatement } from 'typescript';

import {
  type ImportStatement,
  generateTsFile,
  DeclareGlobalBlock,
} from '../../codegen/utils/index.ts';

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
