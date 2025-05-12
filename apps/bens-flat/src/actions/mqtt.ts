import '@blocks-codegen';

export const turnOffMyMac = publishMqtt({
  topic: 'bens_imac/commands/shutdown',
  payload: {},
});
