import { sendRemoteCommands } from '@hass-blocks/core';

export const startScreenSaver = sendRemoteCommands(bensAppleTv, [
  'home',
  'home',
  'menu',
]);
