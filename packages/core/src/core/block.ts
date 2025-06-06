import type {
  BlockOutput,
  IBlock,
  IFullBlocksClient,
  ITarget,
  ITrigger,
  IBlocksNode,
  IMutableNode,
} from '@types';

import { EntityDoesNotExistError, HassBlocksError } from '@errors';
import { mapAsync } from '@utils';
import type { IMQTTConnection } from '@hass-blocks/hass-mqtt';
import type { IRunContext } from '@types';

/**
 * @public
 *
 * The core Hass Blocks abstraction! - all Blocks must extend from this class for
 * the framework to be able to execute them
 */
export abstract class Block<I = void, O = void>
  implements IBlock<I, O>, IMutableNode
{
  public readonly children: IMutableNode[] = [];
  public constructor(
    /**
     * String to identify this particular instance of a block. Must be unique
     */
    public readonly id: string,
    private targets: ITarget[] | undefined,
    /**
     * All child nodes of this block
     */
    private _trigger?: ITrigger | ITrigger[],
  ) {}

  public addChild(...node: IMutableNode[]) {
    this.children.push(...node);
  }

  protected hasTrigger(): boolean {
    return Array.isArray(this._trigger)
      ? this._trigger.length > 0
      : Boolean(this._trigger);
  }

  /**
   * A JSON representation of the block. Used for websocket and rest serialisation
   */
  public toJson(): IBlocksNode {
    return {
      children: this.children.map((child) => child.toJson()),
      type: this.type,
      id: this.id,
      name: this.name,
    };
  }

  public addNext(node?: IMutableNode): void {
    if (node) {
      this.addChild(node);
    }
  }

  /**
   * Triggers that are currently registered with this block
   */
  public get trigger(): ITrigger | ITrigger[] {
    if (!this._trigger) {
      throw new HassBlocksError('No trigger has been set');
    }
    return this._trigger;
  }

  public set trigger(trigger: ITrigger | ITrigger[]) {
    this._trigger = trigger;
  }

  /**
   * Friendly name for the block - for use in user interfaces
   */
  public abstract readonly name: string;

  /**
   * If defined, this method will be called when the parent automation is registered.
   * If any configuration is invalid, an error should be thrown
   */
  public async initialise(
    client: IFullBlocksClient,
    mqtt: IMQTTConnection,
  ): Promise<void> {
    try {
      await mapAsync(
        this.children,
        async (action) => await action.initialise(client, mqtt),
      );

      await mapAsync(this.targets, async (target) =>
        target.initialise(client, mqtt),
      );
    } catch (error) {
      EntityDoesNotExistError.RethrowWithNewPath(error, this.name);
    }
  }

  public linkNodes(...nodes: IMutableNode[]) {
    nodes.forEach((item, index, array) => {
      const lastItem = array[index + 1];
      if (lastItem) {
        item.addNext(lastItem);
      } else {
        item.addNext();
      }
    });
  }

  /**
   * String that identifies the kind of block
   */
  public abstract readonly type: string;

  /**
   * Called by the framework when the block is executed
   *
   * @param client - An initialised blocks client,
   * @param input - The input for this block - usually the output from the last one
   * @param events - An initialised event bus
   * @param triggerId - a uuid trigger id, unique to this particular trigger sequence
   */
  public abstract run(
    context: IRunContext<I>,
  ): Promise<BlockOutput<O>> | BlockOutput<O>;
}
