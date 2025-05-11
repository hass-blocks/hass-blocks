import { serviceCall, ITarget } from '@hass-blocks/core';

/**
 * Saves the persistent states immediately. Maintains the normal periodic saving interval.
 */
export const savePersistentStatesHomeassistant = (target: ITarget) =>
  serviceCall({
    name: `Call homeassistant.save_persistent_states`,
    params: {
      domain: 'homeassistant',
      service: 'save_persistent_states',
    },
  });

export interface TurnOffHomeassistantProps {}

/**
 * Generic action to turn devices off under any domain.
 */
export const turnOffHomeassistant = (
  target: ITarget,
  params?: TurnOffHomeassistantProps,
) =>
  serviceCall({
    name: `Call homeassistant.turn_off`,
    params: {
      domain: 'homeassistant',
      service: 'turn_off',
      service_data: params,
    },
    target,
  });

export interface TurnOnHomeassistantProps {}

/**
 * Generic action to turn devices on under any domain.
 */
export const turnOnHomeassistant = (
  target: ITarget,
  params?: TurnOnHomeassistantProps,
) =>
  serviceCall({
    name: `Call homeassistant.turn_on`,
    params: {
      domain: 'homeassistant',
      service: 'turn_on',
      service_data: params,
    },
    target,
  });

export interface ToggleHomeassistantProps {}

/**
 * Generic action to toggle devices on/off under any domain.
 */
export const toggleHomeassistant = (
  target: ITarget,
  params?: ToggleHomeassistantProps,
) =>
  serviceCall({
    name: `Call homeassistant.toggle`,
    params: {
      domain: 'homeassistant',
      service: 'toggle',
      service_data: params,
    },
    target,
  });

/**
 * Stops Home Assistant.
 */
export const stopHomeassistant = (target: ITarget) =>
  serviceCall({
    name: `Call homeassistant.stop`,
    params: {
      domain: 'homeassistant',
      service: 'stop',
    },
  });

/**
 * Restarts Home Assistant.
 */
export const restartHomeassistant = (target: ITarget) =>
  serviceCall({
    name: `Call homeassistant.restart`,
    params: {
      domain: 'homeassistant',
      service: 'restart',
    },
  });

/**
 * Checks the Home Assistant YAML-configuration files for errors. Errors will be shown in the Home Assistant logs.
 */
export const checkConfigHomeassistant = (target: ITarget) =>
  serviceCall({
    name: `Call homeassistant.check_config`,
    params: {
      domain: 'homeassistant',
      service: 'check_config',
    },
  });

export interface UpdateEntityHomeassistantProps {
  /**
   * List of entities to force update.
   */
  entity_id: string;
}

/**
 * Forces one or more entities to update their data.
 */
export const updateEntityHomeassistant = (
  target: ITarget,
  params: UpdateEntityHomeassistantProps,
) =>
  serviceCall({
    name: `Call homeassistant.update_entity`,
    params: {
      domain: 'homeassistant',
      service: 'update_entity',
      service_data: params,
    },
  });

/**
 * Reloads the Core configuration from the YAML-configuration.
 */
export const reloadCoreConfigHomeassistant = (target: ITarget) =>
  serviceCall({
    name: `Call homeassistant.reload_core_config`,
    params: {
      domain: 'homeassistant',
      service: 'reload_core_config',
    },
  });

export interface SetLocationHomeassistantProps {
  /**
   * Latitude of your location.
   */
  latitude: number;
  /**
   * Longitude of your location.
   */
  longitude: number;
  /**
   * Elevation of your location above sea level.
   */
  elevation?: number;
}

/**
 * Updates the Home Assistant location.
 */
export const setLocationHomeassistant = (
  target: ITarget,
  params: SetLocationHomeassistantProps,
) =>
  serviceCall({
    name: `Call homeassistant.set_location`,
    params: {
      domain: 'homeassistant',
      service: 'set_location',
      service_data: params,
    },
  });

/**
 * Reloads Jinja2 templates found in the `custom_templates` folder in your config. New values will be applied on the next render of the template.
 */
export const reloadCustomTemplatesHomeassistant = (target: ITarget) =>
  serviceCall({
    name: `Call homeassistant.reload_custom_templates`,
    params: {
      domain: 'homeassistant',
      service: 'reload_custom_templates',
    },
  });

export interface ReloadConfigEntryHomeassistantProps {
  /**
   * The configuration entry ID of the entry to be reloaded.
   */
  entry_id?: never;
}

/**
 * Reloads the specified config entry.
 */
export const reloadConfigEntryHomeassistant = (
  target: ITarget,
  params?: ReloadConfigEntryHomeassistantProps,
) =>
  serviceCall({
    name: `Call homeassistant.reload_config_entry`,
    params: {
      domain: 'homeassistant',
      service: 'reload_config_entry',
      service_data: params,
    },
    target,
  });

/**
 * Reloads all YAML configuration that can be reloaded without restarting Home Assistant.
 */
export const reloadAllHomeassistant = (target: ITarget) =>
  serviceCall({
    name: `Call homeassistant.reload_all`,
    params: {
      domain: 'homeassistant',
      service: 'reload_all',
    },
  });
