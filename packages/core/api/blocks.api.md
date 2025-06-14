## API Report File for "@hass-blocks/core"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import { CallServiceCommand } from '@hass-blocks/hass-ts';
import { Event as Event_2 } from '@hass-blocks/hass-ts';
import { HassConfig } from '@hass-blocks/hass-ts';
import { IClient } from '@hass-blocks/hass-ts';
import { State } from '@hass-blocks/hass-ts';

// @public
export const action: <I = void, O = void>(config: IActionConfig<I, O>) => Block<I, O>;

// @public
export const assertion: <I = void, O = void>(config: IAssertionConfig<I, O>) => Block<I, O>;

// @public
export const automation: <const A extends readonly any[], I = GetSequenceInput<A>, O = GetSequenceOutput<A>>(config: IAutomationConfig<A, I, O>) => Block<I, O>;

// @public
export interface AutomationRegistered extends BaseHassBlocksEvent<'automation-registered'> {
    block: IBlocksNode;
    name: string;
}

// @public
export interface BaseHassBlocksEvent<T extends string> {
    eventType: T;
    id: string;
    timestamp: string;
}

// @public
export abstract class Block<I = void, O = void> implements IBlock<I, O> {
    constructor(
    id: string, children?: Block<unknown, unknown>[] | undefined, _trigger?: (ITrigger | ITrigger[]) | undefined);
    readonly id: string;
    inputType: I | undefined;
    abstract readonly name: string;
    outputType: O | undefined;
    abstract run(client: IHass, input: I, events?: IEventBus, triggerId?: string): Promise<BlockOutput<O>> | BlockOutput<O>;
    toJson(): {
        type: string;
        id: string;
        name: string;
    };
    get trigger(): ITrigger | ITrigger[];
    set trigger(trigger: ITrigger | ITrigger[]);
    abstract readonly typeString: string;
    validate(client: IHass): Promise<void>;
}

// @public
export interface BlockFailed extends LifeCycleEvent<'block-failed'> {
    error: Error;
    message: string;
    parent?: IBlocksNode;
    type: string;
}

// @public
export interface BlockFinished<O = unknown> extends LifeCycleEvent<'block-finished'> {
    output: BlockOutput<O>;
    parent?: IBlocksNode;
    type: string;
}

// @public
export type BlockOutput<O> = ContinueOutput<O> | StopOutput | ConditionResult<O>;

// @public
export interface BlockPending extends LifeCycleEvent<'block-pending'> {
    parent?: IBlocksNode;
    triggeredBy?: ITrigger;
    type: string;
}

// @public
export type BlockRetainType<A extends readonly Block<unknown, unknown>[]> = A extends readonly [
infer First extends Block<unknown, unknown>,
...infer Rest extends readonly Block<unknown, unknown>[]
] ? readonly [
Block<InputType<First>, OutputTypeKeepPromise<First>>,
...BlockRetainType<Rest>
] : readonly [];

// @public
export interface BlockStarted extends LifeCycleEvent<'block-started'> {
    parent?: IBlocksNode;
    triggeredBy?: ITrigger;
    type: string;
}

// @public
export const concurrently: <A extends readonly Block<unknown, unknown>[], I = void, O = void>(actions: A) => Block<I, O>;

// @public
export interface ConditionResult<O> {
    conditionResult: boolean;
    continue: true;
    output: O;
    outputType: 'conditional';
}

// @public
export interface ContinueOutput<O> {
    continue: true;
    output: O;
    outputType: 'block';
}

// @public
export enum ExecutionMode {
    Parallel = "Parallel",
    Queue = "Queue",
    Restart = "Restart"
}

// @public
export interface GeneralFailure extends BaseHassBlocksEvent<'generalFailure'> {
    error: Error;
    message: string;
}

// @public
export type GetSequenceInput<T extends ReadonlyArray<unknown>> = T extends readonly [infer First, ...unknown[]] ? First extends Block<unknown, unknown> ? InputType<First> : never : never;

// @public
export type GetSequenceOutput<T extends ReadonlyArray<unknown>> = T extends readonly [...unknown[], infer Last] ? Last extends Block<unknown, unknown> ? OutputType<Last> : never : never;

