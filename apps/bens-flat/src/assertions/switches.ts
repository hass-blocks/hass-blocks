import { ifStateIs } from '@hass-blocks/blocks';
import { entities } from '../constants.ts';
import { ifStateIsNot } from '@hass-blocks/blocks';

const {
  livingRoomMotionSensor,
  bedroomMotionSensor,
  homeMode,
  blindsDefaultOpen,
  bathroomMotionSensor,
  hallwayMotionSensor,
  sleepMode,
  tvMode,
  visitorMode,
} = entities.switch;

export const ifLivingRoomMotionSensorIsOn = ifStateIs(
  livingRoomMotionSensor.id,
  'on',
);
export const ifLivingRoomMotionSensorIsOff = ifStateIs(
  livingRoomMotionSensor.id,
  'off',
);
export const ifBedroomMotionSensorIsOn = ifStateIs(
  bedroomMotionSensor.id,
  'on',
);
export const ifBedroomMotionSensorIsOff = ifStateIs(
  bedroomMotionSensor.id,
  'off',
);

export const ifHallwayMotionSensorIsOn = ifStateIs(
  hallwayMotionSensor.id,
  'on',
);
export const ifHallwaySensorIsOff = ifStateIs(hallwayMotionSensor.id, 'off');

export const ifBathroomMotionSensorIsOn = ifStateIs(
  bathroomMotionSensor.id,
  'on',
);
export const ifBathroomMotionSensorIsOff = ifStateIs(
  bathroomMotionSensor.id,
  'off',
);

export const ifSleepModeIsOff = ifStateIs(sleepMode.id, 'off');
export const ifTvModeIsOff = ifStateIs(tvMode.id, 'off');
export const ifHomeModeIsOff = ifStateIs(homeMode.id, 'off');
export const ifVisitorModeIsNotOn = ifStateIsNot(visitorMode.id, 'on');
export const ifBlindsWouldNormallyBeOpen = ifStateIs(
  blindsDefaultOpen.id,
  'on',
);
