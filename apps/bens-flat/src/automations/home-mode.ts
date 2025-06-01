import { waitMinutes, gate, stateIs } from '@hass-blocks/blocks';
import { stateTurnsOff, stateTurnsOn } from '@hass-blocks/triggers';

import {
  automation,
  concurrently,
  ExecutionMode,
  sequence,
} from '@hass-blocks/core';
import { ifIamOut, ifHomeIsNotEmpty } from '../assertions/index.ts';
import { homeBecomesEmpty } from '../triggers/index.ts';
import {
  playMyDiscoverWeeklyEveryWhere,
  setVolumeOnSpeakers,
} from '../actions/media.ts';
import { startSlideshowOnAppleTv } from '../compositions/start-slideshow-on-apple-tv.ts';
import { allLights, allSpeakers } from '../entities.ts';

import '@blocks-codegen';
import { notifyAllMyDevices } from '@actions';

const {
  open: allowZoneExitChecks,
  close: disallowZoneExitChecks,
  ifGateIsOpen: ifZoneExitChecksAllowed,
} = gate('Zone exit checks');

export const onLastExit = automation({
  name: 'Last Exit',
  when: homeBecomesEmpty,
  then: [ifZoneExitChecksAllowed, turnOffSwitch(homeMode)],
});

export const homeModeDetection = automation({
  name: 'Home mode detection',
  when: [
    stateTurnsOn(bedroomSensorSensorStateMotionBinarySensor),
    stateTurnsOn(livingRoomSensorSensorStateMotionBinarySensor),
    stateTurnsOn(hallwayMotionSensorOccupancyBinarySensor),
    stateTurnsOn(bathroomMotionSensorOccupancyBinarySensor),
  ],
  then: concurrently(
    sequence(
      ifIamOut,
      allowZoneExitChecks,
      turnOffSwitch(homeMode),
      waitMinutes(5),
    ),
    sequence(
      stateIs(homeMode, 'off'),
      ifHomeIsNotEmpty,
      disallowZoneExitChecks,
      turnOnSwitch(homeMode),
    ),
  ),
  mode: ExecutionMode.Restart,
});

export const whenIGoOut = automation({
  name: 'When I go out',
  when: stateTurnsOff(homeMode),
  then: concurrently(
    turnOffLight(allLights),
    mediaStopMediaPlayer(allSpeakers),
    turnOffSwitch(imacProOn),
    closeCover(livingRoomBlindsCover),
    notifyAllMyDevices({
      title: 'Leaving flat',
      message: 'Home empty detected - turning everything off',
    }),
  ),
});

export const whenIGetHome = automation({
  name: 'When I get home',
  when: stateTurnsOff(homeMode),
  then: concurrently(
    playMyDiscoverWeeklyEveryWhere,
    setVolumeOnSpeakers(0.3),
    sequence(
      stateIs(livingRoomBlindsDefaultToOpen, 'on'),
      openCover(livingRoomBlindsCover),
    ),
    startSlideshowOnAppleTv,
  ),
});
