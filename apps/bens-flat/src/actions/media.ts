import {
  playMedia,
  setMediaPlayerVolume,
  stopMediaPlayer,
} from '@hass-blocks/blocks';

import { selectMediaPlayerSource } from '@hass-blocks/blocks';

import {
  allSpeakers,
  bedroomSpeaker,
  livingRoomSpeaker,
  tv,
} from '../entities.ts';

export const stopMusicInTheBedroom = stopMediaPlayer(bedroomSpeaker);
export const stopMusicInTheLivingRoom = stopMediaPlayer(livingRoomSpeaker);

export const playMyDiscoverWeeklyEveryWhere = playMedia(
  allSpeakers,
  'spotify:playlist:37i9dQZEVXcWyw95ymf2bT',
  'playlist',
);

export const setVolumeOnSpeakers = (volume: number) =>
  setMediaPlayerVolume(allSpeakers, volume);

export const switchTvToAppleTv = selectMediaPlayerSource(tv, 'Apple TV');
