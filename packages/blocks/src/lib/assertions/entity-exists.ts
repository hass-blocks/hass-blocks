import { assertion, type IEntity } from '@hass-blocks/core';
import { EntityDoesNotExistError } from 'node_modules/@hass-blocks/core/src/errors/entity-does-not-exist-error.ts';

/**
 * Assertion will pass if the entity exists in Home Assistant
 *
 * @param entity - The entity to examine
 * @returns
 */
export const entityExists = (entity: IEntity) => {
  return assertion({
    name: 'If entity Exists',
    predicate: (client) => {
      try {
        client.getState(entity.targetIds.entity_id?.[0] ?? '');
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
