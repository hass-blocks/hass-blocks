import ts, { factory, type StringLiteral } from 'typescript';
import type { State } from '@hass-blocks/hass-ts';
import {
  ImportStatement,
  DeclareGlobalBlock,
  GlobalNames,
  addDocCommentToNode,
} from '@lib/codegen/utils';

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
        const varStatement = factory.createVariableStatement(
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

        if (typeof state.attributes['friendly_name'] === 'string') {
          addDocCommentToNode(varStatement, state.attributes['friendly_name']);
        }
        return varStatement;
      }),
    );

  const generateEntities = () =>
    states.map((state) => {
      const name = entityNames[state.entity_id];
      if (!name) {
        throw new Error('name not found!');
      }
      const friendlyName: StringLiteral[] =
        typeof state.attributes['friendly_name'] === 'string'
          ? [ts.factory.createStringLiteral(state.attributes['friendly_name'])]
          : [];

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
            [ts.factory.createStringLiteral(state.entity_id), ...friendlyName],
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
