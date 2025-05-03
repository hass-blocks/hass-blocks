import { assertion } from '@hass-blocks/core';

/**
 * @public
 *
 * An assertion that passes if an entity does not have a given state
 *
 * @param entityId - the entityId to get the state from
 * @param state - whether we want the state to be
 */
export const ifStateIsNot = (entityId: string, state: string) =>
  assertion({
    name: `If ${entityId} is not ${state}`,
    predicate: (client) => {
      const switchState = client.getState(entityId);
      return state !== switchState;
    },
  });
