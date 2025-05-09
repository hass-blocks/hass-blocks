import {
  assertion,
  assertTargetHasEntityIds,
  type ITarget,
} from '@hass-blocks/core';

/**
 * @public
 *
 * An assertion that passes if an entity does not have a given state
 *
 * @param target - the target to get the state from
 * @param state - whether we want the state to be
 */
export const ifStateIsNot = (target: ITarget, state: string) => {
  assertTargetHasEntityIds(target);
  return assertion({
    name: `If ${target} is not ${state}`,
    targets: [target],
    predicate: (client) => {
      const { entity_id } = target.targetIds;
      return entity_id.every((id) => {
        const switchState = client.getState(id);
        return state !== switchState;
      });
    },
  });
};
