import { IBlocksClient } from './i-blocks-client.ts';
import { HassConfig } from '@hass-blocks/homeassistant-typescript';
import { IEventBus } from './i-event-bus.ts';
import { Server } from 'http';

export interface BlocksConnection {
  client: IBlocksClient;
  socket: Server;
  hassConfig: HassConfig;
  eventBus: IEventBus;
}
