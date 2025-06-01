import { type ITarget, serviceCall } from '@hass-blocks/core';

/**
 * @public
 *
 * Sends a list of commands to a media remote
 *
 * @param target - The targeted remote
 * @param commands - A list of commands to send
 */
export const sendRemoteCommands = (target: ITarget, commands: string[]) => {
  return serviceCall({
    name: 'Send remote commands',
    target,
    params: {
      domain: 'remote',
      service: 'send_command',
      service_data: { command: commands, delay_secs: 1 },
    },
  });
};
