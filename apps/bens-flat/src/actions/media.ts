import { stopMediaPlayer } from '@hass-blocks/blocks';
import { entities } from '../constants.ts';

const { bedroomSpeaker, livingRoomSpeaker } = entities.media_player;

export const stopMusicInTheBedroom = stopMediaPlayer({
  entity_id: bedroomSpeaker.id,
});

export const stopMusicInTheLivingRoom = stopMediaPlayer({
  entity_id: livingRoomSpeaker.id,
});
