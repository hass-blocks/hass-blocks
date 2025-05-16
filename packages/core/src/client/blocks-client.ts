import type {
  IHomeAssistant,
  Event,
  TriggerEventMessage,
  Service,
  HassArea,
} from '@hass-blocks/hass-ts';

import type { HassEntity, IEventBus, ICallServiceParams, IBlock } from '@types';
import { EntityDoesNotExistError, InitialStatesNotLoadedError } from '@errors';
import type { IFullBlocksClient } from '@types';
import type { IMQTTConnection } from '@hass-blocks/hass-mqtt';
import { mapAsync } from '@utils';

type StateChangedCallback = (
  event: Event | TriggerEventMessage['event'],
) => void;

/**
 * @public
 */
export class BlocksClient implements IFullBlocksClient {
  private areas: HassArea[] | undefined;
  private states: Map<string, HassEntity> | undefined;
  private services: Record<string, Record<string, Service>> | undefined;
  private _automations: IBlock<unknown, unknown>[] = [];
  private stateChangedCallback: StateChangedCallback | undefined;

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
    const states = (await this.client.getStates()) as HassEntity[];
    const statesMap = new Map<string, HassEntity>();
    states.forEach((state) => statesMap.set(state.entity_id, state));
    this.states = statesMap;
    await this.attachStateChangeListenerIfNotAttached();
  }

  public getState(id: string) {
    return this.getEntity(id).state;
  }

  public async getServices() {
    if (!this.services) {
      const services = await this.client.getServices();
      this.services = services;
      return services;
    }

    return this.services;
  }

  public getEntity(id: string) {
    if (!this.states) {
      throw new InitialStatesNotLoadedError();
    }
    const state = this.states.get(id);
    if (!state) {
      throw new EntityDoesNotExistError(id);
    }
    return state;
  }

  public async getAreas() {
    if (!this.areas) {
      const areas = await this.client.getAreas();
      this.areas = areas;
      return areas;
    }
    return this.areas;
  }

  public getAutomations(): IBlock<unknown, unknown>[] {
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

  public async registerAutomation(...automation: IBlock<unknown, unknown>[]) {
    if (!this.states) {
      await this.loadStates();
    }

    await mapAsync(automation, async (automation) => {
      this._automations.push(automation);
      const { trigger } = automation;

      await automation.initialise(this, this.mqtt);

      const triggers = Array.isArray(trigger) ? trigger : [trigger];

      await mapAsync(
        triggers,
        async (item) => await item?.attachToClient(this, automation, this.bus),
      );

      this.bus.emit('automation-registered', {
        name: automation.name,
        block: automation.toJson(),
      });
    });
  }

  private async attachStateChangeListenerIfNotAttached() {
    if (!this.stateChangedCallback) {
      this.stateChangedCallback = (
        event: Event | TriggerEventMessage['event'],
      ) => {
        if (this.states && 'data' in event) {
          this.states.set(event.data.entity_id, event.data.new_state);
        }
      };
    }
    await this.client.subscribeToEvents(this.stateChangedCallback);
  }

  public async onStateChanged(id: string, callback: (event: Event) => void) {
    try {
      if (!this.states) {
        await this.loadStates();
      }

      if (this.states && !this.states.has(id)) {
        throw new Error(
          "You tried to subscribe to an entity that doesn't exist",
        );
      }

      await this.client.subscribeToEvents(
        (event: Event | TriggerEventMessage['event']) => {
          if ('data' in event && event.data.entity_id === id) {
            callback(event);
          }
        },
      );
    } catch (error) {
      if (error instanceof Error) {
        this.bus.emit('generalFailure', {
          message: error.message,
          error,
        });
      }
    }
  }
}
