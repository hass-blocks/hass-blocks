import { serviceCall } from '@hass-blocks/core';
import type { Which } from '../types/index.ts';

/**
 * @public
 *
 * Sends a list of commands to a media remote
 *
 * @param target - The targeted remote
 * @param commands - A list of commands to send
 */
export const sendRemoteCommands = (target: Which, commands: string[]) => {
  return serviceCall({
    name: 'Send remote commands',
    params: {
      target,
      domain: 'remote',
      service: 'send_command',
      service_data: { command: commands, delay_secs: 1 },
    },
  });
};
