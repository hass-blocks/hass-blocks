/**
 * @public
 *
 * A node that can be destroyed to clean up resources
 */
export interface IDestroyable {
  /**
   * Clean up any resources held by this node
   */
  destroy(): Promise<void>;
}
