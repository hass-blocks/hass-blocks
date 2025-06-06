import {
  serviceCall,
  type Block,
  type IEntity,
  type IArea,
} from '@hass-blocks/core';

declare global {
  interface SetConfigParameterZwaveJs {
    /**
     * The area(s) to target for this action. If an area is specified, all Z-Wave devices and entities in that area will be targeted for this action
     */
    area_id?: never;
    /**
     * The device(s) to target for this action
     */
    device_id?: never;
    /**
     * The entity ID(s) to target for this action
     */
    entity_id?: string[];
    /**
     * The configuration parameter's endpoint
     */
    endpoint?: string;
    /**
     * The name (or ID) of the configuration parameter you want to configure
     */
    parameter: string;
    /**
     * Target a specific bitmask (see the documentation for more information). Cannot be combined with 'Value size' or 'Value format'
     */
    bitmask?: string;
    /**
     * The new value to set for this configuration parameter
     */
    value: string;
    /**
     * Size of the value, either 1, 2, or 4. Used in combination with 'Value format' when a config parameter is not defined in your device's configuration file. Cannot be combined with 'Bitmask'
     */
    value_size?: number;
    /**
     * Format of the value, 0 for signed integer, 1 for unsigned integer, 2 for enumerated, 3 for bitfield. Used in combination with 'Value size' when a config parameter is not defined in your device's configuration file. Cannot be combined with 'Bitmask'
     */
    value_format?: number;
  }

  /**
   * Changes the configuration parameters of your Z-Wave devices
   */
  var setConfigParameterZwaveJs: (
    params: SetConfigParameterZwaveJs,
  ) => Block<Partial<SetConfigParameterZwaveJs> | undefined, void>;

  interface BulkSetPartialConfigParametersZwaveJs {
    /**
     * The area(s) to target for this action. If an area is specified, all Z-Wave devices and entities in that area will be targeted for this action
     */
    area_id?: never;
    /**
     * The device(s) to target for this action
     */
    device_id?: never;
    /**
     * The entity ID(s) to target for this action
     */
    entity_id?: string[];
    /**
     * The configuration parameter's endpoint
     */
    endpoint?: string;
    /**
     * The name (or ID) of the configuration parameter you want to configure
     */
    parameter: string;
    /**
     * The new value(s) to set for this configuration parameter. Can either be a raw integer value to represent the bulk change or a mapping where the key is the bitmask (either in hex or integer form) and the value is the new value you want to set for that partial parameter
     */
    value: Record<string, unknown>;
  }

  /**
   * Allows for bulk setting partial parameters. Useful when multiple partial parameters have to be set at the same time
   */
  var bulkSetPartialConfigParametersZwaveJs: (
    params: BulkSetPartialConfigParametersZwaveJs,
  ) => Block<Partial<BulkSetPartialConfigParametersZwaveJs> | undefined, void>;

  interface RefreshValueZwaveJs {
    /**
     * Entities to refresh
     */
    entity_id: string[];
    /**
     * Whether to refresh all values or just the primary value
     */
    refresh_all_values?: boolean;
  }

  /**
   * Force updates the values of a Z-Wave entity
   */
  var refreshValueZwaveJs: (
    params: RefreshValueZwaveJs,
  ) => Block<Partial<RefreshValueZwaveJs> | undefined, void>;

  interface SetValueZwaveJs {
    /**
     * The area(s) to target for this action. If an area is specified, all Z-Wave devices and entities in that area will be targeted for this action
     */
    area_id?: never;
    /**
     * The device(s) to target for this action
     */
    device_id?: never;
    /**
     * The entity ID(s) to target for this action
     */
    entity_id?: string[];
    /**
     * The ID of the command class for the value
     */
    command_class: string;
    /**
     * The endpoint for the value
     */
    endpoint?: string;
    /**
     * The ID of the property for the value
     */
    property: string;
    /**
     * The ID of the property key for the value
     */
    property_key?: string;
    /**
     * The new value to set
     */
    value: Record<string, unknown>;
    /**
     * Set value options map. Refer to the Z-Wave documentation for more information on what options can be set
     */
    options?: Record<string, unknown>;
    /**
     * Whether to wait for a response from the node. If not included in the payload, the integration will decide whether to wait or not. If enabled, the action can take a while if setting a value on an asleep battery device
     */
    wait_for_result?: boolean;
  }

  /**
   * Changes any value that Z-Wave recognizes on a Z-Wave device. This action has minimal validation so only use this action if you know what you are doing
   */
  var setValueZwaveJs: (
    params: SetValueZwaveJs,
  ) => Block<Partial<SetValueZwaveJs> | undefined, void>;

  interface MulticastSetValueZwaveJs {
    /**
     * The area(s) to target for this action. If an area is specified, all Z-Wave devices and entities in that area will be targeted for this action
     */
    area_id?: never;
    /**
     * The device(s) to target for this action
     */
    device_id?: never;
    /**
     * The entity ID(s) to target for this action
     */
    entity_id?: string[];
    /**
     * Whether the command should be broadcast to all devices on the network
     */
    broadcast?: boolean;
    /**
     * The ID of the command class for the value
     */
    command_class: string;
    /**
     * The endpoint for the value
     */
    endpoint?: string;
    /**
     * The ID of the property for the value
     */
    property: string;
    /**
     * The ID of the property key for the value
     */
    property_key?: string;
    /**
     * Set value options map. Refer to the Z-Wave documentation for more information on what options can be set
     */
    options?: Record<string, unknown>;
    /**
     * The new value to set
     */
    value: Record<string, unknown>;
  }

  /**
   * Changes any value that Z-Wave recognizes on multiple Z-Wave devices using multicast, so all devices receive the message simultaneously. This action has minimal validation so only use this action if you know what you are doing
   */
  var multicastSetValueZwaveJs: (
    params: MulticastSetValueZwaveJs,
  ) => Block<Partial<MulticastSetValueZwaveJs> | undefined, void>;

  interface PingZwaveJs {
    /**
     * The area(s) to target for this action. If an area is specified, all Z-Wave devices and entities in that area will be targeted for this action
     */
    area_id?: never;
    /**
     * The device(s) to target for this action
     */
    device_id?: never;
    /**
     * The entity ID(s) to target for this action
     */
    entity_id?: string[];
  }

  /**
   * Forces Z-Wave to try to reach a node. This can be used to update the status of the node in Z-Wave when you think it doesn't accurately reflect reality, e.g. reviving a failed/dead node or marking the node as asleep
   */
  var pingZwaveJs: (
    params?: PingZwaveJs,
  ) => Block<Partial<PingZwaveJs> | undefined, void>;

  interface InvokeCcApiZwaveJs {
    /**
     * The area(s) to target for this action. If an area is specified, all Z-Wave devices and entities in that area will be targeted for this action
     */
    area_id?: never;
    /**
     * The device(s) to target for this action
     */
    device_id?: never;
    /**
     * The entity ID(s) to target for this action
     */
    entity_id?: string[];
    /**
     * The ID of the command class that you want to issue a command to
     */
    command_class: string;
    /**
     * The endpoint to call the API on. If an endpoint is specified, that endpoint will be targeted for all nodes associated with the target areas, devices, and/or entities. If an endpoint is not specified, the root endpoint (0) will be targeted for nodes associated with target areas and devices, and the endpoint for the primary value of each entity will be targeted
     */
    endpoint?: string;
    /**
     * The name of the API method to call. Refer to the Z-Wave Command Class API documentation (https://zwave-js.github.io/node-zwave-js/#/api/CCs/index) for available methods
     */
    method_name: string;
    /**
     * A list of parameters to pass to the API method. Refer to the Z-Wave Command Class API documentation (https://zwave-js.github.io/node-zwave-js/#/api/CCs/index) for parameters
     */
    parameters: Record<string, unknown>;
  }

  /**
   * Calls a Command Class API on a node. Some Command Classes can't be fully controlled via the `set_value` action and require direct calls to the Command Class API
   */
  var invokeCcApiZwaveJs: (
    params: InvokeCcApiZwaveJs,
  ) => Block<Partial<InvokeCcApiZwaveJs> | undefined, void>;

  interface RefreshNotificationsZwaveJs {
    /**
     * The area(s) to target for this action. If an area is specified, all Z-Wave devices and entities in that area will be targeted for this action
     */
    area_id?: never;
    /**
     * The device(s) to target for this action
     */
    device_id?: never;
    /**
     * The entity ID(s) to target for this action
     */
    entity_id?: string[];
    /**
     * The Notification Type number as defined in the Z-Wave specs
     */
    notification_type: number;
    /**
     * The Notification Event number as defined in the Z-Wave specs
     */
    notification_event?: number;
  }

  /**
   * Refreshes notifications on a node based on notification type and optionally notification event
   */
  var refreshNotificationsZwaveJs: (
    params: RefreshNotificationsZwaveJs,
  ) => Block<Partial<RefreshNotificationsZwaveJs> | undefined, void>;

  interface SetLockUsercodeZwaveJs {
    /**
     * Code slot to set the code
     */
    code_slot: string;
    /**
     * Lock code to set
     */
    usercode: string;
  }

  /**
   * Sets a user code on a lock
   */
  var setLockUsercodeZwaveJs: (
    target: IEntity<`lock.${string}`> | IArea<string>,
    params: SetLockUsercodeZwaveJs,
  ) => Block<Partial<SetLockUsercodeZwaveJs> | undefined, void>;

  interface ClearLockUsercodeZwaveJs {
    /**
     * Code slot to clear code from
     */
    code_slot: string;
  }

  /**
   * Clears a user code from a lock
   */
  var clearLockUsercodeZwaveJs: (
    target: IEntity<`lock.${string}`> | IArea<string>,
    params: ClearLockUsercodeZwaveJs,
  ) => Block<Partial<ClearLockUsercodeZwaveJs> | undefined, void>;

  interface SetLockConfigurationZwaveJs {
    /**
     * The operation type of the lock
     */
    operation_type: never;
    /**
     * Seconds until lock mode times out. Should only be used if operation type is `timed`
     */
    lock_timeout?: number;
    /**
     * Duration in seconds until lock returns to secure state. Only enforced when operation type is `constant`
     */
    auto_relock_time?: number;
    /**
     * Duration in seconds the latch stays retracted
     */
    hold_and_release_time?: number;
    /**
     * Whether the motor should help in locking and unlocking
     */
    twist_assist?: boolean;
    /**
     * Whether the lock should run the motor until it hits resistance
     */
    block_to_block?: boolean;
  }

  /**
   * Sets the configuration for a lock
   */
  var setLockConfigurationZwaveJs: (
    target: IEntity<`lock.${string}`> | IArea<string>,
    params: SetLockConfigurationZwaveJs,
  ) => Block<Partial<SetLockConfigurationZwaveJs> | undefined, void>;

  interface ResetMeterZwaveJs {
    /**
     * The area(s) to target for this action. If an area is specified, all Z-Wave devices and entities in that area will be targeted for this action
     */
    area_id?: never;
    /**
     * The device(s) to target for this action
     */
    device_id?: never;
    /**
     * The entity ID(s) to target for this action
     */
    entity_id?: string[];
    /**
     * The type of meter to reset. Not all meters support the ability to pick a meter type to reset
     */
    meter_type?: string;
    /**
     * The value that meters should be reset to. Not all meters support the ability to be reset to a specific value
     */
    value?: string;
  }

  /**
   * Resets the meters on a node
   */
  var resetMeterZwaveJs: (
    params?: ResetMeterZwaveJs,
  ) => Block<Partial<ResetMeterZwaveJs> | undefined, void>;
}

