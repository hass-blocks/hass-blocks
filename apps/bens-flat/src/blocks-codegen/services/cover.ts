import {
  serviceCall,
  type Block,
  type IEntity,
  type IArea,
} from '@hass-blocks/core';

declare global {
  /**
   * Opens a cover.
   */
  var openCoverCover: (target: IEntity<`cover.${string}`> | IArea) => Block;

  /**
   * Closes a cover.
   */
  var closeCoverCover: (target: IEntity<`cover.${string}`> | IArea) => Block;

  interface SetCoverPositionCoverProps {
    /**
     * Target position.
     */
    position: number;
  }

  /**
   * Moves a cover to a specific position.
   */
  var setCoverPositionCover: (
    target: IEntity<`cover.${string}`> | IArea,
    params?: SetCoverPositionCoverProps,
  ) => Block;

  /**
   * Stops the cover movement.
   */
  var stopCoverCover: (target: IEntity<`cover.${string}`> | IArea) => Block;

  /**
   * Toggles a cover open/closed.
   */
  var toggleCover: (target: IEntity<`cover.${string}`> | IArea) => Block;

  /**
   * Tilts a cover open.
   */
  var openCoverTiltCover: (target: IEntity<`cover.${string}`> | IArea) => Block;

  /**
   * Tilts a cover to close.
   */
  var closeCoverTiltCover: (
    target: IEntity<`cover.${string}`> | IArea,
  ) => Block;

  /**
   * Stops a tilting cover movement.
   */
  var stopCoverTiltCover: (target: IEntity<`cover.${string}`> | IArea) => Block;

  interface SetCoverTiltPositionCoverProps {
    /**
     * Target tilt positition.
     */
    tilt_position: number;
  }

  /**
   * Moves a cover tilt to a specific position.
   */
  var setCoverTiltPositionCover: (
    target: IEntity<`cover.${string}`> | IArea,
    params?: SetCoverTiltPositionCoverProps,
  ) => Block;

  /**
   * Toggles a cover tilt open/closed.
   */
  var toggleCoverTiltCover: (
    target: IEntity<`cover.${string}`> | IArea,
  ) => Block;
}

globalThis.openCoverCover = (target) =>
  serviceCall({
    name: `Call cover.open_cover`,
    params: {
      domain: 'cover',
      service: 'open_cover',
    },
    target,
  });

globalThis.closeCoverCover = (target) =>
  serviceCall({
    name: `Call cover.close_cover`,
    params: {
      domain: 'cover',
      service: 'close_cover',
    },
    target,
  });

globalThis.setCoverPositionCover = (target, params) =>
  serviceCall({
    name: `Call cover.set_cover_position`,
    params: {
      domain: 'cover',
      service: 'set_cover_position',
      service_data: params,
    },
    target,
  });

globalThis.stopCoverCover = (target) =>
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

globalThis.openCoverTiltCover = (target) =>
  serviceCall({
    name: `Call cover.open_cover_tilt`,
    params: {
      domain: 'cover',
      service: 'open_cover_tilt',
    },
    target,
  });

globalThis.closeCoverTiltCover = (target) =>
  serviceCall({
    name: `Call cover.close_cover_tilt`,
    params: {
      domain: 'cover',
      service: 'close_cover_tilt',
    },
    target,
  });

globalThis.stopCoverTiltCover = (target) =>
  serviceCall({
    name: `Call cover.stop_cover_tilt`,
    params: {
      domain: 'cover',
      service: 'stop_cover_tilt',
    },
    target,
  });

globalThis.setCoverTiltPositionCover = (target, params) =>
  serviceCall({
    name: `Call cover.set_cover_tilt_position`,
    params: {
      domain: 'cover',
      service: 'set_cover_tilt_position',
      service_data: params,
    },
    target,
  });

globalThis.toggleCoverTiltCover = (target) =>
  serviceCall({
    name: `Call cover.toggle_cover_tilt`,
    params: {
      domain: 'cover',
      service: 'toggle_cover_tilt',
    },
    target,
  });
