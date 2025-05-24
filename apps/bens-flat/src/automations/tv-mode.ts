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

import {
  turnOffMacScreen,
  restoreAfterTvMode,
  recordStateOfLivingRoom,
} from '@actions';

export const tvModeOn = automation({
  name: 'TV Mode Switches On',
  when: stateTurnsOn(tvModeSwitch),
  then: [
    sequence(
      recordStateOfLivingRoom,
      concurrently(
        turnOffMacScreen,
        turnOnScene(tvLightsScene),
        turnOffSwitch(adaptiveLightingLivingRoomSwitch),
        closeCoverCover(livingRoomBlindsCover),
      ),
    ),
  ],
});

export const tvModeOff = automation({
  name: 'TV Mode Switches Off',
  when: stateTurnsOff(tvModeSwitch),
  then: [
    concurrently(
      sequence(
        entityExists(restoreAfterTvMode),
        turnOnScene(restoreAfterTvMode),
        deleteScene(restoreAfterTvMode),
      ),
      waitMinutes(5),
      stateIs(tvModeSwitch, 'off'),
      stateIs(livingRoomBlindsDefaultToOpenSwitch, 'on'),
      openCoverCover(livingRoomBlindsCover),
    ),
  ],
});

// TODO handle youtube and spotify. Also add XBOX back
const tvModeShouldBeOff = sequence(
  stateIsNot(wearingClapper2Ps5ConsoleMediaPlayer, 'playing'),
  stateIsNot(bensAppleTvMediaPlayer, 'playing'),
);

export const turnTvModeOnFromPs5 = automation({
  name: 'Turn TV Mode On From PS5',
  when: [
    stateChanges(wearingClapper2Ps5ConsoleMediaPlayer),
    stateChanges(bensAppleTvMediaPlayer),
  ],
  then: [
    when(tvModeShouldBeOff, {
      then: turnOffSwitch(tvModeSwitch),
      else: turnOnSwitch(tvModeSwitch),
    }),
  ],
});
