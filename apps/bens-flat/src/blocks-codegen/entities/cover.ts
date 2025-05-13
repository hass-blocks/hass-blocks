import { entity, IEntity } from '@hass-blocks/core';

declare global {
  var livingRoomBlindsCover: IEntity<`cover.${string}`>;
  var livingRoomWindowsLeftCover: IEntity<`cover.${string}`>;
  var livingRoomWindowsLeftCentreCover: IEntity<`cover.${string}`>;
  var livingRoomWindowsRightCover: IEntity<`cover.${string}`>;
  var livingRoomWindowsRightCentreCover: IEntity<`cover.${string}`>;
  var leftCentreWindowCover: IEntity<`cover.${string}`>;
  var leftWindowCover: IEntity<`cover.${string}`>;
  var rightCentreWindowCover: IEntity<`cover.${string}`>;
  var rightWindowCover: IEntity<`cover.${string}`>;
}

globalThis.livingRoomBlindsCover = entity('cover.living_room_blinds');
globalThis.livingRoomWindowsLeftCover = entity(
  'cover.living_room_windows_left',
);
globalThis.livingRoomWindowsLeftCentreCover = entity(
  'cover.living_room_windows_left_centre',
);
globalThis.livingRoomWindowsRightCover = entity(
  'cover.living_room_windows_right',
);
globalThis.livingRoomWindowsRightCentreCover = entity(
  'cover.living_room_windows_right_centre',
);
globalThis.leftCentreWindowCover = entity('cover.left_centre_window');
globalThis.leftWindowCover = entity('cover.left_window');
globalThis.rightCentreWindowCover = entity('cover.right_centre_window');
globalThis.rightWindowCover = entity('cover.right_window');
