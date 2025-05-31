import { factory } from 'typescript';

import type { Service } from '@hass-blocks/hass-ts';

import { ImportStatement } from '@lib/codegen/utils/import-statement.ts';

import { buildServiceType } from './build-service-type.ts';
import { buildServiceCall } from './build-service-call.ts';
import { PropsInterface } from './props-interface.ts';
import { newLine } from './new-line.ts';
import { DeclareGlobalBlock } from '../utils/declare-global-block.ts';
import type { GlobalNames } from '../utils/global-names.ts';

export const generateDomainServiceCalls = (
  folder: string,
  domain: string,
  services: Record<string, Service>,
  names: GlobalNames,
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
      const serviceName = names.addService(domain, serviceId);
      const props = new PropsInterface(serviceName, details.fields);
      return {
        type: () => [
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
        call: () =>
          buildServiceCall(
            domain,
            serviceId,
            details,
            iEntityIdentifier,
            iAreaIdentifier,
            targetIdentifier,
            serviceCallIdentifier,
            props,
            serviceName,
          ),
      };
    },
  );

  const declareGlobalBlock = new DeclareGlobalBlock(
    serviceTypeDeclarations
      .flatMap((item) => item.type())
      .filter((item) => !('hasProps' in item) || item.hasProps())
      .map((item) => (!('hasProps' in item) ? item : item.buildNode())),
  );

  const generateServiceNodes = () =>
    factory.createNodeArray(
      serviceTypeDeclarations.flatMap((item) => item.call()),
    );

  return {
    folder,
    domain,
    declareGlobalBlock,
    generateServiceNodes,
    coreImport,
  };
};
