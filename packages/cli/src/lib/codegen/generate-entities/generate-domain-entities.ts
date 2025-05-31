import ts, { factory } from 'typescript';
import type { State } from '@hass-blocks/hass-ts';
import { ImportStatement } from '@lib/codegen/utils/import-statement.ts';

import { DeclareGlobalBlock } from '../utils/declare-global-block.ts';
import type { GlobalNames } from '../utils/global-names.ts';

export const generateDomainEntities = (
  folder: string,
  domain: string,
  states: State[],
  globalNames: GlobalNames,
) => {
  const coreImport = new ImportStatement('@hass-blocks/core');

  const entityIdentifier = coreImport.newIdentifier('entity');
  const iEntityIdentifier = coreImport.newIdentifier('IEntity', true);

  const entityNames = Object.fromEntries(
    states.map((state) => [
      state.entity_id,
      globalNames.addEntity(state.entity_id),
    ]),
  );

  const generateDeclareGlobalBlock = () =>
    new DeclareGlobalBlock(
      states.map((state) => {
        const name = entityNames[state.entity_id];
        if (!name) {
          throw new Error('name not found!');
        }
        return factory.createVariableStatement(
          undefined,
          factory.createVariableDeclarationList(
            [
              factory.createVariableDeclaration(
                name.identifier,
                undefined,
                factory.createTypeReferenceNode(
                  iEntityIdentifier.getIdentifier(),
                  [
                    factory.createLiteralTypeNode(
                      factory.createNoSubstitutionTemplateLiteral(
                        state.entity_id,
                        state.entity_id,
                      ),
                    ),
                  ],
                ),
                undefined,
              ),
            ],
            ts.NodeFlags.ContextFlags,
          ),
        );
      }),
    );

  const generateEntities = () =>
    states.map((state) => {
      const name = entityNames[state.entity_id];
      if (!name) {
        throw new Error('name not found!');
      }
      return ts.factory.createExpressionStatement(
        ts.factory.createBinaryExpression(
          ts.factory.createPropertyAccessExpression(
            ts.factory.createIdentifier('globalThis'),
            name.identifier,
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

  return {
    generateEntities,
    generateDeclareGlobalBlock,
    domain,
    folder,
    coreImport,
  };
};
