import { entity, type IEntity } from '@hass-blocks/core';

declare global {
  var livingRoomHeatingSwitchPingButton: IEntity<`button.living_room_heating_switch_ping`>;
  var bedroomHeatingSwitchPingButton: IEntity<`button.bedroom_heating_switch_ping`>;
  var gymHeatingSwitchPingButton: IEntity<`button.gym_heating_switch_ping`>;
  var livingRoomSensorPingButton: IEntity<`button.living_room_sensor_ping`>;
  var gymSensorPingButton: IEntity<`button.gym_sensor_ping`>;
  var bedroomSensorPingButton: IEntity<`button.bedroom_sensor_ping`>;
  var livingRoomSensorIdleCoverStatusButton: IEntity<`button.living_room_sensor_idle_cover_status`>;
  var livingRoomSensorIdleMotionSensorStatusButton: IEntity<`button.living_room_sensor_idle_motion_sensor_status`>;
  var gymSensorIdleCoverStatusButton: IEntity<`button.gym_sensor_idle_cover_status`>;
  var gymSensorIdleMotionSensorStatusButton: IEntity<`button.gym_sensor_idle_motion_sensor_status`>;
  var bedroomSensorIdleCoverStatusButton: IEntity<`button.bedroom_sensor_idle_cover_status`>;
  var bedroomSensorIdleMotionSensorStatusButton: IEntity<`button.bedroom_sensor_idle_motion_sensor_status`>;
  var newDeviceMyPositionButton: IEntity<`button.new_device_my_position`>;
  var leftWindowMyPositionButton: IEntity<`button.left_window_my_position`>;
  var rollerBlindMyPositionButton: IEntity<`button.roller_blind_my_position`>;
  var rollerBlindMyPosition_2Button: IEntity<`button.roller_blind_my_position_2`>;
  var boilerBoostRebootButton: IEntity<`button.boiler_boost_reboot`>;
  var tvHeaterRebootButton: IEntity<`button.tv_heater_reboot`>;
  var livingRoomHeaderByTheTableRebootButton: IEntity<`button.living_room_header_by_the_table_reboot`>;
  var hallwayHeaterRebootButton: IEntity<`button.hallway_heater_reboot`>;
  var bookshelfHeaterRebootButton: IEntity<`button.bookshelf_heater_reboot`>;
  var shellyemA4e57cba73f5RebootButton: IEntity<`button.shellyem_a4e57cba73f5_reboot`>;
  var frontDoorUnlatchButton: IEntity<`button.front_door_unlatch`>;
  var frontDoorLockNGoButton: IEntity<`button.front_door_lock_n_go`>;
  var frontDoorLockNGoWithUnlatchButton: IEntity<`button.front_door_lock_n_go_with_unlatch`>;
  var zigbee2mqttBridgeRestartButton: IEntity<`button.zigbee2mqtt_bridge_restart`>;
  var boilerRebootButton: IEntity<`button.boiler_reboot`>;
  var frontDoorDoorbellMqttTakeSnapshotButton: IEntity<`button.front_door_doorbell_mqtt_take_snapshot`>;
  var boostBoilerButton: IEntity<`button.boost_boiler`>;
  var readOutMyCalendarButton: IEntity<`button.read_out_my_calendar`>;
  var readOutMyTodoListButton: IEntity<`button.read_out_my_todo_list`>;
  var readOutTheForecastButton: IEntity<`button.read_out_the_forecast`>;
  var nodered_7fec8ecc736c6f46Button: IEntity<`button.nodered_7fec8ecc736c6f46`>;
  var dismissWelcomeMessageButton: IEntity<`button.dismiss_welcome_message`>;
  var findMyPhoneButton: IEntity<`button.find_my_phone`>;
  var tvSlideshowButton: IEntity<`button.tv_slideshow`>;
}

globalThis.livingRoomHeatingSwitchPingButton = entity(
  'button.living_room_heating_switch_ping',
);
globalThis.bedroomHeatingSwitchPingButton = entity(
  'button.bedroom_heating_switch_ping',
);
globalThis.gymHeatingSwitchPingButton = entity(
  'button.gym_heating_switch_ping',
);
globalThis.livingRoomSensorPingButton = entity(
  'button.living_room_sensor_ping',
);
globalThis.gymSensorPingButton = entity('button.gym_sensor_ping');
globalThis.bedroomSensorPingButton = entity('button.bedroom_sensor_ping');
globalThis.livingRoomSensorIdleCoverStatusButton = entity(
  'button.living_room_sensor_idle_cover_status',
);
globalThis.livingRoomSensorIdleMotionSensorStatusButton = entity(
  'button.living_room_sensor_idle_motion_sensor_status',
);
globalThis.gymSensorIdleCoverStatusButton = entity(
  'button.gym_sensor_idle_cover_status',
);
globalThis.gymSensorIdleMotionSensorStatusButton = entity(
  'button.gym_sensor_idle_motion_sensor_status',
);
globalThis.bedroomSensorIdleCoverStatusButton = entity(
  'button.bedroom_sensor_idle_cover_status',
);
globalThis.bedroomSensorIdleMotionSensorStatusButton = entity(
  'button.bedroom_sensor_idle_motion_sensor_status',
);
globalThis.newDeviceMyPositionButton = entity('button.new_device_my_position');
globalThis.leftWindowMyPositionButton = entity(
  'button.left_window_my_position',
);
globalThis.rollerBlindMyPositionButton = entity(
  'button.roller_blind_my_position',
);
globalThis.rollerBlindMyPosition_2Button = entity(
  'button.roller_blind_my_position_2',
);
globalThis.boilerBoostRebootButton = entity('button.boiler_boost_reboot');
globalThis.tvHeaterRebootButton = entity('button.tv_heater_reboot');
globalThis.livingRoomHeaderByTheTableRebootButton = entity(
  'button.living_room_header_by_the_table_reboot',
);
globalThis.hallwayHeaterRebootButton = entity('button.hallway_heater_reboot');
globalThis.bookshelfHeaterRebootButton = entity(
  'button.bookshelf_heater_reboot',
);
globalThis.shellyemA4e57cba73f5RebootButton = entity(
  'button.shellyem_a4e57cba73f5_reboot',
);
globalThis.frontDoorUnlatchButton = entity('button.front_door_unlatch');
globalThis.frontDoorLockNGoButton = entity('button.front_door_lock_n_go');
globalThis.frontDoorLockNGoWithUnlatchButton = entity(
  'button.front_door_lock_n_go_with_unlatch',
);
globalThis.zigbee2mqttBridgeRestartButton = entity(
  'button.zigbee2mqtt_bridge_restart',
);
globalThis.boilerRebootButton = entity('button.boiler_reboot');
globalThis.frontDoorDoorbellMqttTakeSnapshotButton = entity(
  'button.front_door_doorbell_mqtt_take_snapshot',
);
globalThis.boostBoilerButton = entity('button.boost_boiler');
globalThis.readOutMyCalendarButton = entity('button.read_out_my_calendar');
globalThis.readOutMyTodoListButton = entity('button.read_out_my_todo_list');
globalThis.readOutTheForecastButton = entity('button.read_out_the_forecast');
globalThis.nodered_7fec8ecc736c6f46Button = entity(
  'button.nodered_7fec8ecc736c6f46',
);
globalThis.dismissWelcomeMessageButton = entity(
  'button.dismiss_welcome_message',
);
globalThis.findMyPhoneButton = entity('button.find_my_phone');
globalThis.tvSlideshowButton = entity('button.tv_slideshow');
