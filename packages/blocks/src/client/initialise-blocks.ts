import { getConfig, initialiseClient } from '@hass-blocks/hass-ts';
import { IBlocksConnection, IBlocksPlugin, ILogger } from '../types/index.ts';
import { BlocksClient } from './blocks-client.ts';
import { EventBus, loadPlugins } from '../core/index.ts';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

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

  /**
   * A logger - if not supplied, will fall back to a default logger that uses console.log
   * and doesn't log trace or debug messages
   */
  logger?: ILogger;
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

  const theArgs = args ?? {};

  const { logger, plugins } = theArgs;

  const theLogger: ILogger = logger ?? {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    trace: () => {},
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    debug: () => {},
    info: console.log,
    warn: console.log,
    error: console.log,
    fatal: console.log,
  };

  bus.subscribe((event) => {
    if (event.eventType === 'log-event') {
      theLogger[event.level](event.message);
    }
  });

  const config = getConfig();
  const client = await initialiseClient(config);
  const blocks = new BlocksClient(client, bus);

  if (plugins) {
    await loadPlugins({
      plugins,
      events: bus,
      client: blocks,
      config,
    });
  }

  const { default: packageJson } = JSON.parse(
    await readFile(
      join((import.meta.dirname, '..', '..', '..', 'package.json')),
      'utf8',
    ),
  );

  theLogger.info(`Initialised Hass Blocks version ${packageJson.version}`);

  return {
    registry: blocks,
  };
};
