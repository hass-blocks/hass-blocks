import type { IHass, IArea } from '@types';
import { HassBlocksError } from '@errors';

export class Area<I extends string> implements IArea<I> {
  public constructor(
    private theId: I,
    private name?: string,
  ) {}

  get targetIds() {
    return {
      area_id: [this.theId],
    };
  }

  public toString() {
    return `Area(${this.name})`;
  }

  public async initialise(hass: IHass): Promise<void> {
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
export const area = <I extends string>(id: I, name?: string): IArea<I> => {
  return new Area(id, name);
};
