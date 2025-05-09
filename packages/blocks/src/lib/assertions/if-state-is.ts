import {
  assertion,
  assertTargetHasEntityIds,
  type ITarget,
} from '@hass-blocks/core';

/**
 * @public
 *
 * An assertion that passes if an entity has a given state
 *
 * @param entityId - the target to get the state from
 * @param state - whether we want the state to be
 */
export const ifStateIs = (target: ITarget, state: string) => {
  assertTargetHasEntityIds(target);
  return assertion({
    name: `If ${target} is ${state}`,
    targets: [target],
    predicate: (client) => {
      const { entity_id } = target.targetIds;
      return entity_id.every((id) => {
        const switchState = client.getState(id);
        return state === switchState;
      });
    },
  });
};
