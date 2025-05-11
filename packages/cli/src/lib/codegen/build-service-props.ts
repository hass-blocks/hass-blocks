import { Service } from '@hass-blocks/hass-ts';
import { factory, Identifier, SyntaxKind } from 'typescript';
import { buildPropsPropertyNode } from './build-props-property-node.ts';

export const buildServiceProps = (service: Service, identifier: Identifier) => {
  return factory.createInterfaceDeclaration(
    [factory.createToken(SyntaxKind.ExportKeyword)],
    identifier,
    undefined,
    undefined,
    Object.entries(service.fields).map(([name, details]) =>
      buildPropsPropertyNode(name, details),
    ),
  );
};
