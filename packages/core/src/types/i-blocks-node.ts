/**
 * @public
 *
 * Any node on the Hass Blocks graph
 */
export interface IBlocksNode {
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

  /**
   * String that identifies the kind of block
   */
  type: string;

  /**
   * The parameters that were passed with the block
   */
  params?: Record<string, unknown>;
}
