import { IEntity, trigger } from '@hass-blocks/core';
import { removeUndefined } from '@utils';

/**
 * @public
 *
 * Configuration for the state change trigger. See {@link https://www.home-assistant.io/docs/automation/trigger/#state-trigger}
 */
export interface StateChangesProps {
  /**
   * trigger only fires when the specified attribute changes. Changes to other attributes or state changes are ignored
   */
  attribute?: string;
  /**
   * The entity to monitor for changes
   */
  entity: IEntity;
  /**
   *  If at least one of from, to, not_from, or not_to are given, the trigger fires on any matching state change, but not if only an attribute changed.
   */
  from?: string | null;

  /**
   *  If at least one of from, to, not_from, or not_to are given, the trigger fires on any matching state change, but not if only an attribute changed.
   */
  to?: string | null;

  /**
   *  If at least one of from, to, not_from, or not_to are given, the trigger fires on any matching state change, but not if only an attribute changed.
   */
  not_from?: string | null;
  /**
   *  If at least one of from, to, not_from, or not_to are given, the trigger fires on any matching state change, but not if only an attribute changed.
   */
  not_to?: string | null;

  /**
   * If supplied, will trigger when the condition has been true for this amount of time
   */
  for?: {
    days?: number;
    hours: number;
    minutes: number;
    seconds: number;
    milliseconds?: number;
  };
}
/**
 * @public
 * Triggers when the state of an entity changes. See {@link https://www.home-assistant.io/docs/automation/trigger/#state-trigger}
 *
 * @param props - Configuration options for trigger
 */
export const stateChanges = (props: StateChangesProps) => {
  return trigger({
    targets: [props.entity],
    name: 'When numeric state changes',
    trigger: removeUndefined({
      platform: 'numeric_state',
      entity_id: props.entity.targetIds.entity_id,
      attribute_name: props.attribute,
      for: props.for,
      from: props.from,
      not_from: props.not_from,
      to: props.to,
      not_to: props.not_to,
    }),
  });
};
