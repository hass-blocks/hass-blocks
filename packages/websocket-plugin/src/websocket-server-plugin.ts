import { IBlocksPlugin, PluginArgs } from '@hass-blocks/blocks';
import { getWebsocketServer } from './get-websocket-server.ts';

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

  public async load({ client, events }: PluginArgs) {
    const server = getWebsocketServer({
      client,
      bus: events,
      cors: this.config.cors,
    });

    await new Promise<void>((accept) => {
      server.listen(this.config.port, this.config.host, () => {
        events.emit({
          type: `log-event`,
          message: `Websocket server started on port ${this.config.port}`,
          level: `info`,
          module: this.name,
        });
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
