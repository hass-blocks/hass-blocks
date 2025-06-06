import { entity, type IEntity } from '@hass-blocks/core';

declare global {
  /**
   * Hallway Lights
   */
  var hallwayLightsLight: IEntity<`light.hallway_lights`>;
  /**
   * Gym Lights
   */
  var gymLightsLight: IEntity<`light.gym_lights`>;
  /**
   * En Suite Lights
   */
  var enSuiteLightsLight: IEntity<`light.en_suite_lights`>;
  /**
   * Floor Lamp
   */
  var floorLampLight: IEntity<`light.floor_lamp`>;
  /**
   * Living Room Back Wall (Middle)
   */
  var livingRoomBackWallMiddleLight: IEntity<`light.living_room_back_wall_middle`>;
  /**
   * Bedroom ceiling light (Right)
   */
  var bedroomCeilingRightLight: IEntity<`light.bedroom_ceiling_right`>;
  /**
   * Hallway (middle)
   */
  var hallwayMiddleLight: IEntity<`light.hallway_middle`>;
  /**
   * Living Room Back Wall (Left)
   */
  var livingRoomBackWallLeftLight: IEntity<`light.living_room_back_wall_left`>;
  /**
   * Bathroom light (Ceiling)
   */
  var ceilingBathroomLight: IEntity<`light.ceiling_bathroom`>;
  /**
   * Living Room Back Wall (Right)
   */
  var livingRoomBackWallRightLight: IEntity<`light.living_room_back_wall_right`>;
  /**
   * Bedroom wall light (Right)
   */
  var bedroomWallRightLight: IEntity<`light.bedroom_wall_right`>;
  /**
   * Floor Lamp (Bottom Bulb)
   */
  var livingRoomFloorLampBottomLight: IEntity<`light.living_room_floor_lamp_bottom`>;
  /**
   * Kitchen Spotlight (Dishwasher)
   */
  var kitchenSpotlightDishwasherLight: IEntity<`light.kitchen_spotlight_dishwasher`>;
  /**
   * Media Cabinet Lamp
   */
  var mediaCabinetLampLight: IEntity<`light.media_cabinet_lamp`>;
  /**
   * Living Room TV Wall
   */
  var livingRoomTvLight: IEntity<`light.living_room_tv`>;
  /**
   * Bookcase Lamp
   */
  var bookcaseLampLight: IEntity<`light.bookcase_lamp`>;
  /**
   * Bathroom light (Shower)
   */
  var showerBathroomLight: IEntity<`light.shower_bathroom`>;
  /**
   * Kitchen Spotlight (Sink)
   */
  var kitchenSpotlightSinkLight: IEntity<`light.kitchen_spotlight_sink`>;
  /**
   * Hallway (spare room)
   */
  var hallwayGymLight: IEntity<`light.hallway_gym`>;
  /**
   * Kitchen Spotlight (Oven)
   */
  var kitchenSpotlightOvenLight: IEntity<`light.kitchen_spotlight_oven`>;
  /**
   * Bedroom wall light (Left)
   */
  var bedroomWallLeftLight: IEntity<`light.bedroom_wall_left`>;
  /**
   * Kitchen Spotlight (Fridge)
   */
  var kitchenSpotlightFridgeLight: IEntity<`light.kitchen_spotlight_fridge`>;
  /**
   * Floor Lamp (Middle Bulb)
   */
  var livingRoomFloorLampMiddleLight: IEntity<`light.living_room_floor_lamp_middle`>;
  /**
   * Hallway lights (door)
   */
  var hallwayDoorLight: IEntity<`light.hallway_door`>;
  /**
   * Floor Lamp (Top Bulb)
   */
  var livingRoomFloorLampTopLight: IEntity<`light.living_room_floor_lamp_top`>;
  /**
   * Bedroom ceiling light (Left)
   */
  var bedroomCeilingLeftLight: IEntity<`light.bedroom_ceiling_left`>;
  /**
   * Hallway
   */
  var hallwayLight: IEntity<`light.hallway`>;
  /**
   * Living Room Wall Lights
   */
  var livingRoomWallLightsLight: IEntity<`light.living_room_wall_lights`>;
  /**
   * Floor Lamps
   */
  var floorLampsLight: IEntity<`light.floor_lamps`>;
  /**
   * Bathroom
   */
  var mainBathroomLight: IEntity<`light.main_bathroom`>;
  /**
   * Bedroom Lights
   */
  var bedroomLight: IEntity<`light.bedroom`>;
  /**
   * Kitchen Spotlights
   */
  var kitchenSpotlightsLight: IEntity<`light.kitchen_spotlights`>;
  /**
   * Living Room Lights
   */
  var livingRoomLight: IEntity<`light.living_room`>;
  /**
   * Living room colored lights
   */
  var livingRoomColoredLightsLight: IEntity<`light.living_room_colored_lights`>;
}

