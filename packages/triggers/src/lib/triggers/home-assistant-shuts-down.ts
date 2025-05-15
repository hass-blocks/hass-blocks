import { trigger } from '@hass-blocks/core';

/**
 * @public
 *
 * Triggered when Home Assistant shuts down
 */
export const homeAssistantShutsDown = () =>
  trigger({
    name: `When Home Assistant starts`,
    trigger: {
      platform: 'homeassistant',
      event: 'shutdown',
    },
  });
