import { entity, ITarget } from '@hass-blocks/core';

declare global {
  var livingRoomBlindsCover: ITarget;
  var leftCentreWindowCover: ITarget;
  var leftWindowCover: ITarget;
  var rightCentreWindowCover: ITarget;
  var rightWindowCover: ITarget;
  var livingRoomWindowsLeftCover: ITarget;
  var livingRoomWindowsLeftCentreCover: ITarget;
  var livingRoomWindowsRightCover: ITarget;
  var livingRoomWindowsRightCentreCover: ITarget;
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
