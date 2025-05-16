import { type ITarget, trigger } from '@hass-blocks/core';

/**
 * @public

 * A factory function that returns a trigger which fires when an entity's state
 * switches between on and off
 *
 * @param entityId - ID of the entity we are monitoring
 * @param onOrOff - Whether the trigger is listening for the entity to turn on or off
 */
export const stateTurns = (entityId: ITarget, onOrOff: 'on' | 'off') => {
  const withDirection =
    onOrOff === 'on' ? { from: 'off', to: 'on' } : { from: 'on', to: 'off' };
  return trigger({
    targets: [entityId],
    name: 'When state changes',
    trigger: {
      platform: 'state',
      entity_id: entityId.targetIds.entity_id[0],
      ...withDirection,
    },
  });
};
