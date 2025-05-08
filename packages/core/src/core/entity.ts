import type { ITargetIds } from 'src/types/i-target-ids.ts';
import type { IHass, ITarget } from '../types/index.ts';

class Entity implements ITarget {
  public constructor(private entityIds: string[]) {}

  get targetIds(): ITargetIds {
    return {
      entity_id: this.entityIds,
    };
  }

  public async validate(hass: IHass): Promise<void> {
    this.entityIds.forEach((id) => hass.getState(id));
  }
}

/**
 * @public
 *
 * An entity target
 *
 * @param id - One or more entity ids
 */
export const entity = (...id: string[]): ITarget => {
  return new Entity(id);
};
