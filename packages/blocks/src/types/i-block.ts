import { BlockOutput } from './block-output.ts';
import { IEventBus } from './i-event-bus.ts';
import { IBlocksClient } from './i-blocks-client.ts';
import { SerialisedBlock } from './serialised-block.ts';

export interface IBlock<I = void, O = void> {
  toJson(): SerialisedBlock;

  id: string;

  name: string;

  inputType: I | undefined;

  outputType: O | undefined;

  validate: (client: IBlocksClient) => Promise<void>;

  typeString: string;

  run: (
    client: IBlocksClient,
    input: I,
    events?: IEventBus,
    triggerId?: string,
  ) => Promise<BlockOutput<O>> | BlockOutput<O>;
}
