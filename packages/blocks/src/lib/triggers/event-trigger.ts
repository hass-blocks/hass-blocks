import { trigger } from '@hass-blocks/core';
import { Context } from '@hass-blocks/core';

export const eventTrigger = (event: {
  type: string[];
  data?: Record<string, unknown>;
  context: Context;
}) => {
  return trigger({
    name: `When event ${eventType.join(' ')} is fired`,
    trigger: {
      platform: 'event',
      event_type: eventType,
      ...(eventData ? { event_data: eventData } : {}),
    },
  });
};
