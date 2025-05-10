import type { IHass, ITarget, ITargetIds } from '@types';
import { HassBlocksError } from '@errors';

import { Target } from './target.ts';
import { Combination } from './combination.ts';

export class Area extends Target {
  public constructor(private theId: string) {
    super();
  }

  get targetIds(): ITargetIds {
    return {
      area_id: [this.theId],
    };
  }

  public override async validate(hass: IHass): Promise<void> {
    const areas = await hass.getAreas();

    const found = areas.find((area) => this.theId === area.area_id);
    if (!found) {
      throw new HassBlocksError(
        `No area ${this.theId} registered with Home Assistant`,
      );
    }
  }
}

/**
 * @public
 *
 * An area target
 * @param id - One or more area ids
 */
export const area = (...targets: (string | ITarget)[]): ITarget => {
  return new Combination(
    targets.map((theTarget) =>
      typeof theTarget === 'string' ? new Area(theTarget) : theTarget,
    ),
  );
};
