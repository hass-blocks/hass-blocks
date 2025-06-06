import { entity, type IEntity } from '@hass-blocks/core';

declare global {
  /**
   * Ring-MQTT with Video Streaming Running
   */
  var ringMqttWithVideoStreamingRunningBinarySensor: IEntity<`binary_sensor.ring_mqtt_with_video_streaming_running`>;
  /**
   * Remote UI
   */
  var remoteUiBinarySensor: IEntity<`binary_sensor.remote_ui`>;
  /**
   * Tumble Dryer Running
   */
  var tumbleDryerRunningBinarySensor: IEntity<`binary_sensor.tumble_dryer_running`>;
  /**
   * Disk close to full
   */
  var diskCloseToFullBinarySensor: IEntity<`binary_sensor.disk_close_to_full`>;
  /**
   * Ben’s iMac Pro Audio Input In Use
   */
  var bensImacProAudioInputInUseBinarySensor: IEntity<`binary_sensor.bens_imac_pro_audio_input_in_use`>;
  /**
   * Ben’s iMac Pro Audio Output In Use
   */
  var bensImacProAudioOutputInUseBinarySensor: IEntity<`binary_sensor.bens_imac_pro_audio_output_in_use`>;
  /**
   * Ben’s iMac Pro Camera In Use
   */
  var bensImacProCameraInUseBinarySensor: IEntity<`binary_sensor.bens_imac_pro_camera_in_use`>;
  /**
   * Ben’s iMac Pro Active
   */
  var bensImacProActiveBinarySensor: IEntity<`binary_sensor.bens_imac_pro_active`>;
  /**
   * Ben’s iMac Pro Focus
   */
  var bensImacProFocusBinarySensor: IEntity<`binary_sensor.bens_imac_pro_focus`>;
  /**
   * Ben’s iPhone Focus
   */
  var bensIphoneFocusBinarySensor: IEntity<`binary_sensor.bens_iphone_focus`>;
  /**
   * Ben’s iMac Camera In Use
   */
  var bensImacCameraInUseBinarySensor: IEntity<`binary_sensor.bens_imac_camera_in_use`>;
  /**
   * Ben’s iMac Audio Input In Use
   */
  var bensImacAudioInputInUseBinarySensor: IEntity<`binary_sensor.bens_imac_audio_input_in_use`>;
  /**
   * Ben’s iMac Audio Output In Use
   */
  var bensImacAudioOutputInUseBinarySensor: IEntity<`binary_sensor.bens_imac_audio_output_in_use`>;
  /**
   * Ben’s iMac Active
   */
  var bensImacActiveBinarySensor: IEntity<`binary_sensor.bens_imac_active`>;
  /**
   * Ben’s iMac Focus
   */
  var bensImacFocusBinarySensor: IEntity<`binary_sensor.bens_imac_focus`>;
  /**
   * Ryan’s iPhone Focus
   */
  var ryansIphoneFocusBinarySensor: IEntity<`binary_sensor.ryans_iphone_focus`>;
  /**
   * Living Room Header (By the table) Overheating
   */
  var livingRoomHeaderByTheTableSwitch_0OverheatingBinarySensor: IEntity<`binary_sensor.living_room_header_by_the_table_switch_0_overheating`>;
  /**
   * Living Room Header (By the table) Overpowering
   */
  var livingRoomHeaderByTheTableSwitch_0OverpoweringBinarySensor: IEntity<`binary_sensor.living_room_header_by_the_table_switch_0_overpowering`>;
  /**
   * Living Room Header (By the table) Overvoltage
   */
  var livingRoomHeaderByTheTableSwitch_0OvervoltageBinarySensor: IEntity<`binary_sensor.living_room_header_by_the_table_switch_0_overvoltage`>;
  /**
   * Living Room Header (By the table) Overcurrent
   */
  var livingRoomHeaderByTheTableSwitch_0OvercurrentBinarySensor: IEntity<`binary_sensor.living_room_header_by_the_table_switch_0_overcurrent`>;
  /**
   * TV Heater Overheating
   */
  var tvHeaterSwitch_0OverheatingBinarySensor: IEntity<`binary_sensor.tv_heater_switch_0_overheating`>;
  /**
   * TV Heater Overpowering
   */
  var tvHeaterSwitch_0OverpoweringBinarySensor: IEntity<`binary_sensor.tv_heater_switch_0_overpowering`>;
  /**
   * TV Heater Overvoltage
   */
  var tvHeaterSwitch_0OvervoltageBinarySensor: IEntity<`binary_sensor.tv_heater_switch_0_overvoltage`>;
  /**
   * TV Heater Overcurrent
   */
  var tvHeaterSwitch_0OvercurrentBinarySensor: IEntity<`binary_sensor.tv_heater_switch_0_overcurrent`>;
  /**
   * Bookshelf Heater Overheating
   */
  var bookshelfHeaterSwitch_0OverheatingBinarySensor: IEntity<`binary_sensor.bookshelf_heater_switch_0_overheating`>;
  /**
   * Bookshelf Heater Overpowering
   */
  var bookshelfHeaterSwitch_0OverpoweringBinarySensor: IEntity<`binary_sensor.bookshelf_heater_switch_0_overpowering`>;
  /**
   * Bookshelf Heater Overvoltage
   */
  var bookshelfHeaterSwitch_0OvervoltageBinarySensor: IEntity<`binary_sensor.bookshelf_heater_switch_0_overvoltage`>;
  /**
   * Bookshelf Heater Overcurrent
   */
  var bookshelfHeaterSwitch_0OvercurrentBinarySensor: IEntity<`binary_sensor.bookshelf_heater_switch_0_overcurrent`>;
  /**
   * Hallway Heater Overheating
   */
  var hallwayHeaterSwitch_0OverheatingBinarySensor: IEntity<`binary_sensor.hallway_heater_switch_0_overheating`>;
  /**
   * Hallway Heater Overpowering
   */
  var hallwayHeaterSwitch_0OverpoweringBinarySensor: IEntity<`binary_sensor.hallway_heater_switch_0_overpowering`>;
  /**
   * Hallway Heater Overvoltage
   */
  var hallwayHeaterSwitch_0OvervoltageBinarySensor: IEntity<`binary_sensor.hallway_heater_switch_0_overvoltage`>;
  /**
   * Hallway Heater Overcurrent
   */
  var hallwayHeaterSwitch_0OvercurrentBinarySensor: IEntity<`binary_sensor.hallway_heater_switch_0_overcurrent`>;
  /**
   * shellyem-A4E57CBA73F5 Overpowering
   */
  var shellyemA4e57cba73f5OverpoweringBinarySensor: IEntity<`binary_sensor.shellyem_a4e57cba73f5_overpowering`>;
  /**
   * Living Room Sensor Sensor state (Tamper)
   */
  var livingRoomSensorSensorStateTamperBinarySensor: IEntity<`binary_sensor.living_room_sensor_sensor_state_tamper`>;
  /**
   * Living Room Sensor Sensor state (Motion)
   */
  var livingRoomSensorSensorStateMotionBinarySensor: IEntity<`binary_sensor.living_room_sensor_sensor_state_motion`>;
  /**
   * Living Room Sensor Tampering, product cover removed
   */
  var livingRoomSensorTamperingProductCoverRemovedBinarySensor: IEntity<`binary_sensor.living_room_sensor_tampering_product_cover_removed`>;
  /**
   * Living Room Sensor Motion detection
   */
  var livingRoomSensorMotionDetectionBinarySensor: IEntity<`binary_sensor.living_room_sensor_motion_detection`>;
  /**
   * Living Room Sensor Low battery level
   */
  var livingRoomSensorLowBatteryLevelBinarySensor: IEntity<`binary_sensor.living_room_sensor_low_battery_level`>;
  /**
   * Gym Sensor Sensor state (Tamper)
   */
  var gymSensorSensorStateTamperBinarySensor: IEntity<`binary_sensor.gym_sensor_sensor_state_tamper`>;
  /**
   * Gym Sensor Sensor state (Motion)
   */
  var gymSensorSensorStateMotionBinarySensor: IEntity<`binary_sensor.gym_sensor_sensor_state_motion`>;
  /**
   * Gym Sensor Tampering, product cover removed
   */
  var gymSensorTamperingProductCoverRemovedBinarySensor: IEntity<`binary_sensor.gym_sensor_tampering_product_cover_removed`>;
  /**
   * Gym Sensor Motion detection
   */
  var gymSensorMotionDetectionBinarySensor: IEntity<`binary_sensor.gym_sensor_motion_detection`>;
  /**
   * Gym Sensor Low battery level
   */
  var gymSensorLowBatteryLevelBinarySensor: IEntity<`binary_sensor.gym_sensor_low_battery_level`>;
  /**
   * Bedroom Sensor Sensor state (Tamper)
   */
  var bedroomSensorSensorStateTamperBinarySensor: IEntity<`binary_sensor.bedroom_sensor_sensor_state_tamper`>;
  /**
   * Bedroom Sensor Sensor state (Motion)
   */
  var bedroomSensorSensorStateMotionBinarySensor: IEntity<`binary_sensor.bedroom_sensor_sensor_state_motion`>;
  /**
   * Bedroom Sensor Tampering, product cover removed
   */
  var bedroomSensorTamperingProductCoverRemovedBinarySensor: IEntity<`binary_sensor.bedroom_sensor_tampering_product_cover_removed`>;
  /**
   * Bedroom Sensor Motion detection
   */
  var bedroomSensorMotionDetectionBinarySensor: IEntity<`binary_sensor.bedroom_sensor_motion_detection`>;
  /**
   * Bedroom Sensor Low battery level
   */
  var bedroomSensorLowBatteryLevelBinarySensor: IEntity<`binary_sensor.bedroom_sensor_low_battery_level`>;
  /**
   * Octoplus Saving Session (A-11077925)
   */
  var octopusEnergyA_11077925OctoplusSavingSessionsBinarySensor: IEntity<`binary_sensor.octopus_energy_a_11077925_octoplus_saving_sessions`>;
  /**
   * Off Peak Electricity (19L3210845/1630000030495)
   */
  var octopusEnergyElectricity_19l3210845_1630000030495OffPeakBinarySensor: IEntity<`binary_sensor.octopus_energy_electricity_19l3210845_1630000030495_off_peak`>;
  /**
   * System Monitor Process python3
   */
  var systemMonitorProcessPython3BinarySensor: IEntity<`binary_sensor.system_monitor_process_python3`>;
  /**
   * Living room occupancy
   */
  var livingRoomOccupancyBinarySensor: IEntity<`binary_sensor.living_room_occupancy`>;
  /**
   * Ben is home
   */
  var benIsHomeBinarySensor: IEntity<`binary_sensor.ben_is_home`>;
  /**
   * In Bed
   */
  var inBedBinarySensor: IEntity<`binary_sensor.in_bed`>;
  /**
   * iLightShow#iOS
   */
  var ilightshowIosEntertainmentConfigurationBinarySensor: IEntity<`binary_sensor.ilightshow_ios_entertainment_configuration`>;
  /**
   * Living Room
   */
  var livingRoomEntertainmentConfigurationBinarySensor: IEntity<`binary_sensor.living_room_entertainment_configuration`>;
  /**
   * Bedroom
   */
  var bedroomBinarySensor: IEntity<`binary_sensor.bedroom`>;
  /**
   * assist microphone Assist in progress
   */
  var assistMicrophoneAssistInProgressBinarySensor: IEntity<`binary_sensor.assist_microphone_assist_in_progress`>;
  /**
   * Tumble Dryer Smart Plug Cloud connection
   */
  var tumbleDryerSmartPlugCloudConnectionBinarySensor: IEntity<`binary_sensor.tumble_dryer_smart_plug_cloud_connection`>;
  /**
   * Tumble Dryer Smart Plug Overheated
   */
  var tumbleDryerSmartPlugOverheatedBinarySensor: IEntity<`binary_sensor.tumble_dryer_smart_plug_overheated`>;
  /**
   * Tumble Dryer Smart Plug Overloaded
   */
  var tumbleDryerSmartPlugOverloadedBinarySensor: IEntity<`binary_sensor.tumble_dryer_smart_plug_overloaded`>;
  /**
   * Internet Connection
   */
  var zteRouterWanStatusBinarySensor: IEntity<`binary_sensor.zte_router_wan_status`>;
  /**
   * Front Door Battery critical
   */
  var frontDoorBatteryCriticalBinarySensor: IEntity<`binary_sensor.front_door_battery_critical`>;
  /**
   * Front Door Battery charging
   */
  var frontDoorBatteryChargingBinarySensor: IEntity<`binary_sensor.front_door_battery_charging`>;
  /**
   * Front Door Keypad
   */
  var frontDoorKeypadBatteryCriticalBinarySensor: IEntity<`binary_sensor.front_door_keypad_battery_critical`>;
  /**
   * Bathroom Motion Sensor Occupancy
   */
  var bathroomMotionSensorOccupancyBinarySensor: IEntity<`binary_sensor.bathroom_motion_sensor_occupancy`>;
  /**
   * Hallway Motion Sensor Occupancy
   */
  var hallwayMotionSensorOccupancyBinarySensor: IEntity<`binary_sensor.hallway_motion_sensor_occupancy`>;
  /**
   * Zigbee2MQTT Bridge Connection state
   */
  var zigbee2mqttBridgeConnectionStateBinarySensor: IEntity<`binary_sensor.zigbee2mqtt_bridge_connection_state`>;
  /**
   * Bedroom Speaker Microphone
   */
  var bedroomSpeakerMicrophoneBinarySensor: IEntity<`binary_sensor.bedroom_speaker_microphone`>;
  /**
   * Sonos Arc Ultra Microphone
   */
  var sonosArcUltraMicrophoneBinarySensor: IEntity<`binary_sensor.sonos_arc_ultra_microphone`>;
  /**
   * Microphone
   */
  var officeMicrophoneBinarySensor: IEntity<`binary_sensor.office_microphone`>;
  /**
   * Living Room Occupied
   */
  var livingRoomOccupiedBinarySensor: IEntity<`binary_sensor.living_room_occupied`>;
  /**
   * Bedroom Occupied
   */
  var bedroomOccupiedBinarySensor: IEntity<`binary_sensor.bedroom_occupied`>;
  /**
   * Gym Occupied
   */
  var gymOccupiedBinarySensor: IEntity<`binary_sensor.gym_occupied`>;
  /**
   * RPi Power status
   */
  var rpiPowerStatusBinarySensor: IEntity<`binary_sensor.rpi_power_status`>;
  /**
   * Martha Battery Low
   */
  var marthaBatteryLowBinarySensor: IEntity<`binary_sensor.martha_battery_low`>;
  /**
   * Living room occupied
   */
  var livingRoomOccupied_2BinarySensor: IEntity<`binary_sensor.living_room_occupied_2`>;
  /**
   * Update
   */
  var tumbleDryerSmartPlugUpdateBinarySensor: IEntity<`binary_sensor.tumble_dryer_smart_plug_update`>;
  /**
   * Good morning message played
   */
  var goodMorningMessagePlayedBinarySensor: IEntity<`binary_sensor.good_morning_message_played`>;
  /**
   * TV Mode
   */
  var tvModeBinarySensor: IEntity<`binary_sensor.tv_mode`>;
  /**
   * Cloud connection
   */
  var homeAssistantServerCloudConnectionBinarySensor: IEntity<`binary_sensor.home_assistant_server_cloud_connection`>;
  /**
   * Update
   */
  var homeAssistantServerUpdateBinarySensor: IEntity<`binary_sensor.home_assistant_server_update`>;
  /**
   * Cloud connection
   */
  var imacSmartPlugCloudConnection_2BinarySensor: IEntity<`binary_sensor.imac_smart_plug_cloud_connection_2`>;
  /**
   * Update
   */
  var imacSmartPlugUpdate_2BinarySensor: IEntity<`binary_sensor.imac_smart_plug_update_2`>;
  /**
   * Cloud connection
   */
  var livingRoomHeaterSmartPlugCloudConnectionBinarySensor: IEntity<`binary_sensor.living_room_heater_smart_plug_cloud_connection`>;
  /**
   * Update
   */
  var livingRoomHeaterSmartPlugUpdateBinarySensor: IEntity<`binary_sensor.living_room_heater_smart_plug_update`>;
  /**
   * Testing Less Stupid Switch
   */
  var testingLessStupidSwitchBinarySensor: IEntity<`binary_sensor.testing_less_stupid_switch`>;
  /**
   * Front Door Doorbell MQTT Ding
   */
  var frontDoorDoorbellMqttDingBinarySensor: IEntity<`binary_sensor.front_door_doorbell_mqtt_ding`>;
  /**
   * Front Door Doorbell MQTT Motion
   */
  var frontDoorDoorbellMqttMotionBinarySensor: IEntity<`binary_sensor.front_door_doorbell_mqtt_motion`>;
  /**
   * State Testing Binary Sensor
   */
  var stateTestingBinarySensorBinarySensor: IEntity<`binary_sensor.state_testing_binary_sensor`>;
  /**
   * State Testing Binary Sensor
   */
  var stateTestingBinarySensor_2BinarySensor: IEntity<`binary_sensor.state_testing_binary_sensor_2`>;
  /**
   * Overheated
   */
  var homeAssistantServerOverheatedBinarySensor: IEntity<`binary_sensor.home_assistant_server_overheated`>;
  /**
   * Overheated
   */
  var imacSmartPlugOverheatedBinarySensor: IEntity<`binary_sensor.imac_smart_plug_overheated`>;
  /**
   * Overheated
   */
  var livingRoomHeaterSmartPlugOverheatedBinarySensor: IEntity<`binary_sensor.living_room_heater_smart_plug_overheated`>;
  /**
   * Overloaded
   */
  var imacSmartPlugOverloadedBinarySensor: IEntity<`binary_sensor.imac_smart_plug_overloaded`>;
  /**
   * Overloaded
   */
  var livingRoomHeaterSmartPlugOverloadedBinarySensor: IEntity<`binary_sensor.living_room_heater_smart_plug_overloaded`>;
  /**
   * Overloaded
   */
  var homeAssistantServerOverloadedBinarySensor: IEntity<`binary_sensor.home_assistant_server_overloaded`>;
}

