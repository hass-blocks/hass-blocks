/**
 * @public
 * 
 * Parameters for calling Home Assistant services
 */
export interface ICallServiceParams {
  /**
   * The service domain (e.g. 'light')
   */ 
  domain: string;

  /**
   * The service action (e.g. 'turn_on')
   */
  service: string;

  /**
   * The target of the service call
   */
  target?: {
    entity_id?: string | string[];
    area_id?: string | string[];
    device_id?: string | string[];
  };

  /**
   * Any additional data specific to the individual service call
   */
  data?: Record<string, unknown>;
}
