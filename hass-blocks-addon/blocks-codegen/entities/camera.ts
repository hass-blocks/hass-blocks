import { entity, type IEntity } from '@hass-blocks/core';

declare global {
  /**
   * Front Door Live view
   */
  var frontDoorLiveViewCamera: IEntity<`camera.front_door_live_view`>;
  /**
   * Front Door Last recording
   */
  var frontDoorCamera: IEntity<`camera.front_door`>;
  /**
   * Front Door Doorbell MQTT Snapshot
   */
  var frontDoorDoorbellMqttSnapshotCamera: IEntity<`camera.front_door_doorbell_mqtt_snapshot`>;
}

globalThis.frontDoorLiveViewCamera = entity(
  'camera.front_door_live_view',
  'Front Door Live view',
);
globalThis.frontDoorCamera = entity(
  'camera.front_door',
  'Front Door Last recording',
);
globalThis.frontDoorDoorbellMqttSnapshotCamera = entity(
  'camera.front_door_doorbell_mqtt_snapshot',
  'Front Door Doorbell MQTT Snapshot',
);
