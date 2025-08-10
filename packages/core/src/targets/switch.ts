import type { IFullBlocksClient, IEntity } from '@types';
import type { IHomeAssistant } from '@hass-blocks/hass-ts';
import { Entity } from './entity.ts';

/**
 * @public
 *
 * Configuration for switch entity. When 'create' is false, this simply
 * refers to an existing switch entity
 */
export interface SwitchConfig<TId extends `switch.${string}`> {
  /**
   * The entity id
   */
  id: TId;
  /**
   * Whether or not to create the entity
   */
  create: false;
}

/**
 * @public
 *
 * When the 'create' parameter is supplied as true, this entity
 * will try to create a new switch in Home Assistant using the entities framework
 */
export interface SwitchConfigForCreation<TId extends `switch.${string}`> {
  /**
   * The entity id
   */
  id: TId;
  /**
   * Whether or not to create the entity
   */
  create: true;
  /**
   * The friendly name for the Entity in Home Assistant
   */
  friendlyName: string;
}

/**
 * @public
 *
 * A switch entity
 */
export class Switch<TId extends `switch.${string}`> extends Entity<TId> {
  public constructor(
    private config: SwitchConfig<TId> | SwitchConfigForCreation<TId>,
  ) {
    super(config.id);
  }

  override get targetIds() {
    return {
      entity_id: [this.config.id],
    };
  }

  public override async initialise(hass: IHomeAssistant): Promise<void>;
  public override async initialise(hass: IFullBlocksClient): Promise<void>;
  public override async initialise(
    hass: IFullBlocksClient | IHomeAssistant,
  ): Promise<void> {
    if (this.config.create) {
      if ('fireEvent' in hass) {
        await hass.fireEvent({
          event_type: 'hass_blocks_create_entity',
          event_data: {
            entity_id: this.config.id,
            entity_type: 'switch',
            state: 'off',
            name: this.config.friendlyName,
          },
        });
      }
    } else {
      if ('getEntity' in hass && 'onStateChanged' in hass) {
        await super.initialise(hass);
      }
    }
  }
}

/**
 * @public
 *
 * A switch entity
 *
 * @param config - switch config
 */
export function toggle<TId extends `switch.${string}`>(
  config: SwitchConfig<TId> | SwitchConfigForCreation<TId>,
): IEntity<TId>;
/**
 * @public
 *
 * A switch entity
 *
 * @param id - An entity id
 */
export function toggle<TId extends `switch.${string}`>(id: TId): IEntity<TId>;

/**
 * @public
 *
 * A switch entity
 *
 * @param config - either an entity id or an object
 */
export function toggle<TId extends `switch.${string}`>(
  id: TId | SwitchConfig<TId> | SwitchConfigForCreation<TId>,
) {
  return new Switch<TId>(typeof id === 'string' ? { id, create: false } : id);
}
