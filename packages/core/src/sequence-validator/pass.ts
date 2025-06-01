/**
 * @public
 *
 * Assign to the input and output paramters of a block to indicate a passthrough block
 */
export interface Pass {
  /**
   * Indicates that this really is a pass block
   */
  __pass: 'pass';
}
