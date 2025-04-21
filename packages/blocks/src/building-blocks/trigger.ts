import { md5 } from '../utils/md5.ts';
import { Executor, Block } from '../core/index.ts';
import { IBlocksClient, IEventBus, ITrigger } from '../types/index.ts';
import { v4 } from 'uuid';

export interface TriggerProps {
  name: string;
  id?: string;
  trigger: Record<string, unknown>;
}

class Trigger implements ITrigger {
  public readonly name: string;
  public readonly id: string;
  public readonly trigger: Record<string, unknown>;

  public constructor(public config: TriggerProps) {
    this.name = config.name;
    this.id = config.id ?? md5(this.name);
    this.trigger = config.trigger;
  }

  public async attachToClient(
    client: IBlocksClient,
    block: Block<unknown, unknown>,
    events: IEventBus,
  ) {
    await client.registerTrigger(this.trigger, async (event) => {
      const triggerId = v4();

      const executor = new Executor([block], client, events, triggerId, event);

      await executor.run();
    });
  }
}

/**
 * Associate the automation with a Home Assistant trigger. For more details, see {@link https://www.home-assistant.io/docs/automation/trigger/ | the Home Assistant docs}
 */
export const trigger = (config: TriggerProps): ITrigger => {
  return new Trigger(config);
};
