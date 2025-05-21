import type { IEntity } from '@hass-blocks/core';
import { stateChanges } from './state-changes.ts';

/**
 * @public
 *
 * Triggers when a given entity switches from 'off' to 'on'
 *
 * @param entity - The entity to monitor
 * @returns
 */
export const stateTurnsOn = (entity: IEntity) => {
  return stateChanges({
    entity,
    from: 'off',
    to: 'on',
  });
};
