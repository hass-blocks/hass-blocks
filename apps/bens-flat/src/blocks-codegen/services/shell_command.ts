import { serviceCall, type Block } from '@hass-blocks/core';

declare global {
  var imacOffShellCommand: () => Block;

  var updateConfigShellCommand: () => Block;
}

globalThis.imacOffShellCommand = () =>
  serviceCall({
    name: `Call shell_command.imac_off`,
    params: {
      domain: 'shell_command',
      service: 'imac_off',
    },
  });

globalThis.updateConfigShellCommand = () =>
  serviceCall({
    name: `Call shell_command.update_config`,
    params: {
      domain: 'shell_command',
      service: 'update_config',
    },
  });
