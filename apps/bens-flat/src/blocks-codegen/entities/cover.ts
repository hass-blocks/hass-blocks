import { entity, type IEntity } from '@hass-blocks/core';

declare global {
  var livingRoomBlindsCover: IEntity<`cover.living_room_blinds`>;
  var leftCentreWindowCover: IEntity<`cover.left_centre_window`>;
  var leftWindowCover: IEntity<`cover.left_window`>;
  var rightCentreWindowCover: IEntity<`cover.right_centre_window`>;
  var rightWindowCover: IEntity<`cover.right_window`>;
  var livingRoomWindowsLeftCover: IEntity<`cover.living_room_windows_left`>;
  var livingRoomWindowsLeftCentreCover: IEntity<`cover.living_room_windows_left_centre`>;
  var livingRoomWindowsRightCover: IEntity<`cover.living_room_windows_right`>;
  var livingRoomWindowsRightCentreCover: IEntity<`cover.living_room_windows_right_centre`>;
}

globalThis.livingRoomBlindsCover = entity('cover.living_room_blinds');
globalThis.leftCentreWindowCover = entity('cover.left_centre_window');
globalThis.leftWindowCover = entity('cover.left_window');
globalThis.rightCentreWindowCover = entity('cover.right_centre_window');
globalThis.rightWindowCover = entity('cover.right_window');
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
