import { trigger } from '@hass-blocks/core';
import { removeUndefined } from '@utils';

interface MqttMessageIsReceivedProps {
  topic: string;
  payload?: string;
  value_template?: string;
  encoding?: string;
}

export const mqttMessageIsReceived = (props: MqttMessageIsReceivedProps) => {
  return trigger({
    name: `When an event is fired `,
    trigger: {
      platform: 'mqtt',
      ...removeUndefined(props),
    },
  });
};
