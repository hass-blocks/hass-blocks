import { sendRemoteCommands } from '@hass-blocks/blocks';

export const startScreenSaver = sendRemoteCommands(bensAppleTvMediaPlayer, [
  'home',
  'home',
  'menu',
]);
