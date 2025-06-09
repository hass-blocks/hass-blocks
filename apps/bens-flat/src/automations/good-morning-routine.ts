import {
  generateCalendarMessageFromTodaysEvents,
  generateDayAndTimeMessage,
  generateWeatherMessage,
  getTodaysEvents,
  ttsSay,
} from '@actions';
import { allSpeakers, goodMorningPlayed } from '@entities';
import { stateIsNot } from '@hass-blocks/core';
import { automation, concurrently, sequence } from '@hass-blocks/core';
import { stateTurnsOn } from '@hass-blocks/triggers';
import { startSlideshowOnAppleTv } from 'src/compositions/start-slideshow-on-apple-tv.ts';

const goodMorningRoutine = sequence(
  volumeSetMediaPlayer(allSpeakers, { volume_level: 0.5 }),
  ttsSay(allSpeakers, 'Good Morning!'),
  generateDayAndTimeMessage,
  ttsSay(allSpeakers),
  generateWeatherMessage,
  ttsSay(allSpeakers),
  getTodaysEvents('ben_s_calendar'),
  generateCalendarMessageFromTodaysEvents,
  ttsSay(allSpeakers),
);

export const startGoodMorningRoutine = automation({
  name: 'Good morning!',
  when: stateTurnsOn(livingRoomSensorSensorStateMotionBinarySensor),
  then: [
    stateIsNot(goodMorningPlayed, 'on'),
    stateIsNot(visitorMode, 'on'),
    concurrently(
      turnOnSwitch(goodMorningPlayed),
      startSlideshowOnAppleTv,
      goodMorningRoutine,
    ),
  ],
});
