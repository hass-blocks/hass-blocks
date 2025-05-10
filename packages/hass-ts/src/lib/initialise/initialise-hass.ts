import type { HassConfig, IHomeAssistant } from '@types';
import { HomeAssistant } from '@home-assistant';
import { WebsocketClient } from '@websocket-client';
import { RestClient } from '@rest-client';

import { getLogger } from './get-logger.ts';

/**
 * Initialise the http and websocket connections and return a client that is ready
 * to use. Use with {@link getConfig} to get the correct config values
 *
 * @param config - Config for the Home Assistant client
 * @public
 *
 * @example
 *
 * const config = getConfig()
 * const client = await initialiseClient(config)
 *
 */
export const initialiseHass = async ({
  host,
  port,
  httpPath,
  websocketPath,
  token,
  logger,
}: HassConfig): Promise<IHomeAssistant> => {
  const finalLogger = getLogger(logger);
  const websocketClient = new WebsocketClient(
    host,
    port,
    websocketPath,
    token,
    finalLogger,
  );

  await websocketClient.init();
  const restClient = new RestClient(host, port, httpPath, token, finalLogger);
  const client = new HomeAssistant(websocketClient, restClient);

  return client;
};
