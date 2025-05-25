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
  IBlocksNode,
  IDevice,
  IBlocksConnection,
  ILogger,
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
  HassContext,
  BlockFailed,
  IFullBlocksClient,
  HassEntity,
  HassEntityAttributeBase,
  SerialisedBlock,
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
  IActionConfig,
  ILoopConfig,
  IAutomationConfig,
  IAssertionConfig,
  IfThenElseConditionConfig,
  BlockRetainType,
  ValidInputOutputSequence,
  GetSequenceInput,
  GetSequenceOutput,
  OutputType,
  InputType,
  OutputTypeKeepPromise,
} from '@building-blocks';
