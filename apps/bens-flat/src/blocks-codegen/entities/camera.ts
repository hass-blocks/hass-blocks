import { entity, IEntity } from '@hass-blocks/core';

declare global {
  var frontDoorLiveViewCamera: IEntity<`camera.${string}`>;
  var frontDoorCamera: IEntity<`camera.${string}`>;
  var frontDoorDoorbellMqttSnapshotCamera: IEntity<`camera.${string}`>;
}

globalThis.frontDoorLiveViewCamera = entity('camera.front_door_live_view');
globalThis.frontDoorCamera = entity('camera.front_door');
globalThis.frontDoorDoorbellMqttSnapshotCamera = entity(
  'camera.front_door_doorbell_mqtt_snapshot',
);
