import { IEntity, ITrigger, trigger } from '@hass-blocks/core';
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
 * Triggers when any kind of state change occurrs for a given entity. See {@link https://www.home-assistant.io/docs/automation/trigger/#state-trigger}
 *
 * @param entity - The entity to monitor
 */
export function stateChanges(entity: IEntity): ITrigger;

/**
 * @public
 * Triggers when a state change occurrs for a given entity. See {@link https://www.home-assistant.io/docs/automation/trigger/#state-trigger}
 *
 * @param entity - Configuration options for trigger
 */
export function stateChanges(props: StateChangesProps): ITrigger;
export function stateChanges(
  propsOrEntity: StateChangesProps | IEntity,
): ITrigger {
  const params =
    'targetIds' in propsOrEntity
      ? {
          targets: [propsOrEntity],
          name: 'When numeric state changes',
          trigger: {
            platform: 'state',
            entity_id: propsOrEntity.targetIds.entity_id,
          },
        }
      : {
          targets: [propsOrEntity.entity],
          name: 'When numeric state changes',
          trigger: removeUndefined({
            platform: 'state',
            entity_id: propsOrEntity.entity.targetIds.entity_id,
            attribute_name: propsOrEntity.attribute,
            for: propsOrEntity.for,
            from: propsOrEntity.from,
            not_from: propsOrEntity.not_from,
            to: propsOrEntity.to,
            not_to: propsOrEntity.not_to,
          }),
        };
  return trigger(params);
}
