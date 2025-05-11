import { entity } from '@hass-blocks/core';

export const frontDoorLiveViewCamera = entity('camera.front_door_live_view');
export const frontDoorCamera = entity('camera.front_door');
export const frontDoorDoorbellMqttSnapshotCamera = entity(
  'camera.front_door_doorbell_mqtt_snapshot',
);
