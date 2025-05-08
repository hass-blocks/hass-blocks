import { serviceCall } from '@hass-blocks/core';
import type { Which } from '../types/index.ts';

export const selectMediaPlayerSource = (target: Which, source: string) => {
  return serviceCall({
    name: 'Select Media Player source',
    params: {
      domain: 'media_player',
      service: 'select_source',
      service_data: { source },
      target,
    },
  });
};
