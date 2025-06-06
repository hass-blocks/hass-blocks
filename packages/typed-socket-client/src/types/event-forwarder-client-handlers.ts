import type { EventForwarderClientHandler } from './event-forwarder-client-handler.ts';
import type { GetEmitData } from './get-emit-data.ts';
/**
 * A map of event forwarder client handlers
 *
 * @public
 */
export type EventForwarderClientHandlers<
  TEmitter,
  TMap extends Record<
    string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (emitter: TEmitter, emit: (arg: any) => void) => any
  >,
> = {
  [K in keyof TMap]: ReturnType<
    EventForwarderClientHandler<GetEmitData<TMap[K]>>
  >;
};
