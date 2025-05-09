import { sendRemoteCommands } from '@hass-blocks/blocks';
import { appleTv } from '../entities.ts';

export const startScreenSaver = sendRemoteCommands(appleTv, [
  'home',
  'home',
  'menu',
]);
