import { area } from '@hass-blocks/core';

export const livingRoom = area('living_room');
export const bedroom = area('bedroom');
export const bathroom = area('main_bathroom');
export const hallway = area('hallway');

export const allRooms = area(livingRoom, bedroom, bathroom, hallway);
