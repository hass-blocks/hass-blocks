import { stateIs } from '@hass-blocks/blocks';
import { stateChanges } from '@hass-blocks/triggers';
import { automation, sequence, when } from '@hass-blocks/core';

import '@blocks-codegen';

export const blindsDefaultPosition = automation({
  name: 'Blinds default position changes',
  when: stateChanges(livingRoomBlindsDefaultToOpen),
  then: when(stateIs(livingRoomBlindsDefaultToOpen, 'on'), {
    then: sequence(
      when(stateIs(homeMode, 'on'), {
        then: openCover(livingRoomBlindsCover),
        else: closeCover(livingRoomBlindsCover),
      }),
    ),
    else: closeCover(livingRoomBlindsCover),
  }),
});

export const livingRoomBlindsLeft = automation({
  name: 'Living room blinds (left window)',
  when: stateChanges(livingRoomBlindsLeftWindow),
  then: when(stateIs(livingRoomBlindsLeftWindow, 'on'), {
    then: openCover(livingRoomWindowsLeftCover),
    else: closeCover(livingRoomWindowsLeftCover),
  }),
});

export const livingRoomBlindsLeftCentre = automation({
  name: 'Living room blinds (left centre window)',
  when: stateChanges(livingRoomBlindsLeftCentreWindow),
  then: when(stateIs(livingRoomBlindsLeftCentreWindow, 'on'), {
    then: openCover(livingRoomWindowsLeftCentreCover),
    else: closeCover(livingRoomWindowsLeftCentreCover),
  }),
});

export const livingRoomBlindsRight = automation({
  name: 'Living room blinds (Right window)',
  when: stateChanges(livingRoomBlindsRightWindow),
  then: when(stateIs(livingRoomBlindsRightWindow, 'on'), {
    then: openCover(livingRoomWindowsRightCover),
    else: closeCover(livingRoomWindowsRightCover),
  }),
});

export const livingRoomBlindsRightCentre = automation({
  name: 'Living room blinds (Right centre window)',
  when: stateChanges(livingRoomBlindsRightCentreWindow),
  then: when(stateIs(livingRoomBlindsRightCentreWindow, 'on'), {
    then: openCover(livingRoomWindowsRightCentreCover),
    else: closeCover(livingRoomWindowsRightCentreCover),
  }),
});

export const closeBlindsAtSunset = automation({
  name: 'Close blinds at sunset',
  when: stateChanges(sunSun),
  then: [
    stateIs(sunSun, 'below_horizon'),
    turnOffSwitch(livingRoomBlindsDefaultToOpen),
  ],
});
