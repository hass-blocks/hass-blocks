import { type ITarget, serviceCall } from '@hass-blocks/core';

/**
 * @public
 *
 * Open a cover
 *
 * @param target - The entity id or area to target
 */
export const openCover = (target: ITarget) =>
  serviceCall({
    name: `Open the blinds`,
    params: {
      domain: 'cover',
      service: 'open_cover',
    },
    target,
  });
