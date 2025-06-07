import { assertion } from '@building-blocks';
import { EntityDoesNotExistError } from '@errors';
import type { IEntity } from '@types';

/**
 * @public
 *
 * Assertion will pass if the entity exists in Home Assistant
 *
 * @param entity - The entity to examine
 */
export const entityExists = (entity: IEntity) => {
  return assertion({
    name: 'If entity Exists',
    predicate: ({ hass }) => {
      try {
        hass.getState(entity.targetIds.entity_id?.[0] ?? '');
        return true;
      } catch (error) {
        if (error instanceof EntityDoesNotExistError) {
          return false;
        }
        throw new Error('Caught an unknown error', {
          cause: error,
        });
      }
    },
  });
};
