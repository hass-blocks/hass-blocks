import { entity, type IEntity } from '@hass-blocks/core';

declare global {
  var ringMqttWithVideoStreamingRunningBinarySensor: IEntity<`binary_sensor.ring_mqtt_with_video_streaming_running`>;
  var remoteUiBinarySensor: IEntity<`binary_sensor.remote_ui`>;
  var tumbleDryerRunningBinarySensor: IEntity<`binary_sensor.tumble_dryer_running`>;
  var diskCloseToFullBinarySensor: IEntity<`binary_sensor.disk_close_to_full`>;
  var bensImacProAudioInputInUseBinarySensor: IEntity<`binary_sensor.bens_imac_pro_audio_input_in_use`>;
  var bensImacProAudioOutputInUseBinarySensor: IEntity<`binary_sensor.bens_imac_pro_audio_output_in_use`>;
  var bensImacProCameraInUseBinarySensor: IEntity<`binary_sensor.bens_imac_pro_camera_in_use`>;
  var bensImacProActiveBinarySensor: IEntity<`binary_sensor.bens_imac_pro_active`>;
  var bensImacProFocusBinarySensor: IEntity<`binary_sensor.bens_imac_pro_focus`>;
  var bensIphoneFocusBinarySensor: IEntity<`binary_sensor.bens_iphone_focus`>;
  var bensImacCameraInUseBinarySensor: IEntity<`binary_sensor.bens_imac_camera_in_use`>;
  var bensImacAudioInputInUseBinarySensor: IEntity<`binary_sensor.bens_imac_audio_input_in_use`>;
  var bensImacAudioOutputInUseBinarySensor: IEntity<`binary_sensor.bens_imac_audio_output_in_use`>;
  var bensImacActiveBinarySensor: IEntity<`binary_sensor.bens_imac_active`>;
  var bensImacFocusBinarySensor: IEntity<`binary_sensor.bens_imac_focus`>;
  var ryansIphoneFocusBinarySensor: IEntity<`binary_sensor.ryans_iphone_focus`>;
  var livingRoomSensorSensorStateTamperBinarySensor: IEntity<`binary_sensor.living_room_sensor_sensor_state_tamper`>;
  var livingRoomSensorSensorStateMotionBinarySensor: IEntity<`binary_sensor.living_room_sensor_sensor_state_motion`>;
  var livingRoomSensorTamperingProductCoverRemovedBinarySensor: IEntity<`binary_sensor.living_room_sensor_tampering_product_cover_removed`>;
  var livingRoomSensorMotionDetectionBinarySensor: IEntity<`binary_sensor.living_room_sensor_motion_detection`>;
  var livingRoomSensorLowBatteryLevelBinarySensor: IEntity<`binary_sensor.living_room_sensor_low_battery_level`>;
  var gymSensorSensorStateTamperBinarySensor: IEntity<`binary_sensor.gym_sensor_sensor_state_tamper`>;
  var gymSensorSensorStateMotionBinarySensor: IEntity<`binary_sensor.gym_sensor_sensor_state_motion`>;
  var gymSensorTamperingProductCoverRemovedBinarySensor: IEntity<`binary_sensor.gym_sensor_tampering_product_cover_removed`>;
  var gymSensorMotionDetectionBinarySensor: IEntity<`binary_sensor.gym_sensor_motion_detection`>;
  var gymSensorLowBatteryLevelBinarySensor: IEntity<`binary_sensor.gym_sensor_low_battery_level`>;
  var bedroomSensorSensorStateTamperBinarySensor: IEntity<`binary_sensor.bedroom_sensor_sensor_state_tamper`>;
  var bedroomSensorSensorStateMotionBinarySensor: IEntity<`binary_sensor.bedroom_sensor_sensor_state_motion`>;
  var bedroomSensorTamperingProductCoverRemovedBinarySensor: IEntity<`binary_sensor.bedroom_sensor_tampering_product_cover_removed`>;
  var bedroomSensorMotionDetectionBinarySensor: IEntity<`binary_sensor.bedroom_sensor_motion_detection`>;
  var bedroomSensorLowBatteryLevelBinarySensor: IEntity<`binary_sensor.bedroom_sensor_low_battery_level`>;
  var livingRoomOccupancyBinarySensor: IEntity<`binary_sensor.living_room_occupancy`>;
  var benIsHomeBinarySensor: IEntity<`binary_sensor.ben_is_home`>;
  var inBedBinarySensor: IEntity<`binary_sensor.in_bed`>;
  var tvHeaterSwitch_0OverheatingBinarySensor: IEntity<`binary_sensor.tv_heater_switch_0_overheating`>;
  var tvHeaterSwitch_0OverpoweringBinarySensor: IEntity<`binary_sensor.tv_heater_switch_0_overpowering`>;
  var tvHeaterSwitch_0OvervoltageBinarySensor: IEntity<`binary_sensor.tv_heater_switch_0_overvoltage`>;
  var tvHeaterSwitch_0OvercurrentBinarySensor: IEntity<`binary_sensor.tv_heater_switch_0_overcurrent`>;
  var livingRoomHeaderByTheTableSwitch_0OverheatingBinarySensor: IEntity<`binary_sensor.living_room_header_by_the_table_switch_0_overheating`>;
  var livingRoomHeaderByTheTableSwitch_0OverpoweringBinarySensor: IEntity<`binary_sensor.living_room_header_by_the_table_switch_0_overpowering`>;
  var livingRoomHeaderByTheTableSwitch_0OvervoltageBinarySensor: IEntity<`binary_sensor.living_room_header_by_the_table_switch_0_overvoltage`>;
  var livingRoomHeaderByTheTableSwitch_0OvercurrentBinarySensor: IEntity<`binary_sensor.living_room_header_by_the_table_switch_0_overcurrent`>;
  var hallwayHeaterSwitch_0OverheatingBinarySensor: IEntity<`binary_sensor.hallway_heater_switch_0_overheating`>;
  var hallwayHeaterSwitch_0OverpoweringBinarySensor: IEntity<`binary_sensor.hallway_heater_switch_0_overpowering`>;
  var hallwayHeaterSwitch_0OvervoltageBinarySensor: IEntity<`binary_sensor.hallway_heater_switch_0_overvoltage`>;
  var hallwayHeaterSwitch_0OvercurrentBinarySensor: IEntity<`binary_sensor.hallway_heater_switch_0_overcurrent`>;
  var bookshelfHeaterSwitch_0OverheatingBinarySensor: IEntity<`binary_sensor.bookshelf_heater_switch_0_overheating`>;
  var bookshelfHeaterSwitch_0OverpoweringBinarySensor: IEntity<`binary_sensor.bookshelf_heater_switch_0_overpowering`>;
  var bookshelfHeaterSwitch_0OvervoltageBinarySensor: IEntity<`binary_sensor.bookshelf_heater_switch_0_overvoltage`>;
  var bookshelfHeaterSwitch_0OvercurrentBinarySensor: IEntity<`binary_sensor.bookshelf_heater_switch_0_overcurrent`>;
  var shellyemA4e57cba73f5OverpoweringBinarySensor: IEntity<`binary_sensor.shellyem_a4e57cba73f5_overpowering`>;
  var systemMonitorProcessPython3BinarySensor: IEntity<`binary_sensor.system_monitor_process_python3`>;
  var ilightshowIosEntertainmentConfigurationBinarySensor: IEntity<`binary_sensor.ilightshow_ios_entertainment_configuration`>;
  var livingRoomEntertainmentConfigurationBinarySensor: IEntity<`binary_sensor.living_room_entertainment_configuration`>;
  var bedroomBinarySensor: IEntity<`binary_sensor.bedroom`>;
  var zteRouterWanStatusBinarySensor: IEntity<`binary_sensor.zte_router_wan_status`>;
  var octopusEnergyA_11077925OctoplusSavingSessionsBinarySensor: IEntity<`binary_sensor.octopus_energy_a_11077925_octoplus_saving_sessions`>;
  var octopusEnergyElectricity_19l3210845_1630000030495OffPeakBinarySensor: IEntity<`binary_sensor.octopus_energy_electricity_19l3210845_1630000030495_off_peak`>;
  var assistMicrophoneAssistInProgressBinarySensor: IEntity<`binary_sensor.assist_microphone_assist_in_progress`>;
  var tumbleDryerSmartPlugCloudConnectionBinarySensor: IEntity<`binary_sensor.tumble_dryer_smart_plug_cloud_connection`>;
  var tumbleDryerSmartPlugOverheatedBinarySensor: IEntity<`binary_sensor.tumble_dryer_smart_plug_overheated`>;
  var tumbleDryerSmartPlugOverloadedBinarySensor: IEntity<`binary_sensor.tumble_dryer_smart_plug_overloaded`>;
  var frontDoorBatteryCriticalBinarySensor: IEntity<`binary_sensor.front_door_battery_critical`>;
  var frontDoorBatteryChargingBinarySensor: IEntity<`binary_sensor.front_door_battery_charging`>;
  var frontDoorKeypadBatteryCriticalBinarySensor: IEntity<`binary_sensor.front_door_keypad_battery_critical`>;
  var bathroomMotionSensorOccupancyBinarySensor: IEntity<`binary_sensor.bathroom_motion_sensor_occupancy`>;
  var hallwayMotionSensorOccupancyBinarySensor: IEntity<`binary_sensor.hallway_motion_sensor_occupancy`>;
  var zigbee2mqttBridgeConnectionStateBinarySensor: IEntity<`binary_sensor.zigbee2mqtt_bridge_connection_state`>;
  var sonosArcUltraMicrophoneBinarySensor: IEntity<`binary_sensor.sonos_arc_ultra_microphone`>;
  var bedroomSpeakerMicrophoneBinarySensor: IEntity<`binary_sensor.bedroom_speaker_microphone`>;
  var officeMicrophoneBinarySensor: IEntity<`binary_sensor.office_microphone`>;
  var livingRoomOccupiedBinarySensor: IEntity<`binary_sensor.living_room_occupied`>;
  var bedroomOccupiedBinarySensor: IEntity<`binary_sensor.bedroom_occupied`>;
  var gymOccupiedBinarySensor: IEntity<`binary_sensor.gym_occupied`>;
  var rpiPowerStatusBinarySensor: IEntity<`binary_sensor.rpi_power_status`>;
  var marthaBatteryLowBinarySensor: IEntity<`binary_sensor.martha_battery_low`>;
  var livingRoomOccupied_2BinarySensor: IEntity<`binary_sensor.living_room_occupied_2`>;
  var tumbleDryerSmartPlugUpdateBinarySensor: IEntity<`binary_sensor.tumble_dryer_smart_plug_update`>;
  var goodMorningMessagePlayedBinarySensor: IEntity<`binary_sensor.good_morning_message_played`>;
  var tvModeBinarySensor: IEntity<`binary_sensor.tv_mode`>;
  var homeAssistantServerCloudConnectionBinarySensor: IEntity<`binary_sensor.home_assistant_server_cloud_connection`>;
  var homeAssistantServerUpdateBinarySensor: IEntity<`binary_sensor.home_assistant_server_update`>;
  var imacSmartPlugCloudConnection_2BinarySensor: IEntity<`binary_sensor.imac_smart_plug_cloud_connection_2`>;
  var imacSmartPlugUpdate_2BinarySensor: IEntity<`binary_sensor.imac_smart_plug_update_2`>;
  var livingRoomHeaterSmartPlugCloudConnectionBinarySensor: IEntity<`binary_sensor.living_room_heater_smart_plug_cloud_connection`>;
  var livingRoomHeaterSmartPlugUpdateBinarySensor: IEntity<`binary_sensor.living_room_heater_smart_plug_update`>;
  var testingLessStupidSwitchBinarySensor: IEntity<`binary_sensor.testing_less_stupid_switch`>;
  var frontDoorDoorbellMqttDingBinarySensor: IEntity<`binary_sensor.front_door_doorbell_mqtt_ding`>;
  var frontDoorDoorbellMqttMotionBinarySensor: IEntity<`binary_sensor.front_door_doorbell_mqtt_motion`>;
  var stateTestingBinarySensorBinarySensor: IEntity<`binary_sensor.state_testing_binary_sensor`>;
  var stateTestingBinarySensor_2BinarySensor: IEntity<`binary_sensor.state_testing_binary_sensor_2`>;
  var homeAssistantServerOverheatedBinarySensor: IEntity<`binary_sensor.home_assistant_server_overheated`>;
  var imacSmartPlugOverheatedBinarySensor: IEntity<`binary_sensor.imac_smart_plug_overheated`>;
  var livingRoomHeaterSmartPlugOverheatedBinarySensor: IEntity<`binary_sensor.living_room_heater_smart_plug_overheated`>;
  var imacSmartPlugOverloadedBinarySensor: IEntity<`binary_sensor.imac_smart_plug_overloaded`>;
  var livingRoomHeaterSmartPlugOverloadedBinarySensor: IEntity<`binary_sensor.living_room_heater_smart_plug_overloaded`>;
  var homeAssistantServerOverloadedBinarySensor: IEntity<`binary_sensor.home_assistant_server_overloaded`>;
}

