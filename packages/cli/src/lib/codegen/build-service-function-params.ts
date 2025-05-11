import { ServiceFields } from '@hass-blocks/hass-ts';
import {
  factory,
  Identifier,
  ParameterDeclaration,
  SyntaxKind,
} from 'typescript';

export const buildServiceFunctionParams = (
  propsIdentifier: Identifier | undefined,
  ITargetTypeIdentifier: Identifier | undefined,
  targetIdentifier: Identifier,
  fields: ServiceFields,
): ParameterDeclaration[] => {
  return [
    ...(ITargetTypeIdentifier
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
            Object.values(fields).some((field) => field.required)
              ? undefined
              : factory.createToken(SyntaxKind.QuestionToken),
            factory.createTypeReferenceNode(propsIdentifier, undefined),
            undefined,
          ),
        ]
      : []),
  ];
};
