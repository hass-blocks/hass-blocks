import { entity, type IEntity } from '@hass-blocks/core';

declare global {
  /**
   * Download Ring Video
   */
  var downloadRingVideoAutomation: IEntity<`automation.download_ring_video`>;
}

globalThis.downloadRingVideoAutomation = entity(
  'automation.download_ring_video',
  'Download Ring Video',
);
