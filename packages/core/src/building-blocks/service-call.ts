import type { CallServiceCommand } from '@hass-blocks/hass-ts';

import type { IHass, ITarget } from '@types';
import { BlockValidationError } from '@errors';
import type { Block } from '@core';

import { Action } from './action.ts';

class ServiceCall<P> extends Action {
  public override typeString = 'service-call';

  public constructor(
    private readonly serviceConfig: {
      name: string;
      target?: ITarget;
      params: Omit<CallServiceCommand<P>, 'id' | 'type' | 'target'>;
    },
  ) {
    super({
      ...(serviceConfig.target ? { targets: [serviceConfig.target] } : {}),
      name: serviceConfig.name,
      callback: async (client) => {
        const { target } = this.serviceConfig;
        const params: CallServiceCommand<P> = {
          ...serviceConfig.params,
          ...(target ? { target: target.targetIds } : {}),
        };

        return await client.callService(params);
      },
    });
  }

  public override async validate(client: IHass): Promise<void> {
    const services = await client.getServices();

    const { domain, service } = this.serviceConfig.params;
    const theService = services?.[domain]?.[service];

    if (!theService) {
      throw new BlockValidationError(
        `${domain}.${service} was not registered with Home Assistant`,
      );
    }
    await super.validate(client);
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
export const serviceCall = <P>(serviceConfig: {
  name: string;
  target?: ITarget;
  params: Omit<CallServiceCommand<P>, 'id' | 'type'>;
}): Block => {
  return new ServiceCall<P>(serviceConfig);
};
