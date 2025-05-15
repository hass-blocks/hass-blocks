import { trigger } from '@hass-blocks/core';
import { removeUndefined } from '@utils';

/**
 * @public
 *
 * Properties for the mqttMessageIsReceived trigger
 * See {@link https://www.home-assistant.io/docs/automation/trigger/#mqtt-trigger}
 */
export interface MqttMessageIsReceivedProps {
  /**
   * Trigger fires if a message is receieved on this topic
   */
  topic: string;
  /**
   * Trigger fires if a message is received with this payload
   */
  payload?: string;
  /**
   * If supplied, will process the payload field before matching it with the incoming message
   */
  value_template?: string;
  /**
   * Incoming message encoding
   */
  encoding?: string;
}

/**
 * @public
 * @param props - configuration options for the trigger
 * Triggered when an MQTT message is received. See {@link https://www.home-assistant.io/docs/automation/trigger/#mqtt-trigger}
 */
export const mqttMessageIsReceived = (props: MqttMessageIsReceivedProps) => {
  return trigger({
    name: `When an event is fired `,
    trigger: {
      platform: 'mqtt',
      ...removeUndefined(props),
    },
  });
};
