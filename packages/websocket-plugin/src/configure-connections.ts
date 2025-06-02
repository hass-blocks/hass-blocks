import type { IEventBus } from '@hass-blocks/core';
import { initialiseWebsocketEventForwarderBuilder } from './forward-event.ts';
import { initialiseWebsocketCommandBuilder } from './make-websocket-command.ts';
import type { ICallServiceParams, IFullBlocksClient } from '@hass-blocks/core';
import type { HassBlocksEvent } from '@hass-blocks/core';

const makeWebsocketCommand = initialiseWebsocketCommandBuilder();

export const commands = {
  getAutomations: makeWebsocketCommand((client: IFullBlocksClient) => {
    const automations = client.getAutomations();
    return automations.map((automation) => automation.toJson());
  }),
  getStates: makeWebsocketCommand((client: IFullBlocksClient) =>
    client.getStates(),
  ),
  getState: makeWebsocketCommand((client: IFullBlocksClient, id: string) =>
    client.getState(id),
  ),
  getServices: makeWebsocketCommand((client: IFullBlocksClient) =>
    client.getServices(),
  ),
  getAreas: makeWebsocketCommand((client: IFullBlocksClient) =>
    client.getAreas(),
  ),
  callService: makeWebsocketCommand(
    async (
      client: IFullBlocksClient,
      params: Omit<ICallServiceParams, 'id' | 'type'>,
    ) => await client.callService(params),
  ),
};

const forwardEvent = initialiseWebsocketEventForwarderBuilder();

export const events = {
  hassBlocksEvent: forwardEvent(
    (eventBus: IEventBus, emit: (data: HassBlocksEvent) => void) => {
      eventBus.subscribe((event) => emit(event));
    },
  ),
};