globalThis.setConfigParameterZwaveJs = (params) =>
  serviceCall({
    name: `Call zwave_js.set_config_parameter`,
    params: {
      domain: 'zwave_js',
      service: 'set_config_parameter',
      service_data: params,
    },
  });

globalThis.bulkSetPartialConfigParametersZwaveJs = (params) =>
  serviceCall({
    name: `Call zwave_js.bulk_set_partial_config_parameters`,
    params: {
      domain: 'zwave_js',
      service: 'bulk_set_partial_config_parameters',
      service_data: params,
    },
  });

globalThis.refreshValueZwaveJs = (params) =>
  serviceCall({
    name: `Call zwave_js.refresh_value`,
    params: {
      domain: 'zwave_js',
      service: 'refresh_value',
      service_data: params,
    },
  });

globalThis.setValueZwaveJs = (params) =>
  serviceCall({
    name: `Call zwave_js.set_value`,
    params: {
      domain: 'zwave_js',
      service: 'set_value',
      service_data: params,
    },
  });

globalThis.multicastSetValueZwaveJs = (params) =>
  serviceCall({
    name: `Call zwave_js.multicast_set_value`,
    params: {
      domain: 'zwave_js',
      service: 'multicast_set_value',
      service_data: params,
    },
  });

globalThis.pingZwaveJs = (params) =>
  serviceCall({
    name: `Call zwave_js.ping`,
    params: {
      domain: 'zwave_js',
      service: 'ping',
      service_data: params,
    },
  });

