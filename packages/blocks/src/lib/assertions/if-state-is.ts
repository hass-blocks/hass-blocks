import { assertion } from '@hass-blocks/core';

/**
 * @public
 *
 * An assertion that passes if an entity has a given state
 *
 * @param entityId - the entityId to get the state from
 * @param state - whether we want the state to be
 */
export const ifStateIs = (entityId: string, state: 'on' | 'off') =>
  assertion({
    name: `If ${entityId} is ${state}`,
    predicate: (client) => {
      const switchState = client.getState(entityId);
      return state === switchState;
    },
  });
