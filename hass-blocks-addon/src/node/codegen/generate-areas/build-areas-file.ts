import { factory, type ExpressionStatement } from 'typescript';

import {
  DeclareGlobalBlock,
  ImportStatement,
  generateTsFile,
} from '../../codegen/utils/index.ts';

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
