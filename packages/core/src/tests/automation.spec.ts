import { mock } from 'vitest-mock-extended';
import type { Service, State } from '@hass-blocks/hass-ts';

import { initialiseTestBlocks } from '@test-support';
import {
  action,
  assertion,
  automation,
  serviceCall,
  type Pass,
} from '@building-blocks';
import { trigger } from '@core';
import { entity } from '@targets';

const advanceTimersByTime = (time: number) => {
  vi.advanceTimersByTime(time);
  return new Promise((accept) => process.nextTick(accept));
};

beforeEach(() => {
  vi.useFakeTimers();
});

afterEach(() => {
  vi.useRealTimers();
});

const testStates: State[] = [
  mock({
    entity_id: 'light.living_room',
    state: 'on',
  }),
  mock({
    entity_id: 'switch.living_room',
    state: 'on',
  }),
];

const testServices: Record<string, Record<string, Service>> = {
  light: {
    turn_on: {
      name: 'Turn On',
      description: 'turn light on',
      response: {},
      fields: {},
    },
    turn_off: {
      name: 'Turn On',
      description: 'turn light on',
      response: {},
      fields: {},
    },
  },
};

test('test a simple automation with just a series of actions', async () => {
  const { blocks, hass } = await initialiseTestBlocks({
    states: testStates,
    services: testServices,
  });

  const triggerParams = {
    foo: 'bar',
  };

  const thereIsMotionInTheLivingRoom = trigger({
    name: 'There is motion in the living room',
    trigger: triggerParams,
  });

  const livingRoomLight = entity('light.living_room');

  const turnLightsOn = serviceCall({
    name: 'Turn on living room lights',
    target: livingRoomLight,
    params: {
      domain: 'light',
      service: 'turn_on',
    },
  });

  const turnLightsOff = serviceCall({
    name: 'Turn on living room lights',
    target: livingRoomLight,
    params: {
      domain: 'light',
      service: 'turn_off',
    },
  });

  const waitForTenMinutes = action<void, void>({
    name: 'Wait for 10 minutes',
    callback: async () => {
      await new Promise((accept) => setInterval(accept, 1_000 * 60 * 10));
    },
  });

  const livingRoomLights = automation({
    name: 'Living room lights',
    when: thereIsMotionInTheLivingRoom,
    then: [turnLightsOn, waitForTenMinutes, turnLightsOff],
  });

  await blocks.registry.registerAutomation(livingRoomLights);
  hass.fireTrigger(triggerParams);

  await expect(hass).toHaveHadServiceCallWithParams({
    domain: 'light',
    service: 'turn_on',
    target: { entity_id: ['light.living_room'] },
  });

  await advanceTimersByTime(1_000 * 60 * 11);

  await expect(hass).toHaveHadServiceCallWithParams({
    domain: 'light',
    service: 'turn_off',
    target: { entity_id: ['light.living_room'] },
  });
});

test('assertions that return true does not block the rest of the sequence', async () => {
  const { blocks, hass } = await initialiseTestBlocks({
    states: testStates,
    services: testServices,
  });

  const triggerParams = {
    foo: 'bar',
  };

  const livingRoomLight = entity('light.living_room');

  const turnLightsOn = serviceCall({
    name: 'Turn on living room lights',
    params: {
      domain: 'light',
      service: 'turn_on',
    },
    target: livingRoomLight,
  });

  const turnLightsOff = serviceCall({
    name: 'Turn off living room lights',
    target: livingRoomLight,
    params: {
      domain: 'light',
      service: 'turn_off',
    },
  });

  const thereIsMotionInTheLivingRoom = trigger({
    name: 'There is motion in the livdng room',
    trigger: triggerParams,
  });

  const livingRoomMotionSensorIsOn = assertion({
    name: 'Living room motion sensor is off',
    predicate: (client) => {
      const state = client.getState('switch.living_room');
      return state === 'on';
    },
  });

  const livingRoomLights = automation({
    name: 'Living room lights',
    when: thereIsMotionInTheLivingRoom,
    then: [turnLightsOn, livingRoomMotionSensorIsOn, turnLightsOff],
  });

  await blocks.registry.registerAutomation(livingRoomLights);
  hass.fireTrigger(triggerParams);

  await expect(hass).toHaveHadServiceCallWithParams({
    domain: 'light',
    service: 'turn_on',
    target: {
      entity_id: ['light.living_room'],
    },
  });

  await expect(hass).toHaveHadServiceCallWithParams({
    domain: 'light',
    service: 'turn_off',
    target: {
      entity_id: ['light.living_room'],
    },
  });
});

