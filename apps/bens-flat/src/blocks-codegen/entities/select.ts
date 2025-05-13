import { entity, type IEntity } from '@hass-blocks/core';

declare global {
  var bathroomMotionSensorMotionSensitivitySelect: IEntity<`select.bathroom_motion_sensor_motion_sensitivity`>;
  var hallwayMotionSensorMotionSensitivitySelect: IEntity<`select.hallway_motion_sensor_motion_sensitivity`>;
  var zigbee2mqttBridgeLogLevelSelect: IEntity<`select.zigbee2mqtt_bridge_log_level`>;
  var livingRoomScenesSelect: IEntity<`select.living_room_scenes`>;
  var frontDoorDoorbellMqttEventSelectSelect: IEntity<`select.front_door_doorbell_mqtt_event_select`>;
  var frontDoorDoorbellMqttSnapshotModeSelect: IEntity<`select.front_door_doorbell_mqtt_snapshot_mode`>;
  var assistMicrophoneAssistPipelineSelect: IEntity<`select.assist_microphone_assist_pipeline`>;
  var assistMicrophoneNoiseSuppressionLevelSelect: IEntity<`select.assist_microphone_noise_suppression_level`>;
  var assistMicrophoneFinishedSpeakingDetectionSelect: IEntity<`select.assist_microphone_finished_speaking_detection`>;
}

globalThis.bathroomMotionSensorMotionSensitivitySelect = entity(
  'select.bathroom_motion_sensor_motion_sensitivity',
);
globalThis.hallwayMotionSensorMotionSensitivitySelect = entity(
  'select.hallway_motion_sensor_motion_sensitivity',
);
globalThis.zigbee2mqttBridgeLogLevelSelect = entity(
  'select.zigbee2mqtt_bridge_log_level',
);
globalThis.livingRoomScenesSelect = entity('select.living_room_scenes');
globalThis.frontDoorDoorbellMqttEventSelectSelect = entity(
  'select.front_door_doorbell_mqtt_event_select',
);
globalThis.frontDoorDoorbellMqttSnapshotModeSelect = entity(
  'select.front_door_doorbell_mqtt_snapshot_mode',
);
globalThis.assistMicrophoneAssistPipelineSelect = entity(
  'select.assist_microphone_assist_pipeline',
);
globalThis.assistMicrophoneNoiseSuppressionLevelSelect = entity(
  'select.assist_microphone_noise_suppression_level',
);
globalThis.assistMicrophoneFinishedSpeakingDetectionSelect = entity(
  'select.assist_microphone_finished_speaking_detection',
);
