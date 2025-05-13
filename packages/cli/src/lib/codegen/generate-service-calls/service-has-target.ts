import { Service } from '@hass-blocks/hass-ts';

export const serviceHasTarget = (service: Service) => {
  return service.target;
};
