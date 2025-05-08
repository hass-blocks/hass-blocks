import { type ITarget, serviceCall } from '@hass-blocks/core';

export const setVolume = (target: ITarget, level: number) => {
  return serviceCall({
    name: `Set volume to ${level}`,
    params: {
      domain: 'media_player',
      service: 'set_volume',
      service_data: {
        level,
      },
    },
    target,
  });
};
