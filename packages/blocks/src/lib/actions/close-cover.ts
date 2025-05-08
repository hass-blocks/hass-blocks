import { type ITarget, serviceCall } from '@hass-blocks/core';

/**
 * @public
 *
 * Close a cover
 *
 * @param target - The entity id or area to target
 */
export const closeCover = (target: ITarget) =>
  serviceCall({
    name: `Close the blinds`,
    params: {
      domain: 'cover',
      service: 'close_cover',
    },
    target,
  });
