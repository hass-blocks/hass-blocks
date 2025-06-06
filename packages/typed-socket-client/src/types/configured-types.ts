/**
 * Pass this into the server and client to configure strongly typed clients and backends
 *
 * @public
 */
export interface ConfiguredTypes<
  TData,
  TEmitter,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  TCommandMap extends Record<string, (data: TData, ...args: any[]) => any>,
  TEventForwarderMap extends Record<
    string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (emitter: TEmitter, emit: (arg: any) => void) => any
  >,
> {
  /**
   * A map of command handlers
   */
  commands: TCommandMap;
  /**
   * A map of event forwarders
   */
  eventForwarders: TEventForwarderMap;
  /**
   * Fake property to allow me to retain a paramaterised type
   */
  __data_do_not_use_fake_property: TData;
  /**
   * Fake property to allow me to retain a paramaterised type
   */
  __emitter_do_not_use_fake_property: TEmitter;
}
