/**
 * @public
 *
 * An entity record returned from the Home Assistant entity registry. See {@link https://developers.home-assistant.io/docs/entity_registry_index} for more info
 */
export interface HassEntity {
  /**
   * if this entity has been assigned to an area, this field contains its unique identifier
   */
  area_id: string | null;

  /**
   * A map of category metadata for the entity
   */
  categories: Record<string, unknown>;

  config_entry_id: string | null;
  /**
   * A unix timstamp recording when the entry was first created in Home Assistant
   */
  created_at: number;

  /**
   * The id of the device that this entity is associated with
   */
  device_id: string | null;

  /**
   * Indicates whether the entity is disabled and why. If this property is not null, Home Assistant will
   * not load this entity into the state machine
   */
  disabled_by: string | null;

  /**
   * Classification of a non-primary entity. Set to EntityCategory.CONFIG for an entity that allows
   * changing the configuration of a device, for example, a switch entity, making it possible to turn
   * the background illumination of a switch on and off. Set to EntityCategory.DIAGNOSTIC for an entity
   * exposing some configuration parameter or diagnostics of a device but does not allow changing it,
   * or example, a sensor showing RSSI or MAC address.
   */
  entity_category: 'config' | 'diagnostic' | null;

  /**
   * Return True if the entity's name property represents the entity itself (required for new integrations).
   * See {@link https://developers.home-assistant.io/docs/core/entity/#has_entity_name-true-mandatory-for-new-integrations}
   */
  has_entity_name: boolean;

  /**
   * Whether the entity is hidden (for UIs like voice assistants) and who hid it.
   * When not null, the frontend can omit it from user‐facing lists
   */
  hidden_by: string | null;

  /**
   * Icon to use in the frontend. Using this property is not recommended. {@link https://developers.home-assistant.io/docs/core/entity/#icons | More information about using icons}
   */
  icon: string | null;

  /**
   * Labels that are associated with this entity
   */
  labels: string[];

  /**
   * Timestamp representing the last time this entity was modified
   */
  modified_at: number;

  /**
   * Name of the entity
   */
  name: string | null;

  /**
   * Custom options provide by a specific integration. Provided by the integration at startup
   */
  options: Record<string, Record<string, unknown>>;

  /**
   * The name originally provided by the integration before any user override.
   * Useful if the user wants to “reset” back to the integration’s default.
   */
  original_name: string | null;

  /*
   * The integration (domain) that created this entity, e.g. "hue", "mqtt", "zwave_js".
   * This is how HA knows which code path "owns" the entity.
   */
  platform: string;

  /**
   * A key for looking up translations of the entity's state in entity section of the integration's
   * strings.json and for translating the state into a matching icon.
   */
  translation_key: string | null;

  /**
   * An entity represents a sensor, actor, or function in Home Assistant.
   * Entities are used to monitor physical properties or to control other entities.
   * An Entity ID is composed of two parts; a domain such as light or sensor and an object_id
   * which can be any slug like center_living_room_window or aqara_p1_motion.
   * Entity IDs can be altered to suit the need and preferences of the user.
   * Most users will interact with Entity IDs far more than any of the other identifiers in this list.
   */
  entity_id: string;

  /**
   * An internal identifier for the entity. Not commonly used on its own
   */
  id: string;

  /**
   * A Unique ID is used to match a config entry to the underlying device, entities, or API.
   * By necessity a Unique ID needs to be stable. Most Unique IDs are assigned by the backend and cannot be changed by the user.
   * Some manually configured entities can be assigned a Unique ID by the user.
   * There are very few circumstances where the average user would need to access the Unique ID.
   */
  unique_id: string;
}
