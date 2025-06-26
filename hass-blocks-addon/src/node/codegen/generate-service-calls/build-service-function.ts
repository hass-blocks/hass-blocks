import { factory, type Identifier, SyntaxKind } from 'typescript';
import type { Service } from '@hass-blocks/hass-ts';
import type { ImportedIdentifier, ServiceName } from '@codegen/utils';

import { buildServiceFunctionParams } from './build-service-function-params.ts';
import type { PropsInterface } from './props-interface.ts';

export const buildServiceFunction = (
  domain: string,
  serviceId: string,
  details: Service,
  serviceName: ServiceName,
  propsIdentifier: PropsInterface,
  iEntityIdentifier: ImportedIdentifier,
  iAreaIdentifier: ImportedIdentifier,
  targetIdentifier: Identifier,
  serviceCallIdentifier: ImportedIdentifier,
) => {
  const callFunction = factory.createExpressionStatement(
    factory.createBinaryExpression(
      factory.createPropertyAccessExpression(
        factory.createIdentifier('globalThis'),
        serviceName.identifier,
      ),
      factory.createToken(SyntaxKind.EqualsToken),
      factory.createArrowFunction(
        undefined,
        undefined,
        buildServiceFunctionParams(
          propsIdentifier,
          iEntityIdentifier,
          iAreaIdentifier,
          targetIdentifier,
          details,
          false,
        ),
        undefined,
        factory.createToken(SyntaxKind.EqualsGreaterThanToken),
        factory.createCallExpression(
          serviceCallIdentifier.getIdentifier(),
          undefined,
          [
            factory.createObjectLiteralExpression(
              [
                factory.createPropertyAssignment(
                  factory.createIdentifier('name'),
                  factory.createNoSubstitutionTemplateLiteral(
                    `Call ${domain}.${serviceId}`,
                  ),
                ),
                factory.createPropertyAssignment(
                  factory.createIdentifier('params'),
                  factory.createObjectLiteralExpression(
                    [
                      factory.createPropertyAssignment(
                        factory.createIdentifier('domain'),
                        factory.createStringLiteral(domain),
                      ),
                      factory.createPropertyAssignment(
                        factory.createIdentifier('service'),
                        factory.createStringLiteral(serviceId),
                      ),
                      ...(propsIdentifier.hasProps()
                        ? [
                            factory.createPropertyAssignment(
                              factory.createIdentifier('service_data'),
                              factory.createIdentifier('params'),
                            ),
                          ]
                        : []),
                    ],
                    true,
                  ),
                ),
                ...(details.target && targetIdentifier
                  ? [
                      factory.createShorthandPropertyAssignment(
                        targetIdentifier,
                        undefined,
                      ),
                    ]
                  : []),
              ],
              true,
            ),
          ],
        ),
      ),
    ),
  );

  return callFunction;
};
