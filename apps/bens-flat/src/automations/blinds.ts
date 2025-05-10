import {
  closeCover,
  openCover,
  stateChanges,
  stateIs,
  turnSwitch,
} from '@hass-blocks/blocks';
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
  sun,
} from '../entities.ts';
import {
  closeLivingRoomBlinds,
  openLivingRoomBlinds,
} from '../actions/blinds.ts';

export const blindsDefaultPosition = automation({
  name: 'Blinds default position changes',
  when: stateChanges(blindsDefaultOpen),
  then: [
    when(stateIs(blindsDefaultOpen, 'on'), {
      then: sequence(
        when(stateIs(homeMode, 'on'), {
          then: openLivingRoomBlinds,
          else: closeLivingRoomBlinds,
        }),
      ),
      else: closeLivingRoomBlinds,
    }),
  ],
});

export const livingRoomBlindsLeft = automation({
  name: 'Living room blinds (left window)',
  when: stateChanges(livingRoomBlindsLeftWindowSwitch),
  then: [
    when(stateIs(livingRoomBlindsLeftWindowSwitch, 'on'), {
      then: openCover(livingRoomBlindsLeftWindow),
      else: closeCover(livingRoomBlindsLeftWindow),
    }),
  ],
});

export const livingRoomBlindsLeftCentre = automation({
  name: 'Living room blinds (left centre window)',
  when: stateChanges(livingRoomBlindsLeftCentreWindowSwitch),
  then: [
    when(stateIs(livingRoomBlindsLeftCentreWindowSwitch, 'on'), {
      then: openCover(livingRoomBlindsLeftCentreWindow),
      else: closeCover(livingRoomBlindsLeftCentreWindow),
    }),
  ],
});

export const livingRoomBlindsRight = automation({
  name: 'Living room blinds (Right window)',
  when: stateChanges(livingRoomBlindsRightWindowSwitch),
  then: [
    when(stateIs(livingRoomBlindsRightWindowSwitch, 'on'), {
      then: openCover(livingRoomBlindsRightWindow),
      else: closeCover(livingRoomBlindsRightWindow),
    }),
  ],
});

export const livingRoomBlindsRightCentre = automation({
  name: 'Living room blinds (Right centre window)',
  when: stateChanges(livingRoomBlindsRightCentreWindowSwitch),
  then: [
    when(stateIs(livingRoomBlindsRightCentreWindowSwitch, 'on'), {
      then: openCover(livingRoomBlindsRightCentreWindow),
      else: closeCover(livingRoomBlindsRightCentreWindow),
    }),
  ],
});

export const closeBlindsAtSunset = automation({
  name: 'Close blinds at sunset',
  when: stateChanges(sun),
  then: [stateIs(sun, 'below_horizon'), turnSwitch(blindsDefaultOpen, 'off')],
});
