/**
 * @public
 *
 * Configuration for the core `homeassistant` integration
 */
export interface Config {
  /**
   * Latitude of your location required to calculate the time the sun rises and sets.
   */
  latitude?: number;

  /**
   * Longitude of your location required to calculate the time the sun rises and sets.
   */
  longitude?: number;
  /**
   * Altitude above sea level in meters. Impacts sunrise data.
   */
  elevation?: number;

  /**
   * Units used for different kinds of measurements
   */
  unit_system: {
    /**
     * Unit used for length
     */
    length: string;
    /**
     * Unit used for precipitation
     */
    accumulated_precipitation: string;
    /**
     * Unit used for mass
     */
    mass: string;
    /**
     * Unit used for pressure
     */
    pressure: string;
    /**
     * Unit used for temperature
     */
    temperature: string;
    /**
     * Unit used for volume
     */
    volume: string;
    /**
     * Unit ussed for wind speed
     */
    wind_speed: string;
  };
  /**
   * Name of the location assigned to your Home Assistant instance
   */
  location_name?: string;
  /**
   * Pick your time zone from the column TZ of {@link https://en.wikipedia.org/wiki/List_of_tz_database_time_zoneshttps://en.wikipedia.org/wiki/List_of_tz_database_time_zones | Wikipedia’s list of tz database time zones}
   */
  time_zone?: string;
  /**
   * Integrations that are currently loaded
   */
  components: string[];
  /**
   * Location of the currently loaded configuration directory
   */
  config_dir: string;
  /**
   * List of folders that can be used as sources for sending files.
   */
  whitelist_external_dirs?: string[];
  /**
   * List of folders that can be used as sources for sending files.
   */
  allowlist_external_dirs?: string[];
  /**
   * List of external URLs that can be fetched. URLs can match specific resources
   * (e.g., http://10.10.10.12/images/image1.jpg) or a relative path that allows access
   * to resources within it (e.g., http://10.10.10.12/images would allow access to anything under that path)
   */
  allowlist_external_urls?: string[];
  /**
   * The version of Home Assistant that is currently running
   */
  version: string;
  /**
   * Whether configuration was loaded from the UI or from YAML
   */
  config_source: string;
  /**
   * Is Home Assistant currently running in recovery mode?
   */
  recovery_mode: boolean;

  /**
   * The state of the current Home Assistant instance
   */
  state: string;
  /**
   * The URL that Home Assistant is available on from the internet.
   * For example: https://example.duckdns.org:8123. Note that this setting may only contain a protocol,
   * hostname and port; using a path is not supported.
   * This can also be configured by navigating to Settings \> System \> Network.
   */
  external_url?: string;
  /**
   * The URL that Home Assistant is available on from your local network. For example: http://192.168.0.10:8123.
   * Note that this setting may only contain a protocol, hostname and port; using a path is not supported.
   * This can also be configured by navigating to Settings \> System \> Network.
   */
  internal_url: string;
  /**
   *  Pick your currency code from the column Code of {@link https://en.wikipedia.org/wiki/ISO_4217#Active_codes | Wikipedia’s list of ISO 4217 active codes}
   */
  currency?: string;
  /**
   * Country in which Home Assistant is running. This may, for example, influence radio settings to comply with local regulations.
   * The country should be specified as an ISO 3166.1 alpha-2 code. Pick your country from the column Code of Wikipedia’s list of ISO 31661 alpha-2 officially assigned code codes
   */
  country: string;
  /**
   * Default language used by Home Assistant. This may, for example, influence the language used by voice assistants. The language should be specified as an RFC 5646 language tag, and must be a language which Home Assistant is translated to.
   */
  language: string;
  /**
   * Is Home Assistant currently running in safe mode?
   */
  safe_mode: boolean;
}
