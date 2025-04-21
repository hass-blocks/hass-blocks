import { State } from "@hass-blocks/homeassistant-typescript";
import { HassEntity } from "./hass-events.ts";
import { ICallServiceParams } from "./i-call-service-params.ts";

/**
 * @public
 * 
 * An initialised Home Assistant connection that blocks can used to inspect state
 * or make calls to services
 */
export interface IHass {
  /**
   * Get the current state of a given entity
   * 
   * @param id - The entity id
   */
  getState: (id: string) => string;

  /**
   * Get the full entity description of a given entity
   * 
   * @param id - The entity id
   */
  getEntity: (id: string) => HassEntity;

  /**
   * Call a service on the Home Assistant API
   * 
   * @param params - Service parameters
   */
  callService: (params: ICallServiceParams) => Promise<State[]>;
}
