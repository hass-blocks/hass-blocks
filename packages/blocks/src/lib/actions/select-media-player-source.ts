import { type ITarget, serviceCall } from '@hass-blocks/core';

/**
 * @public
 *
 * Switches the source of a given media player
 *
 * @param target - The target for the service call
 * @param source - The source to change to
 */
export const selectMediaPlayerSource = (target: ITarget, source: string) => {
  return serviceCall({
    name: 'Select Media Player source',
    target,
    params: {
      domain: 'media_player',
      service: 'select_source',
      service_data: { source },
    },
  });
};
