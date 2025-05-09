import { Combination } from './combination.ts';
import type { IHass, ITarget, ITargetIds } from '../types/index.ts';

export abstract class Target implements ITarget {
  public abstract targetIds: ITargetIds;

  public abstract validate(hass: IHass): Promise<void>;

  public merge(other: ITarget): ITarget {
    return new Combination([this, other]);
  }

  public get entityIds(): string[] {
    if (!this.targetIds.entity_id) {
      throw new Error('Target does not supply entity IDs');
    }
    return this.targetIds.entity_id;
  }

  public get deviceIds(): string[] {
    if (!this.targetIds.device_id) {
      throw new Error('Target does not supply device IDs');
    }
    return this.targetIds.device_id;
  }

  public get areaIds(): string[] {
    if (!this.targetIds.area_id) {
      throw new Error('Target doee not supply area IDs');
    }
    return this.targetIds.area_id;
  }
}
