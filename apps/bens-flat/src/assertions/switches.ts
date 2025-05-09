import { ifStateIs } from '@hass-blocks/blocks';
import { ifStateIsNot } from '@hass-blocks/blocks';

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

export const ifLivingRoomMotionSensorIsOn = ifStateIs(
  livingRoomMotionSensor,
  'on',
);
export const ifLivingRoomMotionSensorIsOff = ifStateIs(
  livingRoomMotionSensor,
  'off',
);
export const ifBedroomMotionSensorIsOn = ifStateIs(bedroomMotionSensor, 'on');
export const ifBedroomMotionSensorIsOff = ifStateIs(bedroomMotionSensor, 'off');

export const ifHallwayMotionSensorIsOn = ifStateIs(hallwayMotionSensor, 'on');
export const ifHallwaySensorIsOff = ifStateIs(hallwayMotionSensor, 'off');

export const ifBathroomMotionSensorIsOn = ifStateIs(bathroomMotionSensor, 'on');
export const ifBathroomMotionSensorIsOff = ifStateIs(
  bathroomMotionSensor,
  'off',
);

export const ifSleepModeIsOff = ifStateIs(sleepMode, 'off');
export const ifTvModeIsOff = ifStateIs(tvMode, 'off');
export const ifHomeModeIsOff = ifStateIs(homeMode, 'off');
export const ifVisitorModeIsNotOn = ifStateIsNot(visitorMode, 'on');
export const ifBlindsWouldNormallyBeOpen = ifStateIs(blindsDefaultOpen, 'on');
