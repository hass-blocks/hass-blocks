import { factory, Identifier, NodeFlags } from 'typescript';
import { buildServiceFunctionParams } from './build-service-function-params.ts';
import { makeServiceIdentifier } from './make-service-identifier.ts';
import type { Service } from '@hass-blocks/hass-ts';
import { addDocCommentToNode } from '@lib/codegen/utils/add-doc-comment-to-node.ts';
import { ImportedIdentifier } from '@lib/codegen/utils/imported-identifier.ts';

export const buildServiceType = (
  service: Service,
  serviceName: string,
  iEntityIdentifier: ImportedIdentifier,
  targetIdentifier: Identifier,
  blockIdentifier: ImportedIdentifier,
  iAreaIdentifer: ImportedIdentifier,
) => {
  const propsIdentifier = makeServiceIdentifier(service, serviceName);
  const varStatement = factory.createVariableStatement(
    undefined,
    factory.createVariableDeclarationList(
      [
        factory.createVariableDeclaration(
          factory.createIdentifier(serviceName),
          undefined,
          factory.createFunctionTypeNode(
            undefined,
            buildServiceFunctionParams(
              propsIdentifier,
              iEntityIdentifier,
              iAreaIdentifer,
              targetIdentifier,
              service,
            ),
            factory.createTypeReferenceNode(
              blockIdentifier.getIdentifier(),
              undefined,
            ),
          ),
          undefined,
        ),
      ],
      NodeFlags.ContextFlags,
    ),
  );

  addDocCommentToNode(varStatement, service.description);
  return varStatement;
};
