import { entity, ITarget } from '@hass-blocks/core';

declare global {
  var hallwayLightsLight: ITarget;
  var gymLightsLight: ITarget;
  var enSuiteLightsLight: ITarget;
  var floorLampLight: ITarget;
  var livingRoomBackWallMiddleLight: ITarget;
  var bedroomCeilingRightLight: ITarget;
  var hallwayMiddleLight: ITarget;
  var livingRoomBackWallLeftLight: ITarget;
  var ceilingBathroomLight: ITarget;
  var livingRoomBackWallRightLight: ITarget;
  var bedroomWallRightLight: ITarget;
  var livingRoomFloorLampBottomLight: ITarget;
  var kitchenSpotlightDishwasherLight: ITarget;
  var mediaCabinetLampLight: ITarget;
  var livingRoomTvLight: ITarget;
  var bookcaseLampLight: ITarget;
  var showerBathroomLight: ITarget;
  var kitchenSpotlightSinkLight: ITarget;
  var hallwayGymLight: ITarget;
  var kitchenSpotlightOvenLight: ITarget;
  var bedroomWallLeftLight: ITarget;
  var kitchenSpotlightFridgeLight: ITarget;
  var livingRoomFloorLampMiddleLight: ITarget;
  var hallwayDoorLight: ITarget;
  var livingRoomFloorLampTopLight: ITarget;
  var bedroomCeilingLeftLight: ITarget;
  var hallwayLight: ITarget;
  var livingRoomWallLightsLight: ITarget;
  var floorLampsLight: ITarget;
  var mainBathroomLight: ITarget;
  var bedroomLight: ITarget;
  var kitchenSpotlightsLight: ITarget;
  var livingRoomLight: ITarget;
  var livingRoomColoredLightsLight: ITarget;
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
