/**
 * @public
 *
 * The base websocket command
 */
export interface Command {
  /**
   * Internal command ID - used to match commands to responses
   */
  id: number;
}
