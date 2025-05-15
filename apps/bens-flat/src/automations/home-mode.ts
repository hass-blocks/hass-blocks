// import { waitMinutes, gate, stateTurns, stateIs } from '@hass-blocks/blocks';

// import {
//   automation,
//   concurrently,
//   ExecutionMode,
//   sequence,
// } from '@hass-blocks/core';

// import { notifyMyPhone } from '../actions/index.ts';

// import { ifIamOut, ifHomeIsNotEmpty } from '../assertions/index.ts';

// import {
//   homeBecomesEmpty,
//   homeModeTurnsOff,
//   homeModeTurnsOn,
// } from '../triggers/index.ts';

// import {
//   playMyDiscoverWeeklyEveryWhere,
//   setVolumeOnSpeakers,
// } from '../actions/media.ts';

// import { startSlideshowOnAppleTv } from '../compositions/start-slideshow-on-apple-tv.ts';

// import { allLights, allSpeakers } from '../entities.ts';

// import '@blocks-codegen';

// const {
//   open: allowZoneExitChecks,
//   close: disallowZoneExitChecks,
//   ifGateIsOpen: ifZoneExitChecksAllowed,
// } = gate('Zone exit checks');

// export const onLastExit = automation({
//   name: 'Last Exit',
//   when: homeBecomesEmpty,
//   then: [ifZoneExitChecksAllowed, turnOffSwitch(homeModeSwitch)],
// });

// export const homeModeDetection = automation({
//   name: 'Home mode detection',
//   when: [
//     stateTurns(bedroomSensorSensorStateMotionBinarySensor, 'on'),
//     stateTurns(livingRoomSensorSensorStateMotionBinarySensor, 'on'),
//     stateTurns(hallwayMotionSensorOccupancyBinarySensor, 'on'),
//     stateTurns(bathroomMotionSensorOccupancyBinarySensor, 'on'),
//   ],
//   then: [
//     concurrently(
//       sequence(
//         waitMinutes(5),
//         ifIamOut,
//         allowZoneExitChecks,
//         turnOffSwitch(homeModeSwitch),
//       ),
//       sequence(
//         stateIs(homeModeSwitch, 'off'),
//         ifHomeIsNotEmpty,
//         disallowZoneExitChecks,
//         turnOnSwitch(homeModeSwitch),
//       ),
//     ),
//   ],
//   mode: ExecutionMode.Restart,
// });

// export const whenIGoOut = automation({
//   name: 'When I go out',
//   when: homeModeTurnsOff,
//   then: [
//     concurrently(
//       turnOnLight(allLights),
//       mediaStopMediaPlayer(allSpeakers),
//       turnOffSwitch(imacProOnSwitch),
//       closeCoverCover(livingRoomBlindsCover),
//       notifyMyPhone({
//         title: 'Leaving flat',
//         message: 'Home empty detected - turning everything off',
//       }),
//     ),
//   ],
// });

// export const whenIGetHome = automation({
//   name: 'When I get home',
//   when: homeModeTurnsOn,
//   then: [
//     concurrently(
//       playMyDiscoverWeeklyEveryWhere,
//       setVolumeOnSpeakers(0.3),
//       sequence(
//         stateIs(livingRoomBlindsDefaultToOpenSwitch, 'on'),
//         openCoverCover(livingRoomBlindsCover),
//       ),
//       startSlideshowOnAppleTv,
//     ),
//   ],
// });
