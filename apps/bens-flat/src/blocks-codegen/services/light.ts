import {
  serviceCall,
  type Block,
  type IEntity,
  type IArea,
  type ServiceCallArgs,
} from '@hass-blocks/core';

declare global {
  interface TurnOnLightProps {
    /**
     * Duration it takes to get to next state.
     */
    transition?: number;
    /**
     * The color in RGB format. A list of three integers between 0 and 255 representing the values of red, green, and blue.
     */
    rgb_color?: never;
    /**
     * Color temperature in Kelvin.
     */
    color_temp_kelvin?: never;
    /**
     * Number indicating the percentage of full brightness, where 0 turns the light off, 1 is the minimum brightness, and 100 is the maximum brightness.
     */
    brightness_pct?: number;
    /**
     * Change brightness by a percentage.
     */
    brightness_step_pct?: number;
    /**
     * Light effect.
     */
    effect?: string;
    advanced_fields?: never;
  }

  /**
   * Turns on one or more lights and adjusts their properties, even when they are turned on already.
   */
  var turnOnLight: (
    target: IEntity<`light.${string}`> | IArea,
    params?: TurnOnLightProps,
  ) => Block<Partial<ServiceCallArgs<TurnOnLightProps>> | undefined, void>;

  interface TurnOffLightProps {
    /**
     * Duration it takes to get to next state.
     */
    transition?: number;
    advanced_fields?: never;
  }

  /**
   * Turns off one or more lights.
   */
  var turnOffLight: (
    target: IEntity<`light.${string}`> | IArea,
    params?: TurnOffLightProps,
  ) => Block<Partial<ServiceCallArgs<TurnOffLightProps>> | undefined, void>;

  interface ToggleLightProps {
    /**
     * Duration it takes to get to next state.
     */
    transition?: number;
    /**
     * The color in RGB format. A list of three integers between 0 and 255 representing the values of red, green, and blue.
     */
    rgb_color?: never;
    /**
     * Color temperature in Kelvin.
     */
    color_temp_kelvin?: never;
    /**
     * Number indicating the percentage of full brightness, where 0 turns the light off, 1 is the minimum brightness, and 100 is the maximum brightness.
     */
    brightness_pct?: number;
    /**
     * Light effect.
     */
    effect?: string;
    advanced_fields?: never;
  }

  /**
   * Toggles one or more lights, from on to off, or off to on, based on their current state.
   */
  var toggleLight: (
    target: IEntity<`light.${string}`> | IArea,
    params?: ToggleLightProps,
  ) => Block<Partial<ServiceCallArgs<ToggleLightProps>> | undefined, void>;
}

globalThis.turnOnLight = (target, params) =>
  serviceCall({
    name: `Call light.turn_on`,
    params: {
      domain: 'light',
      service: 'turn_on',
      service_data: params,
    },
    target,
  });

globalThis.turnOffLight = (target, params) =>
  serviceCall({
    name: `Call light.turn_off`,
    params: {
      domain: 'light',
      service: 'turn_off',
      service_data: params,
    },
    target,
  });

globalThis.toggleLight = (target, params) =>
  serviceCall({
    name: `Call light.toggle`,
    params: {
      domain: 'light',
      service: 'toggle',
      service_data: params,
    },
    target,
  });
