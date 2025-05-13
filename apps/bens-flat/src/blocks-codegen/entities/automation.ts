import { entity, IEntity } from '@hass-blocks/core';

declare global {
  var downloadRingVideoAutomation: IEntity<`automation.${string}`>;
}

globalThis.downloadRingVideoAutomation = entity(
  'automation.download_ring_video',
);
