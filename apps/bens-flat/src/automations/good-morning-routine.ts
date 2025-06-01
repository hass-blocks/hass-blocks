import { goodMorningPlayed } from '@entities';
import { stateIsNot } from '@hass-blocks/blocks';
import { automation, concurrently } from '@hass-blocks/core';
import { stateTurnsOn } from '@hass-blocks/triggers';
import { startSlideshowOnAppleTv } from 'src/compositions/start-slideshow-on-apple-tv.ts';

export const goodMorningRoutine = automation({
  name: 'Good morning!',
  when: stateTurnsOn(livingRoomSensorSensorStateMotionBinarySensor),
  then: [
    stateIsNot(goodMorningPlayed, 'on'),
    stateIsNot(visitorMode, 'on'),
    concurrently(turnOnSwitch(goodMorningPlayed), startSlideshowOnAppleTv),
  ],
});