globalThis.ringMqttWithVideoStreamingRunningBinarySensor = entity(
  'binary_sensor.ring_mqtt_with_video_streaming_running',
);
globalThis.remoteUiBinarySensor = entity('binary_sensor.remote_ui');
globalThis.tumbleDryerRunningBinarySensor = entity(
  'binary_sensor.tumble_dryer_running',
);
globalThis.diskCloseToFullBinarySensor = entity(
  'binary_sensor.disk_close_to_full',
);
globalThis.bensImacProAudioInputInUseBinarySensor = entity(
  'binary_sensor.bens_imac_pro_audio_input_in_use',
);
globalThis.bensImacProAudioOutputInUseBinarySensor = entity(
  'binary_sensor.bens_imac_pro_audio_output_in_use',
);
globalThis.bensImacProCameraInUseBinarySensor = entity(
  'binary_sensor.bens_imac_pro_camera_in_use',
);
globalThis.bensImacProActiveBinarySensor = entity(
  'binary_sensor.bens_imac_pro_active',
);
globalThis.bensImacProFocusBinarySensor = entity(
  'binary_sensor.bens_imac_pro_focus',
);
globalThis.bensIphoneFocusBinarySensor = entity(
  'binary_sensor.bens_iphone_focus',
);
globalThis.bensImacCameraInUseBinarySensor = entity(
  'binary_sensor.bens_imac_camera_in_use',
);
globalThis.bensImacAudioInputInUseBinarySensor = entity(
  'binary_sensor.bens_imac_audio_input_in_use',
);
globalThis.bensImacAudioOutputInUseBinarySensor = entity(
  'binary_sensor.bens_imac_audio_output_in_use',
);
globalThis.bensImacActiveBinarySensor = entity(
  'binary_sensor.bens_imac_active',
);
globalThis.bensImacFocusBinarySensor = entity('binary_sensor.bens_imac_focus');
globalThis.ryansIphoneFocusBinarySensor = entity(
  'binary_sensor.ryans_iphone_focus',
);
globalThis.livingRoomSensorSensorStateTamperBinarySensor = entity(
  'binary_sensor.living_room_sensor_sensor_state_tamper',
);
globalThis.livingRoomSensorSensorStateMotionBinarySensor = entity(
  'binary_sensor.living_room_sensor_sensor_state_motion',
);
globalThis.livingRoomSensorTamperingProductCoverRemovedBinarySensor = entity(
  'binary_sensor.living_room_sensor_tampering_product_cover_removed',
);
globalThis.livingRoomSensorMotionDetectionBinarySensor = entity(
  'binary_sensor.living_room_sensor_motion_detection',
);
globalThis.livingRoomSensorLowBatteryLevelBinarySensor = entity(
  'binary_sensor.living_room_sensor_low_battery_level',
);
globalThis.gymSensorSensorStateTamperBinarySensor = entity(
  'binary_sensor.gym_sensor_sensor_state_tamper',
);
globalThis.gymSensorSensorStateMotionBinarySensor = entity(
  'binary_sensor.gym_sensor_sensor_state_motion',
);
globalThis.gymSensorTamperingProductCoverRemovedBinarySensor = entity(
  'binary_sensor.gym_sensor_tampering_product_cover_removed',
);
globalThis.gymSensorMotionDetectionBinarySensor = entity(
  'binary_sensor.gym_sensor_motion_detection',
);
globalThis.gymSensorLowBatteryLevelBinarySensor = entity(
  'binary_sensor.gym_sensor_low_battery_level',
);
globalThis.bedroomSensorSensorStateTamperBinarySensor = entity(
  'binary_sensor.bedroom_sensor_sensor_state_tamper',
);
globalThis.bedroomSensorSensorStateMotionBinarySensor = entity(
  'binary_sensor.bedroom_sensor_sensor_state_motion',
);
globalThis.bedroomSensorTamperingProductCoverRemovedBinarySensor = entity(
  'binary_sensor.bedroom_sensor_tampering_product_cover_removed',
);
globalThis.bedroomSensorMotionDetectionBinarySensor = entity(
  'binary_sensor.bedroom_sensor_motion_detection',
);
globalThis.bedroomSensorLowBatteryLevelBinarySensor = entity(
  'binary_sensor.bedroom_sensor_low_battery_level',
);
globalThis.livingRoomOccupancyBinarySensor = entity(
  'binary_sensor.living_room_occupancy',
);
globalThis.benIsHomeBinarySensor = entity('binary_sensor.ben_is_home');
globalThis.inBedBinarySensor = entity('binary_sensor.in_bed');
globalThis.tvHeaterSwitch_0OverheatingBinarySensor = entity(
  'binary_sensor.tv_heater_switch_0_overheating',
);
globalThis.tvHeaterSwitch_0OverpoweringBinarySensor = entity(
  'binary_sensor.tv_heater_switch_0_overpowering',
);
globalThis.tvHeaterSwitch_0OvervoltageBinarySensor = entity(
  'binary_sensor.tv_heater_switch_0_overvoltage',
);
globalThis.tvHeaterSwitch_0OvercurrentBinarySensor = entity(
  'binary_sensor.tv_heater_switch_0_overcurrent',
);
globalThis.livingRoomHeaderByTheTableSwitch_0OverheatingBinarySensor = entity(
  'binary_sensor.living_room_header_by_the_table_switch_0_overheating',
);
globalThis.livingRoomHeaderByTheTableSwitch_0OverpoweringBinarySensor = entity(
  'binary_sensor.living_room_header_by_the_table_switch_0_overpowering',
);
globalThis.livingRoomHeaderByTheTableSwitch_0OvervoltageBinarySensor = entity(
  'binary_sensor.living_room_header_by_the_table_switch_0_overvoltage',
);
globalThis.livingRoomHeaderByTheTableSwitch_0OvercurrentBinarySensor = entity(
  'binary_sensor.living_room_header_by_the_table_switch_0_overcurrent',
);
globalThis.hallwayHeaterSwitch_0OverheatingBinarySensor = entity(
  'binary_sensor.hallway_heater_switch_0_overheating',
);
globalThis.hallwayHeaterSwitch_0OverpoweringBinarySensor = entity(
  'binary_sensor.hallway_heater_switch_0_overpowering',
);
globalThis.hallwayHeaterSwitch_0OvervoltageBinarySensor = entity(
  'binary_sensor.hallway_heater_switch_0_overvoltage',
);
globalThis.hallwayHeaterSwitch_0OvercurrentBinarySensor = entity(
  'binary_sensor.hallway_heater_switch_0_overcurrent',
);
globalThis.bookshelfHeaterSwitch_0OverheatingBinarySensor = entity(
  'binary_sensor.bookshelf_heater_switch_0_overheating',
);
globalThis.bookshelfHeaterSwitch_0OverpoweringBinarySensor = entity(
  'binary_sensor.bookshelf_heater_switch_0_overpowering',
);
globalThis.bookshelfHeaterSwitch_0OvervoltageBinarySensor = entity(
  'binary_sensor.bookshelf_heater_switch_0_overvoltage',
);
globalThis.bookshelfHeaterSwitch_0OvercurrentBinarySensor = entity(
  'binary_sensor.bookshelf_heater_switch_0_overcurrent',
);
globalThis.shellyemA4e57cba73f5OverpoweringBinarySensor = entity(
  'binary_sensor.shellyem_a4e57cba73f5_overpowering',
);
globalThis.systemMonitorProcessPython3BinarySensor = entity(
  'binary_sensor.system_monitor_process_python3',
);
globalThis.ilightshowIosEntertainmentConfigurationBinarySensor = entity(
  'binary_sensor.ilightshow_ios_entertainment_configuration',
);
globalThis.livingRoomEntertainmentConfigurationBinarySensor = entity(
  'binary_sensor.living_room_entertainment_configuration',
);
globalThis.bedroomBinarySensor = entity('binary_sensor.bedroom');
globalThis.zteRouterWanStatusBinarySensor = entity(
  'binary_sensor.zte_router_wan_status',
);
globalThis.octopusEnergyA_11077925OctoplusSavingSessionsBinarySensor = entity(
  'binary_sensor.octopus_energy_a_11077925_octoplus_saving_sessions',
);
globalThis.octopusEnergyElectricity_19l3210845_1630000030495OffPeakBinarySensor =
  entity(
    'binary_sensor.octopus_energy_electricity_19l3210845_1630000030495_off_peak',
  );
