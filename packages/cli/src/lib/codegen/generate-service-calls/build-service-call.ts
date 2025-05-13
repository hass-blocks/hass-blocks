import { factory, Identifier } from 'typescript';
import type { Service } from '@hass-blocks/hass-ts';
import { toCamel } from '@lib/codegen/utils/to-camel.ts';
import { uppercaseFirstLetter } from '@lib/codegen/utils/uppercase-first-letter.ts';

import { buildServiceProps } from './build-service-props.ts';
import { buildServiceFunction } from './build-service-function.ts';
import { ImportedIdentifier } from '@lib/codegen/utils/imported-identifier.ts';

export const buildServiceCall = (
  domain: string,
  serviceId: string,
  service: Service,
  iEntityIdentifier: ImportedIdentifier,
  iAreaIdentifier: ImportedIdentifier,
  targetIdentifier: Identifier,
  serviceCallIdentifier: ImportedIdentifier,
) => {
  const serviceName = toCamel(`${serviceId}_${domain}`);

  const propsIdentifier =
    service.target || Object.values(service.fields).length !== 0
      ? factory.createIdentifier(uppercaseFirstLetter(`${serviceName}Props`))
      : undefined;

  const props = propsIdentifier
    ? [
        factory.createIdentifier('\n'),
        buildServiceProps(service, propsIdentifier),
      ]
    : [];

  return [
    ...props,
    factory.createIdentifier('\n'),
    buildServiceFunction(
      domain,
      serviceId,
      service,
      serviceName,
      propsIdentifier,
      iEntityIdentifier,
      iAreaIdentifier,
      targetIdentifier,
      serviceCallIdentifier,
    ),
  ];
};
