import { sendRemoteCommands } from '@hass-blocks/blocks';
import { entities } from '../constants.ts';

const { appleTv } = entities;

export const startScreenSaver = sendRemoteCommands(appleTv, [
  'home',
  'home',
  'menu',
]);