globalThis.assistMicrophoneAssistInProgressBinarySensor = entity(
  'binary_sensor.assist_microphone_assist_in_progress',
);
globalThis.tumbleDryerSmartPlugCloudConnectionBinarySensor = entity(
  'binary_sensor.tumble_dryer_smart_plug_cloud_connection',
);
globalThis.tumbleDryerSmartPlugOverheatedBinarySensor = entity(
  'binary_sensor.tumble_dryer_smart_plug_overheated',
);
globalThis.tumbleDryerSmartPlugOverloadedBinarySensor = entity(
  'binary_sensor.tumble_dryer_smart_plug_overloaded',
);
globalThis.frontDoorBatteryCriticalBinarySensor = entity(
  'binary_sensor.front_door_battery_critical',
);
globalThis.frontDoorBatteryChargingBinarySensor = entity(
  'binary_sensor.front_door_battery_charging',
);
globalThis.frontDoorKeypadBatteryCriticalBinarySensor = entity(
  'binary_sensor.front_door_keypad_battery_critical',
);
globalThis.bathroomMotionSensorOccupancyBinarySensor = entity(
  'binary_sensor.bathroom_motion_sensor_occupancy',
);
globalThis.hallwayMotionSensorOccupancyBinarySensor = entity(
  'binary_sensor.hallway_motion_sensor_occupancy',
);
globalThis.zigbee2mqttBridgeConnectionStateBinarySensor = entity(
  'binary_sensor.zigbee2mqtt_bridge_connection_state',
);
globalThis.sonosArcUltraMicrophoneBinarySensor = entity(
  'binary_sensor.sonos_arc_ultra_microphone',
);
globalThis.bedroomSpeakerMicrophoneBinarySensor = entity(
  'binary_sensor.bedroom_speaker_microphone',
);
globalThis.officeMicrophoneBinarySensor = entity(
  'binary_sensor.office_microphone',
);
globalThis.livingRoomOccupiedBinarySensor = entity(
  'binary_sensor.living_room_occupied',
);
globalThis.bedroomOccupiedBinarySensor = entity(
  'binary_sensor.bedroom_occupied',
);
globalThis.gymOccupiedBinarySensor = entity('binary_sensor.gym_occupied');
globalThis.rpiPowerStatusBinarySensor = entity(
  'binary_sensor.rpi_power_status',
);
globalThis.marthaBatteryLowBinarySensor = entity(
  'binary_sensor.martha_battery_low',
);
globalThis.livingRoomOccupied_2BinarySensor = entity(
  'binary_sensor.living_room_occupied_2',
);
globalThis.tumbleDryerSmartPlugUpdateBinarySensor = entity(
  'binary_sensor.tumble_dryer_smart_plug_update',
);
globalThis.goodMorningMessagePlayedBinarySensor = entity(
  'binary_sensor.good_morning_message_played',
);
globalThis.tvModeBinarySensor = entity('binary_sensor.tv_mode');
globalThis.homeAssistantServerCloudConnectionBinarySensor = entity(
  'binary_sensor.home_assistant_server_cloud_connection',
);
globalThis.homeAssistantServerUpdateBinarySensor = entity(
  'binary_sensor.home_assistant_server_update',
);
globalThis.imacSmartPlugCloudConnection_2BinarySensor = entity(
  'binary_sensor.imac_smart_plug_cloud_connection_2',
);
globalThis.imacSmartPlugUpdate_2BinarySensor = entity(
  'binary_sensor.imac_smart_plug_update_2',
);
globalThis.livingRoomHeaterSmartPlugCloudConnectionBinarySensor = entity(
  'binary_sensor.living_room_heater_smart_plug_cloud_connection',
);
globalThis.livingRoomHeaterSmartPlugUpdateBinarySensor = entity(
  'binary_sensor.living_room_heater_smart_plug_update',
);
globalThis.testingLessStupidSwitchBinarySensor = entity(
  'binary_sensor.testing_less_stupid_switch',
);
globalThis.frontDoorDoorbellMqttDingBinarySensor = entity(
  'binary_sensor.front_door_doorbell_mqtt_ding',
);
globalThis.frontDoorDoorbellMqttMotionBinarySensor = entity(
  'binary_sensor.front_door_doorbell_mqtt_motion',
);
globalThis.stateTestingBinarySensorBinarySensor = entity(
  'binary_sensor.state_testing_binary_sensor',
);
globalThis.stateTestingBinarySensor_2BinarySensor = entity(
  'binary_sensor.state_testing_binary_sensor_2',
);
globalThis.homeAssistantServerOverheatedBinarySensor = entity(
  'binary_sensor.home_assistant_server_overheated',
);
globalThis.imacSmartPlugOverheatedBinarySensor = entity(
  'binary_sensor.imac_smart_plug_overheated',
);
globalThis.livingRoomHeaterSmartPlugOverheatedBinarySensor = entity(
  'binary_sensor.living_room_heater_smart_plug_overheated',
);
globalThis.imacSmartPlugOverloadedBinarySensor = entity(
  'binary_sensor.imac_smart_plug_overloaded',
);
globalThis.livingRoomHeaterSmartPlugOverloadedBinarySensor = entity(
  'binary_sensor.living_room_heater_smart_plug_overloaded',
);
globalThis.homeAssistantServerOverloadedBinarySensor = entity(
  'binary_sensor.home_assistant_server_overloaded',
);
