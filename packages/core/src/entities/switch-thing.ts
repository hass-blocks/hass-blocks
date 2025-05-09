import { type ITarget, serviceCall } from '@hass-blocks/core';

export const switchThing = (
  target: ITarget,
  onOrOff: 'on' | 'off',
  domain: string,
) => {
  const service = onOrOff === 'on' ? 'turn_on' : 'turn_off';
  return serviceCall({
    name: `Switch ${domain} ${onOrOff}`,
    params: {
      domain,
      service,
    },
    target,
  });
};
