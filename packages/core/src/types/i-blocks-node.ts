import type { IHass } from './i-hass.ts';

/**
 * @public
 *
 * Any node on the Hass Blocks graph
 */
export interface IBlocksNode {
  /**
   * If defined, this method will be called when the parent automation is registered.
   * If any configuration is invalid, an error should be thrown
   */
  validate(client: IHass): Promise<void>;
}
