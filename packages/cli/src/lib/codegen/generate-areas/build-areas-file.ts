import { factory, type ExpressionStatement } from 'typescript';
import type { DeclareGlobalBlock } from '../utils/declare-global-block.ts';
import type { ImportStatement } from '../utils/import-statement.ts';
import { generateTsFile } from '../utils/generate-ts-file.ts';
import { join } from 'path';
import { newLine } from '../generate-service-calls/new-line.ts';

export const buildAreasFile = async (
  folder: string,
  generateGlobalBlock: () => DeclareGlobalBlock,
  coreImport: ImportStatement,
  generateAreas: () => ExpressionStatement[],
) => {
  const areas = generateAreas();
  const globalBlock = generateGlobalBlock();
  await generateTsFile(
    join(folder),
    `areas.ts`,
    factory.createNodeArray([
      coreImport.buildNode(),
      newLine(),
      globalBlock.buildNode(),
      ...areas,
    ]),
  );
};
