import {
  waitMinutes,
  gate,
  switchLight,
  stopMediaPlayer,
  closeCover,
} from '@hass-blocks/blocks';
import {
  automation,
  concurrently,
  ExecutionMode,
  sequence,
} from '@hass-blocks/core';

import {
  turnOffMyMac,
  notifyMyPhone,
  openLivingRoomBlinds,
} from '../actions/index.ts';

import {
  ifIamOut,
  ifHomeModeIsOff,
  ifHomeIsNotEmpty,
  ifBlindsWouldNormallyBeOpen,
} from '../assertions/index.ts';

import {
  motionIsDetectedInTheBathroom,
  motionIsDetectedInTheBedroom,
  motionIsDetectedInTheHallway,
  motionIsDetectedInTheLivingRoom,
} from '../triggers/motion-sensors.ts';

import {
  homeBecomesEmpty,
  homeModeTurnsOff,
  homeModeTurnsOn,
  // homeModeTurnsOn,
} from '../triggers/index.ts';
import {
  playMyDiscoverWeeklyEveryWhere,
  setVolumeOnSpeakers,
} from '../actions/media.ts';
import { startSlideshowOnAppleTv } from '../compositions/start-slideshow-on-apple-tv.ts';
import { allLights, allSpeakers, tv } from '../entities.ts';
import {
  homeModeSwitch,
  livingRoomBlindsCover,
  openCoverCover,
  turnOffSwitch,
  turnOnSwitch,
} from '../blocks-codegen/index.ts';

const {
  open: allowZoneExitChecks,
  close: disallowZoneExitChecks,
  ifGateIsOpen: ifZoneExitChecksAllowed,
} = gate('Zone exit checks');

export const onLastExit = automation({
  name: 'Last Exit',
  when: homeBecomesEmpty,
  then: [ifZoneExitChecksAllowed, turnOffSwitch(homeModeSwitch)],
});

export const homeModeDetection = automation({
  name: 'Home mode detection',
  when: [
    motionIsDetectedInTheBedroom,
    motionIsDetectedInTheHallway,
    motionIsDetectedInTheBathroom,
    motionIsDetectedInTheLivingRoom,
  ],
  then: [
    concurrently(
      sequence(
        waitMinutes(5),
        ifIamOut,
        allowZoneExitChecks,
        turnOffSwitch(homeModeSwitch),
      ),
      sequence(
        ifHomeModeIsOff,
        ifHomeIsNotEmpty,
        disallowZoneExitChecks,
        turnOnSwitch(homeModeSwitch),
      ),
    ),
  ],
  mode: ExecutionMode.Restart,
});

export const whenIGoOut = automation({
  name: 'When I go out',
  when: homeModeTurnsOff,
  then: [
    concurrently(
      switchLight(allLights, 'off'),
      stopMediaPlayer(allSpeakers),
      turnOffMyMac,
      closeCover(livingRoomBlindsCover),
      notifyMyPhone({
        title: 'Leaving flat',
        message: 'Home empty detected - turning everything off',
      }),
    ),
  ],
});

export const whenIGetHome = automation({
  name: 'When I get home',
  when: homeModeTurnsOn,
  then: [
    concurrently(
      playMyDiscoverWeeklyEveryWhere,
      setVolumeOnSpeakers(0.3),
      sequence(
        ifBlindsWouldNormallyBeOpen,
        openCoverCover(livingRoomBlindsCover),
      ),
      startSlideshowOnAppleTv,
    ),
  ],
});
