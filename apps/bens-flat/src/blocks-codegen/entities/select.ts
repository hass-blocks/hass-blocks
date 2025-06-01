import { entity, type IEntity } from '@hass-blocks/core';

declare global {
  /**
   * assist microphone Assistant
   */
  var assistMicrophoneAssistPipelineSelect: IEntity<`select.assist_microphone_assist_pipeline`>;
  /**
   * assist microphone Noise suppression level
   */
  var assistMicrophoneNoiseSuppressionLevelSelect: IEntity<`select.assist_microphone_noise_suppression_level`>;
  /**
   * assist microphone Finished speaking detection
   */
  var assistMicrophoneFinishedSpeakingDetectionSelect: IEntity<`select.assist_microphone_finished_speaking_detection`>;
  /**
   * Bathroom Motion Sensor Motion sensitivity
   */
  var bathroomMotionSensorMotionSensitivitySelect: IEntity<`select.bathroom_motion_sensor_motion_sensitivity`>;
  /**
   * Hallway Motion Sensor Motion sensitivity
   */
  var hallwayMotionSensorMotionSensitivitySelect: IEntity<`select.hallway_motion_sensor_motion_sensitivity`>;
  /**
   * Zigbee2MQTT Bridge Log level
   */
  var zigbee2mqttBridgeLogLevelSelect: IEntity<`select.zigbee2mqtt_bridge_log_level`>;
  /**
   * Living Room Scenes
   */
  var livingRoomScenesSelect: IEntity<`select.living_room_scenes`>;
  /**
   * Front Door Doorbell MQTT Event Select
   */
  var frontDoorDoorbellMqttEventSelectSelect: IEntity<`select.front_door_doorbell_mqtt_event_select`>;
  /**
   * Front Door Doorbell MQTT Snapshot Mode
   */
  var frontDoorDoorbellMqttSnapshotModeSelect: IEntity<`select.front_door_doorbell_mqtt_snapshot_mode`>;
}

globalThis.assistMicrophoneAssistPipelineSelect = entity(
  'select.assist_microphone_assist_pipeline',
  'assist microphone Assistant',
);
globalThis.assistMicrophoneNoiseSuppressionLevelSelect = entity(
  'select.assist_microphone_noise_suppression_level',
  'assist microphone Noise suppression level',
);
globalThis.assistMicrophoneFinishedSpeakingDetectionSelect = entity(
  'select.assist_microphone_finished_speaking_detection',
  'assist microphone Finished speaking detection',
);
globalThis.bathroomMotionSensorMotionSensitivitySelect = entity(
  'select.bathroom_motion_sensor_motion_sensitivity',
  'Bathroom Motion Sensor Motion sensitivity',
);
globalThis.hallwayMotionSensorMotionSensitivitySelect = entity(
  'select.hallway_motion_sensor_motion_sensitivity',
  'Hallway Motion Sensor Motion sensitivity',
);
globalThis.zigbee2mqttBridgeLogLevelSelect = entity(
  'select.zigbee2mqtt_bridge_log_level',
  'Zigbee2MQTT Bridge Log level',
);
globalThis.livingRoomScenesSelect = entity(
  'select.living_room_scenes',
  'Living Room Scenes',
);
globalThis.frontDoorDoorbellMqttEventSelectSelect = entity(
  'select.front_door_doorbell_mqtt_event_select',
  'Front Door Doorbell MQTT Event Select',
);
globalThis.frontDoorDoorbellMqttSnapshotModeSelect = entity(
  'select.front_door_doorbell_mqtt_snapshot_mode',
  'Front Door Doorbell MQTT Snapshot Mode',
);
