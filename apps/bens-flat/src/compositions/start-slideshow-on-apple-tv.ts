import { sequence, when } from '@hass-blocks/core';
import { stateIsNot, waitSeconds } from '@hass-blocks/blocks';
import { waitUntilAppleTvFinishesTurningOn } from '../actions/devices.ts';
import { startScreenSaver } from '../actions/remote.ts';
import { switchTvToAppleTv } from '../actions/media.ts';

export const startSlideshowOnAppleTv = sequence(
  when(stateIsNot(bensAppleTvMediaPlayer, 'on'), {
    then: sequence(waitUntilAppleTvFinishesTurningOn, waitSeconds(5)),
    else: switchTvToAppleTv,
  }),
  startScreenSaver,
);
