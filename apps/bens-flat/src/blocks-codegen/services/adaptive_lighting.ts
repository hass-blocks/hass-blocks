import { Block, serviceCall } from '@hass-blocks/core';
declare global {
  /**
   * Applies the current Adaptive Lighting settings to lights.
   */
  var applyAdaptiveLighting: (params?: ApplyAdaptiveLightingProps) => Block;
  /**
   * Mark whether a light is 'manually controlled'.
   */
  var setManualControlAdaptiveLighting: (
    params?: SetManualControlAdaptiveLightingProps,
  ) => Block;
  /**
   * Change any settings you'd like in the switch. All options here are the same as in the config flow.
   */
  var changeSwitchSettingsAdaptiveLighting: (
    params: ChangeSwitchSettingsAdaptiveLightingProps,
  ) => Block;
}

export interface ApplyAdaptiveLightingProps {
  /**
   * The `entity_id` of the switch with the settings to apply. 📝
   */
  entity_id?: string;
  /**
   * A light (or list of lights) to apply the settings to. 💡
   */
  lights?: string;
  /**
   * Duration of transition when lights change, in seconds. 🕑
   */
  transition?: string;
  /**
   * Whether to adapt the brightness of the light. 🌞
   */
  adapt_brightness?: boolean;
  /**
   * Whether to adapt the color on supporting lights. 🌈
   */
  adapt_color?: boolean;
  /**
   * Whether to prefer RGB color adjustment over light color temperature when possible. 🌈
   */
  prefer_rgb_color?: boolean;
  /**
   * Whether to turn on lights that are currently off. 🔆
   */
  turn_on_lights?: boolean;
}

globalThis.applyAdaptiveLighting = (params?: ApplyAdaptiveLightingProps) =>
  serviceCall({
    name: `Call adaptive_lighting.apply`,
    params: {
      domain: 'adaptive_lighting',
      service: 'apply',
      service_data: params,
    },
  });

export interface SetManualControlAdaptiveLightingProps {
  /**
   * The `entity_id` of the switch in which to (un)mark the light as being `manually controlled`. 📝
   */
  entity_id?: string;
  /**
   * entity_id(s) of lights, if not specified, all lights in the switch are selected. 💡
   */
  lights?: string;
  /**
   * Whether to add ("true") or remove ("false") the light from the "manual_control" list. 🔒
   */
  manual_control?: boolean;
}

globalThis.setManualControlAdaptiveLighting = (
  params?: SetManualControlAdaptiveLightingProps,
) =>
  serviceCall({
    name: `Call adaptive_lighting.set_manual_control`,
    params: {
      domain: 'adaptive_lighting',
      service: 'set_manual_control',
      service_data: params,
    },
  });

export interface ChangeSwitchSettingsAdaptiveLightingProps {
  /**
   * Entity ID of the switch. 📝
   */
  entity_id: string;
  /**
   * Sets the default values not specified in this service call. Options: "current" (default, retains current values), "factory" (resets to documented defaults), or "configuration" (reverts to switch config defaults). ⚙️
   */
  use_defaults?: never;
  /**
   * Show all options as attributes on the switch in Home Assistant when set to `true`. 📝
   */
  include_config_in_attributes?: boolean;
  /**
   * Whether to turn on lights that are currently off. 🔆
   */
  turn_on_lights?: boolean;
  /**
   * Duration of the first transition when lights turn from `off` to `on` in seconds. ⏲️
   */
  initial_transition?: string;
  /**
   * Duration of transition when "sleep mode" is toggled in seconds. 😴
   */
  sleep_transition?: string;
  /**
   * Maximum brightness percentage. 💡
   */
  max_brightness?: string;
  /**
   * Coldest color temperature in Kelvin. ❄️
   */
  max_color_temp?: string;
  /**
   * Minimum brightness percentage. 💡
   */
  min_brightness?: string;
  /**
   * Warmest color temperature in Kelvin. 🔥
   */
  min_color_temp?: string;
  /**
   * Adapt lights only when they are turned on (`true`) or keep adapting them (`false`). 🔄
   */
  only_once?: boolean;
  /**
   * Whether to prefer RGB color adjustment over light color temperature when possible. 🌈
   */
  prefer_rgb_color?: boolean;
  /**
   * Use separate `light.turn_on` calls for color and brightness, needed for some light types. 🔀
   */
  separate_turn_on_commands?: boolean;
  /**
   * Delay (ms) between `separate_turn_on_commands` for lights that don't support simultaneous brightness and color setting. ⏲️
   */
  send_split_delay?: boolean;
  /**
   * Brightness percentage of lights in sleep mode. 😴
   */
  sleep_brightness?: string;
  /**
   * Use either `"rgb_color"` or `"color_temp"` in sleep mode. 🌙
   */
  sleep_rgb_or_color_temp?: never;
  /**
   * RGB color in sleep mode (used when `sleep_rgb_or_color_temp` is "rgb_color"). 🌈
   */
  sleep_rgb_color?: never;
  /**
   * Color temperature in sleep mode (used when `sleep_rgb_or_color_temp` is `color_temp`) in Kelvin. 😴
   */
  sleep_color_temp?: string;
  /**
   * Adjust sunrise time with a positive or negative offset in seconds. ⏰
   */
  sunrise_offset?: number;
  /**
   * Set a fixed time (HH:MM:SS) for sunrise. 🌅
   */
  sunrise_time?: string;
  /**
   * Adjust sunset time with a positive or negative offset in seconds. ⏰
   */
  sunset_offset?: number;
  /**
   * Set a fixed time (HH:MM:SS) for sunset. 🌇
   */
  sunset_time?: string;
  /**
   * Set the latest virtual sunrise time (HH:MM:SS), allowing for earlier sunrises. 🌅
   */
  max_sunrise_time?: string;
  /**
   * Set the earliest virtual sunset time (HH:MM:SS), allowing for later sunsets. 🌇
   */
  min_sunset_time?: string;
  /**
   * Disable Adaptive Lighting if another source calls `light.turn_on` while lights are on and being adapted. Note that this calls `homeassistant.update_entity` every `interval`! 🔒
   */
  take_over_control?: boolean;
  /**
   * Detects and halts adaptations for non-`light.turn_on` state changes. Needs `take_over_control` enabled. 🕵️ Caution: ⚠️ Some lights might falsely indicate an 'on' state, which could result in lights turning on unexpectedly. Disable this feature if you encounter such issues.
   */
  detect_non_ha_changes?: boolean;
  /**
   * Duration of transition when lights change, in seconds. 🕑
   */
  transition?: string;
  /**
   * Wait time (seconds) between light turn on and Adaptive Lighting applying changes. Might help to avoid flickering. ⏲️
   */
  adapt_delay?: string;
  /**
   * Automatically reset the manual control after a number of seconds. Set to 0 to disable. ⏲️
   */
  autoreset_control_seconds?: string;
}

globalThis.changeSwitchSettingsAdaptiveLighting = (
  params: ChangeSwitchSettingsAdaptiveLightingProps,
) =>
  serviceCall({
    name: `Call adaptive_lighting.change_switch_settings`,
    params: {
      domain: 'adaptive_lighting',
      service: 'change_switch_settings',
      service_data: params,
    },
  });
