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
  commands: TCommandMap;
  eventForwarders: TEventForwarderMap;
  __data_do_not_use_fake_property: TData;
  __emitter_do_not_use_fake_property: TEmitter;
}
