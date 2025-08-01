import { assertion } from '@building-blocks';
import type { ITarget } from '@types';

/**
 * @public
 *
 * An assertion that passes if an entity does not have a given state
 *
 * @param target - the target to get the state from
 * @param state - whether we want the state to be
 */
export const stateIsNot = (target: ITarget, state: string) => {
  const { entity_id } = target.targetIds;
  if (!entity_id || entity_id.length === 0) {
    throw new Error('stateIsNot requires at least one entity_id in target');
  }

  return assertion({
    name: `If ${target} is not ${state}`,
    targets: [target],
    predicate: ({ hass }) => {
      return Boolean(
        entity_id.every((id) => {
          const switchState = hass.getState(id);
          return state !== switchState;
        }),
      );
    },
  });
};
