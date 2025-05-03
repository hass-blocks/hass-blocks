import { BlockOutput } from './block-output.ts';
import { IEventBus } from './i-event-bus.ts';
import { IHass } from './i-hass.ts';
import { ITrigger } from './i-trigger.ts';
import { SerialisedBlock } from './serialised-block.ts';

/**
 * @public
 *
 * The abstract base class that all blocks inherit from
 */
export interface IBlock<I = void, O = void> {
  /**
   * A JSON representation of the block. Used for websocket and rest serialisation
   */
  toJson(): SerialisedBlock;

  /**
   * String to identify this particular instance of a block. Must be unique
   */
  id: string;

  /**
   * Friendly name for the block - for use in user interfaces
   */
  name: string;

  /**
   * There is no reason to actually use this property. It exists as a typescript hack
   * in order to allow the type of a subclass to be inferred from the abstract version
   */
  inputType: I | undefined;

  /**
   * There is no reason to actually use this property. It exists as a typescript hack
   * in order to allow the type of a subclass to be inferred from the abstract version
   */
  outputType: O | undefined;

  /**
   * Triggers that are currently registered with this block
   */
  trigger: ITrigger | ITrigger[];

  /**
   * If defined, this method will be called when the parent automation is registered.
   * If any configuration is invalid, an error should be thrown
   */
  validate(client: IHass): Promise<void>;

  /**
   * String that identifies the kind of block
   */
  typeString: string;

  /**
   * Called by the framework when the block is executed
   *
   * @param client - An initialised blocks client,
   * @param input - The input for this block - usually the output from the last one
   * @param events - An initialised event bus
   * @param triggerId - a uuid trigger id, unique to this particular trigger sequence
   */
  run(
    hass: IHass,
    input: I,
    events?: IEventBus,
    triggerId?: string,
  ): Promise<BlockOutput<O>> | BlockOutput<O>;
}
