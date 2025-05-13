import type { ITarget } from './i-target.ts';

/**
 * @public
 *
 * Any Home Assistant device
 */
export interface IDevice extends ITarget {
  /**
   * The ids that will actually be supplied to the service call
   */
  targetIds: {
    device_id: string[];
  };
}
