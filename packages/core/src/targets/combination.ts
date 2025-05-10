import type { IHass, ITarget, ITargetIds } from '@types';
import { mapAsync } from '@utils';

import { Target } from './target.ts';

export class Combination extends Target {
  public constructor(private targets: ITarget[]) {
    super();
  }

  get targetIds(): ITargetIds {
    return this.targets.reduce<ITargetIds>((accum, target) => {
      const entities = [
        ...(accum.entity_id ?? []),
        ...(target.targetIds.entity_id ?? []),
      ];

      const areas = [
        ...(accum.area_id ?? []),
        ...(target.targetIds.area_id ?? []),
      ];

      const devices = [
        ...(accum.device_id ?? []),
        ...(target.targetIds.device_id ?? []),
      ];

      return {
        ...(entities.length > 0 ? { entity_id: entities } : {}),
        ...(areas.length > 0 ? { area_id: areas } : {}),
        ...(devices.length > 0 ? { device_id: devices } : {}),
      };
    }, {});
  }

  public override async validate(hass: IHass): Promise<void> {
    await mapAsync(this.targets, async (target) => await target.validate(hass));
  }
}
