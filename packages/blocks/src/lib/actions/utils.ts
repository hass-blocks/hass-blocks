import { action } from '@hass-blocks/core';

/**
 * @public
 *
 * An action that will cause a currently executing automation
 * to wait for a given number of minutes
 *
 * @param minutes - how many minutes to wait for
 */
export const waitMinutes = (minutes: number) =>
  action({
    name: `Wait ${minutes} minutes`,

    callback: async () => {
      await new Promise((accept) => setInterval(accept, 1000 * 60 * minutes));
    },
  });
