import { Action } from './action.ts';
import type { CallServiceCommand } from '@hass-blocks/hass-ts';
import type { IHass } from '../types/index.ts';
import { BlockValidationError } from '../errors/index.ts';

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

  public override async validate(client: IHass): Promise<void> {
    const services = await client.getServices();

    const { domain, service } = this.serviceConfig.params;

    const theServiceDefinition = services.get(`${domain}.${service}`);

    if (!theServiceDefinition) {
      throw new BlockValidationError(
        `${domain}.${service} was not registered with Home Assistant`,
      );
    }
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
