import { serviceCall, type Block } from '@hass-blocks/core';

declare global {
  /**
   * Creates a new backup with automatic backup settings.
   */
  var createAutomaticBackup: () => Block;
}

globalThis.createAutomaticBackup = () =>
  serviceCall({
    name: `Call backup.create_automatic`,
    params: {
      domain: 'backup',
      service: 'create_automatic',
    },
  });
