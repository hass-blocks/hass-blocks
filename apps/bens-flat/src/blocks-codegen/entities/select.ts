import { entity } from '@hass-blocks/core';

export const assistMicrophoneAssistPipelineSelect = entity(
  'select.assist_microphone_assist_pipeline',
);
export const assistMicrophoneNoiseSuppressionLevelSelect = entity(
  'select.assist_microphone_noise_suppression_level',
);
export const assistMicrophoneFinishedSpeakingDetectionSelect = entity(
  'select.assist_microphone_finished_speaking_detection',
);
export const bathroomMotionSensorMotionSensitivitySelect = entity(
  'select.bathroom_motion_sensor_motion_sensitivity',
);
export const hallwayMotionSensorMotionSensitivitySelect = entity(
  'select.hallway_motion_sensor_motion_sensitivity',
);
export const zigbee2mqttBridgeLogLevelSelect = entity(
  'select.zigbee2mqtt_bridge_log_level',
);
export const livingRoomScenesSelect = entity('select.living_room_scenes');
export const frontDoorDoorbellMqttEventSelectSelect = entity(
  'select.front_door_doorbell_mqtt_event_select',
);
export const frontDoorDoorbellMqttSnapshotModeSelect = entity(
  'select.front_door_doorbell_mqtt_snapshot_mode',
);
