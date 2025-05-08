/**
 * @public
 *
 * An object representing a set of ids for either entities,
 * areaas or devices
 */
export interface ITargetIds {
  /**
   * An entity id or list of ids
   */
  entity_id?: string | string[];
  /**
   * An area id or list of ids
   */
  area_id?: string | string[];
  /**
   * A device id or list of ids
   */
  device_id?: string | string[];
}
