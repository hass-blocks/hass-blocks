import {
  entityExists,
  stateIs,
  stateIsNot,
  waitMinutes,
} from '@hass-blocks/blocks';
import { automation, concurrently, sequence, when } from '@hass-blocks/core';
import {
  stateChanges,
  stateTurnsOff,
  stateTurnsOn,
} from '@hass-blocks/triggers';

import { restoreAfterTvMode, recordStateOfLivingRoom } from '@actions';

export const tvModeOn = automation({
  name: 'TV Mode Switches On',
  when: stateTurnsOn(tvMode),
  then: [
    recordStateOfLivingRoom,
    concurrently(
      turnOnScene(tvLightsScene),
      turnOffSwitch(adaptiveLightingLivingRoom),
      closeCover(livingRoomBlindsCover),
    ),
  ],
});

export const tvModeOff = automation({
  name: 'TV Mode Switches Off',
  when: stateTurnsOff(tvMode),
  then: concurrently(
    sequence(
      entityExists(restoreAfterTvMode),
      turnOnScene(restoreAfterTvMode),
      deleteScene(restoreAfterTvMode),
    ),
    waitMinutes(5),
    stateIs(tvMode, 'off'),
    stateIs(livingRoomBlindsDefaultToOpen, 'on'),
    openCover(livingRoomBlindsCover),
  ),
});

// TODO handle youtube and spotify. Also add XBOX back
const tvModeShouldBeOff = sequence(
  stateIsNot(wearingClapper2Ps5Console, 'playing'),
  stateIsNot(bensAppleTv, 'playing'),
);

export const turnTvModeOnFromPs5 = automation({
  name: 'Turn TV Mode On From PS5',
  when: [stateChanges(wearingClapper2Ps5Console), stateChanges(bensAppleTv)],
  then: when(tvModeShouldBeOff, {
    then: turnOffSwitch(tvMode),
    else: turnOnSwitch(tvMode),
  }),
});
