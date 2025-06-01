import { ttsSay } from '@actions';
import { allSpeakers, goodMorningPlayed } from '@entities';
import { stateIsNot } from '@hass-blocks/blocks';
import { action, automation, concurrently, sequence } from '@hass-blocks/core';
import { stateTurnsOn } from '@hass-blocks/triggers';
import { startSlideshowOnAppleTv } from 'src/compositions/start-slideshow-on-apple-tv.ts';
import { DateTime } from 'luxon';
import { getNumberSuffix } from '@utils';

export const generateDayAndTimeMessage = action({
  name: 'Generate day and time message',
  callback: () => {
    const now = DateTime.now();
    const dayOfMonth = Number(now.toFormat('d'));
    const suffix = getNumberSuffix(dayOfMonth);
    return `The time is ${now.toLocaleString(DateTime.TIME_SIMPLE)} on the ${dayOfMonth}${suffix} of ${now.toFormat('LLLL')}`;
  },
});

export const generateWeatherMessage = action({
  name: 'Generate day and time message',
  targets: [weatherForecastSensor],
  callback: () => {
    const {
      currentState: {
        attributes: { temperature, humidity },
        state,
      },
    } = weatherForecastSensor;

    return `The forecast for today is ${state} with a temperature of ${temperature} degrees celsius and a humidity of ${humidity} percent`;
  },
});

interface Event {
  summary: string;
  start: string;
  end: string;
}

export const getTodaysEvents = (calendarName: string) =>
  action<void, Event[]>({
    name: 'Get todays events',
    callback: ({ hass }) => {
      const now = new Date(Date.now());
      const todaysEvents = Array.from(hass.getStates())
        .filter(([key]) => key.startsWith(`sensor.ical_${calendarName}_event_`))
        .map(([, value]) => value)
        .filter(
          (event) =>
            new Date(event.attributes['start']).toLocaleDateString() ===
            now.toLocaleDateString(),
        )
        .map((event) => event.attributes as Event);

      return todaysEvents;
    },
  });

export const generateCalendarMessageFromTodaysEvents = action<Event[], string>({
  name: 'Generate calendar message',
  callback: ({ input }) => {
    const getSimpleTime = (isoDate: string) => {
      return DateTime.fromISO(isoDate).toLocaleString(DateTime.TIME_SIMPLE);
    };

    const getTimeString = (event: Event) => {
      if (event.start === event.end) {
        return '';
      }

      return ` From ${getSimpleTime(event.start)} to ${getSimpleTime(event.end)}`;
    };

    if (input.length === 0) {
      return 'You have nothing in your calendar today';
    }

    const totalEvents = `You have ${input.length} events today.`;
    const eventDetails = input
      .map((event) => `${event.summary}${getTimeString(event)}`)
      .join(', ');

    return `${totalEvents}\n${eventDetails}`;
  },
});

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
