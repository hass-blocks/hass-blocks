import { entity, type IEntity } from '@hass-blocks/core';

declare global {
  var frontDoorLiveViewCamera: IEntity<`camera.front_door_live_view`>;
  var frontDoorCamera: IEntity<`camera.front_door`>;
  var frontDoorDoorbellMqttSnapshotCamera: IEntity<`camera.front_door_doorbell_mqtt_snapshot`>;
}

globalThis.frontDoorLiveViewCamera = entity('camera.front_door_live_view');
globalThis.frontDoorCamera = entity('camera.front_door');
globalThis.frontDoorDoorbellMqttSnapshotCamera = entity(
  'camera.front_door_doorbell_mqtt_snapshot',
);