// @public
export type HassBlocksEvent = AutomationRegistered | GeneralFailure | LogEvent | StateChanged | BlockFailed | BlockFinished | BlockPending | BlockStarted | SequenceAborted | LoadPluginsStart | LoadPluginStart | LoadPluginsFinished | LoadPluginFinished;

// @public
export type HassContext = {
    id: string;
    user_id: string | null;
    parent_id: string | null;
};

// @public
export type HassEntity = HassEntityBase & {
    attributes: {
        [key: string]: any;
    };
};

// @public
export type HassEntityAttributeBase = {
    friendly_name?: string;
    unit_of_measurement?: string;
    icon?: string;
    entity_picture?: string;
    supported_features?: number;
    hidden?: boolean;
    assumed_state?: boolean;
    device_class?: string;
    state_class?: string;
    restored?: boolean;
};

// @public
export type HassEntityBase = {
    entity_id: string;
    state: string;
    last_changed: string;
    last_updated: string;
    attributes: HassEntityAttributeBase;
    context: HassContext;
};

// @public
export type HassEventBase = {
    origin: string;
    time_fired: string;
    context: HassContext;
};

// @public
export interface IActionConfig<I = void, O = void> extends IBaseBlockConfig {
    callback: ((client: IHass, input: I) => O) | ((client: IHass, input: I) => Promise<O>);
}

// @public
export interface IAssertionConfig<I, O> extends IBaseBlockConfig {
    readonly predicate: (client: IHass, input?: I) => Promise<boolean> | boolean | {
        result: boolean;
        output: O;
    } | Promise<{
        result: boolean;
        output: O;
    }>;
}

// @public
export interface IAutomationConfig<A extends readonly any[], I = GetSequenceInput<A>, O = GetSequenceOutput<A>> extends IBaseBlockConfig {
    mode?: ExecutionMode;
    then: BlockRetainType<A> & A & ValidInputOutputSequence<I, O, A>;
    when?: ITrigger | ITrigger[];
}

// @public
export interface IBaseBlockConfig {
    readonly id?: string;
    readonly name: string;
}

// @public
export interface IBlock<I = void, O = void> {
    id: string;
    inputType: I | undefined;
    name: string;
    outputType: O | undefined;
    run(hass: IHass, input: I, events?: IEventBus, triggerId?: string): Promise<BlockOutput<O>> | BlockOutput<O>;
    toJson(): IBlocksNode;
    trigger: ITrigger | ITrigger[];
    typeString: string;
    validate(client: IHass): Promise<void>;
}

// @public
export interface IBlocksConfig {
    client?: IClient;
    logger?: ILogger;
    plugins?: IBlocksPlugin[];
}

// @public
export interface IBlocksConnection {
    registry: IBlocksRegistry;
}

// @public
export interface IBlocksPlugin {
    load(args: IPluginArgs): Promise<void>;
    readonly name: string;
}

// @public
export interface IBlocksRegistry {
    registerAutomation(...automation: IBlock<unknown, unknown>[]): Promise<void>;
}

// @public
export interface ICallServiceParams {
    data?: Record<string, unknown>;
    domain: string;
    service: string;
    target?: {
        entity_id?: string | string[];
        area_id?: string | string[];
        device_id?: string | string[];
    };
}

// @public
export interface IEventBus {
    emit<ET extends HassBlocksEvent['eventType'], T extends HassBlocksEvent & {
        eventType: ET;
    }>(type: ET, event?: Omit<T, 'id' | 'timestamp' | 'eventType'>): void;
    subscribe(callback: (event: HassBlocksEvent) => void): void;
}

// @public
export interface IfThenElseConditionConfig<TO = void, EO = void, PO = void, I = void> {
    readonly assertion: Block<I, PO>;
    readonly else: Block<PO, EO>;
    readonly id?: string;
    readonly name: string;
    readonly then: Block<PO, TO>;
}

// @public
export interface IFullBlocksClient extends IHass {
    getAutomations(): IBlock<unknown, unknown>[];
    loadStates(): Promise<void>;
    registerAutomation(...automation: IBlock<unknown, unknown>[]): Promise<void>;
    registerTrigger(trigger: Record<string, unknown>, callback: (event: unknown) => void | Promise<void>): Promise<void>;
}

