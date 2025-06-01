import { turnOffMyMac } from '@actions';

import {
  allAdaptiveLightingSleepModeSwitches,
  allAdaptiveLightingSwitches,
  allLights,
  allSpeakers,
  toggleSleepMode,
} from '@entities';
import { automation, concurrently, sequence } from '@hass-blocks/core';
import {
  eventIsFired,
  stateTurnsOff,
  stateTurnsOn,
} from '@hass-blocks/triggers';

export const sleepMode = automation({
  name: 'Sleep Mode',
  when: eventIsFired({
    type: ['sleep_mode_event'],
  }),
  then: [turnOnSwitch(toggleSleepMode)],
});

export const sleepModeTurnedOn = automation({
  name: 'Sleep Mode Turned On',
  when: stateTurnsOn(toggleSleepMode),
  then: [
    concurrently(
      turnOffSwitch(livingRoomTvOn),
      sequence(
        turnOnSwitch(allAdaptiveLightingSwitches),
        turnOnSwitch(allAdaptiveLightingSleepModeSwitches),
        turnOffLight(allLights),
      ),
      closeCover(livingRoomBlindsCover),
      turnOffMyMac,
      mediaStopMediaPlayer(allSpeakers),
    ),
  ],
});

export const sleepModeTurnedOff = automation({
  name: 'Sleep mode turned off',
  when: stateTurnsOff(toggleSleepMode),
  then: turnOffSwitch(allAdaptiveLightingSleepModeSwitches),
});
