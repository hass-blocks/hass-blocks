import { serviceCall, type Block } from '@hass-blocks/core';

declare global {
  interface PublishMqttProps {
    /**
     * Topic to publish to.
     */
    topic: string;
    /**
     * The payload to publish. Publishes an empty message if not provided.
     */
    payload?: Record<string, unknown>;
    /**
     * If 'Payload' is a Python bytes literal, evaluate the bytes literal and publish the raw data.
     */
    evaluate_payload?: boolean;
    /**
     * Quality of Service to use. 0: At most once. 1: At least once. 2: Exactly once.
     */
    qos?: never;
    /**
     * If the message should have the retain flag set. If set, the broker stores the most recent message on a topic.
     */
    retain?: boolean;
  }

  /**
   * Publishes a message to an MQTT topic.
   */
  var publishMqtt: (params?: PublishMqttProps) => Block;

  interface DumpMqttProps {
    /**
     * Topic to listen to.
     */
    topic?: string;
    /**
     * How long we should listen for messages in seconds.
     */
    duration?: number;
  }

  /**
   * Writes all messages on a specific topic into the `mqtt_dump.txt` file in your configuration folder.
   */
  var dumpMqtt: (params: DumpMqttProps) => Block;

  /**
   * Reloads MQTT entities from the YAML-configuration.
   */
  var reloadMqtt: () => Block;
}

globalThis.publishMqtt = (params) =>
  serviceCall({
    name: `Call mqtt.publish`,
    params: {
      domain: 'mqtt',
      service: 'publish',
      service_data: params,
    },
  });

globalThis.dumpMqtt = (params) =>
  serviceCall({
    name: `Call mqtt.dump`,
    params: {
      domain: 'mqtt',
      service: 'dump',
      service_data: params,
    },
  });

globalThis.reloadMqtt = () =>
  serviceCall({
    name: `Call mqtt.reload`,
    params: {
      domain: 'mqtt',
      service: 'reload',
    },
  });
