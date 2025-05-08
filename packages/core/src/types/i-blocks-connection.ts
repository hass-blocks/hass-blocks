import type { IBlocksRegistry } from './i-blocks-registry.ts';

/**
 * @public
 *
 * An initialied Hass Blocks connection
 */
export interface IBlocksConnection {
  /**
   * A Hass Blocks registry object that automations can be registered with
   */
  registry: IBlocksRegistry;
}
