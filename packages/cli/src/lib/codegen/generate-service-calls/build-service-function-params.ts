import type { Service } from '@hass-blocks/hass-ts';
import {
  factory,
  Identifier,
  type ParameterDeclaration,
  SyntaxKind,
} from 'typescript';
import { ImportedIdentifier } from '@lib/codegen/utils/imported-identifier.ts';
import { serviceHasTarget } from './service-has-target.ts';
import { buildIentityTypeParam } from './build-ientity-type-param.ts';

export const buildServiceFunctionParams = (
  propsIdentifier: Identifier | undefined,
  iEntityIdentifier: ImportedIdentifier,
  iAreaIdentifier: ImportedIdentifier,
  targetIdentifier: Identifier,
  service: Service,
): ParameterDeclaration[] => {
  return [
    ...(serviceHasTarget(service)
      ? [
          factory.createParameterDeclaration(
            undefined,
            undefined,
            targetIdentifier,
            undefined,
            factory.createUnionTypeNode([
              factory.createTypeReferenceNode(
                iEntityIdentifier.getIdentifier(),
                buildIentityTypeParam(service),
              ),
              factory.createTypeReferenceNode(
                iAreaIdentifier.getIdentifier(),
                undefined,
              ),
            ]),
            undefined,
          ),
        ]
      : []),
    ...(propsIdentifier
      ? [
          factory.createParameterDeclaration(
            undefined,
            undefined,
            factory.createIdentifier('params'),
            Object.values(service.fields).some(
              (field) =>
                field &&
                typeof field === 'object' &&
                'required' in field &&
                field.required,
            )
              ? undefined
              : factory.createToken(SyntaxKind.QuestionToken),
            factory.createTypeReferenceNode(propsIdentifier, undefined),
            undefined,
          ),
        ]
      : []),
  ];
};
