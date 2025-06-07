import { assertion, type ITarget } from '@hass-blocks/core';

/**
 * @public
 *
 * An assertion that passes if an entity does not have a given state
 *
 * @param target - the target to get the state from
 * @param state - whether we want the state to be
 */
export const stateIsNot = (target: ITarget, state: string) => {
  return assertion({
    name: `If ${target} is not ${state}`,
    targets: [target],
    predicate: ({ hass }) => {
      const { entity_id } = target.targetIds;
      return Boolean(
        entity_id?.every((id) => {
          const switchState = hass.getState(id);
          return state !== switchState;
        }),
      );
    },
  });
};
