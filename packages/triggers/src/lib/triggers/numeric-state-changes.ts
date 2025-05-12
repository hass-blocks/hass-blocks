import { entity, trigger, type ITarget } from '@hass-blocks/core';
import { removeUndefined } from '@utils';

interface NumericStateAbove {
  /**
   * Trigger only if state rises above this number
   */
  above: number;
}

interface NumericStateBelow {
  /**
   * Trigger only if state falls below this number
   */
  below: number;
}

type AboveBelowOptions =
  | NumericStateAbove
  | NumericStateBelow
  | (NumericStateAbove & NumericStateBelow);

/**
 * @public
 *
 * Configuration options for the trigger
 */
type NumericStateChangesProps = {
  /**
   * The targeted entity
   */
  entity: ITarget;

  /**
   * If supplied, will trigger when the value of the given attribute changes
   */
  attributeName?: string;

  /**
   * If supplied, will trigger when the value given by this evaluated template changes
   */
  valueTemplate?: string;

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
} & AboveBelowOptions;

/**
 * Triggers when the numeric state of an entity changes. See {@link https://www.home-assistant.io/docs/automation/trigger/#numeric-state-trigger}
 *
 * @param props - Configuration options for trigger
 * @returns
 */
export const numericStateChanges = (props: NumericStateChangesProps) => {
  return trigger({
    targets: [props.entity],
    name: 'When numeric state changes',
    trigger: removeUndefined({
      platform: 'numeric_state',
      entity_id: props.entity.entityIds,
      attribute_name: props.attributeName,
      value_template: props.valueTemplate,
      for: props.for,
      above: 'above' in props && props.above,
      below: 'below' in props && props.below,
    }),
  });
};
