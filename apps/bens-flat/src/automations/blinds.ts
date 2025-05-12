import { stateChanges, stateIs, turnSwitch } from '@hass-blocks/blocks';

import { automation, sequence, when } from '@hass-blocks/core';
import {
  blindsDefaultOpen,
  homeMode,
  livingRoomBlindsLeftCentreWindow,
  livingRoomBlindsLeftCentreWindowSwitch,
  livingRoomBlindsLeftWindow,
  livingRoomBlindsLeftWindowSwitch,
  livingRoomBlindsRightCentreWindow,
  livingRoomBlindsRightCentreWindowSwitch,
  livingRoomBlindsRightWindow,
  livingRoomBlindsRightWindowSwitch,
} from '../entities.ts';

import '@blocks-codegen';

export const blindsDefaultPosition = automation({
  name: 'Blinds default position changes',
  when: stateChanges(blindsDefaultOpen),
  then: [
    when(stateIs(blindsDefaultOpen, 'on'), {
      then: sequence(
        when(stateIs(homeMode, 'on'), {
          then: openCoverCover(livingRoomBlindsCover),
          else: closeCoverCover(livingRoomBlindsCover),
        }),
      ),
      else: closeCoverCover(livingRoomBlindsCover),
    }),
  ],
});

export const livingRoomBlindsLeft = automation({
  name: 'Living room blinds (left window)',
  when: stateChanges(livingRoomBlindsLeftWindowSwitch),
  then: [
    when(stateIs(livingRoomBlindsLeftWindowSwitch, 'on'), {
      then: openCoverCover(livingRoomBlindsLeftWindow),
      else: closeCoverCover(livingRoomBlindsLeftWindow),
    }),
  ],
});

export const livingRoomBlindsLeftCentre = automation({
  name: 'Living room blinds (left centre window)',
  when: stateChanges(livingRoomBlindsLeftCentreWindowSwitch),
  then: [
    when(stateIs(livingRoomBlindsLeftCentreWindowSwitch, 'on'), {
      then: openCoverCover(livingRoomBlindsLeftCentreWindow),
      else: closeCoverCover(livingRoomBlindsLeftCentreWindow),
    }),
  ],
});

export const livingRoomBlindsRight = automation({
  name: 'Living room blinds (Right window)',
  when: stateChanges(livingRoomBlindsRightWindowSwitch),
  then: [
    when(stateIs(livingRoomBlindsRightWindowSwitch, 'on'), {
      then: openCoverCover(livingRoomBlindsRightWindow),
      else: closeCoverCover(livingRoomBlindsRightWindow),
    }),
  ],
});

export const livingRoomBlindsRightCentre = automation({
  name: 'Living room blinds (Right centre window)',
  when: stateChanges(livingRoomBlindsRightCentreWindowSwitch),
  then: [
    when(stateIs(livingRoomBlindsRightCentreWindowSwitch, 'on'), {
      then: openCoverCover(livingRoomBlindsRightCentreWindow),
      else: closeCoverCover(livingRoomBlindsRightCentreWindow),
    }),
  ],
});

export const closeBlindsAtSunset = automation({
  name: 'Close blinds at sunset',
  when: stateChanges(sunSun),
  then: [
    stateIs(sunSun, 'below_horizon'),
    turnSwitch(blindsDefaultOpen, 'off'),
  ],
});
