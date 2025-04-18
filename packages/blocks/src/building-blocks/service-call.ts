import { action, Action } from './action.ts';
import { CallServiceCommand } from '@hass-blocks/homeassistant-typescript';
import { Block } from '../core/index.ts';
import { trigger } from './trigger.ts';
import { automation } from './automation.ts';

class ServiceCall extends Action {
  public override typeString = 'service-call';

  public constructor(
    private readonly serviceConfig: {
      name: string;
      params: Omit<CallServiceCommand, 'id' | 'type'>;
    }
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

export const serviceCall = (serviceConfig: {
  name: string;
  params: Omit<CallServiceCommand, 'id' | 'type'>;
}): Block => {
  return new ServiceCall(serviceConfig);
};

const turnLivingRoomLights = (onOrOff: 'on' | 'off') =>
  serviceCall({
    name: 'Turn on the light in the living room',
    params: {
      domain: 'light',
      service: 'turn_on',
      target: {
        entity_id: 'light.living_room',
      },
    },
  });

const turnOnLivingRoomLight = serviceCall({
  name: 'Turn on the light in the living room',
  params: {
    domain: 'light',
    service: 'turn_on',
    target: {
      entity_id: 'light.living_room',
    },
  },
});

const someoneWalksInTheLivingRoom = trigger({
  name: 'When someone walks in the living room',
  trigger: {
    platform: 'state',
    entity_id: 'binary_sensor.motion_occupancy',
    from: 'off',
    to: 'on',
  },
});

export const waitMinutes = (duration: number) =>
  action({
    name: `Wait ${duration} minutes`,
    callback: async () => {
      return await new Promise<void>((accept) =>
        setTimeout(() => {
          accept();
        }, 1000 * 60 * duration)
      );
    },
  });


export const livingRoomMotionSensor = automation({
  name: "Living room motion sensor",
  when: someoneWalksInTheLivingRoom,
  then: [
    turnLivingRoomLights('on'),
    waitMinutes(10),
    turnLivingRoomLights('off')
  ]
})
