import { entity, ITarget } from '@hass-blocks/core';

declare global {
  var newDeviceMyPositionButton: ITarget;
  var leftWindowMyPositionButton: ITarget;
  var rollerBlindMyPositionButton: ITarget;
  var rollerBlindMyPosition_2Button: ITarget;
  var boilerBoostRebootButton: ITarget;
  var livingRoomHeaderByTheTableRebootButton: ITarget;
  var boilerRebootButton: ITarget;
  var shellyemA4e57cba73f5RebootButton: ITarget;
  var livingRoomHeatingSwitchPingButton: ITarget;
  var bedroomHeatingSwitchPingButton: ITarget;
  var gymHeatingSwitchPingButton: ITarget;
  var livingRoomSensorPingButton: ITarget;
  var gymSensorPingButton: ITarget;
  var bedroomSensorPingButton: ITarget;
  var livingRoomSensorIdleCoverStatusButton: ITarget;
  var livingRoomSensorIdleMotionSensorStatusButton: ITarget;
  var gymSensorIdleCoverStatusButton: ITarget;
  var gymSensorIdleMotionSensorStatusButton: ITarget;
  var bedroomSensorIdleCoverStatusButton: ITarget;
  var bedroomSensorIdleMotionSensorStatusButton: ITarget;
  var frontDoorUnlatchButton: ITarget;
  var frontDoorLockNGoButton: ITarget;
  var frontDoorLockNGoWithUnlatchButton: ITarget;
  var zigbee2mqttBridgeRestartButton: ITarget;
  var frontDoorDoorbellMqttTakeSnapshotButton: ITarget;
  var boostBoilerButton: ITarget;
  var readOutMyCalendarButton: ITarget;
  var readOutMyTodoListButton: ITarget;
  var readOutTheForecastButton: ITarget;
  var nodered_7fec8ecc736c6f46Button: ITarget;
  var dismissWelcomeMessageButton: ITarget;
  var findMyPhoneButton: ITarget;
  var tvSlideshowButton: ITarget;
}

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
globalThis.livingRoomHeaderByTheTableRebootButton = entity(
  'button.living_room_header_by_the_table_reboot',
);
globalThis.boilerRebootButton = entity('button.boiler_reboot');
globalThis.shellyemA4e57cba73f5RebootButton = entity(
  'button.shellyem_a4e57cba73f5_reboot',
);
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
globalThis.frontDoorUnlatchButton = entity('button.front_door_unlatch');
globalThis.frontDoorLockNGoButton = entity('button.front_door_lock_n_go');
globalThis.frontDoorLockNGoWithUnlatchButton = entity(
  'button.front_door_lock_n_go_with_unlatch',
);
globalThis.zigbee2mqttBridgeRestartButton = entity(
  'button.zigbee2mqtt_bridge_restart',
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
