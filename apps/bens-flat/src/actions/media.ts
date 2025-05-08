import {
  playMedia,
  setMediaPlayerVolume,
  stopMediaPlayer,
} from '@hass-blocks/blocks';
import { entities } from '../constants.ts';
import { selectMediaPlayerSource } from '@hass-blocks/blocks';

const { bedroomSpeaker, livingRoomSpeaker, tv } = entities.media_player;

export const stopMusicInTheBedroom = stopMediaPlayer({
  entity_id: bedroomSpeaker.id,
});

export const stopMusicInTheLivingRoom = stopMediaPlayer({
  entity_id: livingRoomSpeaker.id,
});

export const playMyDiscoverWeeklyEveryWhere = playMedia(
  {
    entity_id: [bedroomSpeaker.id, livingRoomSpeaker.id],
  },
  'spotify:playlist:37i9dQZEVXcWyw95ymf2bT',
  'playlist',
);

export const setVolumeOnSpeakers = (volume: number) =>
  setMediaPlayerVolume(
    {
      entity_id: [bedroomSpeaker.id, livingRoomSpeaker.id],
    },
    volume,
  );

export const switchTvToAppleTv = selectMediaPlayerSource(
  {
    entity_id: tv.id,
  },
  'Apple TV',
);
