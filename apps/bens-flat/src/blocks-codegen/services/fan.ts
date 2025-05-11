import { serviceCall, ITarget } from '@hass-blocks/core';

export interface TurnOnFanProps {
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
export const turnOnFan = (target: ITarget, params?: TurnOnFanProps) =>
  serviceCall({
    name: `Call fan.turn_on`,
    params: {
      domain: 'fan',
      service: 'turn_on',
      service_data: params,
    },
    target,
  });

export interface TurnOffFanProps {}

/**
 * Turns fan off.
 */
export const turnOffFan = (target: ITarget, params?: TurnOffFanProps) =>
  serviceCall({
    name: `Call fan.turn_off`,
    params: {
      domain: 'fan',
      service: 'turn_off',
      service_data: params,
    },
    target,
  });

export interface ToggleFanProps {}

/**
 * Toggles a fan on/off.
 */
export const toggleFan = (target: ITarget, params?: ToggleFanProps) =>
  serviceCall({
    name: `Call fan.toggle`,
    params: {
      domain: 'fan',
      service: 'toggle',
      service_data: params,
    },
    target,
  });

export interface IncreaseSpeedFanProps {
  /**
   * Percentage step by which the speed should be increased.
   */
  percentage_step?: number;
}

/**
 * Increases the speed of a fan.
 */
export const increaseSpeedFan = (
  target: ITarget,
  params?: IncreaseSpeedFanProps,
) =>
  serviceCall({
    name: `Call fan.increase_speed`,
    params: {
      domain: 'fan',
      service: 'increase_speed',
      service_data: params,
    },
    target,
  });

export interface DecreaseSpeedFanProps {
  /**
   * Percentage step by which the speed should be decreased.
   */
  percentage_step?: number;
}

/**
 * Decreases the speed of a fan.
 */
export const decreaseSpeedFan = (
  target: ITarget,
  params?: DecreaseSpeedFanProps,
) =>
  serviceCall({
    name: `Call fan.decrease_speed`,
    params: {
      domain: 'fan',
      service: 'decrease_speed',
      service_data: params,
    },
    target,
  });

export interface OscillateFanProps {
  /**
   * Turns oscillation on/off.
   */
  oscillating: boolean;
}

/**
 * Controls the oscillation of a fan.
 */
export const oscillateFan = (target: ITarget, params: OscillateFanProps) =>
  serviceCall({
    name: `Call fan.oscillate`,
    params: {
      domain: 'fan',
      service: 'oscillate',
      service_data: params,
    },
    target,
  });

export interface SetDirectionFanProps {
  /**
   * Direction of the fan rotation.
   */
  direction: never;
}

/**
 * Sets a fan's rotation direction.
 */
export const setDirectionFan = (
  target: ITarget,
  params: SetDirectionFanProps,
) =>
  serviceCall({
    name: `Call fan.set_direction`,
    params: {
      domain: 'fan',
      service: 'set_direction',
      service_data: params,
    },
    target,
  });

export interface SetPercentageFanProps {
  /**
   * Speed of the fan.
   */
  percentage: number;
}

/**
 * Sets the speed of a fan.
 */
export const setPercentageFan = (
  target: ITarget,
  params: SetPercentageFanProps,
) =>
  serviceCall({
    name: `Call fan.set_percentage`,
    params: {
      domain: 'fan',
      service: 'set_percentage',
      service_data: params,
    },
    target,
  });

export interface SetPresetModeFanProps {
  /**
   * Preset fan mode.
   */
  preset_mode: string;
}

/**
 * Sets preset fan mode.
 */
export const setPresetModeFan = (
  target: ITarget,
  params: SetPresetModeFanProps,
) =>
  serviceCall({
    name: `Call fan.set_preset_mode`,
    params: {
      domain: 'fan',
      service: 'set_preset_mode',
      service_data: params,
    },
    target,
  });
