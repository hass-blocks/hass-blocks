import type { ITargetIds, ITarget, IHass } from '@types';

import { Target } from './target.ts';
import { Combination } from './combination.ts';
import { EntityDoesNotExistError } from '@errors';

/**
 * @public
 *
 * An entity id
 */

export class Entity extends Target {
  public constructor(private theId: string) {
    super();
  }

  get targetIds(): ITargetIds {
    return {
      entity_id: [this.theId],
    };
  }

  public async validate(hass: IHass): Promise<void> {
    try {
      hass.getState(this.theId);
    } catch (error) {
      EntityDoesNotExistError.RethrowWithNewPath(error, this.theId);
    }
  }
}

/**
 * @public
 *
 * An entity target
 *
 * @param targets - One or more entity or other targets
 */
export const entity = (...targets: (string | ITarget)[]): ITarget => {
  return new Combination(
    targets.map((theTarget) =>
      typeof theTarget === 'string' ? new Entity(theTarget) : theTarget,
    ),
  );
};
