import '@blocks-codegen';

import { allSpeakers, livingRoomSpeaker, tv } from '../entities.ts';

import { bedroom } from '../areas.ts';

export const stopMusicInTheBedroom = mediaStopMediaPlayer(bedroom);
export const stopMusicInTheLivingRoom = mediaStopMediaPlayer(livingRoomSpeaker);

export const playMyDiscoverWeeklyEveryWhere = playMediaMediaPlayer(
  allSpeakers,
  {
    media_content_id: 'spotify:playlist:37i9dQZEVXcWyw95ymf2bT',
    media_content_type: 'playlist',
  },
);

export const setVolumeOnSpeakers = (volume: number) =>
  volumeSetMediaPlayer(allSpeakers, {
    volume_level: volume,
  });

export const switchTvToAppleTv = selectSourceMediaPlayer(tv, {
  source: 'Apple TV',
});
