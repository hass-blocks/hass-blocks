import { entity, IEntity } from '@hass-blocks/core';

declare global {
  var frontDoorVolumeNumber: IEntity<`number.${string}`>;
  var tumbleDryerSmartPlugTurnOffInNumber: IEntity<`number.${string}`>;
  var tumbleDryerSmartPlugPowerProtectionNumber: IEntity<`number.${string}`>;
  var aliceMaxSoilMoistureNumber: IEntity<`number.${string}`>;
  var aliceMinSoilMoistureNumber: IEntity<`number.${string}`>;
  var aliceMaxTemperatureNumber: IEntity<`number.${string}`>;
  var aliceMinTemperatureNumber: IEntity<`number.${string}`>;
  var aliceMaxIlluminanceNumber: IEntity<`number.${string}`>;
  var aliceMinIlluminanceNumber: IEntity<`number.${string}`>;
  var aliceMaxConductivityNumber: IEntity<`number.${string}`>;
  var aliceMinConductivityNumber: IEntity<`number.${string}`>;
  var aliceMaxAirHumidityNumber: IEntity<`number.${string}`>;
  var aliceMinAirHumidityNumber: IEntity<`number.${string}`>;
  var aliceMaxDliNumber: IEntity<`number.${string}`>;
  var aliceMinDliNumber: IEntity<`number.${string}`>;
  var sonosArcUltraAudioDelayNumber: IEntity<`number.${string}`>;
  var sonosArcUltraBassNumber: IEntity<`number.${string}`>;
  var sonosArcUltraBalanceNumber: IEntity<`number.${string}`>;
  var sonosArcUltraTrebleNumber: IEntity<`number.${string}`>;
  var sonosArcUltraSurroundLevelNumber: IEntity<`number.${string}`>;
  var sonosArcUltraMusicSurroundLevelNumber: IEntity<`number.${string}`>;
  var bedroomSpeakerBassNumber: IEntity<`number.${string}`>;
  var bedroomSpeakerBalanceNumber: IEntity<`number.${string}`>;
  var bedroomSpeakerTrebleNumber: IEntity<`number.${string}`>;
  var bathroomMotionSensorOccupancyTimeoutNumber: IEntity<`number.${string}`>;
  var hallwayMotionSensorOccupancyTimeoutNumber: IEntity<`number.${string}`>;
  var officeTrebleNumber: IEntity<`number.${string}`>;
  var homeAssistantServerTurnOffInNumber: IEntity<`number.${string}`>;
  var imacSmartPlugTurnOffIn_2Number: IEntity<`number.${string}`>;
  var livingRoomHeaterSmartPlugTurnOffInNumber: IEntity<`number.${string}`>;
  var frontDoorDoorbellMqttDingDurationNumber: IEntity<`number.${string}`>;
  var frontDoorDoorbellMqttMotionDurationNumber: IEntity<`number.${string}`>;
  var frontDoorDoorbellMqttSnapshotIntervalNumber: IEntity<`number.${string}`>;
  var assistMicrophoneAutoGainNumber: IEntity<`number.${string}`>;
  var assistMicrophoneMicVolumeNumber: IEntity<`number.${string}`>;
  var imacSmartPlugPowerProtectionNumber: IEntity<`number.${string}`>;
  var livingRoomHeaterSmartPlugPowerProtectionNumber: IEntity<`number.${string}`>;
  var homeAssistantServerPowerProtectionNumber: IEntity<`number.${string}`>;
}

globalThis.frontDoorVolumeNumber = entity('number.front_door_volume');
globalThis.tumbleDryerSmartPlugTurnOffInNumber = entity(
  'number.tumble_dryer_smart_plug_turn_off_in',
);
globalThis.tumbleDryerSmartPlugPowerProtectionNumber = entity(
  'number.tumble_dryer_smart_plug_power_protection',
);
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
globalThis.bedroomSpeakerBassNumber = entity('number.bedroom_speaker_bass');
globalThis.bedroomSpeakerBalanceNumber = entity(
  'number.bedroom_speaker_balance',
);
globalThis.bedroomSpeakerTrebleNumber = entity('number.bedroom_speaker_treble');
globalThis.bathroomMotionSensorOccupancyTimeoutNumber = entity(
  'number.bathroom_motion_sensor_occupancy_timeout',
);
globalThis.hallwayMotionSensorOccupancyTimeoutNumber = entity(
  'number.hallway_motion_sensor_occupancy_timeout',
);
globalThis.officeTrebleNumber = entity('number.office_treble');
globalThis.homeAssistantServerTurnOffInNumber = entity(
  'number.home_assistant_server_turn_off_in',
);
globalThis.imacSmartPlugTurnOffIn_2Number = entity(
  'number.imac_smart_plug_turn_off_in_2',
);
globalThis.livingRoomHeaterSmartPlugTurnOffInNumber = entity(
  'number.living_room_heater_smart_plug_turn_off_in',
);
globalThis.frontDoorDoorbellMqttDingDurationNumber = entity(
  'number.front_door_doorbell_mqtt_ding_duration',
);
globalThis.frontDoorDoorbellMqttMotionDurationNumber = entity(
  'number.front_door_doorbell_mqtt_motion_duration',
);
globalThis.frontDoorDoorbellMqttSnapshotIntervalNumber = entity(
  'number.front_door_doorbell_mqtt_snapshot_interval',
);
globalThis.assistMicrophoneAutoGainNumber = entity(
  'number.assist_microphone_auto_gain',
);
globalThis.assistMicrophoneMicVolumeNumber = entity(
  'number.assist_microphone_mic_volume',
);
globalThis.imacSmartPlugPowerProtectionNumber = entity(
  'number.imac_smart_plug_power_protection',
);
globalThis.livingRoomHeaterSmartPlugPowerProtectionNumber = entity(
  'number.living_room_heater_smart_plug_power_protection',
);
globalThis.homeAssistantServerPowerProtectionNumber = entity(
  'number.home_assistant_server_power_protection',
);
