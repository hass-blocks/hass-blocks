import { action } from '@hass-blocks/core';
import { getNumberSuffix } from '@utils';
import { DateTime } from 'luxon';

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
  name: 'Generate forecast message',
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

export interface Event {
  summary: string;
  start: string;
  end: string;
}

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
