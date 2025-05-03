import { stateTurns } from '@hass-blocks/blocks';
import { entities } from '../constants.ts';

const {
  livingRoomMotionSensor,
  bedroomMotionSensor,
  bathroomMotionSensor,
  hallwayMotionSensor,
} = entities.binary_sensor;

export const motionIsDetectedInTheLivingRoom = stateTurns(
  livingRoomMotionSensor.id,
  'on',
);

export const motionIsDetectedInTheBedroom = stateTurns(
  bedroomMotionSensor.id,
  'on',
);

export const motionIsDetectedInTheBathroom = stateTurns(
  bathroomMotionSensor.id,
  'on',
);

export const motionIsDetectedInTheHallway = stateTurns(
  hallwayMotionSensor.id,
  'on',
);
