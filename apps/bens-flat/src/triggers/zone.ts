import { trigger } from '@hass-blocks/core';

export const homeBecomesEmpty = trigger({
  name: 'Home has no occupants',
  trigger: {
    platform: 'state',
    entity_id: 'zone.home',
    to: '0',
  },
});