globalThis.ringMqttWithVideoStreamingRunningBinarySensor = entity(
  'binary_sensor.ring_mqtt_with_video_streaming_running',
  'Ring-MQTT with Video Streaming Running',
);
globalThis.remoteUiBinarySensor = entity(
  'binary_sensor.remote_ui',
  'Remote UI',
);
globalThis.tumbleDryerRunningBinarySensor = entity(
  'binary_sensor.tumble_dryer_running',
  'Tumble Dryer Running',
);
globalThis.diskCloseToFullBinarySensor = entity(
  'binary_sensor.disk_close_to_full',
  'Disk close to full',
);
globalThis.bensImacProAudioInputInUseBinarySensor = entity(
  'binary_sensor.bens_imac_pro_audio_input_in_use',
  'Ben\u2019s iMac Pro Audio Input In Use',
);
globalThis.bensImacProAudioOutputInUseBinarySensor = entity(
  'binary_sensor.bens_imac_pro_audio_output_in_use',
  'Ben\u2019s iMac Pro Audio Output In Use',
);
globalThis.bensImacProCameraInUseBinarySensor = entity(
  'binary_sensor.bens_imac_pro_camera_in_use',
  'Ben\u2019s iMac Pro Camera In Use',
);
globalThis.bensImacProActiveBinarySensor = entity(
  'binary_sensor.bens_imac_pro_active',
  'Ben\u2019s iMac Pro Active',
);
globalThis.bensImacProFocusBinarySensor = entity(
  'binary_sensor.bens_imac_pro_focus',
  'Ben\u2019s iMac Pro Focus',
);
globalThis.bensIphoneFocusBinarySensor = entity(
  'binary_sensor.bens_iphone_focus',
  'Ben\u2019s iPhone Focus',
);
globalThis.bensImacCameraInUseBinarySensor = entity(
  'binary_sensor.bens_imac_camera_in_use',
  'Ben\u2019s iMac Camera In Use',
);
globalThis.bensImacAudioInputInUseBinarySensor = entity(
  'binary_sensor.bens_imac_audio_input_in_use',
  'Ben\u2019s iMac Audio Input In Use',
);
globalThis.bensImacAudioOutputInUseBinarySensor = entity(
  'binary_sensor.bens_imac_audio_output_in_use',
  'Ben\u2019s iMac Audio Output In Use',
);
globalThis.bensImacActiveBinarySensor = entity(
  'binary_sensor.bens_imac_active',
  'Ben\u2019s iMac Active',
);
globalThis.bensImacFocusBinarySensor = entity(
  'binary_sensor.bens_imac_focus',
  'Ben\u2019s iMac Focus',
);
globalThis.ryansIphoneFocusBinarySensor = entity(
  'binary_sensor.ryans_iphone_focus',
  'Ryan\u2019s iPhone Focus',
);
globalThis.livingRoomHeaderByTheTableSwitch_0OverheatingBinarySensor = entity(
  'binary_sensor.living_room_header_by_the_table_switch_0_overheating',
  'Living Room Header (By the table) Overheating',
);
globalThis.livingRoomHeaderByTheTableSwitch_0OverpoweringBinarySensor = entity(
  'binary_sensor.living_room_header_by_the_table_switch_0_overpowering',
  'Living Room Header (By the table) Overpowering',
);
globalThis.livingRoomHeaderByTheTableSwitch_0OvervoltageBinarySensor = entity(
  'binary_sensor.living_room_header_by_the_table_switch_0_overvoltage',
  'Living Room Header (By the table) Overvoltage',
);
globalThis.livingRoomHeaderByTheTableSwitch_0OvercurrentBinarySensor = entity(
  'binary_sensor.living_room_header_by_the_table_switch_0_overcurrent',
  'Living Room Header (By the table) Overcurrent',
);
globalThis.tvHeaterSwitch_0OverheatingBinarySensor = entity(
  'binary_sensor.tv_heater_switch_0_overheating',
  'TV Heater Overheating',
);
globalThis.tvHeaterSwitch_0OverpoweringBinarySensor = entity(
  'binary_sensor.tv_heater_switch_0_overpowering',
  'TV Heater Overpowering',
);
globalThis.tvHeaterSwitch_0OvervoltageBinarySensor = entity(
  'binary_sensor.tv_heater_switch_0_overvoltage',
  'TV Heater Overvoltage',
);
globalThis.tvHeaterSwitch_0OvercurrentBinarySensor = entity(
  'binary_sensor.tv_heater_switch_0_overcurrent',
  'TV Heater Overcurrent',
);
globalThis.bookshelfHeaterSwitch_0OverheatingBinarySensor = entity(
  'binary_sensor.bookshelf_heater_switch_0_overheating',
  'Bookshelf Heater Overheating',
);
globalThis.bookshelfHeaterSwitch_0OverpoweringBinarySensor = entity(
  'binary_sensor.bookshelf_heater_switch_0_overpowering',
  'Bookshelf Heater Overpowering',
);
globalThis.bookshelfHeaterSwitch_0OvervoltageBinarySensor = entity(
  'binary_sensor.bookshelf_heater_switch_0_overvoltage',
  'Bookshelf Heater Overvoltage',
);
globalThis.bookshelfHeaterSwitch_0OvercurrentBinarySensor = entity(
  'binary_sensor.bookshelf_heater_switch_0_overcurrent',
  'Bookshelf Heater Overcurrent',
);
globalThis.hallwayHeaterSwitch_0OverheatingBinarySensor = entity(
  'binary_sensor.hallway_heater_switch_0_overheating',
  'Hallway Heater Overheating',
);
globalThis.hallwayHeaterSwitch_0OverpoweringBinarySensor = entity(
  'binary_sensor.hallway_heater_switch_0_overpowering',
  'Hallway Heater Overpowering',
);
globalThis.hallwayHeaterSwitch_0OvervoltageBinarySensor = entity(
  'binary_sensor.hallway_heater_switch_0_overvoltage',
  'Hallway Heater Overvoltage',
);
globalThis.hallwayHeaterSwitch_0OvercurrentBinarySensor = entity(
  'binary_sensor.hallway_heater_switch_0_overcurrent',
  'Hallway Heater Overcurrent',
);
globalThis.shellyemA4e57cba73f5OverpoweringBinarySensor = entity(
  'binary_sensor.shellyem_a4e57cba73f5_overpowering',
  'shellyem-A4E57CBA73F5 Overpowering',
);
globalThis.livingRoomSensorSensorStateTamperBinarySensor = entity(
  'binary_sensor.living_room_sensor_sensor_state_tamper',
  'Living Room Sensor Sensor state (Tamper)',
);
globalThis.livingRoomSensorSensorStateMotionBinarySensor = entity(
  'binary_sensor.living_room_sensor_sensor_state_motion',
  'Living Room Sensor Sensor state (Motion)',
);
globalThis.livingRoomSensorTamperingProductCoverRemovedBinarySensor = entity(
  'binary_sensor.living_room_sensor_tampering_product_cover_removed',
  'Living Room Sensor Tampering, product cover removed',
);
globalThis.livingRoomSensorMotionDetectionBinarySensor = entity(
  'binary_sensor.living_room_sensor_motion_detection',
  'Living Room Sensor Motion detection',
);
globalThis.livingRoomSensorLowBatteryLevelBinarySensor = entity(
  'binary_sensor.living_room_sensor_low_battery_level',
  'Living Room Sensor Low battery level',
);
globalThis.gymSensorSensorStateTamperBinarySensor = entity(
  'binary_sensor.gym_sensor_sensor_state_tamper',
  'Gym Sensor Sensor state (Tamper)',
);
globalThis.gymSensorSensorStateMotionBinarySensor = entity(
  'binary_sensor.gym_sensor_sensor_state_motion',
  'Gym Sensor Sensor state (Motion)',
);
globalThis.gymSensorTamperingProductCoverRemovedBinarySensor = entity(
  'binary_sensor.gym_sensor_tampering_product_cover_removed',
  'Gym Sensor Tampering, product cover removed',
);
globalThis.gymSensorMotionDetectionBinarySensor = entity(
  'binary_sensor.gym_sensor_motion_detection',
  'Gym Sensor Motion detection',
);
globalThis.gymSensorLowBatteryLevelBinarySensor = entity(
  'binary_sensor.gym_sensor_low_battery_level',
  'Gym Sensor Low battery level',
);
globalThis.bedroomSensorSensorStateTamperBinarySensor = entity(
  'binary_sensor.bedroom_sensor_sensor_state_tamper',
  'Bedroom Sensor Sensor state (Tamper)',
);
globalThis.bedroomSensorSensorStateMotionBinarySensor = entity(
  'binary_sensor.bedroom_sensor_sensor_state_motion',
  'Bedroom Sensor Sensor state (Motion)',
);
globalThis.bedroomSensorTamperingProductCoverRemovedBinarySensor = entity(
  'binary_sensor.bedroom_sensor_tampering_product_cover_removed',
  'Bedroom Sensor Tampering, product cover removed',
);
globalThis.bedroomSensorMotionDetectionBinarySensor = entity(
  'binary_sensor.bedroom_sensor_motion_detection',
  'Bedroom Sensor Motion detection',
);
globalThis.bedroomSensorLowBatteryLevelBinarySensor = entity(
  'binary_sensor.bedroom_sensor_low_battery_level',
  'Bedroom Sensor Low battery level',
);
globalThis.octopusEnergyA_11077925OctoplusSavingSessionsBinarySensor = entity(
  'binary_sensor.octopus_energy_a_11077925_octoplus_saving_sessions',
  'Octoplus Saving Session (A-11077925)',
);
globalThis.octopusEnergyElectricity_19l3210845_1630000030495OffPeakBinarySensor =
  entity(
    'binary_sensor.octopus_energy_electricity_19l3210845_1630000030495_off_peak',
    'Off Peak Electricity (19L3210845/1630000030495)',
  );
