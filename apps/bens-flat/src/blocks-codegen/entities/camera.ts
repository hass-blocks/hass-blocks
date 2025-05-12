import { entity, ITarget } from '@hass-blocks/core';

declare global {
  var frontDoorLiveViewCamera: ITarget;
  var frontDoorCamera: ITarget;
  var frontDoorDoorbellMqttSnapshotCamera: ITarget;
}

globalThis.frontDoorLiveViewCamera = entity('camera.front_door_live_view');
globalThis.frontDoorCamera = entity('camera.front_door');
globalThis.frontDoorDoorbellMqttSnapshotCamera = entity(
  'camera.front_door_doorbell_mqtt_snapshot',
);
