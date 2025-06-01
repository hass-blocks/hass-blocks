import { assertion } from '@hass-blocks/core';

export const ifHomeIsNotEmpty = assertion({
  name: 'Home is not empty',
  predicate: ({ hass }) => {
    const state = hass.getState('zone.home');

    return Number(state) > 0;
  },
});
