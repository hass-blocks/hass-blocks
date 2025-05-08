import { sendRemoteCommands } from '@hass-blocks/blocks';
import { entities } from '../constants.ts';

const { appleTv } = entities.media_player;

export const startScreenSaver = sendRemoteCommands({ entity_id: appleTv.id }, [
  'home',
  'home',
  'menu',
]);
