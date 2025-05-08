import { initialiseClient } from './package-intercept.ts';
import { getConfig } from '../lib/core/index.ts';
import { inject } from 'vitest';
import type { Logger } from '../lib/index.ts';

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

    const client = await initialiseClient({ ...config, logger });

    console.log('Waiting for home assistant to start');

    if (!started) {
      await new Promise<void>((accept) =>
        client.subscribeToEvents((event) => {
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
