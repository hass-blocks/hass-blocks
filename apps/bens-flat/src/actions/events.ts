import { action } from '@hass-blocks/core';

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
