import { join } from 'node:path';
import ts, { factory, NodeFlags, SyntaxKind } from 'typescript';
import type { State } from '@hass-blocks/hass-ts';
import { generateTsFile } from '@lib/codegen/utils/generate-ts-file.ts';
import { toCamel } from '@lib/codegen/utils/to-camel.ts';
import { ImportStatement } from '@lib/codegen/utils/import-statement.ts';

import { splitId } from './split-id.ts';
import { generateTypeParamsFromDomain } from '../utils/generate-type-params-from-domain.ts';

export const generateDomainEntities = async (
  folder: string,
  domain: string,
  states: State[],
) => {
  const coreImport = new ImportStatement('@hass-blocks/core');

  const entityIdentifier = coreImport.newIdentifier('entity');
  const iEntityIdentifier = coreImport.newIdentifier('IEntity');

  const getVariableNameFromState = (state: State) => {
    const { domain, id } = splitId(state.entity_id);
    const domainString = domain ? `_${domain}` : ``;
    return toCamel(`${id}${domainString}`);
  };

  const moduleBlock = factory.createModuleDeclaration(
    [factory.createToken(SyntaxKind.DeclareKeyword)],
    factory.createIdentifier('global'),
    factory.createModuleBlock(
      states.map((state) => {
        return factory.createVariableStatement(
          undefined,
          factory.createVariableDeclarationList(
            [
              factory.createVariableDeclaration(
                factory.createIdentifier(getVariableNameFromState(state)),
                undefined,
                factory.createTypeReferenceNode(
                  iEntityIdentifier.getIdentifier(),
                  [generateTypeParamsFromDomain(domain)],
                ),
                undefined,
              ),
            ],
            ts.NodeFlags.ContextFlags,
          ),
        );
      }),
    ),
    NodeFlags.GlobalAugmentation | ts.NodeFlags.ContextFlags,
  );

  const entities = states.map((state) => {
    return ts.factory.createExpressionStatement(
      ts.factory.createBinaryExpression(
        ts.factory.createPropertyAccessExpression(
          ts.factory.createIdentifier('globalThis'),
          ts.factory.createIdentifier(getVariableNameFromState(state)),
        ),
        ts.factory.createToken(ts.SyntaxKind.EqualsToken),
        ts.factory.createCallExpression(
          entityIdentifier.getIdentifier(),
          undefined,
          [ts.factory.createStringLiteral(state.entity_id)],
        ),
      ),
    );
  });

  await generateTsFile(
    join(folder, `entities`),
    `${domain}.ts`,
    ts.factory.createNodeArray([
      coreImport.buildNode(),
      ts.factory.createIdentifier('\n'),
      moduleBlock,
      ts.factory.createIdentifier('\n'),
      ...entities,
    ]),
  );
};
