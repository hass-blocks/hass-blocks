import { publishMessageToMqtt } from '@hass-blocks/blocks';

export const turnOffMyMac = publishMessageToMqtt(
  'bens_imac/commands/shutdown',
  'go',
);
