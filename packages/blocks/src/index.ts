/**
 * A declarative framework for building Home Assistant automations
 *
 * @remarks
 * This package contains everything you needed to get started building a hass-blocks automation
 *
 * @packageDocumentation
 */

export { initialiseBlocks } from './client/index.ts';
export type { IBlocksConfig } from "./client/index.ts"

export { Block } from "./core/index.ts"

export type {
  IBlocksConnection,
  IHass,
  ITrigger,
  BlockOutput,
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
  ExecutionMode,
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
  SerialisedBlock
} from './types/index.ts';

export {
  when,
  action,
  concurrently,
  sequence,
  serviceCall,
  assertion,
  trigger,
  automation,
} from './building-blocks/index.ts';

export type {
  ITriggerConfig,
  IActionConfig,
  IAutomationConfig,
  IAssertionConfig,
  IfThenElseConditionConfig,
  BlockRetainType,
  ValidInputOutputSequence,
  GetSequenceInput,
  GetSequenceOutput,
  OutputType,
  InputType,
  OutputTypeKeepPromise
} from './building-blocks/index.ts';
