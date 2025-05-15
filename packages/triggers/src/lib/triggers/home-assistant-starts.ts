import { trigger } from '@hass-blocks/core';

/**
 * @public
 *
 * Triggered when Home Assistant starts
 */
export const homeAssistantStarts = () =>
  trigger({
    name: `When Home Assistant starts`,
    trigger: {
      platform: 'homeassistant',
      event: 'start',
    },
  });
