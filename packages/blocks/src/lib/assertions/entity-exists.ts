import { assertion, type IEntity } from '@hass-blocks/core';
import { EntityDoesNotExistError } from 'node_modules/@hass-blocks/core/src/errors/entity-does-not-exist-error.ts';

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
