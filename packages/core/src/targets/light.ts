import type { ISwitchable } from '../types/index.ts';
import { Entity } from './entity.ts';
import { switchThing } from './switch-thing.ts';

export class Light extends Entity implements ISwitchable {
  // biome-ignore lint/complexity/noUselessConstructor: <explanation>
  public constructor(entityIds: `light.${string}`) {
    super(entityIds);
  }

  switchOn() {
    return switchThing(this, 'on', 'light');
  }

  switchOff() {
    return switchThing(this, 'off', 'light');
  }
}
