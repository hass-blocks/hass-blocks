import { IClient, Event, TriggerEventMessage } from '@hass-blocks/hass-ts';
import {
  HassEntity,
  IEventBus,
  ICallServiceParams,
  IBlock,
} from '../types/index.ts';
import {
  EntityDoesNotExistError,
  InitialStatesNotLoadedError,
} from '../errors/index.ts';
import { IFullBlocksClient } from '../types/index.ts';

/**
 * @public
 */
export class BlocksClient implements IFullBlocksClient {
  private states: Map<string, HassEntity> | undefined;
  private _automations: IBlock<unknown, unknown>[] = [];

  public constructor(
    private client: IClient,
    private bus: IEventBus,
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
  }

  public getState(id: string) {
    return this.getEntity(id).state;
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
    await Promise.all(
      automation.map(async (automation) => {
        this._automations.push(automation);
        const { trigger } = automation;

        await automation.validate(this);

        const triggers = Array.isArray(trigger) ? trigger : [trigger];

        await Promise.all(
          triggers.map(async (item) => {
            await item?.attachToClient(this, automation, this.bus);
          }),
        );

        this.bus.emit('automation-registered', {
          name: automation.name,
          block: automation.toJson(),
        });
      }),
    );
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
          if (this.states && 'data' in event) {
            this.states.set(event.data.entity_id, event.data.new_state);
          }
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
