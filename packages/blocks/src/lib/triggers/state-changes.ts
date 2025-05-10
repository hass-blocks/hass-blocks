import { ITarget, trigger } from '@hass-blocks/core';

/**
 * A trigger that fires any time the state of an entity changes
 *
 * @public
 *
 * @param target - the target to monitor
 */
export const stateChanges = (target: ITarget) => {
  return trigger({
    targets: [target],
    name: `When ${target} changes state`,
    trigger: {
      platform: 'state',
      entity_id: target.entityIds[0],
      to: ['on', 'off'],
    },
  });
};
