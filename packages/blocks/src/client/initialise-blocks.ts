import {
  getConfig,
  initialiseClient,
} from '@hass-blocks/homeassistant-typescript';
import { BlocksConnection, IBlocksPlugin } from '../types/index.ts';
import { BlocksClient } from './blocks-client.ts';
import { EventBus } from '../core/index.ts';

interface BlocksConfig {
  plugins?: IBlocksPlugin[];
}

/**
 * Initiate a working hass-blocks connection
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

    await plugins.reduce(async (lastPromise, plugin) => {
      await lastPromise;
      await plugin.load({ client: blocks, config, events: bus });
    }, Promise.resolve());
  }

  return {
    registry: blocks,
  };
};
