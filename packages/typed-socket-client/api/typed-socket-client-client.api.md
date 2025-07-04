## API Report File for "@hass-blocks/typed-socket-client"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import type { Socket } from 'socket.io-client';

// @public
export type CommandClientHandler<TData, TArguments extends unknown[]> = (socket?: Socket) => (...args: TArguments) => Promise<TData>;

// @public
export type CommandClientHandlers<TData, TCommandMap extends Record<string, (data: TData, ...args: any[]) => any>> = {
    [K in keyof TCommandMap]: ReturnType<CommandClientHandler<ReturnType<TCommandMap[K]>, GetRest<Parameters<TCommandMap[K]>>>>;
};

// @public
export interface ConfiguredTypes<TData, TEmitter, TCommandMap extends Record<string, (data: TData, ...args: any[]) => any>, TEventForwarderMap extends Record<string, (emitter: TEmitter, emit: (arg: any) => void) => any>> {
    __data_do_not_use_fake_property: TData;
    __emitter_do_not_use_fake_property: TEmitter;
    commands: TCommandMap;
    eventForwarders: TEventForwarderMap;
}

// @public
export type EventForwarderClientHandler<TTransmittedData> = (socket?: Socket) => (callback: (data: TTransmittedData) => void) => void;

// @public
export type EventForwarderClientHandlers<TEmitter, TMap extends Record<string, (emitter: TEmitter, emit: (arg: any) => void) => any>> = {
    [K in keyof TMap]: ReturnType<EventForwarderClientHandler<GetEmitData<TMap[K]>>>;
};

// @public
export const getClientBuilder: <TData, TEmitter, TCommandMap extends Record<string, (data: TData, ...args: any[]) => any>, TEventForwarderMap extends Record<string, (emitter: TEmitter, emit: (arg: any) => void) => any>>(config: ConfiguredTypes<TData, TEmitter, TCommandMap, TEventForwarderMap>) => (socket?: Socket) => CommandClientHandlers<TData, TCommandMap> & EventForwarderClientHandlers<TEmitter, TEventForwarderMap>;

// @public
export type GetEmitData<T> = T extends (data: any, emit: (data: infer TEmitData) => void) => unknown ? TEmitData : never;

// @public
export type GetRest<T extends any[]> = T extends [unknown, ...infer Rest] ? Rest : never;

// (No @packageDocumentation comment for this package)

```
