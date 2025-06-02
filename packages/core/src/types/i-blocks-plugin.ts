import type { HassConfig } from '@hass-blocks/hass-ts';
import type { IFullBlocksClient } from './i-full-blocks-client.ts';
import type { IEventBus } from './i-event-bus.ts';
import type { ILogger } from './i-logger.ts';

/**
 * @public
 *
 * This object will be passed into the load method once during Hass Blocks
 * initialisation, plugins can use it to interact with home assistant and listen
 * to hass blocks event
 */
export interface IPluginArgs {
  /**
   * An initialised Hass Blocks clients which includes methods that
   * can be used by plugins to make calls to Home Assistant
   */
  client: IFullBlocksClient;

  /**
   * The internal Hass Blocks event bus
   */
  events: IEventBus;

  /**
   * The configuration that was used to connect to Home assistant
   */
  config: HassConfig;

  /**
   * A logger
   */
  logger: ILogger;
}

/**
 * @public
 *
 * An object that implements this interface can be passed into the 'plugins' property
 * of the {@link initialiseBlocks} config object.
 */
export interface IBlocksPlugin {
  /**
   * The name of the plugin - used for logging
   */
  readonly name: string;

  /**
   * This method will be called once during Hass Blocks initialisation
   *
   * @param args - hass blocks internals passed in by the framework
   * @returns
   */
  load(args: IPluginArgs): Promise<void>;
}
