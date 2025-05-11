import { Service } from '@hass-blocks/hass-ts';
import { factory, Identifier, PropertySignature, SyntaxKind } from 'typescript';
import { buildPropsPropertyNode } from './build-props-property-node.ts';

export const buildServiceProps = (
  service: Service,
  identifier: Identifier,
  iTargetIdentifier?: Identifier,
) => {
  const targetNode: PropertySignature[] =
    service.target && iTargetIdentifier
      ? [
          factory.createPropertySignature(
            undefined,
            factory.createIdentifier('target'),
            undefined,
            factory.createTypeReferenceNode(iTargetIdentifier, undefined),
          ),
        ]
      : [];

  return factory.createInterfaceDeclaration(
    [factory.createToken(SyntaxKind.ExportKeyword)],
    identifier,
    undefined,
    undefined,
    [
      ...Object.entries(service.fields).map(([name, details]) =>
        buildPropsPropertyNode(name, details),
      ),
      ...targetNode,
    ],
  );
};
