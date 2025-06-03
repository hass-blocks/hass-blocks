import type { IEventBus } from '@hass-blocks/core';
import type { ICallServiceParams, IFullBlocksClient } from '@hass-blocks/core';
import type { HassBlocksEvent } from '@hass-blocks/core';
import { makeWebsocketServer } from './server-generator/get-websocket-server.ts';

export const { makeCommand, buildServer, forwardEvent } = makeWebsocketServer();

export const commands = {
  getAutomations: makeCommand((client: IFullBlocksClient) => {
    const automations = client.getAutomations();
    return automations.map((automation) => automation.toJson());
  }),
  getStates: makeCommand((client: IFullBlocksClient) => client.getStates()),
  getState: makeCommand((client: IFullBlocksClient, id: string) =>
    client.getState(id),
  ),
  getServices: makeCommand((client: IFullBlocksClient) => client.getServices()),
  getAreas: makeCommand((client: IFullBlocksClient) => client.getAreas()),
  callService: makeCommand(
    async (
      client: IFullBlocksClient,
      params: Omit<ICallServiceParams, 'id' | 'type'>,
    ) => await client.callService(params),
  ),
};

export const events = {
  hassBlocksEvent: forwardEvent(
    (eventBus: IEventBus, emit: (data: HassBlocksEvent) => void) => {
      eventBus.subscribe((event) => emit(event));
    },
  ),
};
