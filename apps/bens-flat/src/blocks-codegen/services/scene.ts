import { Block, serviceCall, ITarget } from '@hass-blocks/core';
declare global {
  /**
   * Activates a scene.
   */
  var turnOnScene: (target: ITarget, params?: TurnOnSceneProps) => Block;
  /**
   * Reloads the scenes from the YAML-configuration.
   */
  var reloadScene: (target: ITarget) => Block;
  /**
   * Activates a scene with configuration.
   */
  var applyScene: (target: ITarget, params: ApplySceneProps) => Block;
  /**
   * Creates a new scene.
   */
  var createScene: (target: ITarget, params: CreateSceneProps) => Block;
  /**
   * Deletes a dynamically created scene.
   */
  var deleteScene: (target: ITarget, params?: DeleteSceneProps) => Block;
}

export interface TurnOnSceneProps {
  /**
   * Time it takes the devices to transition into the states defined in the scene.
   */
  transition?: number;
}

globalThis.turnOnScene = (target: ITarget, params?: TurnOnSceneProps) =>
  serviceCall({
    name: `Call scene.turn_on`,
    params: {
      domain: 'scene',
      service: 'turn_on',
      service_data: params,
    },
    target,
  });

globalThis.reloadScene = (target: ITarget) =>
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

globalThis.applyScene = (target: ITarget, params: ApplySceneProps) =>
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

globalThis.createScene = (target: ITarget, params: CreateSceneProps) =>
  serviceCall({
    name: `Call scene.create`,
    params: {
      domain: 'scene',
      service: 'create',
      service_data: params,
    },
  });

export interface DeleteSceneProps {}

globalThis.deleteScene = (target: ITarget, params?: DeleteSceneProps) =>
  serviceCall({
    name: `Call scene.delete`,
    params: {
      domain: 'scene',
      service: 'delete',
      service_data: params,
    },
    target,
  });
