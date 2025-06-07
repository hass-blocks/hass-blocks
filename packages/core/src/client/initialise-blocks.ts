import { type IHomeAssistant, initialiseHass } from '@hass-blocks/hass-ts';

import packageJson from '../../package.json' with { type: 'json' };

import type { IBlocksConnection, IBlocksPlugin, ILogger } from '@types';
import { EventBus, loadPlugins, getConfig } from '@core';

import { BlocksClient } from './blocks-client.ts';
import { LazyMqtt } from './lazy-mqtt.ts';

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

  /**
   * An already instantiated version of the Hass client. Used for testing
   */
  client?: IHomeAssistant;
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

  const { logger, plugins, client } = theArgs;

  const theLogger: ILogger = logger ?? {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    trace: () => {},
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    debug: () => {},
    info: (message) => console.log(`😀 ${message}`),
    warn: (message) => console.log(`😔 ${message}`),
    error: (message) => console.log(`😡 ${message}`),
    fatal: (message) => console.log(`💀 ${message}`),
  };

  bus.subscribe((event) => {
    if (event.eventType === 'log-event') {
      theLogger[event.level](event.message);
    }
  });

  const config = getConfig();
  const hassClient = client ?? (await initialiseHass(config));

  const mqtt = new LazyMqtt(
    {
      username: config.mqttUsername,
      password: config.mqttPassword,
      host: config.mqttHost,
      port: config.mqttPort,
    },
    theLogger,
  );

  const blocks = new BlocksClient(hassClient, bus, mqtt);

  if (plugins) {
    await loadPlugins({
      plugins,
      events: bus,
      client: blocks,
      config,
      logger: theLogger,
    });
  }

  theLogger.info(`Initialised Hass Blocks version ${packageJson.version}`);

  return {
    registry: blocks,
  };
};
