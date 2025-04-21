import {
  getConfig,
  initialiseClient,
} from '@hass-blocks/homeassistant-typescript';
import { BlocksConnection, IBlocksPlugin } from '../types/index.ts';
import { BlocksClient } from './blocks-client.ts';
import { EventBus, loadPlugins } from '../core/index.ts';

interface BlocksConfig {
  plugins?: IBlocksPlugin[];
}

/**
 * Bootstrap the connection with Home Assistant and initialise Hass Blocks
 */
export const initialiseBlocks = async (
  args?: BlocksConfig,
): Promise<BlocksConnection> => {
  const bus = new EventBus();
  const config = getConfig();
  const client = await initialiseClient(config);
  const blocks = new BlocksClient(client, bus);

  if (args && args.plugins) {
    const { plugins } = args;

    await loadPlugins({
      plugins,
      events: bus,
      client: blocks,
      config,
    });
  }

  return {
    registry: blocks,
  };
};
