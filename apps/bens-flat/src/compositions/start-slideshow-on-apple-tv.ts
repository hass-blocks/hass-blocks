// import { sequence, when } from '@hass-blocks/core';
// import { waitSeconds } from '@hass-blocks/blocks';
// import { appleTvIsOnStandby } from '../assertions/index.ts';
// import { waitUntilAppleTvFinishesTurningOn } from '../actions/devices.ts';
// import { startScreenSaver } from '../actions/remote.ts';
// import { switchTvToAppleTv } from '../actions/media.ts';

// export const startSlideshowOnAppleTv = sequence(
//   when(appleTvIsOnStandby, {
//     then: sequence(waitUntilAppleTvFinishesTurningOn, waitSeconds(5)),
//     else: switchTvToAppleTv,
//   }),
//   startScreenSaver,
// );
