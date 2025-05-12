import { entity, ITarget } from '@hass-blocks/core';

declare global {
  var downloadRingVideoAutomation: ITarget;
}

globalThis.downloadRingVideoAutomation = entity(
  'automation.download_ring_video',
);
