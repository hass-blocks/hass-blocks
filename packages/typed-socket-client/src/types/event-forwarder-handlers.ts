import type { EventForwarderClientHandler } from './event-forwarder-client-handler.ts';
import type { ForwarderHandler } from './forwarder-handler.ts';
import type { GetEmitData } from './get-emit-data.ts';

export type EventForwarderHandlers<
  TMap extends Record<
    string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (emitter: unknown, emit: (arg: any) => void) => any
  >,
> = {
  [K in keyof TMap]: {
    backend: ForwarderHandler<GetEmitData<TMap[K]>>;
    client: EventForwarderClientHandler<GetEmitData<TMap[K]>>;
  };
};
