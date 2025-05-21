import { stateIs, turnSwitch } from '@hass-blocks/blocks';
import { stateChanges } from '@hass-blocks/triggers';
import { automation, sequence, when } from '@hass-blocks/core';

import '@blocks-codegen';

export const blindsDefaultPosition = automation({
  name: 'Blinds default position changes',
  when: stateChanges(livingRoomBlindsDefaultToOpenSwitch),
  then: [
    when(stateIs(livingRoomBlindsDefaultToOpenSwitch, 'on'), {
      then: sequence(
        when(stateIs(homeModeSwitch, 'on'), {
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
      then: openCoverCover(livingRoomWindowsLeftCover),
      else: closeCoverCover(livingRoomWindowsLeftCover),
    }),
  ],
});

export const livingRoomBlindsLeftCentre = automation({
  name: 'Living room blinds (left centre window)',
  when: stateChanges(livingRoomBlindsLeftCentreWindowSwitch),
  then: [
    when(stateIs(livingRoomBlindsLeftCentreWindowSwitch, 'on'), {
      then: openCoverCover(livingRoomWindowsLeftCentreCover),
      else: closeCoverCover(livingRoomWindowsLeftCentreCover),
    }),
  ],
});

export const livingRoomBlindsRight = automation({
  name: 'Living room blinds (Right window)',
  when: stateChanges(livingRoomBlindsRightWindowSwitch),
  then: [
    when(stateIs(livingRoomBlindsRightWindowSwitch, 'on'), {
      then: openCoverCover(livingRoomWindowsRightCover),
      else: closeCoverCover(livingRoomWindowsRightCover),
    }),
  ],
});

export const livingRoomBlindsRightCentre = automation({
  name: 'Living room blinds (Right centre window)',
  when: stateChanges(livingRoomBlindsRightCentreWindowSwitch),
  then: [
    when(stateIs(livingRoomBlindsRightCentreWindowSwitch, 'on'), {
      then: openCoverCover(livingRoomWindowsRightCentreCover),
      else: closeCoverCover(livingRoomWindowsRightCentreCover),
    }),
  ],
});

export const closeBlindsAtSunset = automation({
  name: 'Close blinds at sunset',
  when: stateChanges(sunSun),
  then: [
    stateIs(sunSun, 'below_horizon'),
    turnSwitch(livingRoomBlindsDefaultToOpenSwitch, 'off'),
  ],
});
