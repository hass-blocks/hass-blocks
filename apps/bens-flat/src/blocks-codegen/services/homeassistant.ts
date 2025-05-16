import {
  serviceCall,
  type Block,
  type IEntity,
  type IArea,
} from '@hass-blocks/core';

declare global {
  /**
   * Saves the persistent states immediately. Maintains the normal periodic saving interval.
   */
  var savePersistentStatesHomeassistant: () => Block;

  /**
   * Generic action to turn devices off under any domain.
   */
  var turnOffHomeassistant: (target: IEntity | IArea) => Block;

  /**
   * Generic action to turn devices on under any domain.
   */
  var turnOnHomeassistant: (target: IEntity | IArea) => Block;

  /**
   * Generic action to toggle devices on/off under any domain.
   */
  var toggleHomeassistant: (target: IEntity | IArea) => Block;

  /**
   * Stops Home Assistant.
   */
  var stopHomeassistant: () => Block;

  /**
   * Restarts Home Assistant.
   */
  var restartHomeassistant: () => Block;

  /**
   * Checks the Home Assistant YAML-configuration files for errors. Errors will be shown in the Home Assistant logs.
   */
  var checkConfigHomeassistant: () => Block;

  interface UpdateEntityHomeassistantProps {
    /**
     * List of entities to force update.
     */
    entity_id: string;
  }

  /**
   * Forces one or more entities to update their data.
   */
  var updateEntityHomeassistant: (
    params: UpdateEntityHomeassistantProps,
  ) => Block;

  /**
   * Reloads the Core configuration from the YAML-configuration.
   */
  var reloadCoreConfigHomeassistant: () => Block;

  interface SetLocationHomeassistantProps {
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
  var setLocationHomeassistant: (
    params: SetLocationHomeassistantProps,
  ) => Block;

  /**
   * Reloads Jinja2 templates found in the `custom_templates` folder in your config. New values will be applied on the next render of the template.
   */
  var reloadCustomTemplatesHomeassistant: () => Block;

  interface ReloadConfigEntryHomeassistantProps {
    /**
     * The configuration entry ID of the entry to be reloaded.
     */
    entry_id?: never;
  }

  /**
   * Reloads the specified config entry.
   */
  var reloadConfigEntryHomeassistant: (
    target: IEntity | IArea,
    params?: ReloadConfigEntryHomeassistantProps,
  ) => Block;

  /**
   * Reloads all YAML configuration that can be reloaded without restarting Home Assistant.
   */
  var reloadAllHomeassistant: () => Block;
}

globalThis.savePersistentStatesHomeassistant = () =>
  serviceCall({
    name: `Call homeassistant.save_persistent_states`,
    params: {
      domain: 'homeassistant',
      service: 'save_persistent_states',
    },
  });

globalThis.turnOffHomeassistant = (target) =>
  serviceCall({
    name: `Call homeassistant.turn_off`,
    params: {
      domain: 'homeassistant',
      service: 'turn_off',
    },
    target,
  });

globalThis.turnOnHomeassistant = (target) =>
  serviceCall({
    name: `Call homeassistant.turn_on`,
    params: {
      domain: 'homeassistant',
      service: 'turn_on',
    },
    target,
  });

globalThis.toggleHomeassistant = (target) =>
  serviceCall({
    name: `Call homeassistant.toggle`,
    params: {
      domain: 'homeassistant',
      service: 'toggle',
    },
    target,
  });

globalThis.stopHomeassistant = () =>
  serviceCall({
    name: `Call homeassistant.stop`,
    params: {
      domain: 'homeassistant',
      service: 'stop',
    },
  });

globalThis.restartHomeassistant = () =>
  serviceCall({
    name: `Call homeassistant.restart`,
    params: {
      domain: 'homeassistant',
      service: 'restart',
    },
  });

globalThis.checkConfigHomeassistant = () =>
  serviceCall({
    name: `Call homeassistant.check_config`,
    params: {
      domain: 'homeassistant',
      service: 'check_config',
    },
  });

globalThis.updateEntityHomeassistant = (params) =>
  serviceCall({
    name: `Call homeassistant.update_entity`,
    params: {
      domain: 'homeassistant',
      service: 'update_entity',
      service_data: params,
    },
  });

globalThis.reloadCoreConfigHomeassistant = () =>
  serviceCall({
    name: `Call homeassistant.reload_core_config`,
    params: {
      domain: 'homeassistant',
      service: 'reload_core_config',
    },
  });

globalThis.setLocationHomeassistant = (params) =>
  serviceCall({
    name: `Call homeassistant.set_location`,
    params: {
      domain: 'homeassistant',
      service: 'set_location',
      service_data: params,
    },
  });

globalThis.reloadCustomTemplatesHomeassistant = () =>
  serviceCall({
    name: `Call homeassistant.reload_custom_templates`,
    params: {
      domain: 'homeassistant',
      service: 'reload_custom_templates',
    },
  });

globalThis.reloadConfigEntryHomeassistant = (target, params) =>
  serviceCall({
    name: `Call homeassistant.reload_config_entry`,
    params: {
      domain: 'homeassistant',
      service: 'reload_config_entry',
      service_data: params,
    },
    target,
  });

globalThis.reloadAllHomeassistant = () =>
  serviceCall({
    name: `Call homeassistant.reload_all`,
    params: {
      domain: 'homeassistant',
      service: 'reload_all',
    },
  });
