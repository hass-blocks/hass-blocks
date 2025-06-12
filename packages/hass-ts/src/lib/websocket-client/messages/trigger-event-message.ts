/**
 * @public
 *
 * A message received from Home Assistant when a trigger is fired
 */
export interface TriggerEventMessage<T = unknown> {
  /**
   * The original id of the trigger
   */
  id: number;
  /**
   * The type of event message
   */
  type: 'event';
  /**
   * Details of the event itself
   */
  event: {
    variables: {
      trigger: T;
    };
  };
}
