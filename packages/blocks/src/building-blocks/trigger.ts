import { Executor, Block } from "../core/index.ts";
import { ILegoClient, IEventBus } from "../types/index.ts";
import { v4 } from "uuid";

class Trigger {
  public constructor(
    public readonly name: string,
    public readonly id: string,
    public readonly trigger: Record<string, unknown>,
  ) {}

  public async attachToClient(
    client: ILegoClient,
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

export const trigger = (
  name: string,
  id: string,
  trigger: Record<string, unknown>,
) => {
  return new Trigger(name, id, trigger);
};
