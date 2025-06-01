import { entity, type IEntity } from '@hass-blocks/core';

declare global {
  /**
   * Front Door Volume
   */
  var frontDoorVolumeNumber: IEntity<`number.front_door_volume`>;
  /**
   * assist microphone Auto gain
   */
  var assistMicrophoneAutoGainNumber: IEntity<`number.assist_microphone_auto_gain`>;
  /**
   * assist microphone Mic volume
   */
  var assistMicrophoneMicVolumeNumber: IEntity<`number.assist_microphone_mic_volume`>;
  /**
   * Tumble Dryer Smart Plug Turn off in
   */
  var tumbleDryerSmartPlugTurnOffInNumber: IEntity<`number.tumble_dryer_smart_plug_turn_off_in`>;
  /**
   * Tumble Dryer Smart Plug Power protection
   */
  var tumbleDryerSmartPlugPowerProtectionNumber: IEntity<`number.tumble_dryer_smart_plug_power_protection`>;
  /**
   * Alice max soil moisture
   */
  var aliceMaxSoilMoistureNumber: IEntity<`number.alice_max_soil_moisture`>;
  /**
   * Alice min soil moisture
   */
  var aliceMinSoilMoistureNumber: IEntity<`number.alice_min_soil_moisture`>;
  /**
   * Alice max temperature
   */
  var aliceMaxTemperatureNumber: IEntity<`number.alice_max_temperature`>;
  /**
   * Alice min temperature
   */
  var aliceMinTemperatureNumber: IEntity<`number.alice_min_temperature`>;
  /**
   * Alice max illuminance
   */
  var aliceMaxIlluminanceNumber: IEntity<`number.alice_max_illuminance`>;
  /**
   * Alice min illuminance
   */
  var aliceMinIlluminanceNumber: IEntity<`number.alice_min_illuminance`>;
  /**
   * Alice max conductivity
   */
  var aliceMaxConductivityNumber: IEntity<`number.alice_max_conductivity`>;
  /**
   * Alice min conductivity
   */
  var aliceMinConductivityNumber: IEntity<`number.alice_min_conductivity`>;
  /**
   * Alice max air humidity
   */
  var aliceMaxAirHumidityNumber: IEntity<`number.alice_max_air_humidity`>;
  /**
   * Alice min air humidity
   */
  var aliceMinAirHumidityNumber: IEntity<`number.alice_min_air_humidity`>;
  /**
   * Alice max dli
   */
  var aliceMaxDliNumber: IEntity<`number.alice_max_dli`>;
  /**
   * Alice min dli
   */
  var aliceMinDliNumber: IEntity<`number.alice_min_dli`>;
  /**
   * Bathroom Motion Sensor Occupancy timeout
   */
  var bathroomMotionSensorOccupancyTimeoutNumber: IEntity<`number.bathroom_motion_sensor_occupancy_timeout`>;
  /**
   * Hallway Motion Sensor Occupancy timeout
   */
  var hallwayMotionSensorOccupancyTimeoutNumber: IEntity<`number.hallway_motion_sensor_occupancy_timeout`>;
  /**
   * Bedroom Speaker Bass
   */
  var bedroomSpeakerBassNumber: IEntity<`number.bedroom_speaker_bass`>;
  /**
   * Bedroom Speaker Balance
   */
  var bedroomSpeakerBalanceNumber: IEntity<`number.bedroom_speaker_balance`>;
  /**
   * Bedroom Speaker Treble
   */
  var bedroomSpeakerTrebleNumber: IEntity<`number.bedroom_speaker_treble`>;
  /**
   * Sonos Arc Ultra Audio delay
   */
  var sonosArcUltraAudioDelayNumber: IEntity<`number.sonos_arc_ultra_audio_delay`>;
  /**
   * Sonos Arc Ultra Bass
   */
  var sonosArcUltraBassNumber: IEntity<`number.sonos_arc_ultra_bass`>;
  /**
   * Sonos Arc Ultra Balance
   */
  var sonosArcUltraBalanceNumber: IEntity<`number.sonos_arc_ultra_balance`>;
  /**
   * Sonos Arc Ultra Treble
   */
  var sonosArcUltraTrebleNumber: IEntity<`number.sonos_arc_ultra_treble`>;
  /**
   * Sonos Arc Ultra Surround level
   */
  var sonosArcUltraSurroundLevelNumber: IEntity<`number.sonos_arc_ultra_surround_level`>;
  /**
   * Sonos Arc Ultra Music surround level
   */
  var sonosArcUltraMusicSurroundLevelNumber: IEntity<`number.sonos_arc_ultra_music_surround_level`>;
  /**
   * Treble
   */
  var officeTrebleNumber: IEntity<`number.office_treble`>;
  /**
   * Turn off in
   */
  var homeAssistantServerTurnOffInNumber: IEntity<`number.home_assistant_server_turn_off_in`>;
  /**
   * Turn off in
   */
  var imacSmartPlugTurnOffIn_2Number: IEntity<`number.imac_smart_plug_turn_off_in_2`>;
  /**
   * Turn off in
   */
  var livingRoomHeaterSmartPlugTurnOffInNumber: IEntity<`number.living_room_heater_smart_plug_turn_off_in`>;
  /**
   * Front Door Doorbell MQTT Ding Duration
   */
  var frontDoorDoorbellMqttDingDurationNumber: IEntity<`number.front_door_doorbell_mqtt_ding_duration`>;
  /**
   * Front Door Doorbell MQTT Motion Duration
   */
  var frontDoorDoorbellMqttMotionDurationNumber: IEntity<`number.front_door_doorbell_mqtt_motion_duration`>;
  /**
   * Front Door Doorbell MQTT Snapshot Interval
   */
  var frontDoorDoorbellMqttSnapshotIntervalNumber: IEntity<`number.front_door_doorbell_mqtt_snapshot_interval`>;
  /**
   * Power protection
   */
  var imacSmartPlugPowerProtectionNumber: IEntity<`number.imac_smart_plug_power_protection`>;
  /**
   * Power protection
   */
  var livingRoomHeaterSmartPlugPowerProtectionNumber: IEntity<`number.living_room_heater_smart_plug_power_protection`>;
  /**
   * Power protection
   */
  var homeAssistantServerPowerProtectionNumber: IEntity<`number.home_assistant_server_power_protection`>;
}

