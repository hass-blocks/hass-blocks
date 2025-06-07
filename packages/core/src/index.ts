/**
 * A declarative framework for building Home Assistant automations
 *
 * @remarks
 * This package contains everything you needed to get started building a hass-blocks automation
 *
 * @packageDocumentation
 */

export { initialiseBlocks, type IBlocksConfig } from '@client';
export { ExecutionAbortedError, HassBlocksError } from '@errors';

export { Block, type ITriggerConfig, trigger } from '@core';
export {
  area,
  entity,
  combine,
  toggle,
  type SwitchConfig,
  type SwitchConfigForCreation,
} from '@targets';

export type {
  ITriggerable,
  IDevice,
  IBlocksConnection,
  ILogger,
  IRunContext,
  ITarget,
  ITargetIds,
  IHass,
  IEntity,
  BaseHassBlocksEvent,
  ITrigger,
  IArea,
  HassEventBase,
  BlockOutput,
  LifeCycleEvent,
  IEventBus,
  IBlocksPlugin,
  IPluginArgs,
  IBlock,
  ICallServiceParams,
  ContinueOutput,
  StopOutput,
  IBaseBlockConfig,
  BaseHassEvent,
  BlockStarted,
  HassBlocksEvent,
  AutomationRegistered,
  GeneralFailure,
  LogEvent,
  BlockFinished,
  ConditionResult,
  BlockPending,
  IBlocksRegistry,
  HassEntityBase,
  SequenceAborted,
  LoadPluginFinished,
  LoadPluginStart,
  LoadPluginsFinished,
  LoadPluginsStart,
  StateChanged,
  ISerialisable,
  IMutableNode,
  IInitialisable,
  IAddable,
  HassContext,
  BlockFailed,
  IFullBlocksClient,
  HassEntity,
  HassEntityAttributeBase,
  IBlocksNode,
} from '@types';

export { ExecutionMode } from '@types';

export {
  when,
  loop,
  action,
  concurrently,
  sequence,
  serviceCall,
  assertion,
  automation,
} from '@building-blocks';

export type {
  Pass,
  BlockRetainType,
  ValidateSequence,
  GetSequenceInput,
  GetSequenceOutput,
  InputType,
  OutputType,
  OutputTypeKeepPromise,
  RawInputType,
  GetOutputs,
  ExtractOutput,
  SequenceValidatorRecursive,
  RemoveVoidIfNotOnlyVoid,
  MultiPassSequence,
  DoRecurse,
  SinglePassBlock,
  BlockTypeIsCompatibleWithSequence,
  SingleGeneralBlock,
  SequenceCompatibilityError,
  RecurseSequence,
  CheckScenarios,
  TwoPassBlocks,
  CheckOutput,
  NonPassSequence,
} from '@sequence-validator';

export type {
  ServiceCallArgs,
  IActionConfig,
  IDoWhileConfig,
  ILoopConfig,
  IAutomationConfig,
  IAssertionConfig,
  IfThenElseConditionConfig,
} from '@building-blocks';

export type { Prettify, MustIncludeUndefined } from '@utils';

export {
  waitMinutes,
  waitUntilState,
  waitUntilStateIsNot,
  waitSeconds,
  apiRequest,
  type ApiRequestProps,
  sendRemoteCommands,
} from '@actions';

export { stateIs, stateIsNot, gate, entityExists } from '@assertions';
