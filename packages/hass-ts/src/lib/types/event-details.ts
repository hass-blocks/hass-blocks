/**
 * An object containing the number of listeners attached to a given event
 *
 * @public
 */
export interface EventDetails {
  /**
   * The name of the event
   */
  event: string;

  /**
   * The number of listeners attached to a specific event
   */
  listener_count: number;
}
