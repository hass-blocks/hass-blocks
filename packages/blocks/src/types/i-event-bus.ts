import { HassBlocksEvent } from './hass-blocks-event.ts';

export interface IEventBus {
  emit: (event: HassBlocksEvent) => void;
  subscribe: (
    callback: (
      event: HassBlocksEvent & { id: string; timestamp: string },
    ) => void,
  ) => void;
}