test('assertions that return false does block the rest of the sequence', async () => {
  const { blocks, hass } = await initialiseTestBlocks({
    states: testStates,
    services: testServices,
  });

  const triggerParams = {
    foo: 'bar',
  };

  const livingRoomLight = entity('light.living_room');

  const turnLightsOn = serviceCall({
    name: 'Turn on living room lights',
    target: livingRoomLight,
    params: {
      domain: 'light',
      service: 'turn_on',
    },
  });

  const turnLightsOff = serviceCall({
    name: 'Turn off living room lights',
    target: livingRoomLight,
    params: {
      domain: 'light',
      service: 'turn_off',
    },
  });

  const thereIsMotionInTheLivingRoom = trigger({
    name: 'There is motion in the livdng room',
    trigger: triggerParams,
  });

  const livingRoomMotionSensorIsOn = assertion({
    name: 'Living room motion sensor is off',
    predicate: (client) => {
      const state = client.getState('switch.living_room');
      return state === 'on';
    },
  });

  const livingRoomLights = automation({
    name: 'Living room lights',
    when: thereIsMotionInTheLivingRoom,
    then: [turnLightsOn, livingRoomMotionSensorIsOn, turnLightsOff],
  });

  await blocks.registry.registerAutomation(livingRoomLights);
  hass.fireTrigger(triggerParams);

  await expect(hass).toHaveHadServiceCallWithParams({
    domain: 'light',
    service: 'turn_on',
    target: {
      entity_id: ['light.living_room'],
    },
  });

  await expect(hass).not.toHaveHadServiceCallWithParams({
    domain: 'light',
    service: 'turn_off',
    target: {
      entity_id: 'light.living_room',
    },
  });
});

test('state change part way through sequence is registered by assertions', async () => {
  const { blocks, hass } = await initialiseTestBlocks({
    states: testStates,
    services: testServices,
  });

  const triggerParams = {
    foo: 'bar',
  };

  const livingRoomLight = entity('light.living_room');
  const turnLightsOn = serviceCall({
    name: 'Turn on living room lights',
    target: livingRoomLight,
    params: {
      domain: 'light',
      service: 'turn_on',
    },
  });

  const turnLightsOff = serviceCall({
    name: 'Turn off living room lights',
    target: livingRoomLight,
    params: {
      domain: 'light',
      service: 'turn_off',
    },
  });

  const thereIsMotionInTheLivingRoom = trigger({
    name: 'There is motion in the livdng room',
    trigger: triggerParams,
  });

  const livingRoomMotionSensorIsOn = assertion({
    name: 'Living room motion sensor is off',
    predicate: (client) => {
      const state = client.getState('switch.living_room');
      return state === 'on';
    },
  });

  const waitForTenMinutes = action<Pass, Pass>({
    name: 'Wait for 10 minutes',
    callback: async (_client, input) => {
      await new Promise((accept) => setInterval(accept, 1_000 * 60 * 10));
      return input;
    },
  });

  const livingRoomLights = automation({
    name: 'Living room lights',
    when: thereIsMotionInTheLivingRoom,
    then: [
      turnLightsOn,
      waitForTenMinutes,
      livingRoomMotionSensorIsOn,
      turnLightsOff,
    ],
  });

  await blocks.registry.registerAutomation(livingRoomLights);
  hass.fireTrigger(triggerParams);

  await expect(hass).toHaveHadServiceCallWithParams({
    domain: 'light',
    service: 'turn_on',
    target: {
      entity_id: ['light.living_room'],
    },
  });

  hass.fireEvent({
    data: {
      entity_id: 'switch.living_room',
      new_state: {
        entity_id: 'switch.living_room',
        last_changed: 'foo',
        last_reported: 'foo',
        state: 'on',
        attributes: {},
        last_updated: 'foo',
        context: {
          id: 'foo',
          parent_id: null,
          user_id: 'foo',
        },
      },
      old_state: {
        entity_id: 'switch.living_room',
        last_changed: 'foo',
        last_reported: 'foo',
        state: 'of',
        attributes: {},
        last_updated: 'foo',
        context: {
          id: 'foo',
          parent_id: null,
          user_id: 'foo',
        },
      },
    },
    event_type: 'event',
    time_fired: 'foo',
    origin: 'foo',
    context: {
      id: 'foo',
      parent_id: null,
      user_id: 'foo',
    },
  });

  await advanceTimersByTime(1_000 * 60 * 11);

  await expect(hass).toHaveHadServiceCallWithParams({
    domain: 'light',
    service: 'turn_off',
    target: {
      entity_id: ['light.living_room'],
    },
  });
});
