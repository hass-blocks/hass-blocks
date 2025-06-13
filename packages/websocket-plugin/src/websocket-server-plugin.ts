import type { IBlocksPlugin, IPluginArgs } from '@hass-blocks/core';
import { getServer } from '@hass-blocks/typed-socket-client/server';

import { handlers } from './handlers.ts';

/**
 * @public
 *
 * Configuration object for the plugin
 */
export interface WebsocketServerPluginConfig {
  /**
   * Port to start the server on
   */
  port: number;

  /**
   * Host to listen on
   */
  host: string;

  /**
   * Cors configuration for the websocket server
   */
  cors: {
    origin: string;
    methods: string[];
  };
}

class WebsocketServerPlugin implements IBlocksPlugin {
  public constructor(private config: WebsocketServerPluginConfig) {}

  public readonly name = 'websocket';

  public async load({ client, events: eventBus, logger }: IPluginArgs) {
    await new Promise<void>((accept) => {
      const server = getServer({
        data: client,
        handlers,
        emitter: eventBus,
        logger,
        cors: {
          origin: '*',
          methods: ['GET', 'POST'],
        },
      });

      server.listen(this.config.port, this.config.host, () => {
        logger.info(
          `Websocket server started on ${this.config.host}:${this.config.port}`,
        );
        accept();
      });
    });
  }
}

/**
 * @public
 *
 * When this plugin is registered, it will start a websocket server that
 *
 * - Fires a list of registered automations once Hass has loaded
 * - Forwards events from the internal event bus over the websocket
 */
export const websocketServer = (
  config: WebsocketServerPluginConfig,
): IBlocksPlugin => {
  return new WebsocketServerPlugin(config);
};
