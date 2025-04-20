import { IBlocksPlugin, PluginArgs } from '@hass-blocks/blocks';
import { getWebsocketServer } from './get-websocket-server.ts';

export interface WebsocketServerPluginConfig {
  port: number;
  host: string;
  cors: {
    origin: string;
    methods: string[];
  };
}

export class WebsocketServerPlugin implements IBlocksPlugin {
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
