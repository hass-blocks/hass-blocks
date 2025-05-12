import type { ServiceFields } from '@hass-blocks/hass-ts';
import {
  factory,
  type Identifier,
  type ParameterDeclaration,
  SyntaxKind,
} from 'typescript';

export const buildServiceFunctionParams = (
  propsIdentifier: Identifier | undefined,
  ITargetTypeIdentifier: Identifier | undefined,
  targetIdentifier: Identifier | undefined,
  fields: ServiceFields,
): ParameterDeclaration[] => {
  return [
    ...(ITargetTypeIdentifier && targetIdentifier
      ? [
          factory.createParameterDeclaration(
            undefined,
            undefined,
            targetIdentifier,
            undefined,
            factory.createTypeReferenceNode(ITargetTypeIdentifier, undefined),
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
            Object.values(fields).some(
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
