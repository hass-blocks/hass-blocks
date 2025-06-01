import { entity, type IEntity } from '@hass-blocks/core';

declare global {
  /**
   * Living Room Heating Switch Ping
   */
  var livingRoomHeatingSwitchPingButton: IEntity<`button.living_room_heating_switch_ping`>;
  /**
   * Bedroom Heating Switch Ping
   */
  var bedroomHeatingSwitchPingButton: IEntity<`button.bedroom_heating_switch_ping`>;
  /**
   * Gym Heating Switch Ping
   */
  var gymHeatingSwitchPingButton: IEntity<`button.gym_heating_switch_ping`>;
  /**
   * Living Room Sensor Ping
   */
  var livingRoomSensorPingButton: IEntity<`button.living_room_sensor_ping`>;
  /**
   * Gym Sensor Ping
   */
  var gymSensorPingButton: IEntity<`button.gym_sensor_ping`>;
  /**
   * Bedroom Sensor Ping
   */
  var bedroomSensorPingButton: IEntity<`button.bedroom_sensor_ping`>;
  /**
   * Living Room Sensor Idle Home Security Cover status
   */
  var livingRoomSensorIdleCoverStatusButton: IEntity<`button.living_room_sensor_idle_cover_status`>;
  /**
   * Living Room Sensor Idle Home Security Motion sensor status
   */
  var livingRoomSensorIdleMotionSensorStatusButton: IEntity<`button.living_room_sensor_idle_motion_sensor_status`>;
  /**
   * Gym Sensor Idle Home Security Cover status
   */
  var gymSensorIdleCoverStatusButton: IEntity<`button.gym_sensor_idle_cover_status`>;
  /**
   * Gym Sensor Idle Home Security Motion sensor status
   */
  var gymSensorIdleMotionSensorStatusButton: IEntity<`button.gym_sensor_idle_motion_sensor_status`>;
  /**
   * Bedroom Sensor Idle Home Security Cover status
   */
  var bedroomSensorIdleCoverStatusButton: IEntity<`button.bedroom_sensor_idle_cover_status`>;
  /**
   * Bedroom Sensor Idle Home Security Motion sensor status
   */
  var bedroomSensorIdleMotionSensorStatusButton: IEntity<`button.bedroom_sensor_idle_motion_sensor_status`>;
  /**
   * Left Centre Window My position
   */
  var newDeviceMyPositionButton: IEntity<`button.new_device_my_position`>;
  /**
   * Left Window My position
   */
  var leftWindowMyPositionButton: IEntity<`button.left_window_my_position`>;
  /**
   * Right Centre Window My position
   */
  var rollerBlindMyPositionButton: IEntity<`button.roller_blind_my_position`>;
  /**
   * Right Window My position
   */
  var rollerBlindMyPosition_2Button: IEntity<`button.roller_blind_my_position_2`>;
  /**
   * Boiler (Boost) Reboot
   */
  var boilerBoostRebootButton: IEntity<`button.boiler_boost_reboot`>;
  /**
   * shellyplus1pm-a0dd6c2be3d0 Reboot
   */
  var tvHeaterRebootButton: IEntity<`button.tv_heater_reboot`>;
  /**
   * shellyplus1pm-a0dd6c2b6cf4 Reboot
   */
  var livingRoomHeaderByTheTableRebootButton: IEntity<`button.living_room_header_by_the_table_reboot`>;
  /**
   * shellyplus1pm-a0dd6c2b3a6c Reboot
   */
  var hallwayHeaterRebootButton: IEntity<`button.hallway_heater_reboot`>;
  /**
   * shellyplus1pm-a0dd6c27e768 Reboot
   */
  var bookshelfHeaterRebootButton: IEntity<`button.bookshelf_heater_reboot`>;
  /**
   * shellyem-A4E57CBA73F5 Reboot
   */
  var shellyemA4e57cba73f5RebootButton: IEntity<`button.shellyem_a4e57cba73f5_reboot`>;
  /**
   * Front Door Unlatch
   */
  var frontDoorUnlatchButton: IEntity<`button.front_door_unlatch`>;
  /**
   * Front Door Lock 'n' Go
   */
  var frontDoorLockNGoButton: IEntity<`button.front_door_lock_n_go`>;
  /**
   * Front Door Lock 'n' Go with unlatch
   */
  var frontDoorLockNGoWithUnlatchButton: IEntity<`button.front_door_lock_n_go_with_unlatch`>;
  /**
   * Zigbee2MQTT Bridge Restart
   */
  var zigbee2mqttBridgeRestartButton: IEntity<`button.zigbee2mqtt_bridge_restart`>;
  /**
   * Boiler Reboot
   */
  var boilerRebootButton: IEntity<`button.boiler_reboot`>;
  /**
   * Front Door Doorbell MQTT Take Snapshot
   */
  var frontDoorDoorbellMqttTakeSnapshotButton: IEntity<`button.front_door_doorbell_mqtt_take_snapshot`>;
  /**
   * Boost boiler
   */
  var boostBoilerButton: IEntity<`button.boost_boiler`>;
  /**
   * Read out my calendar
   */
  var readOutMyCalendarButton: IEntity<`button.read_out_my_calendar`>;
  /**
   * Read out my todo list
   */
  var readOutMyTodoListButton: IEntity<`button.read_out_my_todo_list`>;
  /**
   * Read out the forecast
   */
  var readOutTheForecastButton: IEntity<`button.read_out_the_forecast`>;
  /**
   * nodered 7fec8ecc736c6f46
   */
  var nodered_7fec8ecc736c6f46Button: IEntity<`button.nodered_7fec8ecc736c6f46`>;
  /**
   * Dismiss welcome message
   */
  var dismissWelcomeMessageButton: IEntity<`button.dismiss_welcome_message`>;
  /**
   * Find my phone
   */
  var findMyPhoneButton: IEntity<`button.find_my_phone`>;
  /**
   * TV Slideshow
   */
  var tvSlideshowButton: IEntity<`button.tv_slideshow`>;
}

