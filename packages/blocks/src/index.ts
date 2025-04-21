/**
 * A declarative framework for building Home Assistant automations
 *
 * @remarks
 * This package contains everything you needed to get started building a hass-blocks automation
 *
 * @packageDocumentation
 */

export { initialiseBlocks } from './client/index.ts';

export type {
  BlocksConnection,
  IBlocksClient,
  IEventBus,
  IBlocksPlugin,
  PluginArgs,
  IBlock,
  CallServiceParams,
  HassBlocksEvent,
  BaseBlockConfig,
  BlockStarted,
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

export type { ActionArgs } from './building-blocks/index.ts';
