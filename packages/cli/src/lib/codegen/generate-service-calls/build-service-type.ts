import { factory, type Identifier, NodeFlags } from 'typescript';
import { buildServiceFunctionParams } from './build-service-function-params.ts';
import type { Service } from '@hass-blocks/hass-ts';
import { addDocCommentToNode } from '@lib/codegen/utils/add-doc-comment-to-node.ts';
import type { ImportedIdentifier } from '@lib/codegen/utils/imported-identifier.ts';
import type { PropsInterface } from './props-interface.ts';

export const buildServiceType = (
  service: Service,
  serviceName: string,
  iEntityIdentifier: ImportedIdentifier,
  targetIdentifier: Identifier,
  blockIdentifier: ImportedIdentifier,
  iAreaIdentifer: ImportedIdentifier,
  props: PropsInterface,
) => {
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
              props,
              iEntityIdentifier,
              iAreaIdentifer,
              targetIdentifier,
              service,
            ),
            factory.createTypeReferenceNode(
              blockIdentifier.getIdentifier(true),
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
