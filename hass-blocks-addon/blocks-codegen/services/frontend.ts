import { serviceCall, type Block } from '@hass-blocks/core';

declare global {
  interface SetThemeFrontend {
    /**
     * Name of a theme
     */
    name: never;
    /**
     * Theme mode
     */
    mode?: never;
  }

  /**
   * Sets the default theme Home Assistant uses. Can be overridden by a user
   */
  var setThemeFrontend: (
    params: SetThemeFrontend,
  ) => Block<Partial<SetThemeFrontend> | undefined, void>;

  /**
   * Reloads themes from the YAML-configuration
   */
  var reloadThemesFrontend: () => Block<Partial<unknown> | undefined, void>;
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
