import { BlockOutput, IEventBus, IBlock, ILegoClient } from '../types/index.ts';

/**
 * @public
 */
export abstract class Block<I = void, O = void> implements IBlock<I, O> {
  public constructor(
    /**
     * String to identify this particular instance of a block. Must be unique
     */
    public readonly id: string,

    private children?: Block<unknown, unknown>[],
  ) {}
  public toJson() {
    return {
      type: this.typeString,
      id: this.id,
      name: this.name,
    };
  }

  public abstract readonly name: string;
  /**
   * There is no reason to actually use this property. It exists as a typescript hack
   * in order to allow the type of a subclass to be inferred from the abstract version
   */
  public inputType: I | undefined;

  /**
   * There is no reason to actually use this property. It exists as a typescript hack
   * in order to allow the type of a subclass to be inferred from the abstract version
   */
  public outputType: O | undefined;

  /**
   * If defined, this method will be called when the parent automation is registered.
   * If any configuration is invalid, an error should be thrown
   */

  public async validate(client: ILegoClient): Promise<void> {
    await Promise.all(
      this.children?.map(async (action) => {
        await action.validate(client);
      }) ?? [],
    );
  }

  public abstract readonly typeString: string;

  public abstract run(
    client: ILegoClient,
    input: I,
    events?: IEventBus,
    triggerId?: string,
  ): Promise<BlockOutput<O>> | BlockOutput<O>;
}
