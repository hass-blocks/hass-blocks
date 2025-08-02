import type { CallServiceCommand } from '@hass-blocks/hass-ts';

import type { ITarget, IFullBlocksClient, IBlocksNode } from '@types';
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
  ignoreBlockInput?: boolean;
  params: Omit<CallServiceCommand<P>, 'id' | 'type' | 'target'>;
};

class ServiceCall<P> extends Action<
  (Partial<P> & { target?: ITarget }) | undefined,
  void
> {
  public override type = 'service-call';

  public constructor(
    private readonly serviceConfig: {
      name: string;
    } & ServiceCallArgs<P>,
  ) {
    super({
      ...(serviceConfig.target ? { targets: [serviceConfig.target] } : {}),
      name: serviceConfig.name,
      callback: async ({ hass, input }) => {
        const { target: inputTarget, ...restInput } = input ?? {};
        const target = serviceConfig.target ?? inputTarget;

        const serviceData = {
          ...serviceConfig.params.service_data,
          ...(!serviceConfig.ignoreBlockInput ? restInput : {}),
        };

        const addServiceData =
          Object.keys(serviceData).length > 0
            ? { service_data: serviceData }
            : {};

        const params = {
          ...serviceConfig.params,
          ...(target ? { target: target.targetIds } : {}),
          ...addServiceData,
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

  public override toJson(): IBlocksNode {
    return {
      ...super.toJson(),
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
  ignoreBlockInput?: boolean;
  params: Omit<CallServiceCommand<P>, 'id' | 'type'>;
}): Block<Partial<P> | undefined, void> => {
  return new ServiceCall<P>(serviceConfig);
};
