import type { IHass, IArea } from '@types';
import { HassBlocksError } from '@errors';

export class Area implements IArea {
  public constructor(private theId: string) {}

  get targetIds() {
    return {
      area_id: [this.theId],
    };
  }

  public async validate(hass: IHass): Promise<void> {
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
export const area = (id: string): IArea => {
  return new Area(id);
};
