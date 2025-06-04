import type { IEventBus } from '@hass-blocks/core';
import type { ICallServiceParams, IFullBlocksClient } from '@hass-blocks/core';
import type { HassBlocksEvent } from '@hass-blocks/core';
import { getTypedGenerator } from '@hass-blocks/typed-socket-client';

const generator = getTypedGenerator<IFullBlocksClient, IEventBus>();

export const { buildServer, buildClient } = generator({
  commands: {
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
