import { closeCover, openCover } from '@hass-blocks/blocks';
import { livingRoomBlinds } from '../entities.ts';

export const closeLivingRoomBlinds = closeCover(livingRoomBlinds);
export const openLivingRoomBlinds = openCover(livingRoomBlinds);
