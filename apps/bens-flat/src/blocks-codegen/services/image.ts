import {
  serviceCall,
  type Block,
  type IEntity,
  type IArea,
  type ServiceCallArgs,
} from '@hass-blocks/core';

declare global {
  interface SnapshotImageProps {
    /**
     * Template of a filename. Variable available is `entity_id`.
     */
    filename: string;
  }

  /**
   * Takes a snapshot from an image.
   */
  var snapshotImage: (
    target: IEntity<`image.${string}`> | IArea,
    params: SnapshotImageProps,
  ) => Block<Partial<ServiceCallArgs<SnapshotImageProps>> | undefined, void>;
}

globalThis.snapshotImage = (target, params) =>
  serviceCall({
    name: `Call image.snapshot`,
    params: {
      domain: 'image',
      service: 'snapshot',
      service_data: params,
    },
    target,
  });
