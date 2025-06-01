import type { HassArea } from '@hass-blocks/hass-ts';
import type { GlobalNames } from '../utils/global-names.ts';
import { ImportStatement } from '../utils/import-statement.ts';
import { DeclareGlobalBlock } from '../utils/declare-global-block.ts';
import ts, { factory } from 'typescript';
import { addDocCommentToNode } from '../utils/add-doc-comment-to-node.ts';

export const generateAreaFile = (areas: HassArea[], names: GlobalNames) => {
  const coreImport = new ImportStatement('@hass-blocks/core');

  const entityIdentifier = coreImport.newIdentifier('area');
  const iEntityIdentifier = coreImport.newIdentifier('IArea', true);

  const areaNames = Object.fromEntries(
    areas.map((state) => [state.area_id, names.addArea(state.area_id)]),
  );

  const generateDeclareGlobalBlock = () =>
    new DeclareGlobalBlock(
      areas.map((area) => {
        const name = areaNames[area.area_id];
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
                        area.area_id,
                        area.area_id,
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
        addDocCommentToNode(varStatement, area.name);
        return varStatement;
      }),
    );

  const generateAreas = () =>
    areas.map((state) => {
      const name = areaNames[state.area_id];
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
            [
              ts.factory.createStringLiteral(state.area_id),
              ts.factory.createStringLiteral(state.name),
            ],
          ),
        ),
      );
    });

  return { generateAreas, generateDeclareGlobalBlock, coreImport };
};
