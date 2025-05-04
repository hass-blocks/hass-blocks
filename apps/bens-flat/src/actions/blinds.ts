import { closeCover } from '@hass-blocks/blocks';
import { entities } from '../constants.ts';

const { livingRoomBlinds } = entities.cover;

export const closeLivingRoomBlinds = closeCover({
  entity_id: livingRoomBlinds.id,
});
