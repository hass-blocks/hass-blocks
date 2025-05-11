import { serviceCall, ITarget } from '@hass-blocks/core';

export interface SnapshotImageProps {
  /**
   * Template of a filename. Variable available is `entity_id`.
   */
  filename: string;
}

/**
 * Takes a snapshot from an image.
 */
export const snapshotImage = (target: ITarget, params: SnapshotImageProps) =>
  serviceCall({
    name: `Call image.snapshot`,
    params: {
      domain: 'image',
      service: 'snapshot',
      service_data: params,
    },
    target,
  });
