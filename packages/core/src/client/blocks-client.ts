import type {
  IHomeAssistant,
  HomeAssistantEvent,
  TriggerEventMessage,
  Service,
  HassArea,
  StateChangedEvent,
} from '@hass-blocks/hass-ts';

import type {
  HassEntity,
  IEventBus,
  ICallServiceParams,
  IEntity,
  IMutableNode,
  ITriggerable,
  IBlocksNode,
  ISerialisable,
} from '@types';
import { EntityDoesNotExistError, InitialStatesNotLoadedError } from '@errors';
import type { IFullBlocksClient } from '@types';
import type { IMQTTConnection } from '@hass-blocks/hass-mqtt';
import { mapAsync } from '@utils';

type StateChangedCallback = (
  event: HomeAssistantEvent | TriggerEventMessage['event'],
) => void;

/**
 * @public
 */
export class BlocksClient implements IFullBlocksClient {
  private areas: HassArea[] | undefined;
  private states: Map<string, HassEntity> | undefined;
  private services: Record<string, Record<string, Service>> | undefined;
  private _automations: IMutableNode[] = [];
  private stateChangedCallback: StateChangedCallback | undefined;
  private entityCallbacks = new Map<string, Set<StateChangedCallback>>();
  private refreshInterval: NodeJS.Timeout | undefined;

  public constructor(
    private client: IHomeAssistant,
    private bus: IEventBus,
    private mqtt: IMQTTConnection,
  ) {}

  /**
   * Load all available states from home assistant. This will reset the state cache -
   * call this if you need to remove non existant entities from cache
   */
  public async loadStates() {
    await this.refreshStatesFromHomeAssistant();
    await this.attachStateChangeListenerIfNotAttached();
    this.startPeriodicRefresh();
  }

  public getStates(): Map<string, HassEntity> {
    if (!this.states) {
      throw new Error(
        'States have not been loaded yet - is blocks initialised?',
      );
    }
    return this.states;
  }

  public getState(id: string): string;
  public getState(entity: IEntity<`${string}.${string}`>): string;
  public getState(idOrEntity: string | IEntity<`${string}.${string}`>): string {
    return this.getEntityInternal(idOrEntity).state;
  }

  public async getServices() {
    if (!this.services) {
      const services = await this.client.getServices();
      this.services = services;
      return services;
    }

    return this.services;
  }

  private getEntityInternal(
    idOrEntity: string | IEntity<`${string}.${string}`>,
  ) {
    const id =
      typeof idOrEntity === 'string'
        ? idOrEntity
        : (idOrEntity.targetIds.entity_id[0] ?? '');

    if (!this.states) {
      throw new InitialStatesNotLoadedError();
    }
    const state = this.states.get(id);
    if (!state) {
      throw new EntityDoesNotExistError(id);
    }
    return state;
  }

  public getEntity(id: string): HassEntity;
  public getEntity(entity: IEntity<`${string}.${string}`>): HassEntity;
  public getEntity(
    idOrEntity: string | IEntity<`${string}.${string}`>,
  ): HassEntity {
    return this.getEntityInternal(idOrEntity);
  }

  public async getAreas() {
    if (!this.areas) {
      const areas = await this.client.getAreas();
      this.areas = areas;
      return areas;
    }
    return this.areas;
  }

  public getAutomations(): (IBlocksNode & ISerialisable)[] {
    return this._automations;
  }

  public async registerTrigger(
    trigger: Record<string, unknown>,
    callback: (event: unknown) => void | Promise<void>,
  ) {
    if (!this.states) {
      await this.loadStates();
    }
    const newCallback = (event: unknown) => {
      callback(event);
    };
    await this.client.registerTrigger(trigger, newCallback);
  }

  public async callService(params: ICallServiceParams) {
    return await this.client.callService(params);
  }

