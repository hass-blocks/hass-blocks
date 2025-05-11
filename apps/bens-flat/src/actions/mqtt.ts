import { publishMqtt } from '../blocks-codegen/index.ts';

export const turnOffMyMac = publishMqtt({
  topic: 'bens_imac/commands/shutdown',
  payload: {},
});
