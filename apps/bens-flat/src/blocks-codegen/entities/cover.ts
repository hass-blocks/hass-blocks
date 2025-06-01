import { entity, type IEntity } from '@hass-blocks/core';

declare global {
  /**
   * Living Room Blinds
   */
  var livingRoomBlindsCover: IEntity<`cover.living_room_blinds`>;
  /**
   * Left Centre Window
   */
  var leftCentreWindowCover: IEntity<`cover.left_centre_window`>;
  /**
   * Left Window
   */
  var leftWindowCover: IEntity<`cover.left_window`>;
  /**
   * Right Centre Window
   */
  var rightCentreWindowCover: IEntity<`cover.right_centre_window`>;
  /**
   * Right Window
   */
  var rightWindowCover: IEntity<`cover.right_window`>;
  /**
   * Left Window Blind
   */
  var livingRoomWindowsLeftCover: IEntity<`cover.living_room_windows_left`>;
  /**
   * Left Centre Window Blind
   */
  var livingRoomWindowsLeftCentreCover: IEntity<`cover.living_room_windows_left_centre`>;
  /**
   * Right Window Blinds
   */
  var livingRoomWindowsRightCover: IEntity<`cover.living_room_windows_right`>;
  /**
   * Right Centre Window Blinds
   */
  var livingRoomWindowsRightCentreCover: IEntity<`cover.living_room_windows_right_centre`>;
}

globalThis.livingRoomBlindsCover = entity(
  'cover.living_room_blinds',
  'Living Room Blinds',
);
globalThis.leftCentreWindowCover = entity(
  'cover.left_centre_window',
  'Left Centre Window',
);
globalThis.leftWindowCover = entity('cover.left_window', 'Left Window');
globalThis.rightCentreWindowCover = entity(
  'cover.right_centre_window',
  'Right Centre Window',
);
globalThis.rightWindowCover = entity('cover.right_window', 'Right Window');
globalThis.livingRoomWindowsLeftCover = entity(
  'cover.living_room_windows_left',
  'Left Window Blind',
);
globalThis.livingRoomWindowsLeftCentreCover = entity(
  'cover.living_room_windows_left_centre',
  'Left Centre Window Blind',
);
globalThis.livingRoomWindowsRightCover = entity(
  'cover.living_room_windows_right',
  'Right Window Blinds',
);
globalThis.livingRoomWindowsRightCentreCover = entity(
  'cover.living_room_windows_right_centre',
  'Right Centre Window Blinds',
);
