import type { ITargetIds, ITarget, IHass } from '../types/index.ts';
import { Target } from '../core/index.ts';

export class Entity extends Target {
  public constructor(protected theEntityIds: `${string}.${string}`[]) {
    super();
  }

  get targetIds(): ITargetIds {
    return {
      entity_id: this.theEntityIds,
    };
  }

  public async validate(hass: IHass): Promise<void> {
    this.theEntityIds.forEach((id) => hass.getState(id));
  }
}

/**
 * @public
 *
 * An entity target
 *
 * @param id - One or more entity ids
 */
export const entity = (...id: `${string}.${string}`[]): ITarget => {
  return new Entity(id);
};
