import { v4 } from 'uuid';

import { Executor } from './executor.ts';
import type { Block } from './block.ts';

import type {
  IFullBlocksClient,
  ITrigger,
  ITarget,
  IMutableNode,
  IBlocksNode,
  IEventBus,
} from '@types';
import { mapAsync, md5 } from '@utils';
import type { IMQTTConnection } from '@hass-blocks/hass-mqtt';

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

export class Trigger implements IMutableNode {
  public readonly name: string;
  public readonly id: string;
  public readonly trigger: Record<string, unknown>;
  public readonly type = 'trigger';
  private _children: IBlocksNode[] = [];

  public addChild(...node: IMutableNode[]): void {
    this._children.push(...node);
  }

  public constructor(public config: ITriggerConfig) {
    this.name = config.name;
    this.id = config.id ?? md5(this.name);
    this.trigger = config.trigger;
  }

  public addNext(node: IMutableNode): void {
    this.addChild(node);
  }

  public async initialise(hass: IFullBlocksClient, mqtt: IMQTTConnection) {
    await mapAsync(this.config.targets, (target) =>
      target.initialise(hass, mqtt),
    );
  }

  public get children(): IBlocksNode[] {
    return this._children;
  }

  public toJson(): IBlocksNode {
    return {
      children: this.children,
      id: this.id,
      type: this.type,
      name: this.name,
    };
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
