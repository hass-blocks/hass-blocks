import { join } from 'node:path';
import { factory, NodeFlags, SyntaxKind } from 'typescript';

import type { Service } from '@hass-blocks/hass-ts';

import { generateTsFile } from '@lib/codegen/utils/generate-ts-file.ts';
import { toCamel } from '@lib/codegen/utils/to-camel.ts';
import { ImportStatement } from '@lib/codegen/utils/import-statement.ts';

import { buildServiceType } from './build-service-type.ts';
import { buildServiceCall } from './build-service-call.ts';

export const generateDomainServiceCalls = async (
  folder: string,
  domain: string,
  services: Record<string, Service>,
) => {
  const coreImport = new ImportStatement('@hass-blocks/core');

  const serviceCallIdentifier = coreImport.newIdentifier('serviceCall');
  const blockIdentifier = coreImport.newIdentifier('Block');
  const iEntityIdentifier = coreImport.newIdentifier('IEntity');
  const targetIdentifier = factory.createIdentifier('target');
  const iAreaIdentifier = coreImport.newIdentifier('IArea');

  const moduleBlock = factory.createModuleDeclaration(
    [factory.createToken(SyntaxKind.DeclareKeyword)],
    factory.createIdentifier('global'),
    factory.createModuleBlock(
      Object.entries(services).map(([serviceId, details]) => {
        const serviceName = toCamel(`${serviceId}_${domain}`);
        return buildServiceType(
          details,
          serviceName,
          iEntityIdentifier,
          targetIdentifier,
          blockIdentifier,
          iAreaIdentifier,
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
        iEntityIdentifier,
        iAreaIdentifier,
        targetIdentifier,
        serviceCallIdentifier,
      ),
    ),
  );

  await generateTsFile(
    join(folder, `services`),
    `${domain}.ts`,
    factory.createNodeArray([
      coreImport.buildNode(),
      moduleBlock,
      ...serviceNodes,
    ]),
  );
};
