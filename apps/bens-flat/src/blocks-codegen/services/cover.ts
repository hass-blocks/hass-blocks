import { serviceCall, ITarget } from '@hass-blocks/core';

export interface OpenCoverCoverProps {}

/**
 * Opens a cover.
 */
export const openCoverCover = (target: ITarget, params?: OpenCoverCoverProps) =>
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

/**
 * Closes a cover.
 */
export const closeCoverCover = (
  target: ITarget,
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

/**
 * Moves a cover to a specific position.
 */
export const setCoverPositionCover = (
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

/**
 * Stops the cover movement.
 */
export const stopCoverCover = (target: ITarget, params?: StopCoverCoverProps) =>
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

/**
 * Toggles a cover open/closed.
 */
export const toggleCover = (target: ITarget, params?: ToggleCoverProps) =>
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

/**
 * Tilts a cover open.
 */
export const openCoverTiltCover = (
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

/**
 * Tilts a cover to close.
 */
export const closeCoverTiltCover = (
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

/**
 * Stops a tilting cover movement.
 */
export const stopCoverTiltCover = (
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

/**
 * Moves a cover tilt to a specific position.
 */
export const setCoverTiltPositionCover = (
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

/**
 * Toggles a cover tilt open/closed.
 */
export const toggleCoverTiltCover = (
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
