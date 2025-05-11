import { Service } from '@hass-blocks/hass-ts';
import { factory, Identifier, NodeFlags, SyntaxKind } from 'typescript';
import { addDocCommentToNode } from './add-doc-comment-to-node.ts';
import { buildServiceFunctionParams } from './build-service-function-params.ts';

export const buildServiceFunction = (
  domain: string,
  serviceId: string,
  details: Service,
  serviceName: string,
  propsIdentifier: Identifier | undefined,
) => {
  const callFunction = factory.createVariableStatement(
    [factory.createToken(SyntaxKind.ExportKeyword)],
    factory.createVariableDeclarationList(
      [
        factory.createVariableDeclaration(
          factory.createIdentifier(serviceName),
          undefined,
          undefined,
          factory.createArrowFunction(
            undefined,
            undefined,
            buildServiceFunctionParams(details, propsIdentifier),
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
                    ...(details.target
                      ? [
                          factory.createShorthandPropertyAssignment(
                            factory.createIdentifier('target'),
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
      ],
      NodeFlags.Const,
    ),
  );

  addDocCommentToNode(callFunction, details.description);

  return callFunction;
};
