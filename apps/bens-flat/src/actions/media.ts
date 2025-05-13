import '@blocks-codegen';

import { allSpeakers } from '../entities.ts';

import { bedroom } from '../areas.ts';

export const stopMusicInTheBedroom = mediaStopMediaPlayer(bedroom);
export const stopMusicInTheLivingRoom = mediaStopMediaPlayer(
  sonosArcUltraMediaPlayer,
);

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

export const switchTvToAppleTv = selectSourceMediaPlayer(lgWebosTvMediaPlayer, {
  source: 'Apple TV',
});
