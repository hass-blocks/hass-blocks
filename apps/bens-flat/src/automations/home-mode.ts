import { waitMinutes } from '@hass-blocks/blocks';
import {
  automation,
  concurrently,
  ExecutionMode,
  sequence,
} from '@hass-blocks/core';

import { turnHomeModeOff, turnHomeModeOn } from 'src/actions/index.ts';

import {
  ifIamOut,
  ifHomeModeIsOff,
  ifHomeIsNotEmpty,
} from 'src/assertions/index.ts';

import {
  motionIsDetectedInTheBathroom,
  motionIsDetectedInTheBedroom,
  motionIsDetectedInTheHallway,
  motionIsDetectedInTheLivingRoom,
} from 'src/triggers/motion-sensors.ts';

export const homeMode = automation({
  name: 'Home mode',
  when: [
    motionIsDetectedInTheBedroom,
    motionIsDetectedInTheHallway,
    motionIsDetectedInTheBathroom,
    motionIsDetectedInTheLivingRoom,
  ],
  then: [
    concurrently(
      sequence(waitMinutes(5), ifIamOut, turnHomeModeOff),
      sequence(ifHomeModeIsOff, ifHomeIsNotEmpty, turnHomeModeOn),
    ),
  ],
  mode: ExecutionMode.Restart,
});
