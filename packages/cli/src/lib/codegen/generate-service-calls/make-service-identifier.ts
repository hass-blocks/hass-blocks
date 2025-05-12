import type { Service } from '@hass-blocks/hass-ts';

import { uppercaseFirstLetter } from '@lib/codegen/utils/uppercase-first-letter.ts';

import { factory } from 'typescript';

export const makeServiceIdentifier = (
  service: Service,
  serviceName: string,
) => {
  return service.target ||
    (service.fields && Object.values(service.fields).length !== 0)
    ? factory.createIdentifier(uppercaseFirstLetter(`${serviceName}Props`))
    : undefined;
};
