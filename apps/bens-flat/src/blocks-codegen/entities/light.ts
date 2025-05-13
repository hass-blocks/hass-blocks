import { entity, IEntity } from '@hass-blocks/core';

declare global {
  var hallwayLightsLight: IEntity<`light.${string}`>;
  var gymLightsLight: IEntity<`light.${string}`>;
  var enSuiteLightsLight: IEntity<`light.${string}`>;
  var floorLampLight: IEntity<`light.${string}`>;
  var livingRoomBackWallMiddleLight: IEntity<`light.${string}`>;
  var bedroomCeilingRightLight: IEntity<`light.${string}`>;
  var hallwayMiddleLight: IEntity<`light.${string}`>;
  var livingRoomBackWallLeftLight: IEntity<`light.${string}`>;
  var ceilingBathroomLight: IEntity<`light.${string}`>;
  var livingRoomBackWallRightLight: IEntity<`light.${string}`>;
  var bedroomWallRightLight: IEntity<`light.${string}`>;
  var livingRoomFloorLampBottomLight: IEntity<`light.${string}`>;
  var kitchenSpotlightDishwasherLight: IEntity<`light.${string}`>;
  var mediaCabinetLampLight: IEntity<`light.${string}`>;
  var livingRoomTvLight: IEntity<`light.${string}`>;
  var bookcaseLampLight: IEntity<`light.${string}`>;
  var showerBathroomLight: IEntity<`light.${string}`>;
  var kitchenSpotlightSinkLight: IEntity<`light.${string}`>;
  var hallwayGymLight: IEntity<`light.${string}`>;
  var kitchenSpotlightOvenLight: IEntity<`light.${string}`>;
  var bedroomWallLeftLight: IEntity<`light.${string}`>;
  var kitchenSpotlightFridgeLight: IEntity<`light.${string}`>;
  var livingRoomFloorLampMiddleLight: IEntity<`light.${string}`>;
  var hallwayDoorLight: IEntity<`light.${string}`>;
  var livingRoomFloorLampTopLight: IEntity<`light.${string}`>;
  var bedroomCeilingLeftLight: IEntity<`light.${string}`>;
  var hallwayLight: IEntity<`light.${string}`>;
  var livingRoomWallLightsLight: IEntity<`light.${string}`>;
  var floorLampsLight: IEntity<`light.${string}`>;
  var mainBathroomLight: IEntity<`light.${string}`>;
  var bedroomLight: IEntity<`light.${string}`>;
  var kitchenSpotlightsLight: IEntity<`light.${string}`>;
  var livingRoomLight: IEntity<`light.${string}`>;
  var livingRoomColoredLightsLight: IEntity<`light.${string}`>;
}

globalThis.hallwayLightsLight = entity('light.hallway_lights');
globalThis.gymLightsLight = entity('light.gym_lights');
globalThis.enSuiteLightsLight = entity('light.en_suite_lights');
globalThis.floorLampLight = entity('light.floor_lamp');
globalThis.livingRoomBackWallMiddleLight = entity(
  'light.living_room_back_wall_middle',
);
globalThis.bedroomCeilingRightLight = entity('light.bedroom_ceiling_right');
globalThis.hallwayMiddleLight = entity('light.hallway_middle');
globalThis.livingRoomBackWallLeftLight = entity(
  'light.living_room_back_wall_left',
);
globalThis.ceilingBathroomLight = entity('light.ceiling_bathroom');
globalThis.livingRoomBackWallRightLight = entity(
  'light.living_room_back_wall_right',
);
globalThis.bedroomWallRightLight = entity('light.bedroom_wall_right');
globalThis.livingRoomFloorLampBottomLight = entity(
  'light.living_room_floor_lamp_bottom',
);
globalThis.kitchenSpotlightDishwasherLight = entity(
  'light.kitchen_spotlight_dishwasher',
);
globalThis.mediaCabinetLampLight = entity('light.media_cabinet_lamp');
globalThis.livingRoomTvLight = entity('light.living_room_tv');
globalThis.bookcaseLampLight = entity('light.bookcase_lamp');
globalThis.showerBathroomLight = entity('light.shower_bathroom');
globalThis.kitchenSpotlightSinkLight = entity('light.kitchen_spotlight_sink');
globalThis.hallwayGymLight = entity('light.hallway_gym');
globalThis.kitchenSpotlightOvenLight = entity('light.kitchen_spotlight_oven');
globalThis.bedroomWallLeftLight = entity('light.bedroom_wall_left');
globalThis.kitchenSpotlightFridgeLight = entity(
  'light.kitchen_spotlight_fridge',
);
globalThis.livingRoomFloorLampMiddleLight = entity(
  'light.living_room_floor_lamp_middle',
);
globalThis.hallwayDoorLight = entity('light.hallway_door');
globalThis.livingRoomFloorLampTopLight = entity(
  'light.living_room_floor_lamp_top',
);
globalThis.bedroomCeilingLeftLight = entity('light.bedroom_ceiling_left');
globalThis.hallwayLight = entity('light.hallway');
globalThis.livingRoomWallLightsLight = entity('light.living_room_wall_lights');
globalThis.floorLampsLight = entity('light.floor_lamps');
globalThis.mainBathroomLight = entity('light.main_bathroom');
globalThis.bedroomLight = entity('light.bedroom');
globalThis.kitchenSpotlightsLight = entity('light.kitchen_spotlights');
globalThis.livingRoomLight = entity('light.living_room');
globalThis.livingRoomColoredLightsLight = entity(
  'light.living_room_colored_lights',
);