// @public
export interface IHass {
    callService(params: ICallServiceParams): Promise<State[]>;
    getEntity(id: string): HassEntity;
    getState(id: string): string;
}

// @public
export interface ILogger {
    debug(message: string): void;
    error(message: string): void;
    fatal: (message: string) => void;
    info(message: string): void;
    trace(message: string): void;
    warn(message: string): void;
}

// @public
export const initialiseBlocks: (args?: IBlocksConfig) => Promise<IBlocksConnection>;

// @public
export type InputType<T extends Block<unknown, unknown>> = Exclude<T['inputType'], undefined>;

// @public
export interface IPluginArgs {
    client: IFullBlocksClient;
    config: HassConfig;
    events: IEventBus;
}

// @public
export interface ITrigger {
    attachToClient(client: IFullBlocksClient, block: IBlock<unknown, unknown>, events: IEventBus): Promise<void>;
}

// @public
export interface ITriggerConfig {
    id?: string;
    name: string;
    trigger: Record<string, unknown>;
}

// @public
interface LifeCycleEvent<T extends string> extends BaseHassBlocksEvent<T> {
    block: IBlocksNode;
    executeId: string;
    name: string;
    triggerId: string;
}
export { LifeCycleEvent as BaseHassEvent }
export { LifeCycleEvent }

// @public
export interface LoadPluginFinished extends BaseHassBlocksEvent<'load-plugin-finished'> {
    name: string;
}

// @public
export interface LoadPluginsFinished extends BaseHassBlocksEvent<'load-plugins-finished'> {
    plugins: string[];
}

// @public
export type LoadPluginsStart = BaseHassBlocksEvent<'load-plugins-started'>;

// @public
export interface LoadPluginStart extends BaseHassBlocksEvent<'load-plugin-started'> {
    name: string;
}

// @public
export interface LogEvent extends BaseHassBlocksEvent<'log-event'> {
    level: 'trace' | 'debug' | 'info' | 'warn' | 'error' | 'fatal';
    message: string;
    module: string;
}

// @public
export type OutputType<T extends Block<unknown, unknown>> = Exclude<T['outputType'], undefined> extends Promise<infer T> ? T : Exclude<T['outputType'], undefined>;

// @public
export type OutputTypeKeepPromise<T extends Block<unknown, unknown>> = Exclude<T['outputType'], undefined>;

// @public
export const sequence: <const A extends readonly any[], I = GetSequenceInput<A>, O = GetSequenceOutput<A>>(actions: BlockRetainType<A> & A & ValidInputOutputSequence<I, O, A>, mode?: ExecutionMode) => Block<I, O>;

// @public
export interface SequenceAborted extends LifeCycleEvent<'sequence-aborted'> {
    block: IBlocksNode;
    name: string;
    type: string;
}

// @public
export interface IBlocksNode {
    id: string;
    name: string;
    params?: Record<string, unknown>;
    type: string;
}

// @public
export const serviceCall: (serviceConfig: {
    name: string;
    params: Omit<CallServiceCommand, "id" | "type">;
}) => Block;

// @public
export interface StateChanged extends BaseHassBlocksEvent<'hass-state-changed'> {
    entity: string;
    hassEvent: Event_2;
}

// @public
export interface StopOutput {
    continue: false;
}

// @public
export const trigger: (config: ITriggerConfig) => ITrigger;

// @public
export type ValidInputOutputSequence<I, O, A extends readonly Block<unknown, unknown>[]> = A extends readonly [infer Only extends Block<unknown, unknown>] ? InputType<Only> extends I ? OutputType<Only> extends O ? readonly [Only] : never : never : A extends readonly [
infer First extends Block<unknown, unknown>,
...infer Rest extends readonly Block<unknown, unknown>[]
] ? InputType<First> extends I ? readonly [
First,
...ValidInputOutputSequence<OutputType<First>, O, Rest>
] : never : never;

// @public
export const when: <TO = void, EO = void, PO = void, I = void>(assertion: Block<I, PO>, config: Omit<IfThenElseConditionConfig<TO, EO, PO, I>, "assertion" | "name">) => Block<I, TO | EO>;

```
