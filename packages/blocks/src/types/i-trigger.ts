import { IBlock } from './i-block.ts';
import { IEventBus } from './i-event-bus.ts';
import { IBlocksClient } from './i-blocks-client.ts';

export interface ITrigger {
  attachToClient: (
    client: IBlocksClient,
    block: IBlock<unknown, unknown>,
    events: IEventBus,
  ) => Promise<void>;
}
