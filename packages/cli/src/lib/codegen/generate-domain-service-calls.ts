import { Service } from '@hass-blocks/hass-ts';
import { buildServiceCall } from './build-service-call.ts';
import { factory } from 'typescript';
import { generateTsFile } from './generate-ts-file.ts';
import { join } from 'path';

export const generateDomainServiceCalls = async (
  folder: string,
  domain: string,
  services: Record<string, Service>,
) => {
  const entityIdentifier = factory.createIdentifier('serviceCall');
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
        factory.createImportSpecifier(false, undefined, entityIdentifier),
        ...(iTargetIdentifier
          ? [factory.createImportSpecifier(false, undefined, iTargetIdentifier)]
          : []),
      ]),
    ),
    factory.createStringLiteral('@hass-blocks/core'),
  );

  const serviceNodes = factory.createNodeArray(
    Object.entries(services).flatMap(([service, details]) =>
      buildServiceCall(domain, service, details, iTargetIdentifier),
    ),
  );

  await generateTsFile(
    join(folder, `services`),
    `${domain}.ts`,
    factory.createNodeArray([importStatement, ...serviceNodes]),
  );
};
