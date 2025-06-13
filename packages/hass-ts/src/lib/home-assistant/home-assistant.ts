import { convertCamelCaseToUnderscoreCase } from '@utils';

import { v4 } from 'uuid';

import type { RestClient } from '@rest-client';

import type {
  CallServiceCommand,
  TriggerEventMessage,
  SubscribeToTriggerMessage,
  GetAreasCommand,
  GetConfigCommand,
  GetDevicesCommand,
  GetEntitiesCommand,
  GetPanelsCommand,
  GetServicesCommand,
  GetStatesCommand,
  MessageFromServer,
  WebsocketClient,
} from '@websocket-client';

import type {
  CalendarDetails,
  Config,
  EventDetails,
  HomeAssistantEvent,
  LogBookEntry,
  Panel,
  ServiceDomainDetails,
  State,
  HassArea,
  HassEntity,
  HassDevice,
  Service,
  IHomeAssistant,
  GetHistoryParams,
  GetLogbookParams,
  Logger,
} from '@types';

export class HomeAssistant implements IHomeAssistant {
  private listenerMap = new Map<string, (message: MessageFromServer) => void>();
  constructor(
    private websocketClient: WebsocketClient,
    private httpClient: RestClient,
    private logger: Logger,
  ) {}

  public async getAreas() {
    const { result } = await this.websocketClient.sendCommand<
      GetAreasCommand,
      HassArea[]
    >({
      type: 'config/area_registry/list',
    });
    return result;
  }

  public async getEntities() {
    const { result } = await this.websocketClient.sendCommand<
      GetEntitiesCommand,
      HassEntity[]
    >({
      type: 'config/entity_registry/list',
    });
    return result;
  }

  public async getDevices() {
    const { result } = await this.websocketClient.sendCommand<
      GetDevicesCommand,
      HassDevice[]
    >({
      type: 'config/device_registry/list',
    });
    return result;
  }

  public async callService(
    params: Omit<CallServiceCommand, 'type' | 'id'>,
  ): Promise<State[]> {
    const { domain, service, target, service_data } = params;

    const args = { ...target, ...(service_data ?? {}) };

    this.logger.trace(`Call service: ${params}`);

    return await this.httpClient.post<typeof args, State[]>(
      `/services/${domain}/${service}`,
      args,
    );
  }

  public async getState(entityId: string): Promise<State> {
    return await this.httpClient.get(`/states/${entityId}`);
  }

  public async registerTrigger<T extends Record<string, unknown>>(
    trigger: SubscribeToTriggerMessage['trigger'],
    callback: (event: T) => void | Promise<void>,
  ) {
    const { id } = await this.websocketClient.sendCommand<
      SubscribeToTriggerMessage,
      null
    >({
      type: 'subscribe_trigger',
      trigger,
    });

    this.websocketClient.addMessageListener(
      async (message: MessageFromServer) => {
        const isTriggerEvent = (
          message: MessageFromServer,
        ): message is TriggerEventMessage<T> => {
          return message.type === 'event' && message.id === id;
        };

        if (isTriggerEvent(message)) {
          await callback(message.event.variables.trigger);
        }
      },
    );
  }

  public async getLogbook(
    params: GetLogbookParams = {},
  ): Promise<LogBookEntry[]> {
    const { timestamp, ...queryParams } = params;

    const queryString = Object.entries(queryParams)
      .map(
        ([key, value]) =>
          `${convertCamelCaseToUnderscoreCase(key)}=${
            value instanceof Date ? value.toISOString() : String(value)
          }`,
      )
      .join('&');
    const timestampString = timestamp ? `/${timestamp.toISOString()}` : '';
    const finalQueryString = queryString ? `?${queryString}` : '';

    const path = `/logbook${timestampString}${finalQueryString}`;

    return await this.httpClient.get(path);
  }

