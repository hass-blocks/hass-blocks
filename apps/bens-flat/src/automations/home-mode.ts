import { waitMinutes, gate } from '@hass-blocks/blocks';
import {
  automation,
  concurrently,
  ExecutionMode,
  sequence,
} from '@hass-blocks/core';

import {
  switchBathroomLightsOff,
  switchBedroomLightsOff,
  switchHallwayLightsOff,
  switchLivingRoomLightsOff,
  turnHomeModeOff,
  turnHomeModeOn,
  stopMusicInTheBedroom,
  stopMusicInTheLivingRoom,
  turnOffTv,
  turnOffMyMac,
  notifyMyPhone,
  closeLivingRoomBlinds,
} from '../actions/index.ts';

import {
  ifIamOut,
  ifHomeModeIsOff,
  ifHomeIsNotEmpty,
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
} from '../triggers/index.ts';

const {
  open: allowZoneExitChecks,
  close: disallowZoneExitChecks,
  ifGateIsOpen: ifZoneExitChecksAllowed,
} = gate('Zone exit checks');

export const onLastExit = automation({
  name: 'Last Exit',
  when: homeBecomesEmpty,
  then: [ifZoneExitChecksAllowed, turnHomeModeOff],
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
      sequence(waitMinutes(5), ifIamOut, allowZoneExitChecks, turnHomeModeOff),
      sequence(
        ifHomeModeIsOff,
        ifHomeIsNotEmpty,
        disallowZoneExitChecks,
        turnHomeModeOn,
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
      switchBedroomLightsOff,
      switchHallwayLightsOff,
      switchLivingRoomLightsOff,
      switchBathroomLightsOff,
      stopMusicInTheBedroom,
      stopMusicInTheLivingRoom,
      turnOffTv,
      turnOffMyMac,
      closeLivingRoomBlinds,
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
  then: [],
});
