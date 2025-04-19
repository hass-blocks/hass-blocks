export { getConnection } from './client/index.ts';

export type {
  CorsOptions,
  ConnectionArgs,
  LegoConnection,
  ILegoClient,
  IEventBus,
  CallServiceParams,
  HassLegoEvent,
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
