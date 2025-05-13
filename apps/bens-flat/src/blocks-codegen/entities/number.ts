import { entity, type IEntity } from '@hass-blocks/core';

declare global {
  var frontDoorVolumeNumber: IEntity<`number.front_door_volume`>;
  var tumbleDryerSmartPlugTurnOffInNumber: IEntity<`number.tumble_dryer_smart_plug_turn_off_in`>;
  var tumbleDryerSmartPlugPowerProtectionNumber: IEntity<`number.tumble_dryer_smart_plug_power_protection`>;
  var aliceMaxSoilMoistureNumber: IEntity<`number.alice_max_soil_moisture`>;
  var aliceMinSoilMoistureNumber: IEntity<`number.alice_min_soil_moisture`>;
  var aliceMaxTemperatureNumber: IEntity<`number.alice_max_temperature`>;
  var aliceMinTemperatureNumber: IEntity<`number.alice_min_temperature`>;
  var aliceMaxIlluminanceNumber: IEntity<`number.alice_max_illuminance`>;
  var aliceMinIlluminanceNumber: IEntity<`number.alice_min_illuminance`>;
  var aliceMaxConductivityNumber: IEntity<`number.alice_max_conductivity`>;
  var aliceMinConductivityNumber: IEntity<`number.alice_min_conductivity`>;
  var aliceMaxAirHumidityNumber: IEntity<`number.alice_max_air_humidity`>;
  var aliceMinAirHumidityNumber: IEntity<`number.alice_min_air_humidity`>;
  var aliceMaxDliNumber: IEntity<`number.alice_max_dli`>;
  var aliceMinDliNumber: IEntity<`number.alice_min_dli`>;
  var sonosArcUltraAudioDelayNumber: IEntity<`number.sonos_arc_ultra_audio_delay`>;
  var sonosArcUltraBassNumber: IEntity<`number.sonos_arc_ultra_bass`>;
  var sonosArcUltraBalanceNumber: IEntity<`number.sonos_arc_ultra_balance`>;
  var sonosArcUltraTrebleNumber: IEntity<`number.sonos_arc_ultra_treble`>;
  var sonosArcUltraSurroundLevelNumber: IEntity<`number.sonos_arc_ultra_surround_level`>;
  var sonosArcUltraMusicSurroundLevelNumber: IEntity<`number.sonos_arc_ultra_music_surround_level`>;
  var bedroomSpeakerBassNumber: IEntity<`number.bedroom_speaker_bass`>;
  var bedroomSpeakerBalanceNumber: IEntity<`number.bedroom_speaker_balance`>;
  var bedroomSpeakerTrebleNumber: IEntity<`number.bedroom_speaker_treble`>;
  var bathroomMotionSensorOccupancyTimeoutNumber: IEntity<`number.bathroom_motion_sensor_occupancy_timeout`>;
  var hallwayMotionSensorOccupancyTimeoutNumber: IEntity<`number.hallway_motion_sensor_occupancy_timeout`>;
  var officeTrebleNumber: IEntity<`number.office_treble`>;
  var homeAssistantServerTurnOffInNumber: IEntity<`number.home_assistant_server_turn_off_in`>;
  var imacSmartPlugTurnOffIn_2Number: IEntity<`number.imac_smart_plug_turn_off_in_2`>;
  var livingRoomHeaterSmartPlugTurnOffInNumber: IEntity<`number.living_room_heater_smart_plug_turn_off_in`>;
  var frontDoorDoorbellMqttDingDurationNumber: IEntity<`number.front_door_doorbell_mqtt_ding_duration`>;
  var frontDoorDoorbellMqttMotionDurationNumber: IEntity<`number.front_door_doorbell_mqtt_motion_duration`>;
  var frontDoorDoorbellMqttSnapshotIntervalNumber: IEntity<`number.front_door_doorbell_mqtt_snapshot_interval`>;
  var assistMicrophoneAutoGainNumber: IEntity<`number.assist_microphone_auto_gain`>;
  var assistMicrophoneMicVolumeNumber: IEntity<`number.assist_microphone_mic_volume`>;
  var imacSmartPlugPowerProtectionNumber: IEntity<`number.imac_smart_plug_power_protection`>;
  var livingRoomHeaterSmartPlugPowerProtectionNumber: IEntity<`number.living_room_heater_smart_plug_power_protection`>;
  var homeAssistantServerPowerProtectionNumber: IEntity<`number.home_assistant_server_power_protection`>;
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
