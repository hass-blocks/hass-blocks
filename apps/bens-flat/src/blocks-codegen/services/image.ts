import { Block, serviceCall, ITarget } from '@hass-blocks/core';
declare global {
  /**
   * Takes a snapshot from an image.
   */
  var snapshotImage: (target: ITarget, params: SnapshotImageProps) => Block;
}

export interface SnapshotImageProps {
  /**
   * Template of a filename. Variable available is `entity_id`.
   */
  filename: string;
}

globalThis.snapshotImage = (target: ITarget, params: SnapshotImageProps) =>
  serviceCall({
    name: `Call image.snapshot`,
    params: {
      domain: 'image',
      service: 'snapshot',
      service_data: params,
    },
    target,
  });
