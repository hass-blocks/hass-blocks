import { entity, IEntity } from '@hass-blocks/core';

declare global {
  var livingRoomMotionSensorInputBoolean: IEntity<`input_boolean.${string}`>;
  var hallwayMotionSensorInputBoolean: IEntity<`input_boolean.${string}`>;
  var holidayModeInputBoolean: IEntity<`input_boolean.${string}`>;
}

globalThis.livingRoomMotionSensorInputBoolean = entity(
  'input_boolean.living_room_motion_sensor',
);
globalThis.hallwayMotionSensorInputBoolean = entity(
  'input_boolean.hallway_motion_sensor',
);
globalThis.holidayModeInputBoolean = entity('input_boolean.holiday_mode');
