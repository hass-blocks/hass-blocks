import { sendRemoteCommands } from '@hass-blocks/blocks';

export const startScreenSaver = sendRemoteCommands(bensAppleTv, [
  'home',
  'home',
  'menu',
]);