globalThis.invokeCcApiZwaveJs = (params) =>
  serviceCall({
    name: `Call zwave_js.invoke_cc_api`,
    params: {
      domain: 'zwave_js',
      service: 'invoke_cc_api',
      service_data: params,
    },
  });

globalThis.refreshNotificationsZwaveJs = (params) =>
  serviceCall({
    name: `Call zwave_js.refresh_notifications`,
    params: {
      domain: 'zwave_js',
      service: 'refresh_notifications',
      service_data: params,
    },
  });

globalThis.setLockUsercodeZwaveJs = (target, params) =>
  serviceCall({
    name: `Call zwave_js.set_lock_usercode`,
    params: {
      domain: 'zwave_js',
      service: 'set_lock_usercode',
      service_data: params,
    },
    target,
  });

globalThis.clearLockUsercodeZwaveJs = (target, params) =>
  serviceCall({
    name: `Call zwave_js.clear_lock_usercode`,
    params: {
      domain: 'zwave_js',
      service: 'clear_lock_usercode',
      service_data: params,
    },
    target,
  });

globalThis.setLockConfigurationZwaveJs = (target, params) =>
  serviceCall({
    name: `Call zwave_js.set_lock_configuration`,
    params: {
      domain: 'zwave_js',
      service: 'set_lock_configuration',
      service_data: params,
    },
    target,
  });

globalThis.resetMeterZwaveJs = (params) =>
  serviceCall({
    name: `Call zwave_js.reset_meter`,
    params: {
      domain: 'zwave_js',
      service: 'reset_meter',
      service_data: params,
    },
  });
