import { stateTurns } from '@hass-blocks/blocks';
import { entities } from '../constants.ts';

const {
  livingRoomMotionSensor,
  bedroomMotionSensor,
  bathroomMotionSensor,
  hallwayMotionSensor,
} = entities;

export const motionIsDetectedInTheLivingRoom = stateTurns(
  livingRoomMotionSensor,
  'on',
);

export const motionIsDetectedInTheBedroom = stateTurns(
  bedroomMotionSensor,
  'on',
);

export const motionIsDetectedInTheBathroom = stateTurns(
  bathroomMotionSensor,
  'on',
);

export const motionIsDetectedInTheHallway = stateTurns(
  hallwayMotionSensor,
  'on',
);
