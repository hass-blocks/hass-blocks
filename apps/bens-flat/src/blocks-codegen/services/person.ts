import { serviceCall } from '@hass-blocks/core';

/**
 * Reloads persons from the YAML-configuration.
 */
export const reloadPerson = () =>
  serviceCall({
    name: `Call person.reload`,
    params: {
      domain: 'person',
      service: 'reload',
    },
  });
