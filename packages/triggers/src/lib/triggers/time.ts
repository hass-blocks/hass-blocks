import { trigger, type IEntity } from '@hass-blocks/core';
import {
  removeUndefined,
  type TimeHHMMSS,
  type TimeHHMMWithoutMinus,
} from '@utils';

/**
 * Time trigger configuration where the time is supplied as a string
 *
 * @public
 */
export interface TimeTriggerPropsWithString {
  /**
   * A string that represents a time to fire each day
   */
  at: TimeHHMMWithoutMinus | TimeHHMMWithoutMinus;
}

/**
 * Time trigger configuration where time is supplied as an entity
 *
 * @public
 */
export interface TimeTriggerPropsWithDateTime {
  /**
   * An entity with device class 'timestamp'
   */
  at: IEntity<`sensor.${string}`>;

  /**
   * Time offset that will be added to the value of the timestamp enitty
   */
  offset?: TimeHHMMSS;
}

/**
 * Configuration for the time trigger
 *
 * @public
 */
export type TimeTriggerProps =
  | TimeTriggerPropsWithString
  | TimeTriggerPropsWithDateTime;

/**
 * @returns -
 * Fires at the same time every day. See {@link https://www.home-assistant.io/docs/automation/trigger/#time-trigger}
 *
 * @param props - configuration for the time trigger
 * @public
 */
export const atTime = (props: TimeTriggerProps | TimeTriggerProps[]) => {
  const times = (Array.isArray(props) ? props : [props]).map((theProp) => {
    const offset = 'offset' in theProp ? theProp.offset : undefined;
    const { at } = theProp;
    const entityId = typeof at === 'string' ? at : at.targetIds.entity_id[0];
    return removeUndefined({
      offset,
      at: entityId,
    });
  });

  trigger({
    name: 'Trigger at time',
    trigger: removeUndefined({
      platform: 'time',
      at: times,
    }),
  });
};