globalThis.hallwayLightsLight = entity(
  'light.hallway_lights',
  'Hallway Lights',
);
globalThis.gymLightsLight = entity('light.gym_lights', 'Gym Lights');
globalThis.enSuiteLightsLight = entity(
  'light.en_suite_lights',
  'En Suite Lights',
);
globalThis.floorLampLight = entity('light.floor_lamp', 'Floor Lamp');
globalThis.livingRoomBackWallMiddleLight = entity(
  'light.living_room_back_wall_middle',
  'Living Room Back Wall (Middle)',
);
globalThis.bedroomCeilingRightLight = entity(
  'light.bedroom_ceiling_right',
  'Bedroom ceiling light (Right)',
);
globalThis.hallwayMiddleLight = entity(
  'light.hallway_middle',
  'Hallway (middle)',
);
globalThis.livingRoomBackWallLeftLight = entity(
  'light.living_room_back_wall_left',
  'Living Room Back Wall (Left)',
);
globalThis.ceilingBathroomLight = entity(
  'light.ceiling_bathroom',
  'Bathroom light (Ceiling)',
);
globalThis.livingRoomBackWallRightLight = entity(
  'light.living_room_back_wall_right',
  'Living Room Back Wall (Right)',
);
globalThis.bedroomWallRightLight = entity(
  'light.bedroom_wall_right',
  'Bedroom wall light (Right)',
);
globalThis.livingRoomFloorLampBottomLight = entity(
  'light.living_room_floor_lamp_bottom',
  'Floor Lamp (Bottom Bulb)',
);
globalThis.kitchenSpotlightDishwasherLight = entity(
  'light.kitchen_spotlight_dishwasher',
  'Kitchen Spotlight (Dishwasher)',
);
globalThis.mediaCabinetLampLight = entity(
  'light.media_cabinet_lamp',
  'Media Cabinet Lamp',
);
globalThis.livingRoomTvLight = entity(
  'light.living_room_tv',
  'Living Room TV Wall',
);
globalThis.bookcaseLampLight = entity('light.bookcase_lamp', 'Bookcase Lamp');
globalThis.showerBathroomLight = entity(
  'light.shower_bathroom',
  'Bathroom light (Shower)',
);
globalThis.kitchenSpotlightSinkLight = entity(
  'light.kitchen_spotlight_sink',
  'Kitchen Spotlight (Sink)',
);
globalThis.hallwayGymLight = entity(
  'light.hallway_gym',
  'Hallway (spare room)',
);
globalThis.kitchenSpotlightOvenLight = entity(
  'light.kitchen_spotlight_oven',
  'Kitchen Spotlight (Oven)',
);
globalThis.bedroomWallLeftLight = entity(
  'light.bedroom_wall_left',
  'Bedroom wall light (Left)',
);
globalThis.kitchenSpotlightFridgeLight = entity(
  'light.kitchen_spotlight_fridge',
  'Kitchen Spotlight (Fridge)',
);
globalThis.livingRoomFloorLampMiddleLight = entity(
  'light.living_room_floor_lamp_middle',
  'Floor Lamp (Middle Bulb)',
);
globalThis.hallwayDoorLight = entity(
  'light.hallway_door',
  'Hallway lights (door)',
);
globalThis.livingRoomFloorLampTopLight = entity(
  'light.living_room_floor_lamp_top',
  'Floor Lamp (Top Bulb)',
);
globalThis.bedroomCeilingLeftLight = entity(
  'light.bedroom_ceiling_left',
  'Bedroom ceiling light (Left)',
);
globalThis.hallwayLight = entity('light.hallway', 'Hallway');
globalThis.livingRoomWallLightsLight = entity(
  'light.living_room_wall_lights',
  'Living Room Wall Lights',
);
globalThis.floorLampsLight = entity('light.floor_lamps', 'Floor Lamps');
globalThis.mainBathroomLight = entity('light.main_bathroom', 'Bathroom');
globalThis.bedroomLight = entity('light.bedroom', 'Bedroom Lights');
globalThis.kitchenSpotlightsLight = entity(
  'light.kitchen_spotlights',
  'Kitchen Spotlights',
);
globalThis.livingRoomLight = entity('light.living_room', 'Living Room Lights');
globalThis.livingRoomColoredLightsLight = entity(
  'light.living_room_colored_lights',
  'Living room colored lights',
);
