import { factory, type Identifier } from 'typescript';
import type { Service } from '@hass-blocks/hass-ts';
import type {
  ImportedIdentifier,
  ServiceName,
} from '../../codegen/utils/index.ts';

import { buildServiceFunction } from './build-service-function.ts';
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
