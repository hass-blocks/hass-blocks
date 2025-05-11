import { serviceCall } from '@hass-blocks/core';

export interface SetThemeFrontendProps {
  /**
   * Name of a theme.
   */
  name: never;
  /**
   * Theme mode.
   */
  mode?: never;
}

/**
 * Sets the default theme Home Assistant uses. Can be overridden by a user.
 */
export const setThemeFrontend = (params: SetThemeFrontendProps) =>
  serviceCall({
    name: `Call frontend.set_theme`,
    params: {
      domain: 'frontend',
      service: 'set_theme',
      service_data: params,
    },
  });

/**
 * Reloads themes from the YAML-configuration.
 */
export const reloadThemesFrontend = () =>
  serviceCall({
    name: `Call frontend.reload_themes`,
    params: {
      domain: 'frontend',
      service: 'reload_themes',
    },
  });
