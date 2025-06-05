import type { IEventBus } from '@hass-blocks/core';
import type { ICallServiceParams, IFullBlocksClient } from '@hass-blocks/core';
import type { HassBlocksEvent } from '@hass-blocks/core';
import { initialiseTypes } from '@hass-blocks/typed-socket-client';

const initialiseHandlers = initialiseTypes<IFullBlocksClient, IEventBus>();

export const handlers = initialiseHandlers({
  commands: {
    getAutomationById: (client: IFullBlocksClient, id: string) => {
      const automations = client.getAutomations();
      const automation = automations.find((item) => item.id === id);
      return automation?.toJson();
    },
    getAutomations: (client: IFullBlocksClient) => {
      const automations = client.getAutomations();
      return automations.map((automation) => automation.toJson());
    },
    getStates: (client: IFullBlocksClient) => client.getStates(),
    getState: (client: IFullBlocksClient, id: string) => client.getState(id),
    getServices: (client: IFullBlocksClient) => client.getServices(),
    getAreas: (client: IFullBlocksClient) => client.getAreas(),
    callService: async (
      client: IFullBlocksClient,
      params: Omit<ICallServiceParams, 'id' | 'type'>,
    ) => await client.callService(params),
  },
  eventForwarders: {
    hassBlocksEvent: (
      eventBus: IEventBus,
      emit: (data: HassBlocksEvent) => void,
    ) => {
      eventBus.subscribe((event) => emit(event));
    },
  },
});
