import { trigger } from '@hass-blocks/core';
import '@blocks-codegen';

export const homeBecomesEmpty = trigger({
  name: 'Home has no occupants',
  targets: [home],
  trigger: {
    platform: 'state',
    entity_id: home.targetIds.entity_id,
    to: '0',
  },
});

export const imMoreThan20KmAway = trigger({
  name: "I'm more than 20km away",
  targets: [home],
  trigger: {
    platform: 'numeric_state',
    entity_id: home.targetIds.entity_id,
    above: 20000,
    for: '00:01:00',
  },
});

export const imLessThen20kmAway = trigger({
  name: "I'm less than 20km away",
  targets: [home],
  trigger: {
    platform: 'numeric_state',
    entity_id: home.targetIds.entity_id,
    below: 20000,
    for: '00:01:00',
  },
});
