import { ITrigger } from './i-trigger.ts';
import { Event } from '@hass-blocks/homeassistant-typescript';
import { BlockOutput } from './block-output.ts';

export interface SerialisedBlock {
  id: string;
  name: string;
  type: string;
  params?: Record<string, unknown>;
}

/**
 * @public
 */
export type HassBlocksEvent =
  | AutomationRegistered
  | GeneralFailure
  | StateChanged
  | BlockFailed
  | BlockFinished
  | BlockPending
  | BlockStarted
  | SequenceAborted
  | LoadPluginsStart
  | LoadPluginStart
  | LoadPluginsFinished
  | LoadPluginFinished;

/**
 * @public
 */
interface LoadPluginsStart {
  type: 'load-plugins-started';
}

/**
 * @public
 */
interface LoadPluginStart {
  type: 'load-plugin-started';
  name: string;
}

/**
 * @public
 */
interface LoadPluginFinished {
  type: 'load-plugin-finished';
  name: string;
}

/**
 * @public
 */
interface LoadPluginsFinished {
  type: 'load-plugins-finished';
  plugins: string[];
}

/**
 * @public
 */
export interface StateChanged {
  type: 'hass-state-changed';
  entity: string;
  hassEvent: Event;
}

interface BaseHassEvent {
  triggerId: string;
  executeId: string;
  name: string;
  block: SerialisedBlock;
}

/**
 * @public
 */
export interface AutomationRegistered {
  type: 'automation';
  name: string;
  block: SerialisedBlock;
  status: 'registered';
}

/**
 * @public
 */
export interface GeneralFailure {
  type: 'generalFailure';
  status: 'error';
  message: string;
  error: Error;
}

/**
 * @public
 */
export interface BlockStarted extends BaseHassEvent {
  type: string;
  status: 'started';
  parent?: SerialisedBlock;
  triggeredBy?: ITrigger;
}

/**
 * @public
 */
export interface BlockFinished<O = unknown> extends BaseHassEvent {
  type: string;
  status: 'finished';
  output: BlockOutput<O>;
  parent?: SerialisedBlock;
}

/**
 * @public
 */
export interface BlockFailed extends BaseHassEvent {
  type: string;
  status: 'failed';
  message: string;
  error: Error;
  parent?: SerialisedBlock;
}

/**
 * @public
 */
export interface BlockPending extends BaseHassEvent {
  type: string;
  status: 'pending';
  parent?: SerialisedBlock;
  triggeredBy?: ITrigger;
}

export interface SequenceAborted extends BaseHassEvent {
  type: string;
  status: 'aborted';
  block: SerialisedBlock;
  name: string;
}
