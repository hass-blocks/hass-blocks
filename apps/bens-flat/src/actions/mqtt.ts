import '@blocks-codegen';

export const turnOffMyMac = publishMqtt({
  topic: 'bens_imac/commands/shutdown',
  payload: {},
});

export const turnOffMacScreen = publishMqtt({
  topic: 'bens_imac/commands/screen_off',
});
