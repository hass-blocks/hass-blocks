import { Block, serviceCall, ITarget } from '@hass-blocks/core';
declare global {
  /**
   * Opens a cover.
   */
  var openCoverCover: (target: ITarget, params?: OpenCoverCoverProps) => Block;
  /**
   * Closes a cover.
   */
  var closeCoverCover: (
    target: ITarget,
    params?: CloseCoverCoverProps,
  ) => Block;
  /**
   * Moves a cover to a specific position.
   */
  var setCoverPositionCover: (
    target: ITarget,
    params: SetCoverPositionCoverProps,
  ) => Block;
  /**
   * Stops the cover movement.
   */
  var stopCoverCover: (target: ITarget, params?: StopCoverCoverProps) => Block;
  /**
   * Toggles a cover open/closed.
   */
  var toggleCover: (target: ITarget, params?: ToggleCoverProps) => Block;
  /**
   * Tilts a cover open.
   */
  var openCoverTiltCover: (
    target: ITarget,
    params?: OpenCoverTiltCoverProps,
  ) => Block;
  /**
   * Tilts a cover to close.
   */
  var closeCoverTiltCover: (
    target: ITarget,
    params?: CloseCoverTiltCoverProps,
  ) => Block;
  /**
   * Stops a tilting cover movement.
   */
  var stopCoverTiltCover: (
    target: ITarget,
    params?: StopCoverTiltCoverProps,
  ) => Block;
  /**
   * Moves a cover tilt to a specific position.
   */
  var setCoverTiltPositionCover: (
    target: ITarget,
    params: SetCoverTiltPositionCoverProps,
  ) => Block;
  /**
   * Toggles a cover tilt open/closed.
   */
  var toggleCoverTiltCover: (
    target: ITarget,
    params?: ToggleCoverTiltCoverProps,
  ) => Block;
}

export interface OpenCoverCoverProps {}

globalThis.openCoverCover = (target: ITarget, params?: OpenCoverCoverProps) =>
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

globalThis.closeCoverCover = (target: ITarget, params?: CloseCoverCoverProps) =>
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
  target: ITarget,
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

globalThis.stopCoverCover = (target: ITarget, params?: StopCoverCoverProps) =>
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

globalThis.toggleCover = (target: ITarget, params?: ToggleCoverProps) =>
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
  target: ITarget,
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
  target: ITarget,
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
  target: ITarget,
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
  target: ITarget,
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
  target: ITarget,
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
