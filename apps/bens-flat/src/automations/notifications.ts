import { notifyAllMyDevices } from '@actions';
import { automation } from '@hass-blocks/core';
import { eventIsFired, stateChanges } from '@hass-blocks/triggers';
import { playDing } from 'src/actions/media.ts';

export const doorbell = automation({
  name: 'Doorbell',
  when: eventIsFired({
    type: ['front_door_ding'],
  }),
  then: playDing,
});

export const frontDoorLocked = automation({
  name: 'Tell me when the front door is locked',
  when: stateChanges({
    entity: frontDoorLock,
    to: 'locked',
  }),
  then: notifyAllMyDevices({
    message: 'The front door was locked',
    title: 'Front Door',
  }),
});
