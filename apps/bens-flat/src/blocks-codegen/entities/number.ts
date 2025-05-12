import { entity, ITarget } from '@hass-blocks/core';

declare global {
  var assistMicrophoneAutoGainNumber: ITarget;
  var assistMicrophoneMicVolumeNumber: ITarget;
  var tumbleDryerSmartPlugTurnOffInNumber: ITarget;
  var tumbleDryerSmartPlugPowerProtectionNumber: ITarget;
  var homeAssistantServerTurnOffInNumber: ITarget;
  var homeAssistantServerPowerProtectionNumber: ITarget;
  var imacSmartPlugTurnOffIn_2Number: ITarget;
  var imacSmartPlugPowerProtectionNumber: ITarget;
  var livingRoomHeaterSmartPlugTurnOffInNumber: ITarget;
  var livingRoomHeaterSmartPlugPowerProtectionNumber: ITarget;
  var frontDoorVolumeNumber: ITarget;
  var aliceMaxSoilMoistureNumber: ITarget;
  var aliceMinSoilMoistureNumber: ITarget;
  var aliceMaxTemperatureNumber: ITarget;
  var aliceMinTemperatureNumber: ITarget;
  var aliceMaxIlluminanceNumber: ITarget;
  var aliceMinIlluminanceNumber: ITarget;
  var aliceMaxConductivityNumber: ITarget;
  var aliceMinConductivityNumber: ITarget;
  var aliceMaxAirHumidityNumber: ITarget;
  var aliceMinAirHumidityNumber: ITarget;
  var aliceMaxDliNumber: ITarget;
  var aliceMinDliNumber: ITarget;
  var bathroomMotionSensorOccupancyTimeoutNumber: ITarget;
  var hallwayMotionSensorOccupancyTimeoutNumber: ITarget;
  var bedroomSpeakerBassNumber: ITarget;
  var bedroomSpeakerBalanceNumber: ITarget;
  var bedroomSpeakerTrebleNumber: ITarget;
  var sonosArcUltraAudioDelayNumber: ITarget;
  var sonosArcUltraBassNumber: ITarget;
  var sonosArcUltraBalanceNumber: ITarget;
  var sonosArcUltraTrebleNumber: ITarget;
  var sonosArcUltraSurroundLevelNumber: ITarget;
  var sonosArcUltraMusicSurroundLevelNumber: ITarget;
  var officeTrebleNumber: ITarget;
  var frontDoorDoorbellMqttDingDurationNumber: ITarget;
  var frontDoorDoorbellMqttMotionDurationNumber: ITarget;
  var frontDoorDoorbellMqttSnapshotIntervalNumber: ITarget;
}

globalThis.assistMicrophoneAutoGainNumber = entity(
  'number.assist_microphone_auto_gain',
);
globalThis.assistMicrophoneMicVolumeNumber = entity(
  'number.assist_microphone_mic_volume',
);
globalThis.tumbleDryerSmartPlugTurnOffInNumber = entity(
  'number.tumble_dryer_smart_plug_turn_off_in',
);
globalThis.tumbleDryerSmartPlugPowerProtectionNumber = entity(
  'number.tumble_dryer_smart_plug_power_protection',
);
globalThis.homeAssistantServerTurnOffInNumber = entity(
  'number.home_assistant_server_turn_off_in',
);
globalThis.homeAssistantServerPowerProtectionNumber = entity(
  'number.home_assistant_server_power_protection',
);
globalThis.imacSmartPlugTurnOffIn_2Number = entity(
  'number.imac_smart_plug_turn_off_in_2',
);
globalThis.imacSmartPlugPowerProtectionNumber = entity(
  'number.imac_smart_plug_power_protection',
);
globalThis.livingRoomHeaterSmartPlugTurnOffInNumber = entity(
  'number.living_room_heater_smart_plug_turn_off_in',
);
globalThis.livingRoomHeaterSmartPlugPowerProtectionNumber = entity(
  'number.living_room_heater_smart_plug_power_protection',
);
globalThis.frontDoorVolumeNumber = entity('number.front_door_volume');
globalThis.aliceMaxSoilMoistureNumber = entity(
  'number.alice_max_soil_moisture',
);
globalThis.aliceMinSoilMoistureNumber = entity(
  'number.alice_min_soil_moisture',
);
globalThis.aliceMaxTemperatureNumber = entity('number.alice_max_temperature');
globalThis.aliceMinTemperatureNumber = entity('number.alice_min_temperature');
globalThis.aliceMaxIlluminanceNumber = entity('number.alice_max_illuminance');
globalThis.aliceMinIlluminanceNumber = entity('number.alice_min_illuminance');
globalThis.aliceMaxConductivityNumber = entity('number.alice_max_conductivity');
globalThis.aliceMinConductivityNumber = entity('number.alice_min_conductivity');
globalThis.aliceMaxAirHumidityNumber = entity('number.alice_max_air_humidity');
globalThis.aliceMinAirHumidityNumber = entity('number.alice_min_air_humidity');
globalThis.aliceMaxDliNumber = entity('number.alice_max_dli');
globalThis.aliceMinDliNumber = entity('number.alice_min_dli');
globalThis.bathroomMotionSensorOccupancyTimeoutNumber = entity(
  'number.bathroom_motion_sensor_occupancy_timeout',
);
globalThis.hallwayMotionSensorOccupancyTimeoutNumber = entity(
  'number.hallway_motion_sensor_occupancy_timeout',
);
globalThis.bedroomSpeakerBassNumber = entity('number.bedroom_speaker_bass');
globalThis.bedroomSpeakerBalanceNumber = entity(
  'number.bedroom_speaker_balance',
);
globalThis.bedroomSpeakerTrebleNumber = entity('number.bedroom_speaker_treble');
globalThis.sonosArcUltraAudioDelayNumber = entity(
  'number.sonos_arc_ultra_audio_delay',
);
globalThis.sonosArcUltraBassNumber = entity('number.sonos_arc_ultra_bass');
globalThis.sonosArcUltraBalanceNumber = entity(
  'number.sonos_arc_ultra_balance',
);
globalThis.sonosArcUltraTrebleNumber = entity('number.sonos_arc_ultra_treble');
globalThis.sonosArcUltraSurroundLevelNumber = entity(
  'number.sonos_arc_ultra_surround_level',
);
globalThis.sonosArcUltraMusicSurroundLevelNumber = entity(
  'number.sonos_arc_ultra_music_surround_level',
);
globalThis.officeTrebleNumber = entity('number.office_treble');
globalThis.frontDoorDoorbellMqttDingDurationNumber = entity(
  'number.front_door_doorbell_mqtt_ding_duration',
);
globalThis.frontDoorDoorbellMqttMotionDurationNumber = entity(
  'number.front_door_doorbell_mqtt_motion_duration',
);
globalThis.frontDoorDoorbellMqttSnapshotIntervalNumber = entity(
  'number.front_door_doorbell_mqtt_snapshot_interval',
);