globalThis.livingRoomHeatingSwitchPingButton = entity(
  'button.living_room_heating_switch_ping',
  'Living Room Heating Switch Ping',
);
globalThis.bedroomHeatingSwitchPingButton = entity(
  'button.bedroom_heating_switch_ping',
  'Bedroom Heating Switch Ping',
);
globalThis.gymHeatingSwitchPingButton = entity(
  'button.gym_heating_switch_ping',
  'Gym Heating Switch Ping',
);
globalThis.livingRoomSensorPingButton = entity(
  'button.living_room_sensor_ping',
  'Living Room Sensor Ping',
);
globalThis.gymSensorPingButton = entity(
  'button.gym_sensor_ping',
  'Gym Sensor Ping',
);
globalThis.bedroomSensorPingButton = entity(
  'button.bedroom_sensor_ping',
  'Bedroom Sensor Ping',
);
globalThis.livingRoomSensorIdleCoverStatusButton = entity(
  'button.living_room_sensor_idle_cover_status',
  'Living Room Sensor Idle Home Security Cover status',
);
globalThis.livingRoomSensorIdleMotionSensorStatusButton = entity(
  'button.living_room_sensor_idle_motion_sensor_status',
  'Living Room Sensor Idle Home Security Motion sensor status',
);
globalThis.gymSensorIdleCoverStatusButton = entity(
  'button.gym_sensor_idle_cover_status',
  'Gym Sensor Idle Home Security Cover status',
);
globalThis.gymSensorIdleMotionSensorStatusButton = entity(
  'button.gym_sensor_idle_motion_sensor_status',
  'Gym Sensor Idle Home Security Motion sensor status',
);
globalThis.bedroomSensorIdleCoverStatusButton = entity(
  'button.bedroom_sensor_idle_cover_status',
  'Bedroom Sensor Idle Home Security Cover status',
);
globalThis.bedroomSensorIdleMotionSensorStatusButton = entity(
  'button.bedroom_sensor_idle_motion_sensor_status',
  'Bedroom Sensor Idle Home Security Motion sensor status',
);
globalThis.newDeviceMyPositionButton = entity(
  'button.new_device_my_position',
  'Left Centre Window My position',
);
globalThis.leftWindowMyPositionButton = entity(
  'button.left_window_my_position',
  'Left Window My position',
);
globalThis.rollerBlindMyPositionButton = entity(
  'button.roller_blind_my_position',
  'Right Centre Window My position',
);
globalThis.rollerBlindMyPosition_2Button = entity(
  'button.roller_blind_my_position_2',
  'Right Window My position',
);
globalThis.boilerBoostRebootButton = entity(
  'button.boiler_boost_reboot',
  'Boiler (Boost) Reboot',
);
globalThis.tvHeaterRebootButton = entity(
  'button.tv_heater_reboot',
  'shellyplus1pm-a0dd6c2be3d0 Reboot',
);
globalThis.livingRoomHeaderByTheTableRebootButton = entity(
  'button.living_room_header_by_the_table_reboot',
  'shellyplus1pm-a0dd6c2b6cf4 Reboot',
);
globalThis.hallwayHeaterRebootButton = entity(
  'button.hallway_heater_reboot',
  'shellyplus1pm-a0dd6c2b3a6c Reboot',
);
globalThis.bookshelfHeaterRebootButton = entity(
  'button.bookshelf_heater_reboot',
  'shellyplus1pm-a0dd6c27e768 Reboot',
);
globalThis.shellyemA4e57cba73f5RebootButton = entity(
  'button.shellyem_a4e57cba73f5_reboot',
  'shellyem-A4E57CBA73F5 Reboot',
);
globalThis.frontDoorUnlatchButton = entity(
  'button.front_door_unlatch',
  'Front Door Unlatch',
);
globalThis.frontDoorLockNGoButton = entity(
  'button.front_door_lock_n_go',
  "Front Door Lock 'n' Go",
);
globalThis.frontDoorLockNGoWithUnlatchButton = entity(
  'button.front_door_lock_n_go_with_unlatch',
  "Front Door Lock 'n' Go with unlatch",
);
globalThis.zigbee2mqttBridgeRestartButton = entity(
  'button.zigbee2mqtt_bridge_restart',
  'Zigbee2MQTT Bridge Restart',
);
globalThis.boilerRebootButton = entity('button.boiler_reboot', 'Boiler Reboot');
globalThis.frontDoorDoorbellMqttTakeSnapshotButton = entity(
  'button.front_door_doorbell_mqtt_take_snapshot',
  'Front Door Doorbell MQTT Take Snapshot',
);
globalThis.boostBoilerButton = entity('button.boost_boiler', 'Boost boiler');
globalThis.readOutMyCalendarButton = entity(
  'button.read_out_my_calendar',
  'Read out my calendar',
);
globalThis.readOutMyTodoListButton = entity(
  'button.read_out_my_todo_list',
  'Read out my todo list',
);
globalThis.readOutTheForecastButton = entity(
  'button.read_out_the_forecast',
  'Read out the forecast',
);
globalThis.nodered_7fec8ecc736c6f46Button = entity(
  'button.nodered_7fec8ecc736c6f46',
  'nodered 7fec8ecc736c6f46',
);
globalThis.dismissWelcomeMessageButton = entity(
  'button.dismiss_welcome_message',
  'Dismiss welcome message',
);
globalThis.findMyPhoneButton = entity('button.find_my_phone', 'Find my phone');
globalThis.tvSlideshowButton = entity('button.tv_slideshow', 'TV Slideshow');
