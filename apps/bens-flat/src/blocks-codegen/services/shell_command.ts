import { serviceCall } from '@hass-blocks/core';

export const imacOffShellCommand = () =>
  serviceCall({
    name: `Call shell_command.imac_off`,
    params: {
      domain: 'shell_command',
      service: 'imac_off',
    },
  });

export const updateConfigShellCommand = () =>
  serviceCall({
    name: `Call shell_command.update_config`,
    params: {
      domain: 'shell_command',
      service: 'update_config',
    },
  });
