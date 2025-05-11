import { State } from '@hass-blocks/hass-ts';
import { generateTsFile } from './generate-ts-file.ts';
import { join } from 'path';
import ts from 'typescript';
import { splitId } from './split-id.ts';
import { toCamel } from './to-camel.ts';

export const generateDomainEntities = async (
  folder: string,
  domain: string,
  states: State[],
) => {
  const entityIdentifier = ts.factory.createIdentifier('entity');
  const importStatement = ts.factory.createImportDeclaration(
    undefined,
    ts.factory.createImportClause(
      false,
      undefined,
      ts.factory.createNamedImports([
        ts.factory.createImportSpecifier(false, undefined, entityIdentifier),
      ]),
    ),
    ts.factory.createStringLiteral('@hass-blocks/core'),
  );

  const entities = states.map((state) => {
    const { domain, id } = splitId(state.entity_id);
    const domainString = domain ? `_${domain}` : ``;
    const variableName = toCamel(`${id}${domainString}`);

    return ts.factory.createVariableStatement(
      [ts.factory.createToken(ts.SyntaxKind.ExportKeyword)],
      ts.factory.createVariableDeclarationList(
        [
          ts.factory.createVariableDeclaration(
            variableName,
            undefined,
            undefined,
            ts.factory.createCallExpression(entityIdentifier, undefined, [
              ts.factory.createStringLiteral(state.entity_id),
            ]),
          ),
        ],
        ts.NodeFlags.Const,
      ),
    );
  });

  await generateTsFile(
    join(folder, `entities`),
    `${domain}.ts`,
    ts.factory.createNodeArray([
      importStatement,
      ts.factory.createIdentifier('\n'),
      ...entities,
    ]),
  );
};
