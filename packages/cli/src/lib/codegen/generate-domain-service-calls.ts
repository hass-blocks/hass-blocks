import { Service } from '@hass-blocks/hass-ts';
import { buildServiceCall } from './build-service-call.ts';
import { factory, NodeFlags, SyntaxKind } from 'typescript';
import { generateTsFile } from './generate-ts-file.ts';
import { join } from 'path';
import { toCamel } from './to-camel.ts';
import { buildServiceType } from './build-service-type.ts';

export const generateDomainServiceCalls = async (
  folder: string,
  domain: string,
  services: Record<string, Service>,
) => {
  const entityIdentifier = factory.createIdentifier('serviceCall');
  const blockIdentifier = factory.createIdentifier('Block');
  const targetIdentifier = factory.createIdentifier('target');
  const iTargetIdentifier = Object.values(services).some(
    (service) => service.target,
  )
    ? factory.createIdentifier('ITarget')
    : undefined;

  const importStatement = factory.createImportDeclaration(
    undefined,
    factory.createImportClause(
      false,
      undefined,
      factory.createNamedImports([
        factory.createImportSpecifier(false, undefined, blockIdentifier),
        factory.createImportSpecifier(false, undefined, entityIdentifier),
        ...(iTargetIdentifier
          ? [factory.createImportSpecifier(false, undefined, iTargetIdentifier)]
          : []),
      ]),
    ),
    factory.createStringLiteral('@hass-blocks/core'),
  );

  const moduleBlock = factory.createModuleDeclaration(
    [factory.createToken(SyntaxKind.DeclareKeyword)],
    factory.createIdentifier('global'),
    factory.createModuleBlock(
      Object.entries(services).map(([serviceId, details]) => {
        const serviceName = toCamel(`${serviceId}_${domain}`);
        return buildServiceType(
          details,
          serviceName,
          iTargetIdentifier,
          targetIdentifier,
        );
      }),
    ),
    NodeFlags.GlobalAugmentation | NodeFlags.ContextFlags,
  );

  const serviceNodes = factory.createNodeArray(
    Object.entries(services).flatMap(([service, details]) =>
      buildServiceCall(
        domain,
        service,
        details,
        iTargetIdentifier,
        targetIdentifier,
      ),
    ),
  );

  await generateTsFile(
    join(folder, `services`),
    `${domain}.ts`,
    factory.createNodeArray([importStatement, moduleBlock, ...serviceNodes]),
  );
};
