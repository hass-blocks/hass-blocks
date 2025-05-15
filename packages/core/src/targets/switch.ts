import { Entity } from './entity.ts';

interface SwitchConfig<TId extends `switch.${string}`> {
  createWithMqtt: boolean;
  id: TId;
}

export class Switch<TId extends `switch.${string}`> extends Entity<TId> {
  public constructor(config: SwitchConfig<TId>);
  public constructor(id: TId);
  public constructor(id: TId | SwitchConfig<TId>) {
    super(typeof id === 'string' ? id : id.id);
  }
}
