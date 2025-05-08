import { serviceCall } from '@hass-blocks/core';
import type { Which } from '../types/which.ts';

/**
 * @public
 *
 * Open a cover
 *
 * @param target - The entity id or area to target
 */
export const openCover = (target: Which) =>
  serviceCall({
    name: `Open the blinds`,
    params: {
      domain: 'cover',
      service: 'open_cover',
      target,
    },
  });
