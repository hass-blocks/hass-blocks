import { md5 } from '../utils/md5.ts';
import { Executor, type Block } from './index.ts';
import type {
  IEventBus,
  IFullBlocksClient,
  IHass,
  ITarget,
  ITrigger,
} from '../types/index.ts';
import { v4 } from 'uuid';
import { mapAsync } from 'src/utils/map-async.ts';

/**
 * @public
 *
 * The configuration object for a trigger
 */
export interface ITriggerConfig {
  /**
   * The name of the trigger
   */
  name: string;

  /**
   * A id string for the trigger (must be unique)
   */
  id?: string;

  /**
   * The Home Assistant trigger parameters (See {@link https://www.home-assistant.io/docs/automation/trigger/})
   */
  trigger: Record<string, unknown>;

  /**
   * A list of targets used by the trigger. The framework will validate the targets on boot and
   * at regular intervals
   */
  targets?: ITarget[];
}

export class Trigger implements ITrigger {
  public readonly name: string;
  public readonly id: string;
  public readonly trigger: Record<string, unknown>;

  public constructor(public config: ITriggerConfig) {
    this.name = config.name;
    this.id = config.id ?? md5(this.name);
    this.trigger = config.trigger;
  }

  public async validate(hass: IHass) {
    await mapAsync(this.config.targets, (target) => target.validate(hass));
  }

  public async attachToClient(
    client: IFullBlocksClient,
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
 * @public
 *
 * Associate the automation with a Home Assistant trigger. For more details, see {@link https://www.home-assistant.io/docs/automation/trigger/ | the Home Assistant docs}
 */
export const trigger = (config: ITriggerConfig): ITrigger => {
  return new Trigger(config);
};
