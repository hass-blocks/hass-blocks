import { entity, IEntity } from '@hass-blocks/core';

declare global {
  var ringMqttWithVideoStreamingRunningBinarySensor: IEntity<`binary_sensor.${string}`>;
  var remoteUiBinarySensor: IEntity<`binary_sensor.${string}`>;
  var tumbleDryerRunningBinarySensor: IEntity<`binary_sensor.${string}`>;
  var diskCloseToFullBinarySensor: IEntity<`binary_sensor.${string}`>;
  var shellyemA4e57cba73f5OverpoweringBinarySensor: IEntity<`binary_sensor.${string}`>;
  var octopusEnergyA_11077925OctoplusSavingSessionsBinarySensor: IEntity<`binary_sensor.${string}`>;
  var octopusEnergyElectricity_19l3210845_1630000030495OffPeakBinarySensor: IEntity<`binary_sensor.${string}`>;
  var livingRoomOccupancyBinarySensor: IEntity<`binary_sensor.${string}`>;
  var benIsHomeBinarySensor: IEntity<`binary_sensor.${string}`>;
  var inBedBinarySensor: IEntity<`binary_sensor.${string}`>;
  var bensImacProAudioInputInUseBinarySensor: IEntity<`binary_sensor.${string}`>;
  var bensImacProAudioOutputInUseBinarySensor: IEntity<`binary_sensor.${string}`>;
  var bensImacProCameraInUseBinarySensor: IEntity<`binary_sensor.${string}`>;
  var bensImacProActiveBinarySensor: IEntity<`binary_sensor.${string}`>;
  var bensImacProFocusBinarySensor: IEntity<`binary_sensor.${string}`>;
  var bensIphoneFocusBinarySensor: IEntity<`binary_sensor.${string}`>;
  var bensImacCameraInUseBinarySensor: IEntity<`binary_sensor.${string}`>;
  var bensImacAudioInputInUseBinarySensor: IEntity<`binary_sensor.${string}`>;
  var bensImacAudioOutputInUseBinarySensor: IEntity<`binary_sensor.${string}`>;
  var bensImacActiveBinarySensor: IEntity<`binary_sensor.${string}`>;
  var bensImacFocusBinarySensor: IEntity<`binary_sensor.${string}`>;
  var ryansIphoneFocusBinarySensor: IEntity<`binary_sensor.${string}`>;
  var systemMonitorProcessPython3BinarySensor: IEntity<`binary_sensor.${string}`>;
  var ilightshowIosEntertainmentConfigurationBinarySensor: IEntity<`binary_sensor.${string}`>;
  var livingRoomEntertainmentConfigurationBinarySensor: IEntity<`binary_sensor.${string}`>;
  var bedroomBinarySensor: IEntity<`binary_sensor.${string}`>;
  var zteRouterWanStatusBinarySensor: IEntity<`binary_sensor.${string}`>;
  var tumbleDryerSmartPlugCloudConnectionBinarySensor: IEntity<`binary_sensor.${string}`>;
  var tumbleDryerSmartPlugOverheatedBinarySensor: IEntity<`binary_sensor.${string}`>;
  var tumbleDryerSmartPlugOverloadedBinarySensor: IEntity<`binary_sensor.${string}`>;
  var frontDoorBatteryCriticalBinarySensor: IEntity<`binary_sensor.${string}`>;
  var frontDoorBatteryChargingBinarySensor: IEntity<`binary_sensor.${string}`>;
  var frontDoorKeypadBatteryCriticalBinarySensor: IEntity<`binary_sensor.${string}`>;
  var sonosArcUltraMicrophoneBinarySensor: IEntity<`binary_sensor.${string}`>;
  var bathroomMotionSensorOccupancyBinarySensor: IEntity<`binary_sensor.${string}`>;
  var hallwayMotionSensorOccupancyBinarySensor: IEntity<`binary_sensor.${string}`>;
  var zigbee2mqttBridgeConnectionStateBinarySensor: IEntity<`binary_sensor.${string}`>;
  var bedroomSpeakerMicrophoneBinarySensor: IEntity<`binary_sensor.${string}`>;
  var officeMicrophoneBinarySensor: IEntity<`binary_sensor.${string}`>;
  var livingRoomOccupiedBinarySensor: IEntity<`binary_sensor.${string}`>;
  var bedroomOccupiedBinarySensor: IEntity<`binary_sensor.${string}`>;
  var gymOccupiedBinarySensor: IEntity<`binary_sensor.${string}`>;
  var rpiPowerStatusBinarySensor: IEntity<`binary_sensor.${string}`>;
  var marthaBatteryLowBinarySensor: IEntity<`binary_sensor.${string}`>;
  var livingRoomSensorLowBatteryLevelBinarySensor: IEntity<`binary_sensor.${string}`>;
  var livingRoomSensorMotionDetectionBinarySensor: IEntity<`binary_sensor.${string}`>;
  var livingRoomSensorTamperingProductCoverRemovedBinarySensor: IEntity<`binary_sensor.${string}`>;
  var livingRoomSensorSensorStateMotionBinarySensor: IEntity<`binary_sensor.${string}`>;
  var livingRoomSensorSensorStateTamperBinarySensor: IEntity<`binary_sensor.${string}`>;
  var gymSensorLowBatteryLevelBinarySensor: IEntity<`binary_sensor.${string}`>;
  var gymSensorMotionDetectionBinarySensor: IEntity<`binary_sensor.${string}`>;
  var gymSensorTamperingProductCoverRemovedBinarySensor: IEntity<`binary_sensor.${string}`>;
  var gymSensorSensorStateMotionBinarySensor: IEntity<`binary_sensor.${string}`>;
  var gymSensorSensorStateTamperBinarySensor: IEntity<`binary_sensor.${string}`>;
  var bedroomSensorLowBatteryLevelBinarySensor: IEntity<`binary_sensor.${string}`>;
  var bedroomSensorMotionDetectionBinarySensor: IEntity<`binary_sensor.${string}`>;
  var bedroomSensorTamperingProductCoverRemovedBinarySensor: IEntity<`binary_sensor.${string}`>;
  var bedroomSensorSensorStateMotionBinarySensor: IEntity<`binary_sensor.${string}`>;
  var bedroomSensorSensorStateTamperBinarySensor: IEntity<`binary_sensor.${string}`>;
  var livingRoomOccupied_2BinarySensor: IEntity<`binary_sensor.${string}`>;
  var tumbleDryerSmartPlugUpdateBinarySensor: IEntity<`binary_sensor.${string}`>;
  var goodMorningMessagePlayedBinarySensor: IEntity<`binary_sensor.${string}`>;
  var tvModeBinarySensor: IEntity<`binary_sensor.${string}`>;
  var homeAssistantServerCloudConnectionBinarySensor: IEntity<`binary_sensor.${string}`>;
  var homeAssistantServerUpdateBinarySensor: IEntity<`binary_sensor.${string}`>;
  var imacSmartPlugCloudConnection_2BinarySensor: IEntity<`binary_sensor.${string}`>;
  var imacSmartPlugUpdate_2BinarySensor: IEntity<`binary_sensor.${string}`>;
  var livingRoomHeaterSmartPlugCloudConnectionBinarySensor: IEntity<`binary_sensor.${string}`>;
  var livingRoomHeaterSmartPlugUpdateBinarySensor: IEntity<`binary_sensor.${string}`>;
  var testingLessStupidSwitchBinarySensor: IEntity<`binary_sensor.${string}`>;
  var frontDoorDoorbellMqttDingBinarySensor: IEntity<`binary_sensor.${string}`>;
  var frontDoorDoorbellMqttMotionBinarySensor: IEntity<`binary_sensor.${string}`>;
  var stateTestingBinarySensorBinarySensor: IEntity<`binary_sensor.${string}`>;
  var stateTestingBinarySensor_2BinarySensor: IEntity<`binary_sensor.${string}`>;
  var assistMicrophoneAssistInProgressBinarySensor: IEntity<`binary_sensor.${string}`>;
  var homeAssistantServerOverheatedBinarySensor: IEntity<`binary_sensor.${string}`>;
  var imacSmartPlugOverheatedBinarySensor: IEntity<`binary_sensor.${string}`>;
  var livingRoomHeaterSmartPlugOverheatedBinarySensor: IEntity<`binary_sensor.${string}`>;
  var imacSmartPlugOverloadedBinarySensor: IEntity<`binary_sensor.${string}`>;
  var livingRoomHeaterSmartPlugOverloadedBinarySensor: IEntity<`binary_sensor.${string}`>;
  var homeAssistantServerOverloadedBinarySensor: IEntity<`binary_sensor.${string}`>;
  var livingRoomHeaderByTheTableSwitch_0OverheatingBinarySensor: IEntity<`binary_sensor.${string}`>;
  var livingRoomHeaderByTheTableSwitch_0OverpoweringBinarySensor: IEntity<`binary_sensor.${string}`>;
  var livingRoomHeaderByTheTableSwitch_0OvervoltageBinarySensor: IEntity<`binary_sensor.${string}`>;
  var livingRoomHeaderByTheTableSwitch_0OvercurrentBinarySensor: IEntity<`binary_sensor.${string}`>;
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
globalThis.shellyemA4e57cba73f5OverpoweringBinarySensor = entity(
  'binary_sensor.shellyem_a4e57cba73f5_overpowering',
);
globalThis.octopusEnergyA_11077925OctoplusSavingSessionsBinarySensor = entity(
  'binary_sensor.octopus_energy_a_11077925_octoplus_saving_sessions',
);
globalThis.octopusEnergyElectricity_19l3210845_1630000030495OffPeakBinarySensor =
  entity(
    'binary_sensor.octopus_energy_electricity_19l3210845_1630000030495_off_peak',
  );
globalThis.livingRoomOccupancyBinarySensor = entity(
  'binary_sensor.living_room_occupancy',
);
globalThis.benIsHomeBinarySensor = entity('binary_sensor.ben_is_home');
globalThis.inBedBinarySensor = entity('binary_sensor.in_bed');
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
globalThis.sonosArcUltraMicrophoneBinarySensor = entity(
  'binary_sensor.sonos_arc_ultra_microphone',
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
globalThis.livingRoomSensorLowBatteryLevelBinarySensor = entity(
  'binary_sensor.living_room_sensor_low_battery_level',
);
globalThis.livingRoomSensorMotionDetectionBinarySensor = entity(
  'binary_sensor.living_room_sensor_motion_detection',
);
globalThis.livingRoomSensorTamperingProductCoverRemovedBinarySensor = entity(
  'binary_sensor.living_room_sensor_tampering_product_cover_removed',
);
globalThis.livingRoomSensorSensorStateMotionBinarySensor = entity(
  'binary_sensor.living_room_sensor_sensor_state_motion',
);
globalThis.livingRoomSensorSensorStateTamperBinarySensor = entity(
  'binary_sensor.living_room_sensor_sensor_state_tamper',
);
globalThis.gymSensorLowBatteryLevelBinarySensor = entity(
  'binary_sensor.gym_sensor_low_battery_level',
);
globalThis.gymSensorMotionDetectionBinarySensor = entity(
  'binary_sensor.gym_sensor_motion_detection',
);
globalThis.gymSensorTamperingProductCoverRemovedBinarySensor = entity(
  'binary_sensor.gym_sensor_tampering_product_cover_removed',
);
globalThis.gymSensorSensorStateMotionBinarySensor = entity(
  'binary_sensor.gym_sensor_sensor_state_motion',
);
globalThis.gymSensorSensorStateTamperBinarySensor = entity(
  'binary_sensor.gym_sensor_sensor_state_tamper',
);
globalThis.bedroomSensorLowBatteryLevelBinarySensor = entity(
  'binary_sensor.bedroom_sensor_low_battery_level',
);
globalThis.bedroomSensorMotionDetectionBinarySensor = entity(
  'binary_sensor.bedroom_sensor_motion_detection',
);
globalThis.bedroomSensorTamperingProductCoverRemovedBinarySensor = entity(
  'binary_sensor.bedroom_sensor_tampering_product_cover_removed',
);
globalThis.bedroomSensorSensorStateMotionBinarySensor = entity(
  'binary_sensor.bedroom_sensor_sensor_state_motion',
);
globalThis.bedroomSensorSensorStateTamperBinarySensor = entity(
  'binary_sensor.bedroom_sensor_sensor_state_tamper',
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
globalThis.assistMicrophoneAssistInProgressBinarySensor = entity(
  'binary_sensor.assist_microphone_assist_in_progress',
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
