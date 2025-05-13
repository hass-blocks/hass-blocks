import { factory, type Identifier } from 'typescript';
import type { Service } from '@hass-blocks/hass-ts';
import { toCamel } from '@lib/codegen/utils/to-camel.ts';

import { buildServiceFunction } from './build-service-function.ts';
import type { ImportedIdentifier } from '@lib/codegen/utils/imported-identifier.ts';
import type { PropsInterface } from './props-interface.ts';

export const buildServiceCall = (
  domain: string,
  serviceId: string,
  service: Service,
  iEntityIdentifier: ImportedIdentifier,
  iAreaIdentifier: ImportedIdentifier,
  targetIdentifier: Identifier,
  serviceCallIdentifier: ImportedIdentifier,
  props: PropsInterface,
) => {
  const serviceName = toCamel(`${serviceId}_${domain}`);

  return [
    factory.createIdentifier('\n'),
    buildServiceFunction(
      domain,
      serviceId,
      service,
      serviceName,
      props,
      iEntityIdentifier,
      iAreaIdentifier,
      targetIdentifier,
      serviceCallIdentifier,
    ),
  ];
};
