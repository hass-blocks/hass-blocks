import { factory, type Identifier } from 'typescript';
import type { Service } from '@hass-blocks/hass-ts';

import { buildServiceFunction } from './build-service-function.ts';
import type { ImportedIdentifier } from '@lib/codegen/utils/imported-identifier.ts';
import type { PropsInterface } from './props-interface.ts';
import type { ServiceName } from '../utils/service.ts';

export const buildServiceCall = (
  domain: string,
  serviceId: string,
  service: Service,
  iEntityIdentifier: ImportedIdentifier,
  iAreaIdentifier: ImportedIdentifier,
  targetIdentifier: Identifier,
  serviceCallIdentifier: ImportedIdentifier,
  props: PropsInterface,
  serviceName: ServiceName,
) => {
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
