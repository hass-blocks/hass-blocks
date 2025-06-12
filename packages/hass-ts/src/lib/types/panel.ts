/**
 * A panel on the Home Assistant interface
 *
 * @public
 */
export interface Panel {
  /**
   * Name of the component
   */
  component_name: string;
  /**
   * Icon to display on the panel
   */
  icon: null | string;
  /**
   * Title of the panel
   */
  title: null | string;
  /**
   * Specific configuration for this panel
   */
  config: { mode: string } | null;

  /**
   * Slug to access the panel with
   */
  url_path: string;
  /**
   * Whether or not the logged in user needs to be an admin to view this panel
   */
  require_admin: boolean;

  /**
   * The domain the panel is part of
   */
  config_panel_domain: string | null;
}
