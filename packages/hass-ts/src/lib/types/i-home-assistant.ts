import type { Config } from './config.ts';
import type { Panel } from './panel.ts';
import type { HomeAssistantEvent } from './home-assistant-event/index.ts';
import type { State } from './state.ts';
import type { CalendarDetails } from './calendar-details.ts';
import type { ServiceDomainDetails } from './service-domain-details.ts';
import type { LogBookEntry } from './logbook-entry.ts';
import type { EventDetails } from './event-details.ts';
import type { HassArea } from './area.ts';
import type { HassEntity } from './hass-entity.ts';
import type { HassDevice } from './hass-device.ts';
import type { Service } from './services.ts';
import type { GetHistoryParams } from './get-history-params.ts';
import type { GetLogbookParams } from './get-logbook-params.ts';

import type {
  CallServiceCommand,
  SubscribeToTriggerMessage,
} from '../websocket-client/index.ts';

/**
 * The Home Assistant client API. Once initialised, the client will make requests via
 * **either** the websocket or HTTP API where appropriate
 *
 * @public
 */
export interface IHomeAssistant {
  /**
   * Returns an array of state changes from the past
   */
  getHistory(params: GetHistoryParams): Promise<State[][]>;

  /**
   * Gets a list of areas registered with home assistant
   */
  getAreas(): Promise<HassArea[]>;

  /**
   * Gets a list of entries from the Home Assistant logbook
   *
   * @param params - params to filter the results
   */
  getLogbook(params?: GetLogbookParams): Promise<LogBookEntry[]>;

  /**
   * Get a list of all entities currently registered by home assistant
   */
  getEntities(): Promise<HassEntity[]>;

  /**
   * Get a list of all devices currently registered by home assistant
   */
  getDevices(): Promise<HassDevice[]>;

  /**
   * Get a list of the current states of all entities
   */
  getStates(): Promise<State[]>;

  /**
   * Get the current state of a specific entity
   *
   * @param entityId - The entity id in the form <domain>.<id>
   */
  getState(entityId: string): Promise<State>;

  /**
   * Call a service action
   *
   * See {@link https://developers.home-assistant.io/docs/api/websocket/#calling-a-service-action}
   *
   * @param params - parameters to send with the service command
   */
  callService(
    params: Omit<CallServiceCommand, 'id' | 'type'>,
  ): Promise<State[]>;

  /**
   * Get the current Home Assistant configuration
   */
  getConfig(): Promise<Config>;

  /**
   * Get details of all the services currently registered in home assistant, grouped by domain
   */
  getServices(): Promise<Record<string, Record<string, Service>>>;

  /**
   * Get a list of possible domains for services
   */
  getServiceDomains(): Promise<ServiceDomainDetails[]>;

  /**
   * Get a list of all registered panels
   */
  getPanels(): Promise<Record<string, Panel>>;

  /**
   * Get a list of all registered calendars
   */
  getCalendars(): Promise<CalendarDetails>;

  /**
   * Get the complete list of events that can be listened to and the number of subscribers
   */
  getEvents(): Promise<EventDetails[]>;

  /**
   * Retrieve all errors logged during the current session of Home Assistant as a plaintext response.
   */
  getErrorLog(): Promise<string>;

  /**
   * Subscribe to a trigger. See https://developers.home-assistant.io/docs/api/websocket/#subscribe-to-trigger
   */
  registerTrigger(
    trigger: SubscribeToTriggerMessage['trigger'],
    callback: (event: unknown) => void | Promise<void>,
  ): Promise<void>;

  /**
   * Removes a previously registered websocket listener
   *
   * @param listenerId - The id of a previously registered listener
   */
  off(listenerId: string): void;

  /**
   * Subscribe to events
   *
   * @param callback - Fire this callback when any Home Assistant events are triggered
   * @returns an id that can be passed to `off()` to remove the listener
   */
  on(callback: (message: HomeAssistantEvent) => void): Promise<string>;

  /**
   * Subscribe to events of a specific type
   *
   * @param type - type of the event to listen for
   * @param callback - Fire this callback when the Home Assistant events are triggered
   * @returns an id that can be passed to `off()` to remove the listener
   */
  on<TEventType extends HomeAssistantEvent['event_type']>(
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

  /**
   * Close the websocket connection
   */
  close(): Promise<void>;

  /**
   * Close the websocket connection
   */
  [Symbol.asyncDispose]: () => Promise<void>;
}
