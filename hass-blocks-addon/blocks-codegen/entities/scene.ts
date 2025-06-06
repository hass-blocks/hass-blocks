import { entity, type IEntity } from '@hass-blocks/core';

declare global {
  /**
   * Bedroom Lights Off
   */
  var bedroomLightsOffScene: IEntity<`scene.bedroom_lights_off`>;
  /**
   * TV Mode
   */
  var tvLightsScene: IEntity<`scene.tv_lights`>;
  /**
   * New Scene
   */
  var newSceneScene: IEntity<`scene.new_scene`>;
  /**
   * Kitchen Spotlights Nightlight
   */
  var kitchenSpotlightsNightlightScene: IEntity<`scene.kitchen_spotlights_nightlight`>;
  /**
   * Living Room Lights Savanna sunset
   */
  var livingRoomSavannaSunsetScene: IEntity<`scene.living_room_savanna_sunset`>;
  /**
   * Living Room Wall Lights Nightlight
   */
  var livingRoomWallLightsNightlightScene: IEntity<`scene.living_room_wall_lights_nightlight`>;
  /**
   * Bedroom Lights Savanna sunset
   */
  var bedroomLightsSavannaSunsetScene: IEntity<`scene.bedroom_lights_savanna_sunset`>;
  /**
   * Kitchen Spotlights Bright
   */
  var kitchenSpotlightsBrightScene: IEntity<`scene.kitchen_spotlights_bright`>;
  /**
   * Living room colored lights Tropical twilight
   */
  var livingRoomColoredLightsTropicalTwilightScene: IEntity<`scene.living_room_colored_lights_tropical_twilight`>;
  /**
   * Kitchen Spotlights Tropical twilight
   */
  var kitchenSpotlightsTropicalTwilightScene: IEntity<`scene.kitchen_spotlights_tropical_twilight`>;
  /**
   * Bedroom Lights Concentrate
   */
  var bedroomLightsConcentrateScene: IEntity<`scene.bedroom_lights_concentrate`>;
  /**
   * Living Room Wall Lights Spring blossom
   */
  var livingRoomWallLightsSpringBlossomScene: IEntity<`scene.living_room_wall_lights_spring_blossom`>;
  /**
   * Floor Lamps Dimmed
   */
  var floorLampsDimmedScene: IEntity<`scene.floor_lamps_dimmed`>;
  /**
   * Living room colored lights Concentrate
   */
  var livingRoomColoredLightsConcentrateScene: IEntity<`scene.living_room_colored_lights_concentrate`>;
  /**
   * Bedroom Lights Nightlight
   */
  var bedroomLightsNightlightScene: IEntity<`scene.bedroom_lights_nightlight`>;
  /**
   * Living room colored lights Dimmed
   */
  var livingRoomColoredLightsDimmedScene: IEntity<`scene.living_room_colored_lights_dimmed`>;
  /**
   * Living Room Wall Lights Energize
   */
  var livingRoomWallLightsEnergizeScene: IEntity<`scene.living_room_wall_lights_energize`>;
  /**
   * Living room colored lights Nightlight
   */
  var livingRoomColoredLightsNightlightScene: IEntity<`scene.living_room_colored_lights_nightlight`>;
  /**
   * Living room colored lights Energize
   */
  var livingRoomColoredLightsEnergizeScene: IEntity<`scene.living_room_colored_lights_energize`>;
  /**
   * Living room colored lights Savanna sunset
   */
  var livingRoomColoredLightsSavannaSunsetScene: IEntity<`scene.living_room_colored_lights_savanna_sunset`>;
  /**
   * Kitchen Spotlights Read
   */
  var kitchenSpotlightsReadScene: IEntity<`scene.kitchen_spotlights_read`>;
  /**
   * Living room colored lights Arctic aurora
   */
  var livingRoomColoredLightsArcticAuroraScene: IEntity<`scene.living_room_colored_lights_arctic_aurora`>;
  /**
   * Kitchen Spotlights Concentrate
   */
  var kitchenSpotlightsConcentrateScene: IEntity<`scene.kitchen_spotlights_concentrate`>;
  /**
   * Kitchen Spotlights Relax
   */
  var kitchenSpotlightsRelaxScene: IEntity<`scene.kitchen_spotlights_relax`>;
  /**
   * Living room colored lights Relax
   */
  var livingRoomColoredLightsRelaxScene: IEntity<`scene.living_room_colored_lights_relax`>;
  /**
   * Kitchen Spotlights Arctic aurora
   */
  var kitchenSpotlightsArcticAuroraScene: IEntity<`scene.kitchen_spotlights_arctic_aurora`>;
  /**
   * Living Room Wall Lights Savanna sunset
   */
  var livingRoomWallLightsSavannaSunsetScene: IEntity<`scene.living_room_wall_lights_savanna_sunset`>;
  /**
   * Living Room Lights Mountain Breeze
   */
  var livingRoomMountainBreezeScene: IEntity<`scene.living_room_mountain_breeze`>;
  /**
   * Living Room Lights Bright
   */
  var livingRoomBrightScene: IEntity<`scene.living_room_bright`>;
  /**
   * Living room colored lights Bright
   */
  var livingRoomColoredLightsBrightScene: IEntity<`scene.living_room_colored_lights_bright`>;
  /**
   * Living Room Wall Lights Arctic aurora
   */
  var livingRoomWallLightsArcticAuroraScene: IEntity<`scene.living_room_wall_lights_arctic_aurora`>;
  /**
   * Bedroom Lights Bright
   */
  var bedroomLightsBrightScene: IEntity<`scene.bedroom_lights_bright`>;
  /**
   * Living Room Wall Lights Read
   */
  var livingRoomWallLightsReadScene: IEntity<`scene.living_room_wall_lights_read`>;
  /**
   * Living Room Lights Dimmed
   */
  var livingRoomDimmedScene: IEntity<`scene.living_room_dimmed`>;
  /**
   * Bedroom Lights Spring blossom
   */
  var bedroomLightsSpringBlossomScene: IEntity<`scene.bedroom_lights_spring_blossom`>;
  /**
   * Living Room Wall Lights Bright
   */
  var livingRoomWallLightsBrightScene: IEntity<`scene.living_room_wall_lights_bright`>;
  /**
   * Bedroom Lights Dimmed
   */
  var bedroomLightsDimmedScene: IEntity<`scene.bedroom_lights_dimmed`>;
  /**
   * Kitchen Spotlights Spring blossom
   */
  var kitchenSpotlightsSpringBlossomScene: IEntity<`scene.kitchen_spotlights_spring_blossom`>;
  /**
   * Living Room Wall Lights Concentrate
   */
  var livingRoomWallLightsConcentrateScene: IEntity<`scene.living_room_wall_lights_concentrate`>;
  /**
   * Bedroom Lights Arctic aurora
   */
  var bedroomLightsArcticAuroraScene: IEntity<`scene.bedroom_lights_arctic_aurora`>;
  /**
   * Living Room Wall Lights Dimmed
   */
  var livingRoomWallLightsDimmedScene: IEntity<`scene.living_room_wall_lights_dimmed`>;
  /**
   * Living room colored lights Read
   */
  var livingRoomColoredLightsReadScene: IEntity<`scene.living_room_colored_lights_read`>;
  /**
   * Floor Lamps Bright
   */
  var floorLampsBrightScene: IEntity<`scene.floor_lamps_bright`>;
  /**
   * Living room colored lights Spring blossom
   */
  var livingRoomColoredLightsSpringBlossomScene: IEntity<`scene.living_room_colored_lights_spring_blossom`>;
  /**
   * Kitchen Spotlights Energize
   */
  var kitchenSpotlightsEnergizeScene: IEntity<`scene.kitchen_spotlights_energize`>;
  /**
   * Kitchen Spotlights Savanna sunset
   */
  var kitchenSpotlightsSavannaSunsetScene: IEntity<`scene.kitchen_spotlights_savanna_sunset`>;
  /**
   * Living Room Wall Lights Relax
   */
  var livingRoomWallLightsRelaxScene: IEntity<`scene.living_room_wall_lights_relax`>;
  /**
   * Living Room Wall Lights Tropical twilight
   */
  var livingRoomWallLightsTropicalTwilightScene: IEntity<`scene.living_room_wall_lights_tropical_twilight`>;
  /**
   * Bedroom Lights Read
   */
  var bedroomLightsReadScene: IEntity<`scene.bedroom_lights_read`>;
  /**
   * Bedroom Lights Tropical twilight
   */
  var bedroomLightsTropicalTwilightScene: IEntity<`scene.bedroom_lights_tropical_twilight`>;
  /**
   * Bedroom Lights Energize
   */
  var bedroomLightsEnergizeScene: IEntity<`scene.bedroom_lights_energize`>;
  /**
   * Living Room Lights Nightlight
   */
  var livingRoomNightlightScene: IEntity<`scene.living_room_nightlight`>;
  /**
   * Bedroom Lights Relax
   */
  var bedroomLightsRelaxScene: IEntity<`scene.bedroom_lights_relax`>;
  /**
   * Kitchen Spotlights Dimmed
   */
  var kitchenSpotlightsDimmedScene: IEntity<`scene.kitchen_spotlights_dimmed`>;
  /**
   * Floor Lamps Nightlight
   */
  var floorLampsNightlightScene: IEntity<`scene.floor_lamps_nightlight`>;
  /**
   * restore_after_tv_mode
   */
  var restoreAfterTvModeScene: IEntity<`scene.restore_after_tv_mode`>;
}

