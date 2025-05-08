import { type ITarget, serviceCall } from '@hass-blocks/core';

/**
 * @public
 *
 * Turn a media player on or off
 *
 * @param target - The media player to switch
 * @param onOrOff - Whether to turn it on or off
 */
export const turnMediaPlayer = (target: ITarget, onOrOff: 'on' | 'off') => {
  const service = onOrOff === 'on' ? 'turn_on' : 'turn_off';
  return serviceCall({
    name: 'Turn media player on',
    params: {
      domain: 'media_player',
      service,
    },
    target,
  });
};