globalThis.systemMonitorProcessPython3BinarySensor = entity(
  'binary_sensor.system_monitor_process_python3',
  'System Monitor Process python3',
);
globalThis.livingRoomOccupancyBinarySensor = entity(
  'binary_sensor.living_room_occupancy',
  'Living room occupancy',
);
globalThis.benIsHomeBinarySensor = entity(
  'binary_sensor.ben_is_home',
  'Ben is home',
);
globalThis.inBedBinarySensor = entity('binary_sensor.in_bed', 'In Bed');
globalThis.ilightshowIosEntertainmentConfigurationBinarySensor = entity(
  'binary_sensor.ilightshow_ios_entertainment_configuration',
  'iLightShow#iOS',
);
globalThis.livingRoomEntertainmentConfigurationBinarySensor = entity(
  'binary_sensor.living_room_entertainment_configuration',
  'Living Room',
);
globalThis.bedroomBinarySensor = entity('binary_sensor.bedroom', 'Bedroom');
globalThis.assistMicrophoneAssistInProgressBinarySensor = entity(
  'binary_sensor.assist_microphone_assist_in_progress',
  'assist microphone Assist in progress',
);
globalThis.tumbleDryerSmartPlugCloudConnectionBinarySensor = entity(
  'binary_sensor.tumble_dryer_smart_plug_cloud_connection',
  'Tumble Dryer Smart Plug Cloud connection',
);
globalThis.tumbleDryerSmartPlugOverheatedBinarySensor = entity(
  'binary_sensor.tumble_dryer_smart_plug_overheated',
  'Tumble Dryer Smart Plug Overheated',
);
globalThis.tumbleDryerSmartPlugOverloadedBinarySensor = entity(
  'binary_sensor.tumble_dryer_smart_plug_overloaded',
  'Tumble Dryer Smart Plug Overloaded',
);
globalThis.zteRouterWanStatusBinarySensor = entity(
  'binary_sensor.zte_router_wan_status',
  'Internet Connection',
);
globalThis.frontDoorBatteryCriticalBinarySensor = entity(
  'binary_sensor.front_door_battery_critical',
  'Front Door Battery critical',
);
globalThis.frontDoorBatteryChargingBinarySensor = entity(
  'binary_sensor.front_door_battery_charging',
  'Front Door Battery charging',
);
globalThis.frontDoorKeypadBatteryCriticalBinarySensor = entity(
  'binary_sensor.front_door_keypad_battery_critical',
  'Front Door Keypad',
);
globalThis.bathroomMotionSensorOccupancyBinarySensor = entity(
  'binary_sensor.bathroom_motion_sensor_occupancy',
  'Bathroom Motion Sensor Occupancy',
);
globalThis.hallwayMotionSensorOccupancyBinarySensor = entity(
  'binary_sensor.hallway_motion_sensor_occupancy',
  'Hallway Motion Sensor Occupancy',
);
globalThis.zigbee2mqttBridgeConnectionStateBinarySensor = entity(
  'binary_sensor.zigbee2mqtt_bridge_connection_state',
  'Zigbee2MQTT Bridge Connection state',
);
globalThis.bedroomSpeakerMicrophoneBinarySensor = entity(
  'binary_sensor.bedroom_speaker_microphone',
  'Bedroom Speaker Microphone',
);
globalThis.sonosArcUltraMicrophoneBinarySensor = entity(
  'binary_sensor.sonos_arc_ultra_microphone',
  'Sonos Arc Ultra Microphone',
);
globalThis.officeMicrophoneBinarySensor = entity(
  'binary_sensor.office_microphone',
  'Microphone',
);
globalThis.livingRoomOccupiedBinarySensor = entity(
  'binary_sensor.living_room_occupied',
  'Living Room Occupied',
);
globalThis.bedroomOccupiedBinarySensor = entity(
  'binary_sensor.bedroom_occupied',
  'Bedroom Occupied',
);
globalThis.gymOccupiedBinarySensor = entity(
  'binary_sensor.gym_occupied',
  'Gym Occupied',
);
globalThis.rpiPowerStatusBinarySensor = entity(
  'binary_sensor.rpi_power_status',
  'RPi Power status',
);
globalThis.marthaBatteryLowBinarySensor = entity(
  'binary_sensor.martha_battery_low',
  'Martha Battery Low',
);
globalThis.livingRoomOccupied_2BinarySensor = entity(
  'binary_sensor.living_room_occupied_2',
  'Living room occupied',
);
globalThis.tumbleDryerSmartPlugUpdateBinarySensor = entity(
  'binary_sensor.tumble_dryer_smart_plug_update',
  'Update',
);
globalThis.goodMorningMessagePlayedBinarySensor = entity(
  'binary_sensor.good_morning_message_played',
  'Good morning message played',
);
globalThis.tvModeBinarySensor = entity('binary_sensor.tv_mode', 'TV Mode');
globalThis.homeAssistantServerCloudConnectionBinarySensor = entity(
  'binary_sensor.home_assistant_server_cloud_connection',
  'Cloud connection',
);
globalThis.homeAssistantServerUpdateBinarySensor = entity(
  'binary_sensor.home_assistant_server_update',
  'Update',
);
globalThis.imacSmartPlugCloudConnection_2BinarySensor = entity(
  'binary_sensor.imac_smart_plug_cloud_connection_2',
  'Cloud connection',
);
globalThis.imacSmartPlugUpdate_2BinarySensor = entity(
  'binary_sensor.imac_smart_plug_update_2',
  'Update',
);
globalThis.livingRoomHeaterSmartPlugCloudConnectionBinarySensor = entity(
  'binary_sensor.living_room_heater_smart_plug_cloud_connection',
  'Cloud connection',
);
globalThis.livingRoomHeaterSmartPlugUpdateBinarySensor = entity(
  'binary_sensor.living_room_heater_smart_plug_update',
  'Update',
);
globalThis.testingLessStupidSwitchBinarySensor = entity(
  'binary_sensor.testing_less_stupid_switch',
  'Testing Less Stupid Switch',
);
globalThis.frontDoorDoorbellMqttDingBinarySensor = entity(
  'binary_sensor.front_door_doorbell_mqtt_ding',
  'Front Door Doorbell MQTT Ding',
);
globalThis.frontDoorDoorbellMqttMotionBinarySensor = entity(
  'binary_sensor.front_door_doorbell_mqtt_motion',
  'Front Door Doorbell MQTT Motion',
);
globalThis.stateTestingBinarySensorBinarySensor = entity(
  'binary_sensor.state_testing_binary_sensor',
  'State Testing Binary Sensor',
);
globalThis.stateTestingBinarySensor_2BinarySensor = entity(
  'binary_sensor.state_testing_binary_sensor_2',
  'State Testing Binary Sensor',
);
globalThis.homeAssistantServerOverheatedBinarySensor = entity(
  'binary_sensor.home_assistant_server_overheated',
  'Overheated',
);
globalThis.imacSmartPlugOverheatedBinarySensor = entity(
  'binary_sensor.imac_smart_plug_overheated',
  'Overheated',
);
globalThis.livingRoomHeaterSmartPlugOverheatedBinarySensor = entity(
  'binary_sensor.living_room_heater_smart_plug_overheated',
  'Overheated',
);
globalThis.imacSmartPlugOverloadedBinarySensor = entity(
  'binary_sensor.imac_smart_plug_overloaded',
  'Overloaded',
);
globalThis.livingRoomHeaterSmartPlugOverloadedBinarySensor = entity(
  'binary_sensor.living_room_heater_smart_plug_overloaded',
  'Overloaded',
);
globalThis.homeAssistantServerOverloadedBinarySensor = entity(
  'binary_sensor.home_assistant_server_overloaded',
  'Overloaded',
);
