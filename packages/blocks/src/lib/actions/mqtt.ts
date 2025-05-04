import { serviceCall } from '@hass-blocks/core';

/**
 * @public
 *
 * Publishes a message to a given MQTT topic
 *
 * @param topic - The topic name
 * @param payload - The payload to send with the message
 */
export const publishMessageToMqtt = (topic: string, payload: string) =>
  serviceCall({
    name: `Publish ${payload} to ${topic}`,
    params: {
      domain: 'mqtt',
      service: 'publish',
      service_data: {
        topic,
        payload,
      },
    },
  });
