import { closeCover, openCover } from '@hass-blocks/blocks';
import { entities } from '../constants.ts';

const { livingRoomBlinds } = entities.cover;

export const closeLivingRoomBlinds = closeCover({
  entity_id: livingRoomBlinds.id,
});

export const openLivingRoomBlinds = openCover({
  entity_id: livingRoomBlinds.id,
});
