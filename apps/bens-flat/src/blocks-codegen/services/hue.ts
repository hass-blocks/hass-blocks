import {
  serviceCall,
  type Block,
  type IEntity,
  type IArea,
  type ServiceCallArgs,
} from '@hass-blocks/core';

declare global {
  interface ActivateSceneHue {
    /**
     * Transition duration it takes to bring devices to the state defined in the scene.
     */
    transition?: number;
    /**
     * Enable dynamic mode of the scene.
     */
    dynamic?: boolean;
    /**
     * Speed of dynamic palette for this scene.
     */
    speed?: number;
    /**
     * Set brightness for the scene.
     */
    brightness?: number;
  }

  /**
   * Activates a Hue scene with more control over the options.
   */
  var activateSceneHue: (
    target: IEntity<`scene.${string}`> | IArea<string>,
    params?: ActivateSceneHue,
  ) => Block<Partial<ServiceCallArgs<ActivateSceneHue>> | undefined, void>;

  interface HueActivateScene {
    /**
     * Name of Hue group/room from the Hue app.
     */
    group_name?: string;
    /**
     * Name of Hue scene from the Hue app.
     */
    scene_name?: string;
    /**
     * Enable dynamic mode of the scene (V2 bridges and supported scenes only).
     */
    dynamic?: boolean;
  }

  /**
   * Activates a Hue scene stored in the Hue hub.
   */
  var hueActivateScene: (
    params?: HueActivateScene,
  ) => Block<Partial<ServiceCallArgs<HueActivateScene>> | undefined, void>;
}

globalThis.activateSceneHue = (target, params) =>
  serviceCall({
    name: `Call hue.activate_scene`,
    params: {
      domain: 'hue',
      service: 'activate_scene',
      service_data: params,
    },
    target,
  });

globalThis.hueActivateScene = (params) =>
  serviceCall({
    name: `Call hue.hue_activate_scene`,
    params: {
      domain: 'hue',
      service: 'hue_activate_scene',
      service_data: params,
    },
  });
