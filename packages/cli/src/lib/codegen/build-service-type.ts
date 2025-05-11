import { factory, Identifier, NodeFlags } from 'typescript';
import { buildServiceFunctionParams } from './build-service-function-params.ts';
import { makeServiceIdentifier } from './make-service-identifier.ts';
import { Service } from '@hass-blocks/hass-ts';
import { addDocCommentToNode } from './add-doc-comment-to-node.ts';

export const buildServiceType = (
  service: Service,
  serviceName: string,
  iTargetIdentifier: Identifier | undefined,
  targetIdentifier: Identifier,
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
              iTargetIdentifier,
              targetIdentifier,
              service.fields,
            ),
            factory.createTypeReferenceNode(
              factory.createIdentifier('Block'),
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
