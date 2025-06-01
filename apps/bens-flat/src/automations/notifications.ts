import { getNameOfLastUnlockerFromLock, notifyAllMyDevices } from '@actions';
import { action, automation } from '@hass-blocks/core';
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

const injectToNotify = action({
  name: 'Inject args to service',
  callback: ({ input }: { input: string }) => {
    return {
      message: `The front door was unlocked by ${input}`,
      title: `Front door`,
    };
  },
});

export const frontDoorIsUnlocked = automation({
  name: 'Tell me when the front door is unlocked',
  when: stateChanges({
    entity: frontDoorLock,
    to: 'unlocked',
  }),
  then: [
    getNameOfLastUnlockerFromLock,
    injectToNotify,
    notifyAllMyDevices({
      message: 'The front door was locked',
      title: 'Front Door',
    }),
  ],
});
