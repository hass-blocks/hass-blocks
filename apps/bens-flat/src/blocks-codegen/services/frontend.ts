import { serviceCall, Block } from '@hass-blocks/core';
declare global {
  /**
   * Sets the default theme Home Assistant uses. Can be overridden by a user.
   */
  var setThemeFrontend: (params: SetThemeFrontendProps) => Block;
  /**
   * Reloads themes from the YAML-configuration.
   */
  var reloadThemesFrontend: () => Block;
}

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

globalThis.setThemeFrontend = (params) =>
  serviceCall({
    name: `Call frontend.set_theme`,
    params: {
      domain: 'frontend',
      service: 'set_theme',
      service_data: params,
    },
  });

globalThis.reloadThemesFrontend = () =>
  serviceCall({
    name: `Call frontend.reload_themes`,
    params: {
      domain: 'frontend',
      service: 'reload_themes',
    },
  });
