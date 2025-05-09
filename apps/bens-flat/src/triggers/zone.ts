import { trigger } from '@hass-blocks/core';
import { home } from '../entities.ts';

export const homeBecomesEmpty = trigger({
  name: 'Home has no occupants',
  targets: [home],
  trigger: {
    platform: 'state',
    entity_id: home.entityIds[0],
    to: '0',
  },
});

export const imMoreThan20KmAway = trigger({
  name: "I'm more than 20km away",
  targets: [home],
  trigger: {
    platform: 'numeric_state',
    entity_id: home.entityIds[0],
    above: 20000,
    for: '00:01:00',
  },
});

export const imLessThen20kmAway = trigger({
  name: "I'm less than 20km away",
  targets: [home],
  trigger: {
    platform: 'numeric_state',
    entity_id: home.entityIds[0],
    below: 20000,
    for: '00:01:00',
  },
});
