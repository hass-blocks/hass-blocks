import {
  getConfig,
  initialiseClient,
} from '@hass-blocks/homeassistant-typescript';
import { ConnectionArgs, BlocksConnection } from '../types/index.ts';
import { BlocksClient } from './blocks-client.ts';
import { EventBus } from '../core/index.ts';
import { getWebsocketServer } from './get-websocket-server.ts';

/**
 * Initiate a working hass-blocks connection
 */
export const getConnection = async (
  args?: ConnectionArgs,
): Promise<BlocksConnection> => {
  const corsOptions = args
    ? args.corsOptions
    : {
        origin: '*',
        methods: ['GET', 'POST'],
      };

  const bus = new EventBus();
  const config = getConfig();
  const client = await initialiseClient(config);
  const blocks = new BlocksClient(client, bus);

  const websocketServer = getWebsocketServer({
    cors: corsOptions,
    client: blocks,
    bus,
  });

  return {
    client: blocks,
    socket: websocketServer,
    hassConfig: config,
    eventBus: bus,
  };
};
