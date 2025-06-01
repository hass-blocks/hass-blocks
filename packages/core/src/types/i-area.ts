import type { ITarget } from './i-target.ts';

/**
 * @public
 *
 * Any Home Assistant area
 */
export interface IArea<I extends string = string> extends ITarget {
  /**
   * The ids that will actually be supplied to the service call
   */
  targetIds: {
    area_id: I[];
  };
}
