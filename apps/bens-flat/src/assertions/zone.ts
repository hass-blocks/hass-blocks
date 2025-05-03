import { assertion } from '@hass-blocks/core';

export const ifHomeIsNotEmpty = assertion({
  name: 'Home is not empty',
  predicate: (client) => {
    const state = client.getState('zone.home');

    return Number(state) > 0;
  },
});
