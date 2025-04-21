import { Action } from './action.ts';
import { CallServiceCommand } from '@hass-blocks/homeassistant-typescript';
import { Block } from '../core/index.ts';

class ServiceCall extends Action {
  public override typeString = 'service-call';

  public constructor(
    private readonly serviceConfig: {
      name: string;
      params: Omit<CallServiceCommand, 'id' | 'type'>;
    },
  ) {
    super({
      name: serviceConfig.name,
      callback: async (client) => {
        return await client.callService(serviceConfig.params);
      },
    });
  }

  public override toJson() {
    return {
      type: this.typeString,
      id: this.id,
      name: this.name,
      params: this.serviceConfig.params,
    };
  }
}

/**
 * @public
 * 
 * A specialised action block that will call a service on your configured Home Assistant
 * instance
 */
export const serviceCall = (serviceConfig: {
  name: string;
  params: Omit<CallServiceCommand, 'id' | 'type'>;
}): Block => {
  return new ServiceCall(serviceConfig);
};
