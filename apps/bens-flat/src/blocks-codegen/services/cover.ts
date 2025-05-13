import { serviceCall, Block, IEntity, IArea } from '@hass-blocks/core';
declare global {
  /**
   * Opens a cover.
   */
  var openCoverCover: (
    target: IEntity<`cover.${string}`> | IArea,
    params?: OpenCoverCoverProps,
  ) => Block;
  /**
   * Closes a cover.
   */
  var closeCoverCover: (
    target: IEntity<`cover.${string}`> | IArea,
    params?: CloseCoverCoverProps,
  ) => Block;
  /**
   * Moves a cover to a specific position.
   */
  var setCoverPositionCover: (
    target: IEntity<`cover.${string}`> | IArea,
    params: SetCoverPositionCoverProps,
  ) => Block;
  /**
   * Stops the cover movement.
   */
  var stopCoverCover: (
    target: IEntity<`cover.${string}`> | IArea,
    params?: StopCoverCoverProps,
  ) => Block;
  /**
   * Toggles a cover open/closed.
   */
  var toggleCover: (
    target: IEntity<`cover.${string}`> | IArea,
    params?: ToggleCoverProps,
  ) => Block;
  /**
   * Tilts a cover open.
   */
  var openCoverTiltCover: (
    target: IEntity<`cover.${string}`> | IArea,
    params?: OpenCoverTiltCoverProps,
  ) => Block;
  /**
   * Tilts a cover to close.
   */
  var closeCoverTiltCover: (
    target: IEntity<`cover.${string}`> | IArea,
    params?: CloseCoverTiltCoverProps,
  ) => Block;
  /**
   * Stops a tilting cover movement.
   */
  var stopCoverTiltCover: (
    target: IEntity<`cover.${string}`> | IArea,
    params?: StopCoverTiltCoverProps,
  ) => Block;
  /**
   * Moves a cover tilt to a specific position.
   */
  var setCoverTiltPositionCover: (
    target: IEntity<`cover.${string}`> | IArea,
    params: SetCoverTiltPositionCoverProps,
  ) => Block;
  /**
   * Toggles a cover tilt open/closed.
   */
  var toggleCoverTiltCover: (
    target: IEntity<`cover.${string}`> | IArea,
    params?: ToggleCoverTiltCoverProps,
  ) => Block;
}

export interface OpenCoverCoverProps {}

globalThis.openCoverCover = (
  target: IEntity<`cover.${string}`> | IArea,
  params?: OpenCoverCoverProps,
) =>
  serviceCall({
    name: `Call cover.open_cover`,
    params: {
      domain: 'cover',
      service: 'open_cover',
      service_data: params,
    },
    target,
  });

export interface CloseCoverCoverProps {}

globalThis.closeCoverCover = (
  target: IEntity<`cover.${string}`> | IArea,
  params?: CloseCoverCoverProps,
) =>
  serviceCall({
    name: `Call cover.close_cover`,
    params: {
      domain: 'cover',
      service: 'close_cover',
      service_data: params,
    },
    target,
  });

export interface SetCoverPositionCoverProps {
  /**
   * Target position.
   */
  position: number;
}

globalThis.setCoverPositionCover = (
  target: IEntity<`cover.${string}`> | IArea,
  params: SetCoverPositionCoverProps,
) =>
  serviceCall({
    name: `Call cover.set_cover_position`,
    params: {
      domain: 'cover',
      service: 'set_cover_position',
      service_data: params,
    },
    target,
  });

export interface StopCoverCoverProps {}

globalThis.stopCoverCover = (
  target: IEntity<`cover.${string}`> | IArea,
  params?: StopCoverCoverProps,
) =>
  serviceCall({
    name: `Call cover.stop_cover`,
    params: {
      domain: 'cover',
      service: 'stop_cover',
      service_data: params,
    },
    target,
  });

export interface ToggleCoverProps {}

globalThis.toggleCover = (
  target: IEntity<`cover.${string}`> | IArea,
  params?: ToggleCoverProps,
) =>
  serviceCall({
    name: `Call cover.toggle`,
    params: {
      domain: 'cover',
      service: 'toggle',
      service_data: params,
    },
    target,
  });

export interface OpenCoverTiltCoverProps {}

globalThis.openCoverTiltCover = (
  target: IEntity<`cover.${string}`> | IArea,
  params?: OpenCoverTiltCoverProps,
) =>
  serviceCall({
    name: `Call cover.open_cover_tilt`,
    params: {
      domain: 'cover',
      service: 'open_cover_tilt',
      service_data: params,
    },
    target,
  });

export interface CloseCoverTiltCoverProps {}

globalThis.closeCoverTiltCover = (
  target: IEntity<`cover.${string}`> | IArea,
  params?: CloseCoverTiltCoverProps,
) =>
  serviceCall({
    name: `Call cover.close_cover_tilt`,
    params: {
      domain: 'cover',
      service: 'close_cover_tilt',
      service_data: params,
    },
    target,
  });

export interface StopCoverTiltCoverProps {}

globalThis.stopCoverTiltCover = (
  target: IEntity<`cover.${string}`> | IArea,
  params?: StopCoverTiltCoverProps,
) =>
  serviceCall({
    name: `Call cover.stop_cover_tilt`,
    params: {
      domain: 'cover',
      service: 'stop_cover_tilt',
      service_data: params,
    },
    target,
  });

export interface SetCoverTiltPositionCoverProps {
  /**
   * Target tilt positition.
   */
  tilt_position: number;
}

globalThis.setCoverTiltPositionCover = (
  target: IEntity<`cover.${string}`> | IArea,
  params: SetCoverTiltPositionCoverProps,
) =>
  serviceCall({
    name: `Call cover.set_cover_tilt_position`,
    params: {
      domain: 'cover',
      service: 'set_cover_tilt_position',
      service_data: params,
    },
    target,
  });

export interface ToggleCoverTiltCoverProps {}

globalThis.toggleCoverTiltCover = (
  target: IEntity<`cover.${string}`> | IArea,
  params?: ToggleCoverTiltCoverProps,
) =>
  serviceCall({
    name: `Call cover.toggle_cover_tilt`,
    params: {
      domain: 'cover',
      service: 'toggle_cover_tilt',
      service_data: params,
    },
    target,
  });
