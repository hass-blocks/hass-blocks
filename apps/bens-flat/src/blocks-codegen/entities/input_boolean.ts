import { entity, ITarget } from '@hass-blocks/core';

declare global {
  var livingRoomMotionSensorInputBoolean: ITarget;
  var hallwayMotionSensorInputBoolean: ITarget;
  var holidayModeInputBoolean: ITarget;
}

globalThis.livingRoomMotionSensorInputBoolean = entity(
  'input_boolean.living_room_motion_sensor',
);
globalThis.hallwayMotionSensorInputBoolean = entity(
  'input_boolean.hallway_motion_sensor',
);
globalThis.holidayModeInputBoolean = entity('input_boolean.holiday_mode');
