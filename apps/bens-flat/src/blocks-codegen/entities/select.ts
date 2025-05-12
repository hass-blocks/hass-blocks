import { entity, ITarget } from '@hass-blocks/core';

declare global {
  var assistMicrophoneAssistPipelineSelect: ITarget;
  var assistMicrophoneNoiseSuppressionLevelSelect: ITarget;
  var assistMicrophoneFinishedSpeakingDetectionSelect: ITarget;
  var bathroomMotionSensorMotionSensitivitySelect: ITarget;
  var hallwayMotionSensorMotionSensitivitySelect: ITarget;
  var zigbee2mqttBridgeLogLevelSelect: ITarget;
  var livingRoomScenesSelect: ITarget;
  var frontDoorDoorbellMqttEventSelectSelect: ITarget;
  var frontDoorDoorbellMqttSnapshotModeSelect: ITarget;
}

globalThis.assistMicrophoneAssistPipelineSelect = entity(
  'select.assist_microphone_assist_pipeline',
);
globalThis.assistMicrophoneNoiseSuppressionLevelSelect = entity(
  'select.assist_microphone_noise_suppression_level',
);
globalThis.assistMicrophoneFinishedSpeakingDetectionSelect = entity(
  'select.assist_microphone_finished_speaking_detection',
);
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
