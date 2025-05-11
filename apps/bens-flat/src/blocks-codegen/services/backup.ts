import { serviceCall } from '@hass-blocks/core';

/**
 * Creates a new backup with automatic backup settings.
 */
export const createAutomaticBackup = () =>
  serviceCall({
    name: `Call backup.create_automatic`,
    params: {
      domain: 'backup',
      service: 'create_automatic',
    },
  });
