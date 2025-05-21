import { IEntity } from '@hass-blocks/core';
import { stateChanges } from './state-changes.ts';

/**
 * @public
 *
 * Triggers when a given entity switches from 'on' to 'off'
 *
 * @param entity - The entity to monitor
 * @returns
 */
export const stateTurnsOff = (entity: IEntity) => {
  return stateChanges({
    entity,
    from: 'on',
    to: 'off',
  });
};
