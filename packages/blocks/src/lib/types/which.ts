/**
 * @public
 *
 * The target of a service call within Home Assistant
 */
export interface Which {
  /**
   * Entity id or list of entity ids
   */
  entity_id?: string | string[];

  /**
   * Area id or list of area ids- will normally apply the action to all associated
   * entities within that area
   */
  area_id?: string | string[];

  /**
   * Device id or list of device ids
   */
  device_id?: string | string[];
}
