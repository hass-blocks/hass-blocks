import {
  getNameOfLastUnlockerFromLock,
  notifyAllMyDevices,
  ttsSay,
} from '@actions';
import { allSpeakers } from '@entities';
import { stateIsNot } from '@hass-blocks/blocks';
import { action, automation, concurrently, sequence } from '@hass-blocks/core';
import { eventIsFired, stateChanges } from '@hass-blocks/triggers';
import { playDing } from 'src/actions/media.ts';

export const doorbell = automation({
  name: 'Doorbell',
  when: eventIsFired({
    type: ['front_door_ding'],
  }),
  then: sequence(playDing, ttsSay(allSpeakers, 'Someone is at the door')),
});

export const diskFullNotification = automation({
  name: 'Disk full notification',
  when: stateChanges({
    entity: diskCloseToFullBinarySensor,
    to: 'on',
  }),
  then: notifyAllMyDevices({
    title: 'Disk Space',
    message: 'Disk usage is above 90%',
  }),
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

export const tumbleDryerFinished = automation({
  name: 'Tell me when the tumble dryer is finished',
  when: stateChanges({
    entity: tumbleDryerRunningBinarySensor,
    to: 'off',
  }),
  then: concurrently(
    notifyAllMyDevices({
      title: 'Dryer',
      message: 'The tumble dryer has finished running',
    }),
    sequence(
      stateIsNot(sleepMode, 'on'),
      ttsSay(allSpeakers, 'The tumble dryer has finished running'),
    ),
  ),
});
