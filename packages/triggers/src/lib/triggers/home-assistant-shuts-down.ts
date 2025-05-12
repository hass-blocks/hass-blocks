import { trigger } from '@hass-blocks/core';

export const homeAssistantStarts = () =>
  trigger({
    name: `When Home Assistant starts`,
    trigger: {
      platform: 'homeassistant',
      event: 'shutdown',
    },
  });