  // TODO need a return type that takes into account the nuances of the params
  public async getHistory(params: GetHistoryParams): Promise<State[][]> {
    const { timestamp, ...queryParams } = params;

    const queryString = Object.entries(queryParams)
      .map(
        ([key, value]) =>
          `${convertCamelCaseToUnderscoreCase(key)}=${String(value)}`,
      )
      .join('&');

    const timestampString = timestamp ? `/${timestamp.toISOString()}` : '';

    const path = `/history/period${timestampString}?${queryString}`;

    return await this.httpClient.get(path);
  }

  public async getEvents(): Promise<EventDetails[]> {
    return await this.httpClient.get('/events');
  }

  public async getErrorLog(): Promise<string> {
    return await this.httpClient.get('/error_log');
  }

  public async getCalendars(): Promise<CalendarDetails> {
    return await this.httpClient.get('/calendars');
  }

  public async getConfig(): Promise<Config> {
    const { result } = await this.websocketClient.sendCommand<
      GetConfigCommand,
      Config
    >({
      type: 'get_config',
    });
    return result;
  }

  public async getServiceDomains(): Promise<ServiceDomainDetails[]> {
    return await this.httpClient.get('/services');
  }

  public async getServices(): Promise<Record<string, Record<string, Service>>> {
    const { result } = await this.websocketClient.sendCommand<
      GetServicesCommand,
      Record<string, Record<string, Service>>
    >({
      type: 'get_services',
    });
    return result;
  }

  public async getPanels(): Promise<Record<string, Panel>> {
    const { result } = await this.websocketClient.sendCommand<
      GetPanelsCommand,
      Record<string, Panel>
    >({
      type: 'get_panels',
    });
    return result;
  }

  public async getStates(): Promise<State[]> {
    const { result } = await this.websocketClient.sendCommand<
      GetStatesCommand,
      State[]
    >({
      type: 'get_states',
    });
    return result;
  }

  public off(listenerId: string) {
    const listener = this.listenerMap.get(listenerId);

    if (listener) {
      this.websocketClient.removeMessageListener(listener);
    }
  }

  public async on(
    callback: (message: HomeAssistantEvent) => void,
  ): Promise<string>;
  public async on<TEventType extends HomeAssistantEvent['event_type']>(
    type: TEventType,
    callback: (
      message: Exclude<
        HomeAssistantEvent,
        HomeAssistantEvent & {
          event_type: Exclude<HomeAssistantEvent['event_type'], TEventType>;
        }
      >,
    ) => void,
  ): Promise<string>;
  public async on(
    typeOrCallback: string | ((message: HomeAssistantEvent) => void),
    callbackIfTypeIsSupplied?: (message: HomeAssistantEvent) => void,
  ): Promise<string> {
    const { type, callback } = this.getTypeAndCallback(
      typeOrCallback,
      callbackIfTypeIsSupplied,
    );

    const typeObj: { event_type: string } | object = type
      ? { event_type: type }
      : {};

    const { id } = await this.websocketClient.sendCommand({
      type: 'subscribe_events',
      ...typeObj,
    });
    const listenerId = v4();

    const listener = (message: MessageFromServer) => {
      if (
        message.type === 'event' &&
        message.id === id &&
        'event_type' in message.event
      ) {
        callback(message.event);
      }
    };

    this.websocketClient.addMessageListener(listener);
    this.listenerMap.set(listenerId, listener);

    return listenerId;
  }

  public async close(): Promise<void> {
    await this.websocketClient.close();
  }

  private getTypeAndCallback(
    typeOrCallback: string | ((message: HomeAssistantEvent) => void),
    callbackIfTypeIsSupplied?: (message: HomeAssistantEvent) => void,
  ) {
    /* istanbul ignore else -- @preserve */
    if (
      typeof typeOrCallback === 'function' &&
      callbackIfTypeIsSupplied === undefined
    ) {
      return { type: undefined, callback: typeOrCallback };
    }
    if (
      typeof callbackIfTypeIsSupplied === 'function' &&
      typeof typeOrCallback === 'string'
    ) {
      return { type: typeOrCallback, callback: callbackIfTypeIsSupplied };
    }
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    return { type: undefined, callback: () => {} };
  }

  async [Symbol.asyncDispose]() {
    await this.close();
  }
}
