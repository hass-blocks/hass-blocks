import { getConfig, initialiseClient } from '@hass-blocks/hass-ts';
import { IBlocksConnection, IBlocksPlugin } from '../types/index.ts';
import { BlocksClient } from './blocks-client.ts';
import { EventBus, loadPlugins } from '../core/index.ts';

/**
 * @public
 *
 * Configuration object for Hass Blocks
 */
export interface IBlocksConfig {
  /**
   * A list of plugins to be loaded by Hass Blocks
   */
  plugins?: IBlocksPlugin[];
}

/**
 * @public
 *
 * Bootstrap the connection with Home Assistant and initialise Hass Blocks
 *
 * @remarks
 * Uses {@link hass-ts#getConfig} under the hood, so will read the same environment variables
 *
 * @example
 * ```TypeScript
 *
 * const { registry } = await initialiseBlocks()
 * ```
 */
export const initialiseBlocks = async (
  args?: IBlocksConfig,
): Promise<IBlocksConnection> => {
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
