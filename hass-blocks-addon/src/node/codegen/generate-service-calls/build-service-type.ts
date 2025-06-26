import { factory, type Identifier, NodeFlags, SyntaxKind } from 'typescript';
import { buildServiceFunctionParams } from './build-service-function-params.ts';
import type { Service } from '@hass-blocks/hass-ts';
import {
  addDocCommentToNode,
  ImportedIdentifier,
  ServiceName,
} from '../../codegen/utils/index.ts';
import type { PropsInterface } from './props-interface.ts';

export const buildServiceType = (
  service: Service,
  serviceName: ServiceName,
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
          serviceName.identifier,
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
              [
                factory.createUnionTypeNode([
                  factory.createTypeReferenceNode(
                    factory.createIdentifier('Partial'),
                    [
                      props.hasProps()
                        ? factory.createTypeReferenceNode(props.identifier)
                        : factory.createKeywordTypeNode(
                            SyntaxKind.UnknownKeyword,
                          ),
                    ],
                  ),
                  factory.createKeywordTypeNode(SyntaxKind.UndefinedKeyword),
                ]),
                factory.createKeywordTypeNode(SyntaxKind.VoidKeyword),
              ],
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
