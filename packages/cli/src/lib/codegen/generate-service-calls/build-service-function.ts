import type { Service } from '@hass-blocks/hass-ts';

import { factory, type Identifier, SyntaxKind } from 'typescript';

import { buildServiceFunctionParams } from './build-service-function-params.ts';

export const buildServiceFunction = (
  domain: string,
  serviceId: string,
  details: Service,
  serviceName: string,
  propsIdentifier: Identifier | undefined,
  iTargetIdentifier: Identifier | undefined,
  targetIdentifier: Identifier | undefined,
) => {
  const callFunction = factory.createExpressionStatement(
    factory.createBinaryExpression(
      factory.createPropertyAccessExpression(
        factory.createIdentifier('globalThis'),
        factory.createIdentifier(serviceName),
      ),
      factory.createToken(SyntaxKind.EqualsToken),
      factory.createArrowFunction(
        undefined,
        undefined,
        buildServiceFunctionParams(
          propsIdentifier,
          iTargetIdentifier,
          targetIdentifier,
          details.fields,
        ),
        undefined,
        factory.createToken(SyntaxKind.EqualsGreaterThanToken),
        factory.createCallExpression(
          factory.createIdentifier('serviceCall'),
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
                      ...(propsIdentifier
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
