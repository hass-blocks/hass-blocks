import {
  serviceCall,
  type Block,
  type IEntity,
  type IArea,
} from '@hass-blocks/core';

declare global {
  interface TurnOnSceneProps {
    /**
     * Time it takes the devices to transition into the states defined in the scene.
     */
    transition?: number;
  }

  /**
   * Activates a scene.
   */
  var turnOnScene: (
    target: IEntity<`scene.${string}`> | IArea,
    params?: TurnOnSceneProps,
  ) => Block;

  /**
   * Reloads the scenes from the YAML-configuration.
   */
  var reloadScene: () => Block;

  interface ApplySceneProps {
    /**
     * List of entities and their target state.
     */
    entities: Record<string, unknown>;
    /**
     * Time it takes the devices to transition into the states defined in the scene.
     */
    transition?: number;
  }

  /**
   * Activates a scene with configuration.
   */
  var applyScene: (params: ApplySceneProps) => Block;

  interface CreateSceneProps {
    /**
     * The entity ID of the new scene.
     */
    scene_id: string;
    /**
     * List of entities and their target state. If your entities are already in the target state right now, use 'Entities snapshot' instead.
     */
    entities?: Record<string, unknown>;
    /**
     * List of entities to be included in the snapshot. By taking a snapshot, you record the current state of those entities. If you do not want to use the current state of all your entities for this scene, you can combine 'Entities snapshot' with 'Entity states'.
     */
    snapshot_entities?: string[];
  }

  /**
   * Creates a new scene.
   */
  var createScene: (params: CreateSceneProps) => Block;

  /**
   * Deletes a dynamically created scene.
   */
  var deleteScene: (target: IEntity<`scene.${string}`> | IArea) => Block;
}

globalThis.turnOnScene = (target, params) =>
  serviceCall({
    name: `Call scene.turn_on`,
    params: {
      domain: 'scene',
      service: 'turn_on',
      service_data: params,
    },
    target,
  });

globalThis.reloadScene = () =>
  serviceCall({
    name: `Call scene.reload`,
    params: {
      domain: 'scene',
      service: 'reload',
    },
  });

globalThis.applyScene = (params) =>
  serviceCall({
    name: `Call scene.apply`,
    params: {
      domain: 'scene',
      service: 'apply',
      service_data: params,
    },
  });

globalThis.createScene = (params) =>
  serviceCall({
    name: `Call scene.create`,
    params: {
      domain: 'scene',
      service: 'create',
      service_data: params,
    },
  });

globalThis.deleteScene = (target) =>
  serviceCall({
    name: `Call scene.delete`,
    params: {
      domain: 'scene',
      service: 'delete',
    },
    target,
  });
