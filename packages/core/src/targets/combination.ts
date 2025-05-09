import type { IHass, ITarget, ITargetIds } from '../types/index.ts';
import { Target } from './target.ts';
import { mapAsync } from '../utils/index.ts';

export class Combination extends Target {
  public constructor(private targets: ITarget[]) {
    super();
  }

  get targetIds(): ITargetIds {
    return this.targets.reduce<ITargetIds>((accum, target) => {
      return {
        entity_id: [
          ...(accum.entity_id ?? []),
          ...(target.targetIds.entity_id ?? []),
        ],
        area_id: [
          ...(accum.area_id ?? []),
          ...(target.targetIds.area_id ?? []),
        ],
        device_id: [
          ...(accum.device_id ?? []),
          ...(target.targetIds.device_id ?? []),
        ],
      };
    }, {});
  }

  public override async validate(hass: IHass): Promise<void> {
    await mapAsync(this.targets, async (target) => await target.validate(hass));
  }
}
