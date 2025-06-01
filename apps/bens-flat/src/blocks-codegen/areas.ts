import { area, type IArea } from '@hass-blocks/core';

declare global {
  /**
   * Bedroom
   */
  var bedroom: IArea<`bedroom`>;
  /**
   * Spare Room
   */
  var gym: IArea<`gym`>;
  /**
   * Bathroom
   */
  var mainBathroom: IArea<`main_bathroom`>;
  /**
   * Hallway
   */
  var hallway: IArea<`hallway`>;
  /**
   * Living Room
   */
  var livingRoom: IArea<`living_room`>;
  /**
   * Unnamed Room
   */
  var unnamedRoom: IArea<`unnamed_room`>;
}
globalThis.bedroom = area('bedroom', 'Bedroom');
globalThis.gym = area('gym', 'Spare Room');
globalThis.mainBathroom = area('main_bathroom', 'Bathroom');
globalThis.hallway = area('hallway', 'Hallway');
globalThis.livingRoom = area('living_room', 'Living Room');
globalThis.unnamedRoom = area('unnamed_room', 'Unnamed Room');
