import { stateIs } from '@hass-blocks/blocks';
import { stateIsNot } from '@hass-blocks/blocks';

import {
  bathroomMotionSensor,
  bedroomMotionSensor,
  blindsDefaultOpen,
  hallwayMotionSensor,
  homeMode,
  livingRoomMotionSensor,
  sleepMode,
  tvMode,
  visitorMode,
} from '../entities.ts';

export const ifLivingRoomMotionSensorIsOn = stateIs(
  livingRoomMotionSensor,
  'on',
);
export const ifLivingRoomMotionSensorIsOff = stateIs(
  livingRoomMotionSensor,
  'off',
);
export const ifBedroomMotionSensorIsOn = stateIs(bedroomMotionSensor, 'on');
export const ifBedroomMotionSensorIsOff = stateIs(bedroomMotionSensor, 'off');

export const ifHallwayMotionSensorIsOn = stateIs(hallwayMotionSensor, 'on');
export const ifHallwaySensorIsOff = stateIs(hallwayMotionSensor, 'off');

export const ifBathroomMotionSensorIsOn = stateIs(bathroomMotionSensor, 'on');
export const ifBathroomMotionSensorIsOff = stateIs(bathroomMotionSensor, 'off');

export const ifSleepModeIsOff = stateIs(sleepMode, 'off');
export const ifTvModeIsOff = stateIs(tvMode, 'off');
export const ifHomeModeIsOff = stateIs(homeMode, 'off');
export const ifVisitorModeIsNotOn = stateIsNot(visitorMode, 'on');
export const ifBlindsWouldNormallyBeOpen = stateIs(blindsDefaultOpen, 'on');
