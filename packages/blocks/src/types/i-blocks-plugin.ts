import { HassConfig } from '@hass-blocks/homeassistant-typescript';
import { IBlocksClient } from './i-blocks-client.ts';
import { IEventBus } from './i-event-bus.ts';

export interface PluginArgs {
  client: IBlocksClient;
  events: IEventBus;
  config: HassConfig;
}

export interface IBlocksPlugin {
  readonly name: string;

  load: (args: PluginArgs) => Promise<void>;
}
