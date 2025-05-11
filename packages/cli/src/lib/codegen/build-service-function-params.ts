import { Service } from '@hass-blocks/hass-ts';
import {
  factory,
  Identifier,
  ParameterDeclaration,
  SyntaxKind,
} from 'typescript';

export const buildServiceFunctionParams = (
  details: Service,
  propsIdentifier: Identifier | undefined,
): ParameterDeclaration[] => {
  if (!propsIdentifier) {
    return [];
  }
  const actualParams = details.target
    ? factory.createObjectBindingPattern([
        factory.createBindingElement(
          undefined,
          undefined,
          factory.createIdentifier('target'),
          undefined,
        ),
        factory.createBindingElement(
          factory.createToken(SyntaxKind.DotDotDotToken),
          undefined,
          factory.createIdentifier('params'),
          undefined,
        ),
      ])
    : factory.createIdentifier('params');
  return [
    factory.createParameterDeclaration(
      undefined,
      undefined,
      actualParams,
      undefined,
      factory.createTypeReferenceNode(propsIdentifier, undefined),
      undefined,
    ),
  ];
};
