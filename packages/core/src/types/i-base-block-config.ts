/**
 * @public
 * Configuration that is common for all blocks
 */
export interface IBaseBlockConfig {
  /**
   * Name of the block
   */
  readonly name: string;

  /**
   * Unique ID of the block - if this is not supplied, an md5 hash of the name
   * will be used. Must be unique
   */
  readonly id?: string;
}
