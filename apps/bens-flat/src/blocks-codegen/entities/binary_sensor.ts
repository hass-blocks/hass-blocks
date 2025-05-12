import { entity, ITarget } from '@hass-blocks/core';

declare global {
  var ringMqttWithVideoStreamingRunningBinarySensor: ITarget;
  var remoteUiBinarySensor: ITarget;
  var tumbleDryerRunningBinarySensor: ITarget;
  var diskCloseToFullBinarySensor: ITarget;
  var ilightshowIosEntertainmentConfigurationBinarySensor: ITarget;
  var livingRoomEntertainmentConfigurationBinarySensor: ITarget;
  var bedroomBinarySensor: ITarget;
  var systemMonitorProcessPython3BinarySensor: ITarget;
  var livingRoomHeaderByTheTableSwitch_0OverheatingBinarySensor: ITarget;
  var livingRoomHeaderByTheTableSwitch_0OverpoweringBinarySensor: ITarget;
  var livingRoomHeaderByTheTableSwitch_0OvervoltageBinarySensor: ITarget;
  var livingRoomHeaderByTheTableSwitch_0OvercurrentBinarySensor: ITarget;
  var shellyemA4e57cba73f5OverpoweringBinarySensor: ITarget;
  var livingRoomSensorSensorStateTamperBinarySensor: ITarget;
  var livingRoomSensorSensorStateMotionBinarySensor: ITarget;
  var livingRoomSensorTamperingProductCoverRemovedBinarySensor: ITarget;
  var livingRoomSensorMotionDetectionBinarySensor: ITarget;
  var livingRoomSensorLowBatteryLevelBinarySensor: ITarget;
  var gymSensorSensorStateTamperBinarySensor: ITarget;
  var gymSensorSensorStateMotionBinarySensor: ITarget;
  var gymSensorTamperingProductCoverRemovedBinarySensor: ITarget;
  var gymSensorMotionDetectionBinarySensor: ITarget;
  var gymSensorLowBatteryLevelBinarySensor: ITarget;
  var bedroomSensorSensorStateTamperBinarySensor: ITarget;
  var bedroomSensorSensorStateMotionBinarySensor: ITarget;
  var bedroomSensorTamperingProductCoverRemovedBinarySensor: ITarget;
  var bedroomSensorMotionDetectionBinarySensor: ITarget;
  var bedroomSensorLowBatteryLevelBinarySensor: ITarget;
  var octopusEnergyA_11077925OctoplusSavingSessionsBinarySensor: ITarget;
  var octopusEnergyElectricity_19l3210845_1630000030495OffPeakBinarySensor: ITarget;
  var bensImacProAudioInputInUseBinarySensor: ITarget;
  var bensImacProAudioOutputInUseBinarySensor: ITarget;
  var bensImacProCameraInUseBinarySensor: ITarget;
  var bensImacProActiveBinarySensor: ITarget;
  var bensImacProFocusBinarySensor: ITarget;
  var bensIphoneFocusBinarySensor: ITarget;
  var bensImacCameraInUseBinarySensor: ITarget;
  var bensImacAudioInputInUseBinarySensor: ITarget;
  var bensImacAudioOutputInUseBinarySensor: ITarget;
  var bensImacActiveBinarySensor: ITarget;
  var bensImacFocusBinarySensor: ITarget;
  var ryansIphoneFocusBinarySensor: ITarget;
  var livingRoomOccupancyBinarySensor: ITarget;
  var benIsHomeBinarySensor: ITarget;
  var inBedBinarySensor: ITarget;
  var assistMicrophoneAssistInProgressBinarySensor: ITarget;
  var zteRouterWanStatusBinarySensor: ITarget;
  var tumbleDryerSmartPlugCloudConnectionBinarySensor: ITarget;
  var tumbleDryerSmartPlugOverheatedBinarySensor: ITarget;
  var tumbleDryerSmartPlugOverloadedBinarySensor: ITarget;
  var homeAssistantServerCloudConnectionBinarySensor: ITarget;
  var homeAssistantServerOverheatedBinarySensor: ITarget;
  var homeAssistantServerOverloadedBinarySensor: ITarget;
  var imacSmartPlugCloudConnection_2BinarySensor: ITarget;
  var imacSmartPlugOverheatedBinarySensor: ITarget;
  var imacSmartPlugOverloadedBinarySensor: ITarget;
  var livingRoomHeaterSmartPlugCloudConnectionBinarySensor: ITarget;
  var livingRoomHeaterSmartPlugOverheatedBinarySensor: ITarget;
  var livingRoomHeaterSmartPlugOverloadedBinarySensor: ITarget;
  var frontDoorBatteryCriticalBinarySensor: ITarget;
  var frontDoorBatteryChargingBinarySensor: ITarget;
  var frontDoorKeypadBatteryCriticalBinarySensor: ITarget;
  var bathroomMotionSensorOccupancyBinarySensor: ITarget;
  var hallwayMotionSensorOccupancyBinarySensor: ITarget;
  var zigbee2mqttBridgeConnectionStateBinarySensor: ITarget;
  var bedroomSpeakerMicrophoneBinarySensor: ITarget;
  var sonosArcUltraMicrophoneBinarySensor: ITarget;
  var officeMicrophoneBinarySensor: ITarget;
  var livingRoomOccupiedBinarySensor: ITarget;
  var bedroomOccupiedBinarySensor: ITarget;
  var gymOccupiedBinarySensor: ITarget;
  var rpiPowerStatusBinarySensor: ITarget;
  var marthaBatteryLowBinarySensor: ITarget;
  var livingRoomOccupied_2BinarySensor: ITarget;
  var tumbleDryerSmartPlugUpdateBinarySensor: ITarget;
  var goodMorningMessagePlayedBinarySensor: ITarget;
  var tvModeBinarySensor: ITarget;
  var homeAssistantServerUpdateBinarySensor: ITarget;
  var imacSmartPlugUpdate_2BinarySensor: ITarget;
  var livingRoomHeaterSmartPlugUpdateBinarySensor: ITarget;
  var testingLessStupidSwitchBinarySensor: ITarget;
  var frontDoorDoorbellMqttDingBinarySensor: ITarget;
  var frontDoorDoorbellMqttMotionBinarySensor: ITarget;
  var stateTestingBinarySensorBinarySensor: ITarget;
  var stateTestingBinarySensor_2BinarySensor: ITarget;
  var entityStateCliTestBinarySensor: ITarget;
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
globalThis.ilightshowIosEntertainmentConfigurationBinarySensor = entity(
  'binary_sensor.ilightshow_ios_entertainment_configuration',
);
globalThis.livingRoomEntertainmentConfigurationBinarySensor = entity(
  'binary_sensor.living_room_entertainment_configuration',
);
globalThis.bedroomBinarySensor = entity('binary_sensor.bedroom');
globalThis.systemMonitorProcessPython3BinarySensor = entity(
  'binary_sensor.system_monitor_process_python3',
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
globalThis.shellyemA4e57cba73f5OverpoweringBinarySensor = entity(
  'binary_sensor.shellyem_a4e57cba73f5_overpowering',
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
globalThis.octopusEnergyA_11077925OctoplusSavingSessionsBinarySensor = entity(
  'binary_sensor.octopus_energy_a_11077925_octoplus_saving_sessions',
);
globalThis.octopusEnergyElectricity_19l3210845_1630000030495OffPeakBinarySensor =
  entity(
    'binary_sensor.octopus_energy_electricity_19l3210845_1630000030495_off_peak',
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
globalThis.livingRoomOccupancyBinarySensor = entity(
  'binary_sensor.living_room_occupancy',
);
globalThis.benIsHomeBinarySensor = entity('binary_sensor.ben_is_home');
globalThis.inBedBinarySensor = entity('binary_sensor.in_bed');
globalThis.assistMicrophoneAssistInProgressBinarySensor = entity(
  'binary_sensor.assist_microphone_assist_in_progress',
);
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
globalThis.homeAssistantServerCloudConnectionBinarySensor = entity(
  'binary_sensor.home_assistant_server_cloud_connection',
);
globalThis.homeAssistantServerOverheatedBinarySensor = entity(
  'binary_sensor.home_assistant_server_overheated',
);
globalThis.homeAssistantServerOverloadedBinarySensor = entity(
  'binary_sensor.home_assistant_server_overloaded',
);
globalThis.imacSmartPlugCloudConnection_2BinarySensor = entity(
  'binary_sensor.imac_smart_plug_cloud_connection_2',
);
globalThis.imacSmartPlugOverheatedBinarySensor = entity(
  'binary_sensor.imac_smart_plug_overheated',
);
globalThis.imacSmartPlugOverloadedBinarySensor = entity(
  'binary_sensor.imac_smart_plug_overloaded',
);
globalThis.livingRoomHeaterSmartPlugCloudConnectionBinarySensor = entity(
  'binary_sensor.living_room_heater_smart_plug_cloud_connection',
);
globalThis.livingRoomHeaterSmartPlugOverheatedBinarySensor = entity(
  'binary_sensor.living_room_heater_smart_plug_overheated',
);
globalThis.livingRoomHeaterSmartPlugOverloadedBinarySensor = entity(
  'binary_sensor.living_room_heater_smart_plug_overloaded',
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
globalThis.bedroomSpeakerMicrophoneBinarySensor = entity(
  'binary_sensor.bedroom_speaker_microphone',
);
globalThis.sonosArcUltraMicrophoneBinarySensor = entity(
  'binary_sensor.sonos_arc_ultra_microphone',
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
globalThis.homeAssistantServerUpdateBinarySensor = entity(
  'binary_sensor.home_assistant_server_update',
);
globalThis.imacSmartPlugUpdate_2BinarySensor = entity(
  'binary_sensor.imac_smart_plug_update_2',
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
globalThis.entityStateCliTestBinarySensor = entity(
  'binary_sensor.entity_state_cli_test',
);
