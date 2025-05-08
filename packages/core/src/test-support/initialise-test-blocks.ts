import type {
  CalendarDetails,
  CallServiceCommand,
  Event,
  Config,
  EventDetails,
  GetHistoryParams,
  GetLogbookParams,
  HassArea,
  HassDevice,
  HassEntity,
  IClient,
  LogBookEntry,
  Panel,
  Service,
  ServiceDomainDetails,
  State,
  TriggerEventMessage,
} from '@hass-blocks/hass-ts';
import { initialiseBlocks } from '../client/index.ts';

type TriggerCallback = (event: unknown) => void | Promise<void>;

/**
 * A mock implementation of the Home Assistant client. Used for testing purposes
 */
export class TestHassClient implements IClient {
  private serviceCalls: Omit<CallServiceCommand, 'id' | 'type'>[] = [];
  private triggers: Record<string, TriggerCallback> = {};
  private eventCallbacksWithType: Record<
    string,
    ((event: TriggerEventMessage['event'] | Event) => void)[]
  > = {};

  private eventCallbacks: ((
    event: TriggerEventMessage['event'] | Event,
  ) => void)[] = [];

  constructor(
    private states: State[],
    private services: Record<string, Record<string, Service>>,
  ) {}

  async getStates(): Promise<State[]> {
    return this.states;
  }

  async registerTrigger(
    trigger: Record<string, unknown>,
    callback: (event: unknown) => void | Promise<void>,
  ): Promise<void> {
    this.triggers[JSON.stringify(trigger)] = callback;
  }

  async fireTrigger(trigger: Record<string, unknown>) {
    this.triggers[JSON.stringify(trigger)]?.({});
  }

  async fireEvent(message: Event | TriggerEventMessage['event']) {
    await Promise.all(this.eventCallbacks.map((callback) => callback(message)));
  }

  public async subscribeToEvents(
    callback: (message: Event | TriggerEventMessage['event']) => void,
  ): Promise<void>;
  public async subscribeToEvents(
    type: string,
    callback: (message: Event | TriggerEventMessage['event']) => void,
  ): Promise<void>;
  public async subscribeToEvents(
    typeOrCallback:
      | string
      | ((message: Event | TriggerEventMessage['event']) => void),
    callbackIfTypeIsSupplied?: (
      message: Event | TriggerEventMessage['event'],
    ) => void,
  ): Promise<void> {
    if (
      typeof typeOrCallback === 'string' &&
      typeof callbackIfTypeIsSupplied === 'function'
    ) {
      this.eventCallbacksWithType = {
        [typeOrCallback]: [
          ...(this.eventCallbacksWithType[typeOrCallback] ?? []),
          callbackIfTypeIsSupplied,
        ],
      };
    } else if (typeof typeOrCallback === 'function') {
      this.eventCallbacks.push(typeOrCallback);
    }
  }

  async callService(
    params: Omit<CallServiceCommand, 'id' | 'type'>,
  ): Promise<State[]> {
    this.serviceCalls.push(params);
    return [];
  }

  getServiceCalls() {
    return this.serviceCalls;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getHistory(_params: GetHistoryParams): Promise<State[][]> {
    throw new Error('Method not implemented.');
  }
  getAreas(): Promise<HassArea[]> {
    throw new Error('Method not implemented.');
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getLogbook(_params?: GetLogbookParams): Promise<LogBookEntry[]> {
    throw new Error('Method not implemented.');
  }
  getEntities(): Promise<HassEntity[]> {
    throw new Error('Method not implemented.');
  }
  getDevices(): Promise<HassDevice[]> {
    throw new Error('Method not implemented.');
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getState(_entityId: string): Promise<State> {
    throw new Error('Method not implemented.');
  }
  getConfig(): Promise<Config> {
    throw new Error('Method not implemented.');
  }
  async getServices(): Promise<Record<string, Record<string, Service>>> {
    return this.services;
  }
  getServiceDomains(): Promise<ServiceDomainDetails[]> {
    throw new Error('Method not implemented.');
  }
  getPanels(): Promise<Record<string, Panel>> {
    throw new Error('Method not implemented.');
  }
  getCalendars(): Promise<CalendarDetails> {
    throw new Error('Method not implemented.');
  }
  getEvents(): Promise<EventDetails[]> {
    throw new Error('Method not implemented.');
  }
  getErrorLog(): Promise<string> {
    throw new Error('Method not implemented.');
  }
  close(): Promise<void> {
    throw new Error('Method not implemented.');
  }
}

/**
 * @public
 *
 *  You can use this function to initialise Hass Blocks with the Home Assistant instance stubbed out
 *  with an instance of {@link TestHassClient} which will allow you to simulate event firing and triggers
 *  and inspect the actions that are taken
 *
 * @param config - configuration for the test Hass Client
 */
export const initialiseTestBlocks = async (config: {
  states: State[];
  services: Record<string, Record<string, Service>>;
}) => {
  process.env['HASS_HOST'] = 'localhost';
  process.env['HASS_TOKEN'] = 'token';
  const testClient = new TestHassClient(config.states, config.services);
  return {
    blocks: await initialiseBlocks({
      client: testClient,
    }),
    hass: testClient,
  };
};
