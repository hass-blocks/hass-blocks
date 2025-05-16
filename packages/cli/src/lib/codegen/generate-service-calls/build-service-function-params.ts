import type { Service } from '@hass-blocks/hass-ts';
import {
  factory,
  type Identifier,
  type ParameterDeclaration,
  SyntaxKind,
} from 'typescript';
import type { ImportedIdentifier } from '@lib/codegen/utils/imported-identifier.ts';
import { serviceHasTarget } from './service-has-target.ts';
import { buildIentityTypeParam } from './build-ientity-type-param.ts';
import type { PropsInterface } from './props-interface.ts';

export const buildServiceFunctionParams = (
  propsIdentifier: PropsInterface,
  iEntityIdentifier: ImportedIdentifier,
  iAreaIdentifier: ImportedIdentifier,
  targetIdentifier: Identifier,
  service: Service,
  addTypes = true,
): ParameterDeclaration[] => {
  return [
    ...(serviceHasTarget(service)
      ? [
          factory.createParameterDeclaration(
            undefined,
            undefined,
            targetIdentifier,
            undefined,
            addTypes
              ? factory.createUnionTypeNode([
                  factory.createTypeReferenceNode(
                    iEntityIdentifier.getIdentifier(),
                    buildIentityTypeParam(service),
                  ),
                  factory.createTypeReferenceNode(
                    iAreaIdentifier.getIdentifier(),
                    undefined,
                  ),
                ])
              : undefined,
            undefined,
          ),
        ]
      : []),
    ...(propsIdentifier.hasProps()
      ? [
          factory.createParameterDeclaration(
            undefined,
            undefined,
            factory.createIdentifier('params'),
            propsIdentifier.allOptional() || !addTypes
              ? undefined
              : factory.createToken(SyntaxKind.QuestionToken),
            addTypes
              ? factory.createTypeReferenceNode(
                  propsIdentifier.identifier,
                  undefined,
                )
              : undefined,
            undefined,
          ),
        ]
      : []),
  ];
};
