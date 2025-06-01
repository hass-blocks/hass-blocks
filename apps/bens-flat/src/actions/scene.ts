import '@blocks-codegen';
import { entity } from '@hass-blocks/core';

const restoreAfterTVModeIdString = 'restore_after_tv_mode';

export const restoreAfterTvMode = entity(`scene.${restoreAfterTVModeIdString}`);

export const recordStateOfLivingRoom = createScene({
  scene_id: restoreAfterTVModeIdString,
  snapshot_entities: [
    spotifyBenWainwrightMediaPlayer.targetIds.entity_id?.[0] ?? '',
    adaptiveLightingLivingRoom.targetIds.entity_id?.[0] ?? '',
    livingRoomLight.targetIds.entity_id?.[0] ?? '',
  ],
});
