import { stateTurns } from '@hass-blocks/blocks';
import {
  bathroomMotionSensor,
  bedroomMotionSensor,
  hallwayMotionSensor,
  livingRoomMotionSensor,
} from '../entities.ts';

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
