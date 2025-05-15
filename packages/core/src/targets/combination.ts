import type {
  IFullBlocksClient,
  ITargetIds,
  ITarget,
  IEntity,
  IArea,
  IDevice,
} from '@types';

import { mapAsync } from '@utils';

export class Combination<T extends ReadonlyArray<IEntity | IArea | IDevice>>
  implements ITarget
{
  private theTargets: T;

  public constructor(...targets: T) {
    this.theTargets = targets;
  }

  get targetIds(): T[number]['targetIds'] {
    return this.theTargets.reduce<ITargetIds>((accum, target) => {
      const entities = [
        ...(accum.entity_id ?? []),
        ...(('entity_id' in target.targetIds
          ? target.targetIds.entity_id
          : []) ?? []),
      ];

      const areas = [
        ...(accum.area_id ?? []),
        ...(('area_id' in target.targetIds ? target.targetIds.area_id : []) ??
          []),
      ];

      const devices = [
        ...(accum.device_id ?? []),
        ...(('device_id' in target.targetIds
          ? target.targetIds.device_id
          : []) ?? []),
      ];

      return {
        ...(entities.length > 0 ? { entity_id: entities } : {}),
        ...(areas.length > 0 ? { area_id: areas } : {}),
        ...(devices.length > 0 ? { device_id: devices } : {}),
      };
    }, {}) as T[number]['targetIds'];
  }

  public async initialise(hass: IFullBlocksClient): Promise<void> {
    await mapAsync(
      this.theTargets,
      async (target) => await target.initialise(hass),
    );
  }
}

/**
 * @public
 * Combine a list of targets
 *
 * @returns
 */
export const combine = <
  T extends
    | ReadonlyArray<IArea>
    | ReadonlyArray<IEntity>
    | ReadonlyArray<IDevice>,
>(
  ...items: T
): T[number] => {
  return new Combination(...items) as T[number];
};
