import { type ITarget, serviceCall } from '@hass-blocks/core';

/**
 * @public
 *
 * A service call which will stop a targeted media player from playing
 *
 * @param target - The targeted entity or area
 */
export const stopMediaPlayer = (target: ITarget) =>
  serviceCall({
    name: 'Stop media player',
    params: {
      domain: 'media_player',
      service: 'media_stop',
    },
    target,
  });
