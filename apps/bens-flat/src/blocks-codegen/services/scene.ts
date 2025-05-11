import { serviceCall, ITarget } from '@hass-blocks/core';

export interface TurnOnSceneProps {
  /**
   * Time it takes the devices to transition into the states defined in the scene.
   */
  transition?: number;
}

/**
 * Activates a scene.
 */
export const turnOnScene = (target: ITarget, params?: TurnOnSceneProps) =>
  serviceCall({
    name: `Call scene.turn_on`,
    params: {
      domain: 'scene',
      service: 'turn_on',
      service_data: params,
    },
    target,
  });

/**
 * Reloads the scenes from the YAML-configuration.
 */
export const reloadScene = (target: ITarget) =>
  serviceCall({
    name: `Call scene.reload`,
    params: {
      domain: 'scene',
      service: 'reload',
    },
  });

export interface ApplySceneProps {
  /**
   * List of entities and their target state.
   */
  entities: never;
  /**
   * Time it takes the devices to transition into the states defined in the scene.
   */
  transition?: number;
}

/**
 * Activates a scene with configuration.
 */
export const applyScene = (target: ITarget, params: ApplySceneProps) =>
  serviceCall({
    name: `Call scene.apply`,
    params: {
      domain: 'scene',
      service: 'apply',
      service_data: params,
    },
  });

export interface CreateSceneProps {
  /**
   * The entity ID of the new scene.
   */
  scene_id: string;
  /**
   * List of entities and their target state. If your entities are already in the target state right now, use 'Entities snapshot' instead.
   */
  entities?: never;
  /**
   * List of entities to be included in the snapshot. By taking a snapshot, you record the current state of those entities. If you do not want to use the current state of all your entities for this scene, you can combine 'Entities snapshot' with 'Entity states'.
   */
  snapshot_entities?: string;
}

/**
 * Creates a new scene.
 */
export const createScene = (target: ITarget, params: CreateSceneProps) =>
  serviceCall({
    name: `Call scene.create`,
    params: {
      domain: 'scene',
      service: 'create',
      service_data: params,
    },
  });

export interface DeleteSceneProps {}

/**
 * Deletes a dynamically created scene.
 */
export const deleteScene = (target: ITarget, params?: DeleteSceneProps) =>
  serviceCall({
    name: `Call scene.delete`,
    params: {
      domain: 'scene',
      service: 'delete',
      service_data: params,
    },
    target,
  });
