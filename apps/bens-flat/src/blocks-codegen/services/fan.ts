import {
  serviceCall,
  type Block,
  type IEntity,
  type IArea,
  type ServiceCallArgs,
} from '@hass-blocks/core';

declare global {
  interface TurnOnFanProps {
    /**
     * Speed of the fan.
     */
    percentage?: number;
    /**
     * Preset fan mode.
     */
    preset_mode?: string;
  }

  /**
   * Turns fan on.
   */
  var turnOnFan: (
    target: IEntity<`fan.${string}`> | IArea,
    params?: TurnOnFanProps,
  ) => Block<Partial<ServiceCallArgs<unknown>> | undefined, void>;

  /**
   * Turns fan off.
   */
  var turnOffFan: (
    target: IEntity<`fan.${string}`> | IArea,
  ) => Block<Partial<ServiceCallArgs<unknown>> | undefined, void>;

  /**
   * Toggles a fan on/off.
   */
  var toggleFan: (
    target: IEntity<`fan.${string}`> | IArea,
  ) => Block<Partial<ServiceCallArgs<unknown>> | undefined, void>;

  interface IncreaseSpeedFanProps {
    /**
     * Percentage step by which the speed should be increased.
     */
    percentage_step?: number;
  }

  /**
   * Increases the speed of a fan.
   */
  var increaseSpeedFan: (
    target: IEntity<`fan.${string}`> | IArea,
    params?: IncreaseSpeedFanProps,
  ) => Block<Partial<ServiceCallArgs<unknown>> | undefined, void>;

  interface DecreaseSpeedFanProps {
    /**
     * Percentage step by which the speed should be decreased.
     */
    percentage_step?: number;
  }

  /**
   * Decreases the speed of a fan.
   */
  var decreaseSpeedFan: (
    target: IEntity<`fan.${string}`> | IArea,
    params?: DecreaseSpeedFanProps,
  ) => Block<Partial<ServiceCallArgs<unknown>> | undefined, void>;

  interface OscillateFanProps {
    /**
     * Turns oscillation on/off.
     */
    oscillating: boolean;
  }

  /**
   * Controls the oscillation of a fan.
   */
  var oscillateFan: (
    target: IEntity<`fan.${string}`> | IArea,
    params: OscillateFanProps,
  ) => Block<Partial<ServiceCallArgs<unknown>> | undefined, void>;

  interface SetDirectionFanProps {
    /**
     * Direction of the fan rotation.
     */
    direction: never;
  }

  /**
   * Sets a fan's rotation direction.
   */
  var setDirectionFan: (
    target: IEntity<`fan.${string}`> | IArea,
    params: SetDirectionFanProps,
  ) => Block<Partial<ServiceCallArgs<unknown>> | undefined, void>;

  interface SetPercentageFanProps {
    /**
     * Speed of the fan.
     */
    percentage: number;
  }

  /**
   * Sets the speed of a fan.
   */
  var setPercentageFan: (
    target: IEntity<`fan.${string}`> | IArea,
    params: SetPercentageFanProps,
  ) => Block<Partial<ServiceCallArgs<unknown>> | undefined, void>;

  interface SetPresetModeFanProps {
    /**
     * Preset fan mode.
     */
    preset_mode: string;
  }

  /**
   * Sets preset fan mode.
   */
  var setPresetModeFan: (
    target: IEntity<`fan.${string}`> | IArea,
    params: SetPresetModeFanProps,
  ) => Block<Partial<ServiceCallArgs<unknown>> | undefined, void>;
}

globalThis.turnOnFan = (target, params) =>
  serviceCall({
    name: `Call fan.turn_on`,
    params: {
      domain: 'fan',
      service: 'turn_on',
      service_data: params,
    },
    target,
  });

globalThis.turnOffFan = (target) =>
  serviceCall({
    name: `Call fan.turn_off`,
    params: {
      domain: 'fan',
      service: 'turn_off',
    },
    target,
  });

globalThis.toggleFan = (target) =>
  serviceCall({
    name: `Call fan.toggle`,
    params: {
      domain: 'fan',
      service: 'toggle',
    },
    target,
  });

globalThis.increaseSpeedFan = (target, params) =>
  serviceCall({
    name: `Call fan.increase_speed`,
    params: {
      domain: 'fan',
      service: 'increase_speed',
      service_data: params,
    },
    target,
  });

globalThis.decreaseSpeedFan = (target, params) =>
  serviceCall({
    name: `Call fan.decrease_speed`,
    params: {
      domain: 'fan',
      service: 'decrease_speed',
      service_data: params,
    },
    target,
  });

globalThis.oscillateFan = (target, params) =>
  serviceCall({
    name: `Call fan.oscillate`,
    params: {
      domain: 'fan',
      service: 'oscillate',
      service_data: params,
    },
    target,
  });

globalThis.setDirectionFan = (target, params) =>
  serviceCall({
    name: `Call fan.set_direction`,
    params: {
      domain: 'fan',
      service: 'set_direction',
      service_data: params,
    },
    target,
  });

globalThis.setPercentageFan = (target, params) =>
  serviceCall({
    name: `Call fan.set_percentage`,
    params: {
      domain: 'fan',
      service: 'set_percentage',
      service_data: params,
    },
    target,
  });

globalThis.setPresetModeFan = (target, params) =>
  serviceCall({
    name: `Call fan.set_preset_mode`,
    params: {
      domain: 'fan',
      service: 'set_preset_mode',
      service_data: params,
    },
    target,
  });
