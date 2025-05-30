import {
  serviceCall,
  type Block,
  type ServiceCallArgs,
} from '@hass-blocks/core';

declare global {
  /**
   * Reloads group configuration, entities, and notify services from YAML-configuration.
   */
  var reloadGroup: () => Block<
    Partial<ServiceCallArgs<unknown>> | undefined,
    void
  >;

  interface SetGroupProps {
    /**
     * Object ID of this group. This object ID is used as part of the entity ID. Entity ID format: [domain].[object_id].
     */
    object_id: string;
    /**
     * Name of the group.
     */
    name?: string;
    /**
     * Name of the icon for the group.
     */
    icon?: never;
    /**
     * List of all members in the group. Cannot be used in combination with `Add entities` or `Remove entities`.
     */
    entities?: string[];
    /**
     * List of members to be added to the group. Cannot be used in combination with `Entities` or `Remove entities`.
     */
    add_entities?: string[];
    /**
     * List of members to be removed from a group. Cannot be used in combination with `Entities` or `Add entities`.
     */
    remove_entities?: string[];
    /**
     * Enable this option if the group should only be used when all entities are in state `on`.
     */
    all?: boolean;
  }

  /**
   * Creates/Updates a group.
   */
  var setGroup: (
    params: SetGroupProps,
  ) => Block<Partial<ServiceCallArgs<unknown>> | undefined, void>;

  interface RemoveGroupProps {
    /**
     * Object ID of this group. This object ID is used as part of the entity ID. Entity ID format: [domain].[object_id].
     */
    object_id: Record<string, unknown>;
  }

  /**
   * Removes a group.
   */
  var removeGroup: (
    params: RemoveGroupProps,
  ) => Block<Partial<ServiceCallArgs<unknown>> | undefined, void>;
}

globalThis.reloadGroup = () =>
  serviceCall({
    name: `Call group.reload`,
    params: {
      domain: 'group',
      service: 'reload',
    },
  });

globalThis.setGroup = (params) =>
  serviceCall({
    name: `Call group.set`,
    params: {
      domain: 'group',
      service: 'set',
      service_data: params,
    },
  });

globalThis.removeGroup = (params) =>
  serviceCall({
    name: `Call group.remove`,
    params: {
      domain: 'group',
      service: 'remove',
      service_data: params,
    },
  });
