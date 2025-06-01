import {
  serviceCall,
  type Block,
  type IEntity,
  type IArea,
  type ServiceCallArgs,
} from '@hass-blocks/core';

declare global {
  /**
   * Opens a cover.
   */
  var openCover: (
    target: IEntity<`cover.${string}`> | IArea,
  ) => Block<Partial<ServiceCallArgs<unknown>> | undefined, void>;

  /**
   * Closes a cover.
   */
  var closeCover: (
    target: IEntity<`cover.${string}`> | IArea,
  ) => Block<Partial<ServiceCallArgs<unknown>> | undefined, void>;

  interface SetCoverPosition {
    /**
     * Target position.
     */
    position: number;
  }

  /**
   * Moves a cover to a specific position.
   */
  var setCoverPosition: (
    target: IEntity<`cover.${string}`> | IArea,
    params: SetCoverPosition,
  ) => Block<Partial<ServiceCallArgs<SetCoverPosition>> | undefined, void>;

  /**
   * Stops the cover movement.
   */
  var stopCover: (
    target: IEntity<`cover.${string}`> | IArea,
  ) => Block<Partial<ServiceCallArgs<unknown>> | undefined, void>;

  /**
   * Toggles a cover open/closed.
   */
  var toggleCover: (
    target: IEntity<`cover.${string}`> | IArea,
  ) => Block<Partial<ServiceCallArgs<unknown>> | undefined, void>;

  /**
   * Tilts a cover open.
   */
  var openCoverTilt: (
    target: IEntity<`cover.${string}`> | IArea,
  ) => Block<Partial<ServiceCallArgs<unknown>> | undefined, void>;

  /**
   * Tilts a cover to close.
   */
  var closeCoverTilt: (
    target: IEntity<`cover.${string}`> | IArea,
  ) => Block<Partial<ServiceCallArgs<unknown>> | undefined, void>;

  /**
   * Stops a tilting cover movement.
   */
  var stopCoverTilt: (
    target: IEntity<`cover.${string}`> | IArea,
  ) => Block<Partial<ServiceCallArgs<unknown>> | undefined, void>;

  interface SetCoverTiltPosition {
    /**
     * Target tilt positition.
     */
    tilt_position: number;
  }

  /**
   * Moves a cover tilt to a specific position.
   */
  var setCoverTiltPosition: (
    target: IEntity<`cover.${string}`> | IArea,
    params: SetCoverTiltPosition,
  ) => Block<Partial<ServiceCallArgs<SetCoverTiltPosition>> | undefined, void>;

  /**
   * Toggles a cover tilt open/closed.
   */
  var toggleCoverTilt: (
    target: IEntity<`cover.${string}`> | IArea,
  ) => Block<Partial<ServiceCallArgs<unknown>> | undefined, void>;
}

globalThis.openCover = (target) =>
  serviceCall({
    name: `Call cover.open_cover`,
    params: {
      domain: 'cover',
      service: 'open_cover',
    },
    target,
  });

globalThis.closeCover = (target) =>
  serviceCall({
    name: `Call cover.close_cover`,
    params: {
      domain: 'cover',
      service: 'close_cover',
    },
    target,
  });

globalThis.setCoverPosition = (target, params) =>
  serviceCall({
    name: `Call cover.set_cover_position`,
    params: {
      domain: 'cover',
      service: 'set_cover_position',
      service_data: params,
    },
    target,
  });

globalThis.stopCover = (target) =>
  serviceCall({
    name: `Call cover.stop_cover`,
    params: {
      domain: 'cover',
      service: 'stop_cover',
    },
    target,
  });

globalThis.toggleCover = (target) =>
  serviceCall({
    name: `Call cover.toggle`,
    params: {
      domain: 'cover',
      service: 'toggle',
    },
    target,
  });

globalThis.openCoverTilt = (target) =>
  serviceCall({
    name: `Call cover.open_cover_tilt`,
    params: {
      domain: 'cover',
      service: 'open_cover_tilt',
    },
    target,
  });

globalThis.closeCoverTilt = (target) =>
  serviceCall({
    name: `Call cover.close_cover_tilt`,
    params: {
      domain: 'cover',
      service: 'close_cover_tilt',
    },
    target,
  });

globalThis.stopCoverTilt = (target) =>
  serviceCall({
    name: `Call cover.stop_cover_tilt`,
    params: {
      domain: 'cover',
      service: 'stop_cover_tilt',
    },
    target,
  });

globalThis.setCoverTiltPosition = (target, params) =>
  serviceCall({
    name: `Call cover.set_cover_tilt_position`,
    params: {
      domain: 'cover',
      service: 'set_cover_tilt_position',
      service_data: params,
    },
    target,
  });

globalThis.toggleCoverTilt = (target) =>
  serviceCall({
    name: `Call cover.toggle_cover_tilt`,
    params: {
      domain: 'cover',
      service: 'toggle_cover_tilt',
    },
    target,
  });
