import {
  serviceCall,
  type Block,
  type IEntity,
  type IArea,
} from '@hass-blocks/core';

declare global {
  interface TriggerNoderedProps {
    /**
     * Comma separated list of paths to send the message to. Zero is used to send the message to all paths.
     */
    output_path?: string;
    /**
     * The message object that will be sent to the next node.
     */
    message?: Record<string, unknown>;
  }

  /**
   * Send a message to a Node-RED flow that has been exposed to Home Assistant.
   */
  var triggerNodered: (
    target: IEntity<`switch.${string}`> | IArea,
    params?: TriggerNoderedProps,
  ) => Block;
}

globalThis.triggerNodered = (target, params) =>
  serviceCall({
    name: `Call nodered.trigger`,
    params: {
      domain: 'nodered',
      service: 'trigger',
      service_data: params,
    },
    target,
  });
