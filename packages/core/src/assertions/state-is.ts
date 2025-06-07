import { assertion } from '@building-blocks';
import type { ITarget } from '@types';

/**
 * @public
 *
 * An assertion that passes if an entity has a given state
 *
 * @param entityId - the target to get the state from
 * @param state - whether we want the state to be
 */
export const stateIs = (target: ITarget, state: string) => {
  return assertion({
    name: `If ${target} is ${state}`,
    targets: [target],
    predicate: ({ hass }) => {
      const { entity_id } = target.targetIds;
      return Boolean(
        entity_id?.every((id) => {
          const switchState = hass.getState(id);
          return state === switchState;
        }),
      );
    },
  });
};
