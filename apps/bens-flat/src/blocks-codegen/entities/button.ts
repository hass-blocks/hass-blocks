import { entity, IEntity } from '@hass-blocks/core';

declare global {
  var boilerBoostRebootButton: IEntity<`button.${string}`>;
  var shellyemA4e57cba73f5RebootButton: IEntity<`button.${string}`>;
  var boilerRebootButton: IEntity<`button.${string}`>;
  var newDeviceMyPositionButton: IEntity<`button.${string}`>;
  var leftWindowMyPositionButton: IEntity<`button.${string}`>;
  var rollerBlindMyPositionButton: IEntity<`button.${string}`>;
  var rollerBlindMyPosition_2Button: IEntity<`button.${string}`>;
  var frontDoorUnlatchButton: IEntity<`button.${string}`>;
  var frontDoorLockNGoButton: IEntity<`button.${string}`>;
  var frontDoorLockNGoWithUnlatchButton: IEntity<`button.${string}`>;
  var zigbee2mqttBridgeRestartButton: IEntity<`button.${string}`>;
  var bedroomHeatingSwitchPingButton: IEntity<`button.${string}`>;
  var bedroomSensorPingButton: IEntity<`button.${string}`>;
  var gymHeatingSwitchPingButton: IEntity<`button.${string}`>;
  var livingRoomSensorPingButton: IEntity<`button.${string}`>;
  var livingRoomHeatingSwitchPingButton: IEntity<`button.${string}`>;
  var gymSensorPingButton: IEntity<`button.${string}`>;
  var livingRoomSensorIdleCoverStatusButton: IEntity<`button.${string}`>;
  var livingRoomSensorIdleMotionSensorStatusButton: IEntity<`button.${string}`>;
  var gymSensorIdleCoverStatusButton: IEntity<`button.${string}`>;
  var gymSensorIdleMotionSensorStatusButton: IEntity<`button.${string}`>;
  var bedroomSensorIdleCoverStatusButton: IEntity<`button.${string}`>;
  var bedroomSensorIdleMotionSensorStatusButton: IEntity<`button.${string}`>;
  var frontDoorDoorbellMqttTakeSnapshotButton: IEntity<`button.${string}`>;
  var boostBoilerButton: IEntity<`button.${string}`>;
  var readOutMyCalendarButton: IEntity<`button.${string}`>;
  var readOutMyTodoListButton: IEntity<`button.${string}`>;
  var readOutTheForecastButton: IEntity<`button.${string}`>;
  var nodered_7fec8ecc736c6f46Button: IEntity<`button.${string}`>;
  var dismissWelcomeMessageButton: IEntity<`button.${string}`>;
  var findMyPhoneButton: IEntity<`button.${string}`>;
  var tvSlideshowButton: IEntity<`button.${string}`>;
  var livingRoomHeaderByTheTableRebootButton: IEntity<`button.${string}`>;
}

globalThis.boilerBoostRebootButton = entity('button.boiler_boost_reboot');
globalThis.shellyemA4e57cba73f5RebootButton = entity(
  'button.shellyem_a4e57cba73f5_reboot',
);
globalThis.boilerRebootButton = entity('button.boiler_reboot');
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
globalThis.frontDoorUnlatchButton = entity('button.front_door_unlatch');
globalThis.frontDoorLockNGoButton = entity('button.front_door_lock_n_go');
globalThis.frontDoorLockNGoWithUnlatchButton = entity(
  'button.front_door_lock_n_go_with_unlatch',
);
globalThis.zigbee2mqttBridgeRestartButton = entity(
  'button.zigbee2mqtt_bridge_restart',
);
globalThis.bedroomHeatingSwitchPingButton = entity(
  'button.bedroom_heating_switch_ping',
);
globalThis.bedroomSensorPingButton = entity('button.bedroom_sensor_ping');
globalThis.gymHeatingSwitchPingButton = entity(
  'button.gym_heating_switch_ping',
);
globalThis.livingRoomSensorPingButton = entity(
  'button.living_room_sensor_ping',
);
globalThis.livingRoomHeatingSwitchPingButton = entity(
  'button.living_room_heating_switch_ping',
);
globalThis.gymSensorPingButton = entity('button.gym_sensor_ping');
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
globalThis.livingRoomHeaderByTheTableRebootButton = entity(
  'button.living_room_header_by_the_table_reboot',
);
