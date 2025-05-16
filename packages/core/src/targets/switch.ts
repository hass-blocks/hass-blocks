import { IFullBlocksClient, IEntity } from '@types';
import { Entity } from './entity.ts';
import { IMQTTConnection, MqttSwitch } from '@hass-blocks/hass-mqtt';

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
 * will try to create a new switch in Home Assisstant so long as there is
 * an initialised MQTT connection
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
  private mqttSwitch: MqttSwitch | undefined;

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

  public override async initialise(
    hass: IFullBlocksClient,
    mqtt: IMQTTConnection,
  ): Promise<void> {
    if (this.config.create) {
      const [, identifier] = this.config.id.split('.');
      this.mqttSwitch = new MqttSwitch(mqtt, {
        friendlyName: this.config.friendlyName,
        discoveryPrefix: 'homeassistant',
        context: 'blocks',
        deviceClass: 'switch',
        uniqueId: identifier ?? '',
      });
      this.mqttSwitch.initialise();
    } else {
      await super.initialise(hass, mqtt);
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
export function aSwitch<TId extends `switch.${string}`>(
  config: SwitchConfig<TId> | SwitchConfigForCreation<TId>,
): IEntity<TId>;
/**
 * @public
 *
 * A switch entity
 *
 * @param id - An entity id
 */
export function aSwitch<TId extends `switch.${string}`>(id: TId): IEntity<TId>;

/**
 * @public
 *
 * A switch entity
 *
 * @param config - either an entity id or an object
 */
export function aSwitch<TId extends `switch.${string}`>(
  id: TId | SwitchConfig<TId> | SwitchConfigForCreation<TId>,
) {
  return new Switch<TId>(typeof id === 'string' ? { id, create: false } : id);
}
