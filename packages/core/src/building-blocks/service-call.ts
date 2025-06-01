import type { CallServiceCommand } from '@hass-blocks/hass-ts';

import type { ITarget, IFullBlocksClient } from '@types';
import { BlockValidationError } from '@errors';
import type { Block } from '@core';

import { Action } from './action.ts';
import type { IMQTTConnection } from '@hass-blocks/hass-mqtt';

/**
 * @public
 *
 * Arguments for a service call action
 */
export type ServiceCallArgs<P> = {
  target?: ITarget;
  params: Omit<CallServiceCommand<P>, 'id' | 'type' | 'target'>;
};

class ServiceCall<P> extends Action<Partial<P> | undefined, void> {
  public override typeString = 'service-call';

  public constructor(
    private readonly serviceConfig: {
      name: string;
    } & ServiceCallArgs<P>,
  ) {
    super({
      ...(serviceConfig.target ? { targets: [serviceConfig.target] } : {}),
      name: serviceConfig.name,
      callback: async ({ hass, input }) => {
        const { target } = this.serviceConfig;

        const params = {
          ...serviceConfig.params,
          ...(target ? { target: target.targetIds } : {}),
          service_data: {
            ...serviceConfig.params.service_data,
            ...input,
          },
        };

        return await hass.callService(params);
      },
    });
  }

  public override async initialise(
    client: IFullBlocksClient,
    mqtt: IMQTTConnection,
  ): Promise<void> {
    const services = await client.getServices();

    const { domain, service } = this.serviceConfig.params;
    const theService = services?.[domain]?.[service];

    if (!theService) {
      throw new BlockValidationError(
        `${domain}.${service} was not registered with Home Assistant`,
      );
    }
    await super.initialise(client, mqtt);
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
}): Block<Partial<P> | undefined, void> => {
  return new ServiceCall<P>(serviceConfig);
};
