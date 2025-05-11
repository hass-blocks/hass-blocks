import { State } from '@hass-blocks/hass-ts';
import { generateTsFile } from './generate-ts-file.ts';
import { join } from 'path';
import ts, { factory, NodeFlags, SyntaxKind } from 'typescript';
import { splitId } from './split-id.ts';
import { toCamel } from './to-camel.ts';

export const generateDomainEntities = async (
  folder: string,
  domain: string,
  states: State[],
) => {
  const entityIdentifier = factory.createIdentifier('entity');
  const iTargetIdentifier = factory.createIdentifier('ITarget');
  const importStatement = factory.createImportDeclaration(
    undefined,
    factory.createImportClause(
      false,
      undefined,
      factory.createNamedImports([
        factory.createImportSpecifier(false, undefined, entityIdentifier),
        factory.createImportSpecifier(false, undefined, iTargetIdentifier),
      ]),
    ),
    factory.createStringLiteral('@hass-blocks/core'),
  );

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
                  factory.createIdentifier('ITarget'),
                  undefined,
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
        ts.factory.createCallExpression(entityIdentifier, undefined, [
          ts.factory.createStringLiteral(state.entity_id),
        ]),
      ),
    );
  });

  await generateTsFile(
    join(folder, `entities`),
    `${domain}.ts`,
    ts.factory.createNodeArray([
      importStatement,
      ts.factory.createIdentifier('\n'),
      moduleBlock,
      ts.factory.createIdentifier('\n'),
      ...entities,
    ]),
  );
};
