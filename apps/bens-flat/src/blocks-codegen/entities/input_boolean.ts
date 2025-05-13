import { entity, type IEntity } from '@hass-blocks/core';

declare global {
  var livingRoomMotionSensorInputBoolean: IEntity<`input_boolean.living_room_motion_sensor`>;
  var hallwayMotionSensorInputBoolean: IEntity<`input_boolean.hallway_motion_sensor`>;
  var holidayModeInputBoolean: IEntity<`input_boolean.holiday_mode`>;
}

globalThis.livingRoomMotionSensorInputBoolean = entity(
  'input_boolean.living_room_motion_sensor',
);
globalThis.hallwayMotionSensorInputBoolean = entity(
  'input_boolean.hallway_motion_sensor',
);
globalThis.holidayModeInputBoolean = entity('input_boolean.holiday_mode');
