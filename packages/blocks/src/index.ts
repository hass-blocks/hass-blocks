export { getConnection } from './client/index.ts';

export type {
  CorsOptions,
  ConnectionArgs,
  BlocksConnection,
  IBlocksClient,
  IEventBus,
  CallServiceParams,
  HassBlocksEvent,
  BaseBlockConfig,
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
