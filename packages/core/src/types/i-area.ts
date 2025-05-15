import type { ITarget } from './i-target.ts';

/**
 * @public
 *
 * Any Home Assistant area
 */
export interface IArea extends ITarget {
  /**
   * The ids that will actually be supplied to the service call
   */
  targetIds: {
    area_id: string[];
  };
}
