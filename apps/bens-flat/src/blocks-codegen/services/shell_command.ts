import {
  serviceCall,
  type Block,
  type ServiceCallArgs,
} from '@hass-blocks/core';

declare global {
  var imacOffShellCommand: () => Block<
    Partial<ServiceCallArgs<unknown>> | undefined,
    void
  >;

  var updateConfigShellCommand: () => Block<
    Partial<ServiceCallArgs<unknown>> | undefined,
    void
  >;
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
