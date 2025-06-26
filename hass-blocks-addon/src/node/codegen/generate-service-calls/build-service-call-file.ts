import { join } from 'path';
import { generateTsFile } from '@codegen/utils';
import {
  factory,
  type ExpressionStatement,
  type Identifier,
  type NodeArray,
} from 'typescript';
import type { ImportStatement } from '../utils/import-statement.ts';
import { newLine } from './new-line.ts';
import type { DeclareGlobalBlock } from '../utils/declare-global-block.ts';

export const buildServiceCallFile = async (
  folder: string,
  domain: string,
  globalBlock: DeclareGlobalBlock,
  coreImport: ImportStatement,
  generateServiceNodes: () => NodeArray<ExpressionStatement | Identifier>,
) => {
  const serviceNodes = generateServiceNodes();
  await generateTsFile(
    join(folder, `services`),
    `${domain}.ts`,
    factory.createNodeArray([
      coreImport.buildNode(),
      newLine(),
      globalBlock.buildNode(),
      ...serviceNodes,
    ]),
  );
};