  public async registerAutomation(
    ...automation: (IMutableNode & ITriggerable)[]
  ) {
    if (!this.states) {
      await this.loadStates();
    }

    await mapAsync(automation, async (automation) => {
      try {
        this._automations.push(automation);
        const { trigger } = automation;

        const triggers = Array.isArray(trigger) ? trigger : [trigger];

        await automation.initialise(this, this.mqtt);

        await mapAsync(
          triggers,
          async (item) =>
            await item?.attachToClient(this, automation, this.bus),
        );

        this.bus.emit('automation-registered', {
          name: automation.name,
          block: automation.toJson(),
        });
        this.bus.emit('log-event', {
          message: `Successfully registered automation: ${automation.name}`,
          module: 'core',
          level: 'info',
        });
      } catch (e) {
        if (!(e instanceof Error)) {
          throw e;
        }
        this.bus.emit('log-event', {
          message: `Failed to register automation ${automation.name}: ${e}`,
          module: 'core',
          level: 'error',
        });
      }
    });
  }

  private async attachStateChangeListenerIfNotAttached() {
    if (!this.stateChangedCallback) {
      this.stateChangedCallback = (
        event: HomeAssistantEvent | TriggerEventMessage['event'],
      ) => {
        if (
          this.states &&
          'event_type' in event &&
          event.event_type === 'state_changed'
        ) {
          this.states.set(event.data.entity_id, event.data.new_state);

          const entityCallbacks = this.entityCallbacks.get(
            event.data.entity_id,
          );
          if (entityCallbacks) {
            this.bus.emit('log-event', {
              message: `Recieved ${event.event_type} - ${event}`,
              level: 'trace',
              module: 'core',
            });
            entityCallbacks.forEach((cb) => cb(event));
          }
        }
      };
      await this.client.on(this.stateChangedCallback);
    }
  }

  public async onStateChanged(
    id: string,
    callback: (event: StateChangedEvent) => void,
  ): Promise<() => void> {
    try {
      if (!this.states) {
        await this.loadStates();
      }

      if (this.states && !this.states.has(id)) {
        throw new Error(
          "You tried to subscribe to an entity that doesn't exist",
        );
      }

      if (!this.entityCallbacks.has(id)) {
        this.entityCallbacks.set(id, new Set());
      }

      const wrappedCallback: StateChangedCallback = (event) => {
        if ('event_type' in event && event.event_type === 'state_changed') {
          callback(event as StateChangedEvent);
        }
      };

      this.entityCallbacks.get(id)?.add(wrappedCallback);

      return () => {
        const callbacks = this.entityCallbacks.get(id);
        if (callbacks) {
          callbacks.delete(wrappedCallback);
          if (callbacks.size === 0) {
            this.entityCallbacks.delete(id);
          }
        }
      };
    } catch (error) {
      if (error instanceof Error) {
        this.bus.emit('generalFailure', {
          message: error.message,
          error,
        });
      }
      return () => {
        // NOOP
      };
    }
  }

  private async refreshStatesFromHomeAssistant() {
    const states = await this.client.getStates();
    const statesMap = new Map<string, HassEntity>();
    states.forEach((state) => statesMap.set(state.entity_id, state));
    this.states = statesMap;
  }

  private startPeriodicRefresh() {
    if (!this.refreshInterval) {
      this.refreshInterval = setInterval(
        async () => {
          try {
            await this.refreshStatesFromHomeAssistant();
          } catch (error) {
            this.bus.emit('log-event', {
              message: `Failed to refresh states: ${error}`,
              module: 'core',
              level: 'error',
            });
          }
        },
        5 * 60 * 1000,
      );
    }
  }

  public async shutdown() {
    if (this.refreshInterval) {
      clearInterval(this.refreshInterval);
      this.refreshInterval = undefined;
    }
    this.entityCallbacks.clear();

    for (const automation of this._automations) {
      await automation.destroy();
    }
    this._automations = [];
  }

  public getEntityCallbacksSize(): number {
    return this.entityCallbacks.size;
  }
}
