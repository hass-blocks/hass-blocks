import { closeCover, openCover } from '@hass-blocks/blocks';
import { entities } from '../constants.ts';

const { livingRoomBlinds } = entities;

export const closeLivingRoomBlinds = closeCover(livingRoomBlinds);
export const openLivingRoomBlinds = openCover(livingRoomBlinds);
