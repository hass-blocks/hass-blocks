import { serviceCall } from '@hass-blocks/core';
import type { Which } from '../types/index.ts';

export const setVolume = (target: Which, level: number) => {
  return serviceCall({
    name: `Set volume to ${level}`,
    params: {
      domain: 'media_player',
      service: 'set_volume',
      service_data: {
        level,
      },
      target,
    },
  });
};
