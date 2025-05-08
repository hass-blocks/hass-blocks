import { serviceCall } from '@hass-blocks/core';
import type { Which } from '../types/which.ts';

/**
 * @public
 *
 * Close a cover
 *
 * @param target - The entity id or area to target
 */
export const closeCover = (target: Which) =>
  serviceCall({
    name: `Close the blinds`,
    params: {
      domain: 'cover',
      service: 'close_cover',
      target,
    },
  });
