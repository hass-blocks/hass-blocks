/**
 * @public
 *
 * The target of a service call within Home Assistant
 */
export interface Which {
  /**
   * Entity id of the service call
   */
  entity_id?: string;

  /**
   * Area id of the service call - will normally apply the action to all associated
   * entities within that area
   */
  area_id?: string;
}
