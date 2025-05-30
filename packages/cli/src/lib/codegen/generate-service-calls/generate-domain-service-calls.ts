import { join } from 'node:path';
import { factory } from 'typescript';

import type { Service } from '@hass-blocks/hass-ts';

import { generateTsFile } from '@lib/codegen/utils/generate-ts-file.ts';
import { toCamel } from '@lib/codegen/utils/to-camel.ts';
import { ImportStatement } from '@lib/codegen/utils/import-statement.ts';

import { buildServiceType } from './build-service-type.ts';
import { buildServiceCall } from './build-service-call.ts';
import { PropsInterface } from './props-interface.ts';
import { newLine } from './new-line.ts';
import { DeclareGlobalBlock } from '../utils/declare-global-block.ts';

export const generateDomainServiceCalls = async (
  folder: string,
  domain: string,
  services: Record<string, Service>,
) => {
  const coreImport = new ImportStatement('@hass-blocks/core');

  const serviceCallIdentifier = coreImport.newIdentifier('serviceCall');
  const blockIdentifier = coreImport.newIdentifier('Block');
  const iEntityIdentifier = coreImport.newIdentifier('IEntity', true);
  const targetIdentifier = factory.createIdentifier('target');
  const iAreaIdentifier = coreImport.newIdentifier('IArea', true);
  const serviceCallArgs = coreImport.newIdentifier('ServiceCallArgs', true);

  const serviceTypeDeclarations = Object.entries(services).map(
    ([serviceId, details]) => {
      const serviceName = toCamel(`${serviceId}_${domain}`);
      const props = new PropsInterface(serviceName, details.fields);
      return {
        type: [
          newLine(),
          props,
          newLine(),
          buildServiceType(
            details,
            serviceName,
            iEntityIdentifier,
            targetIdentifier,
            blockIdentifier,
            iAreaIdentifier,
            serviceCallArgs,
            props,
          ),
        ],
        call: buildServiceCall(
          domain,
          serviceId,
          details,
          iEntityIdentifier,
          iAreaIdentifier,
          targetIdentifier,
          serviceCallIdentifier,
          props,
        ),
      };
    },
  );

  const globalBlock = new DeclareGlobalBlock(
    serviceTypeDeclarations
      .flatMap((item) => item.type)
      .filter((item) => !('hasProps' in item) || item.hasProps())
      .map((item) => (!('hasProps' in item) ? item : item.buildNode())),
  );

  const serviceNodes = factory.createNodeArray(
    serviceTypeDeclarations.flatMap((item) => item.call),
  );

  await generateTsFile(
    join(folder, `services`),
    `${domain}.ts`,
    factory.createNodeArray([
      coreImport.buildNode(),
      newLine(),
      globalBlock.buildNode(),
      ...serviceNodes,
    ]),
  );
};
