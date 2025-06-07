import type { Service } from '@hass-blocks/hass-ts';
import { generateTypeParamsFromDomain } from '@lib/codegen/utils';

export const buildIentityTypeParam = (service: Service) => {
  const targetDomain = service.target?.entity?.[0]?.domain;

  const finalTargetDomain = (
    Array.isArray(targetDomain) ? targetDomain : [targetDomain]
  ).flatMap((item) => (item ? [item] : []));

  if (finalTargetDomain.length === 0) {
    return undefined;
  }

  return finalTargetDomain.map((item) => generateTypeParamsFromDomain(item));
};
