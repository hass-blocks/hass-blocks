/**
 * @public
 * 
 * A serialised version of a block - used for transmission purposes
 */
export interface SerialisedBlock {

  /**
   * The type of block
   */
  type: string;

  /**
   * String to identify this particular instance of a block. Must be unique
   */
  id: string;

  /**
   * Friendly name for the block - for use in user interfaces
   */
  name: string;

  /**
   * The parameters that were passed with the block
   */
  params?: Record<string, unknown>;
}
