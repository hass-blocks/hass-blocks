import {
  playMedia,
  setMediaPlayerVolume,
  stopMediaPlayer,
} from '@hass-blocks/blocks';
import { entities } from '../constants.ts';
import { selectMediaPlayerSource } from '@hass-blocks/blocks';

const { bedroomSpeaker, livingRoomSpeaker, allSpeakers, tv } = entities;

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