globalThis.bedroomLightsOffScene = entity(
  'scene.bedroom_lights_off',
  'Bedroom Lights Off',
);
globalThis.tvLightsScene = entity('scene.tv_lights', 'TV Mode');
globalThis.newSceneScene = entity('scene.new_scene', 'New Scene');
globalThis.kitchenSpotlightsNightlightScene = entity(
  'scene.kitchen_spotlights_nightlight',
  'Kitchen Spotlights Nightlight',
);
globalThis.livingRoomSavannaSunsetScene = entity(
  'scene.living_room_savanna_sunset',
  'Living Room Lights Savanna sunset',
);
globalThis.livingRoomWallLightsNightlightScene = entity(
  'scene.living_room_wall_lights_nightlight',
  'Living Room Wall Lights Nightlight',
);
globalThis.bedroomLightsSavannaSunsetScene = entity(
  'scene.bedroom_lights_savanna_sunset',
  'Bedroom Lights Savanna sunset',
);
globalThis.kitchenSpotlightsBrightScene = entity(
  'scene.kitchen_spotlights_bright',
  'Kitchen Spotlights Bright',
);
globalThis.livingRoomColoredLightsTropicalTwilightScene = entity(
  'scene.living_room_colored_lights_tropical_twilight',
  'Living room colored lights Tropical twilight',
);
globalThis.kitchenSpotlightsTropicalTwilightScene = entity(
  'scene.kitchen_spotlights_tropical_twilight',
  'Kitchen Spotlights Tropical twilight',
);
globalThis.bedroomLightsConcentrateScene = entity(
  'scene.bedroom_lights_concentrate',
  'Bedroom Lights Concentrate',
);
globalThis.livingRoomWallLightsSpringBlossomScene = entity(
  'scene.living_room_wall_lights_spring_blossom',
  'Living Room Wall Lights Spring blossom',
);
globalThis.floorLampsDimmedScene = entity(
  'scene.floor_lamps_dimmed',
  'Floor Lamps Dimmed',
);
globalThis.livingRoomColoredLightsConcentrateScene = entity(
  'scene.living_room_colored_lights_concentrate',
  'Living room colored lights Concentrate',
);
globalThis.bedroomLightsNightlightScene = entity(
  'scene.bedroom_lights_nightlight',
  'Bedroom Lights Nightlight',
);
globalThis.livingRoomColoredLightsDimmedScene = entity(
  'scene.living_room_colored_lights_dimmed',
  'Living room colored lights Dimmed',
);
globalThis.livingRoomWallLightsEnergizeScene = entity(
  'scene.living_room_wall_lights_energize',
  'Living Room Wall Lights Energize',
);
globalThis.livingRoomColoredLightsNightlightScene = entity(
  'scene.living_room_colored_lights_nightlight',
  'Living room colored lights Nightlight',
);
globalThis.livingRoomColoredLightsEnergizeScene = entity(
  'scene.living_room_colored_lights_energize',
  'Living room colored lights Energize',
);
globalThis.livingRoomColoredLightsSavannaSunsetScene = entity(
  'scene.living_room_colored_lights_savanna_sunset',
  'Living room colored lights Savanna sunset',
);
globalThis.kitchenSpotlightsReadScene = entity(
  'scene.kitchen_spotlights_read',
  'Kitchen Spotlights Read',
);
globalThis.livingRoomColoredLightsArcticAuroraScene = entity(
  'scene.living_room_colored_lights_arctic_aurora',
  'Living room colored lights Arctic aurora',
);
globalThis.kitchenSpotlightsConcentrateScene = entity(
  'scene.kitchen_spotlights_concentrate',
  'Kitchen Spotlights Concentrate',
);
globalThis.kitchenSpotlightsRelaxScene = entity(
  'scene.kitchen_spotlights_relax',
  'Kitchen Spotlights Relax',
);
globalThis.livingRoomColoredLightsRelaxScene = entity(
  'scene.living_room_colored_lights_relax',
  'Living room colored lights Relax',
);
globalThis.kitchenSpotlightsArcticAuroraScene = entity(
  'scene.kitchen_spotlights_arctic_aurora',
  'Kitchen Spotlights Arctic aurora',
);
globalThis.livingRoomWallLightsSavannaSunsetScene = entity(
  'scene.living_room_wall_lights_savanna_sunset',
  'Living Room Wall Lights Savanna sunset',
);
globalThis.livingRoomMountainBreezeScene = entity(
  'scene.living_room_mountain_breeze',
  'Living Room Lights Mountain Breeze',
);
globalThis.livingRoomBrightScene = entity(
  'scene.living_room_bright',
  'Living Room Lights Bright',
);
globalThis.livingRoomColoredLightsBrightScene = entity(
  'scene.living_room_colored_lights_bright',
  'Living room colored lights Bright',
);
globalThis.livingRoomWallLightsArcticAuroraScene = entity(
  'scene.living_room_wall_lights_arctic_aurora',
  'Living Room Wall Lights Arctic aurora',
);
globalThis.bedroomLightsBrightScene = entity(
  'scene.bedroom_lights_bright',
  'Bedroom Lights Bright',
);
globalThis.livingRoomWallLightsReadScene = entity(
  'scene.living_room_wall_lights_read',
  'Living Room Wall Lights Read',
);
globalThis.livingRoomDimmedScene = entity(
  'scene.living_room_dimmed',
  'Living Room Lights Dimmed',
);
globalThis.bedroomLightsSpringBlossomScene = entity(
  'scene.bedroom_lights_spring_blossom',
  'Bedroom Lights Spring blossom',
);
globalThis.livingRoomWallLightsBrightScene = entity(
  'scene.living_room_wall_lights_bright',
  'Living Room Wall Lights Bright',
);
globalThis.bedroomLightsDimmedScene = entity(
  'scene.bedroom_lights_dimmed',
  'Bedroom Lights Dimmed',
);
globalThis.kitchenSpotlightsSpringBlossomScene = entity(
  'scene.kitchen_spotlights_spring_blossom',
  'Kitchen Spotlights Spring blossom',
);
globalThis.livingRoomWallLightsConcentrateScene = entity(
  'scene.living_room_wall_lights_concentrate',
  'Living Room Wall Lights Concentrate',
);
globalThis.bedroomLightsArcticAuroraScene = entity(
  'scene.bedroom_lights_arctic_aurora',
  'Bedroom Lights Arctic aurora',
);
globalThis.livingRoomWallLightsDimmedScene = entity(
  'scene.living_room_wall_lights_dimmed',
  'Living Room Wall Lights Dimmed',
);
globalThis.livingRoomColoredLightsReadScene = entity(
  'scene.living_room_colored_lights_read',
  'Living room colored lights Read',
);
globalThis.floorLampsBrightScene = entity(
  'scene.floor_lamps_bright',
  'Floor Lamps Bright',
);
globalThis.livingRoomColoredLightsSpringBlossomScene = entity(
  'scene.living_room_colored_lights_spring_blossom',
  'Living room colored lights Spring blossom',
);
globalThis.kitchenSpotlightsEnergizeScene = entity(
  'scene.kitchen_spotlights_energize',
  'Kitchen Spotlights Energize',
);
globalThis.kitchenSpotlightsSavannaSunsetScene = entity(
  'scene.kitchen_spotlights_savanna_sunset',
  'Kitchen Spotlights Savanna sunset',
);
globalThis.livingRoomWallLightsRelaxScene = entity(
  'scene.living_room_wall_lights_relax',
  'Living Room Wall Lights Relax',
);
globalThis.livingRoomWallLightsTropicalTwilightScene = entity(
  'scene.living_room_wall_lights_tropical_twilight',
  'Living Room Wall Lights Tropical twilight',
);
globalThis.bedroomLightsReadScene = entity(
  'scene.bedroom_lights_read',
  'Bedroom Lights Read',
);
globalThis.bedroomLightsTropicalTwilightScene = entity(
  'scene.bedroom_lights_tropical_twilight',
  'Bedroom Lights Tropical twilight',
);
globalThis.bedroomLightsEnergizeScene = entity(
  'scene.bedroom_lights_energize',
  'Bedroom Lights Energize',
);
globalThis.livingRoomNightlightScene = entity(
  'scene.living_room_nightlight',
  'Living Room Lights Nightlight',
);
globalThis.bedroomLightsRelaxScene = entity(
  'scene.bedroom_lights_relax',
  'Bedroom Lights Relax',
);
globalThis.kitchenSpotlightsDimmedScene = entity(
  'scene.kitchen_spotlights_dimmed',
  'Kitchen Spotlights Dimmed',
);
globalThis.floorLampsNightlightScene = entity(
  'scene.floor_lamps_nightlight',
  'Floor Lamps Nightlight',
);
globalThis.restoreAfterTvModeScene = entity(
  'scene.restore_after_tv_mode',
  'restore_after_tv_mode',
);
