import type { HassArea, Service, State } from '@hass-blocks/hass-ts';
import type { HassEntity } from './hass-events.ts';
import type { ICallServiceParams } from './i-call-service-params.ts';
import type { IEntity } from './i-entity.ts';

/**
 * @public
 *
 * An initialised Home Assistant connection that blocks can used to inspect state
 * or make calls to services
 */
export interface IHass {
  /**
   * Get all states currently loaded into the Hass Blocks cache
   */
  getStates(): Map<string, HassEntity>;

  /**
   * Get the current state of a given entity
   *
   * @param id - The entity id
   */
  getState(id: string): string;

  /**
   * Get the current state of a given entity
   *
   * @param entity - the entity to inspect
   */
  getState(entity: IEntity<`${string}.${string}>`>): string;

  /**
   * Get the full entity description of a given entity
   *
   * @param id - The entity id
   */
  getEntity(id: string): HassEntity;

  /**
   * Get the full entity description of a given entity
   *
   * @param entity - the entity to inspect
   */
  getEntity(entity: IEntity<`${string}.${string}`>): HassEntity;

  /**
   * Get a list of registered services from Home Assistant
   */
  getServices(): Promise<Record<string, Record<string, Service>>>;

  /**
   * Get a list of registered areas
   */
  getAreas(): Promise<HassArea[]>;

  /**
   * Call a service on the Home Assistant API
   *
   * @param params - Service parameters
   */
  callService(
    params: Omit<ICallServiceParams, 'id' | 'type'>,
  ): Promise<State[]>;
}
