import type { IBlocksPlugin, IPluginArgs } from '@hass-blocks/core';
import { buildServer, commands, events } from './configure-server.ts';

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
    const server = buildServer({
      client,
      emitter: eventBus,
      data: client,
      cors: this.config.cors,
      logger,
      commands: Object.values(commands).map((command) => command.backend),
      eventForwarders: Object.values(events).map(
        (eventForwarder) => eventForwarder.backend,
      ),
    });

    await new Promise<void>((accept) => {
      server.listen(this.config.port, this.config.host, () => {
        logger.info(`Websocket server started on port ${this.config.port}`);
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
