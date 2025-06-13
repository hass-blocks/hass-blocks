import { inject } from 'vitest';

import { getConfig } from '@initialise';
import type { Logger } from '@types';

import { initialiseHass } from './package-intercept.ts';

export const clientBuilder = () => {
  let started = false;

  const getTestClient = async () => {
    process.env['HASS_HOST'] = 'localhost';
    process.env['HASS_PORT'] = String(inject('hassPort'));
    process.env['HASS_TOKEN'] = String(inject('hassToken'));

    const config = getConfig();

    const logger: Logger = {
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      trace: () => {},
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      debug: () => {},
      info: console.log,
      warn: console.log,
      error: console.log,
      fatal: console.log,
    };

    const client = await initialiseHass({ ...config, logger });

    console.log('Waiting for home assistant to start');

    if (!started) {
      await new Promise<void>((accept) =>
        client.on((event) => {
          if (
            'event_type' in event &&
            event.event_type === 'homeassistant_started'
          ) {
            accept();
          }
        }),
      );
      started = true;
    }

    return client;
  };

  return { getTestClient };
};
