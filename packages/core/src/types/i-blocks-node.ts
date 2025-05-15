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
  initialise(client: IHass): Promise<void>;

  /**
   * String to identify this particular instance of a block. Must be unique
   */
  id: string;

  /**
   * Friendly name for the node - for use in user interfaces
   */
  name: string;

  /**
   * Nodes that descend from this one on the tree
   */
  children?: IBlocksNode[] | undefined;
}