globalThis.frontDoorVolumeNumber = entity(
  'number.front_door_volume',
  'Front Door Volume',
);
globalThis.assistMicrophoneAutoGainNumber = entity(
  'number.assist_microphone_auto_gain',
  'assist microphone Auto gain',
);
globalThis.assistMicrophoneMicVolumeNumber = entity(
  'number.assist_microphone_mic_volume',
  'assist microphone Mic volume',
);
globalThis.tumbleDryerSmartPlugTurnOffInNumber = entity(
  'number.tumble_dryer_smart_plug_turn_off_in',
  'Tumble Dryer Smart Plug Turn off in',
);
globalThis.tumbleDryerSmartPlugPowerProtectionNumber = entity(
  'number.tumble_dryer_smart_plug_power_protection',
  'Tumble Dryer Smart Plug Power protection',
);
globalThis.aliceMaxSoilMoistureNumber = entity(
  'number.alice_max_soil_moisture',
  'Alice max soil moisture',
);
globalThis.aliceMinSoilMoistureNumber = entity(
  'number.alice_min_soil_moisture',
  'Alice min soil moisture',
);
globalThis.aliceMaxTemperatureNumber = entity(
  'number.alice_max_temperature',
  'Alice max temperature',
);
globalThis.aliceMinTemperatureNumber = entity(
  'number.alice_min_temperature',
  'Alice min temperature',
);
globalThis.aliceMaxIlluminanceNumber = entity(
  'number.alice_max_illuminance',
  'Alice max illuminance',
);
globalThis.aliceMinIlluminanceNumber = entity(
  'number.alice_min_illuminance',
  'Alice min illuminance',
);
globalThis.aliceMaxConductivityNumber = entity(
  'number.alice_max_conductivity',
  'Alice max conductivity',
);
globalThis.aliceMinConductivityNumber = entity(
  'number.alice_min_conductivity',
  'Alice min conductivity',
);
globalThis.aliceMaxAirHumidityNumber = entity(
  'number.alice_max_air_humidity',
  'Alice max air humidity',
);
globalThis.aliceMinAirHumidityNumber = entity(
  'number.alice_min_air_humidity',
  'Alice min air humidity',
);
globalThis.aliceMaxDliNumber = entity('number.alice_max_dli', 'Alice max dli');
globalThis.aliceMinDliNumber = entity('number.alice_min_dli', 'Alice min dli');
globalThis.bathroomMotionSensorOccupancyTimeoutNumber = entity(
  'number.bathroom_motion_sensor_occupancy_timeout',
  'Bathroom Motion Sensor Occupancy timeout',
);
globalThis.hallwayMotionSensorOccupancyTimeoutNumber = entity(
  'number.hallway_motion_sensor_occupancy_timeout',
  'Hallway Motion Sensor Occupancy timeout',
);
globalThis.bedroomSpeakerBassNumber = entity(
  'number.bedroom_speaker_bass',
  'Bedroom Speaker Bass',
);
globalThis.bedroomSpeakerBalanceNumber = entity(
  'number.bedroom_speaker_balance',
  'Bedroom Speaker Balance',
);
globalThis.bedroomSpeakerTrebleNumber = entity(
  'number.bedroom_speaker_treble',
  'Bedroom Speaker Treble',
);
globalThis.sonosArcUltraAudioDelayNumber = entity(
  'number.sonos_arc_ultra_audio_delay',
  'Sonos Arc Ultra Audio delay',
);
globalThis.sonosArcUltraBassNumber = entity(
  'number.sonos_arc_ultra_bass',
  'Sonos Arc Ultra Bass',
);
globalThis.sonosArcUltraBalanceNumber = entity(
  'number.sonos_arc_ultra_balance',
  'Sonos Arc Ultra Balance',
);
globalThis.sonosArcUltraTrebleNumber = entity(
  'number.sonos_arc_ultra_treble',
  'Sonos Arc Ultra Treble',
);
globalThis.sonosArcUltraSurroundLevelNumber = entity(
  'number.sonos_arc_ultra_surround_level',
  'Sonos Arc Ultra Surround level',
);
globalThis.sonosArcUltraMusicSurroundLevelNumber = entity(
  'number.sonos_arc_ultra_music_surround_level',
  'Sonos Arc Ultra Music surround level',
);
globalThis.officeTrebleNumber = entity('number.office_treble', 'Treble');
globalThis.homeAssistantServerTurnOffInNumber = entity(
  'number.home_assistant_server_turn_off_in',
  'Turn off in',
);
globalThis.imacSmartPlugTurnOffIn_2Number = entity(
  'number.imac_smart_plug_turn_off_in_2',
  'Turn off in',
);
globalThis.livingRoomHeaterSmartPlugTurnOffInNumber = entity(
  'number.living_room_heater_smart_plug_turn_off_in',
  'Turn off in',
);
globalThis.frontDoorDoorbellMqttDingDurationNumber = entity(
  'number.front_door_doorbell_mqtt_ding_duration',
  'Front Door Doorbell MQTT Ding Duration',
);
globalThis.frontDoorDoorbellMqttMotionDurationNumber = entity(
  'number.front_door_doorbell_mqtt_motion_duration',
  'Front Door Doorbell MQTT Motion Duration',
);
globalThis.frontDoorDoorbellMqttSnapshotIntervalNumber = entity(
  'number.front_door_doorbell_mqtt_snapshot_interval',
  'Front Door Doorbell MQTT Snapshot Interval',
);
globalThis.imacSmartPlugPowerProtectionNumber = entity(
  'number.imac_smart_plug_power_protection',
  'Power protection',
);
globalThis.livingRoomHeaterSmartPlugPowerProtectionNumber = entity(
  'number.living_room_heater_smart_plug_power_protection',
  'Power protection',
);
globalThis.homeAssistantServerPowerProtectionNumber = entity(
  'number.home_assistant_server_power_protection',
  'Power protection',
);
