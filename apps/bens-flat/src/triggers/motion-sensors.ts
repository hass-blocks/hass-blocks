import { stateTurns } from '@hass-blocks/blocks';
import { entities } from '../constants.ts';
import { assertTargetHasEntityIds } from '@hass-blocks/core';

const {
  livingRoomMotionSensor,
  bedroomMotionSensor,
  bathroomMotionSensor,
  hallwayMotionSensor,
} = entities;

assertTargetHasEntityIds(livingRoomMotionSensor);
assertTargetHasEntityIds(bedroomMotionSensor);
assertTargetHasEntityIds(bathroomMotionSensor);
assertTargetHasEntityIds(hallwayMotionSensor);

export const motionIsDetectedInTheLivingRoom = stateTurns(
  // biome-ignore lint/style/noNonNullAssertion: <explanation>
  livingRoomMotionSensor.targetIds.entity_id[0]!,
  'on',
);

export const motionIsDetectedInTheBedroom = stateTurns(
  // biome-ignore lint/style/noNonNullAssertion: <explanation>
  bedroomMotionSensor.targetIds.entity_id[0]!,
  'on',
);

export const motionIsDetectedInTheBathroom = stateTurns(
  // biome-ignore lint/style/noNonNullAssertion: <explanation>
  bathroomMotionSensor.targetIds.entity_id[0]!,
  'on',
);

export const motionIsDetectedInTheHallway = stateTurns(
  // biome-ignore lint/style/noNonNullAssertion: <explanation>
  hallwayMotionSensor.targetIds.entity_id[0]!,
  'on',
);
