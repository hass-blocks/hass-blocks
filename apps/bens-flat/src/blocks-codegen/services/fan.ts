import { Block, serviceCall, ITarget } from '@hass-blocks/core';
declare global {
  /**
   * Turns fan on.
   */
  var turnOnFan: (target: ITarget, params?: TurnOnFanProps) => Block;
  /**
   * Turns fan off.
   */
  var turnOffFan: (target: ITarget, params?: TurnOffFanProps) => Block;
  /**
   * Toggles a fan on/off.
   */
  var toggleFan: (target: ITarget, params?: ToggleFanProps) => Block;
  /**
   * Increases the speed of a fan.
   */
  var increaseSpeedFan: (
    target: ITarget,
    params?: IncreaseSpeedFanProps,
  ) => Block;
  /**
   * Decreases the speed of a fan.
   */
  var decreaseSpeedFan: (
    target: ITarget,
    params?: DecreaseSpeedFanProps,
  ) => Block;
  /**
   * Controls the oscillation of a fan.
   */
  var oscillateFan: (target: ITarget, params: OscillateFanProps) => Block;
  /**
   * Sets a fan's rotation direction.
   */
  var setDirectionFan: (target: ITarget, params: SetDirectionFanProps) => Block;
  /**
   * Sets the speed of a fan.
   */
  var setPercentageFan: (
    target: ITarget,
    params: SetPercentageFanProps,
  ) => Block;
  /**
   * Sets preset fan mode.
   */
  var setPresetModeFan: (
    target: ITarget,
    params: SetPresetModeFanProps,
  ) => Block;
}

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

globalThis.turnOnFan = (target: ITarget, params?: TurnOnFanProps) =>
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

globalThis.turnOffFan = (target: ITarget, params?: TurnOffFanProps) =>
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

globalThis.toggleFan = (target: ITarget, params?: ToggleFanProps) =>
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

globalThis.increaseSpeedFan = (
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

globalThis.decreaseSpeedFan = (
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

globalThis.oscillateFan = (target: ITarget, params: OscillateFanProps) =>
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

globalThis.setDirectionFan = (target: ITarget, params: SetDirectionFanProps) =>
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

globalThis.setPercentageFan = (
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

globalThis.setPresetModeFan = (
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
