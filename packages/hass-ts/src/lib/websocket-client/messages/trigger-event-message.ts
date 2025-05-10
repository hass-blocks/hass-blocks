/**
 * @public
 *
 * A message received from Home Assistant when a trigger is fired
 */
export interface TriggerEventMessage<T = unknown> {
  id: number;
  type: 'event';
  event: {
    variables: {
      trigger: T;
    };
  };
}
