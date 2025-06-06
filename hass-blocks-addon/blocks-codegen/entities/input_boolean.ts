import { entity, type IEntity } from '@hass-blocks/core';

declare global {
  /**
   * Living room motion sensor
   */
  var livingRoomMotionSensorInputBoolean: IEntity<`input_boolean.living_room_motion_sensor`>;
  /**
   * Hallway motion sensor
   */
  var hallwayMotionSensorInputBoolean: IEntity<`input_boolean.hallway_motion_sensor`>;
  /**
   * Holiday mode
   */
  var holidayModeInputBoolean: IEntity<`input_boolean.holiday_mode`>;
}

globalThis.livingRoomMotionSensorInputBoolean = entity(
  'input_boolean.living_room_motion_sensor',
  'Living room motion sensor',
);
globalThis.hallwayMotionSensorInputBoolean = entity(
  'input_boolean.hallway_motion_sensor',
  'Hallway motion sensor',
);
globalThis.holidayModeInputBoolean = entity(
  'input_boolean.holiday_mode',
  'Holiday mode',
);
