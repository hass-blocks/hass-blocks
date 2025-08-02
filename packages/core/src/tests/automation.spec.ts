import { mock } from 'vitest-mock-extended';
import type { Service, State } from '@hass-blocks/hass-ts';
import type { Pass } from '@sequence-validator';

import { initialiseTestBlocks } from '@test-support';
import {
  action,
  assertion,
  automation,
  concurrently,
  loop,
  sequence,
  serviceCall,
  when,
} from '@building-blocks';
import { trigger } from '@core';
import { entity } from '@targets';
import { iterating } from 'src/assertions/iterating.ts';
import { IEntity } from '@types';

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
      response: { optional: true },
      fields: {},
    },
    turn_off: {
      name: 'Turn On',
      description: 'turn light on',
      response: { optional: true },
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
      await new Promise((accept) => setTimeout(accept, 1_000 * 60 * 10));
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
    predicate: ({ hass }) => {
      const state = hass.getState('switch.living_room');
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
    predicate: ({ hass }) => {
      const state = hass.getState('switch.living_room');
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
    predicate: ({ hass }) => {
      const state = hass.getState('switch.living_room');
      return state === 'on';
    },
  });

  const waitForTenMinutes = action<Pass, Pass>({
    name: 'Wait for 10 minutes',
    callback: async ({ input }) => {
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
    event_type: 'state_changed',
    time_fired: 'foo',
    origin: 'LOCAL',
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

describe('Complex Automation Orchestration', () => {
  const multiRoomStates: State[] = [
    mock({ entity_id: 'light.living_room', state: 'off' }),
    mock({ entity_id: 'light.bedroom', state: 'off' }),
    mock({ entity_id: 'light.kitchen', state: 'off' }),
    mock({ entity_id: 'lock.front_door', state: 'locked' }),
    mock({ entity_id: 'alarm_control_panel.home', state: 'disarmed' }),
    mock({ entity_id: 'climate.house', state: 'heat' }),
    mock({ entity_id: 'sensor.outdoor_temp', state: '15' }),
  ];

  const multiRoomServices: Record<string, Record<string, Service>> = {
    light: {
      turn_on: {
        name: 'Turn On',
        description: 'Turn light on',
        response: { optional: true },
        fields: {},
      },
      turn_off: {
        name: 'Turn Off',
        description: 'Turn light off',
        response: { optional: true },
        fields: {},
      },
    },
    lock: {
      lock: {
        name: 'Lock',
        description: 'Lock the door',
        response: { optional: true },
        fields: {},
      },
      unlock: {
        name: 'Unlock',
        description: 'Unlock the door',
        response: { optional: true },
        fields: {},
      },
    },
    alarm_control_panel: {
      alarm_arm_home: {
        name: 'Arm Home',
        description: 'Arm alarm for home mode',
        response: { optional: true },
        fields: {},
      },
      alarm_disarm: {
        name: 'Disarm',
        description: 'Disarm alarm',
        response: { optional: true },
        fields: {},
      },
    },
    climate: {
      set_temperature: {
        name: 'Set Temperature',
        description: 'Set thermostat temperature',
        response: { optional: true },
        fields: {},
      },
    },
  };

  test('Multi-room smart home coordination with cascading triggers', async () => {
    const { blocks, hass } = await initialiseTestBlocks({
      states: multiRoomStates,
      services: multiRoomServices,
    });

    const triggerParams = { motion: true };

    const motionDetected = trigger({
      name: 'Motion detected anywhere',
      trigger: triggerParams,
    });

    const livingRoomLight = entity('light.living_room');
    const bedroomLight = entity('light.bedroom');
    const kitchenLight = entity('light.kitchen');

    const turnOnLivingRoom = serviceCall({
      name: 'Turn on living room light',
      target: livingRoomLight,
      params: { domain: 'light', service: 'turn_on' },
    });

    const turnOnBedroom = serviceCall({
      name: 'Turn on bedroom light',
      target: bedroomLight,
      params: { domain: 'light', service: 'turn_on' },
    });

    const turnOnKitchen = serviceCall({
      name: 'Turn on kitchen light',
      target: kitchenLight,
      params: { domain: 'light', service: 'turn_on' },
    });

    const waitBetweenRooms = action<void, void>({
      name: 'Wait 2 seconds between room activations',
      callback: async () => {
        await new Promise((accept) => setTimeout(accept, 2000));
      },
    });

    const cascadingLights = automation({
      name: 'Cascading room lights on motion',
      when: motionDetected,
      then: [
        turnOnLivingRoom,
        waitBetweenRooms,
        turnOnBedroom,
        waitBetweenRooms,
        turnOnKitchen,
      ],
    });

    await blocks.registry.registerAutomation(cascadingLights);
    hass.fireTrigger(triggerParams);

    await expect(hass).toHaveHadServiceCallWithParams({
      domain: 'light',
      service: 'turn_on',
      target: { entity_id: ['light.living_room'] },
    });

    await advanceTimersByTime(2100);

    await expect(hass).toHaveHadServiceCallWithParams({
      domain: 'light',
      service: 'turn_on',
      target: { entity_id: ['light.bedroom'] },
    });

    await advanceTimersByTime(2100);

    await expect(hass).toHaveHadServiceCallWithParams({
      domain: 'light',
      service: 'turn_on',
      target: { entity_id: ['light.kitchen'] },
    });
  });

  test('Security system integration with conditional door locking', async () => {
    const { blocks, hass } = await initialiseTestBlocks({
      states: multiRoomStates,
      services: multiRoomServices,
    });

    const triggerParams = { door: 'opened' };

    const doorOpened = trigger({
      name: 'Front door opened',
      trigger: triggerParams,
    });

    const frontDoor = entity('lock.front_door');
    const alarmPanel = entity('alarm_control_panel.home');

    const checkIfNightTime = assertion({
      name: 'Check if its night time (after 10 PM)',
      predicate: () => {
        const hour = new Date().getHours();
        return hour >= 22 || hour < 6;
      },
    });

    const lockDoor = serviceCall({
      name: 'Lock front door',
      target: frontDoor,
      params: { domain: 'lock', service: 'lock' },
    });

    const armAlarm = serviceCall({
      name: 'Arm alarm in home mode',
      target: alarmPanel,
      params: { domain: 'alarm_control_panel', service: 'alarm_arm_home' },
    });

    const nightSecurityAutomation = automation({
      name: 'Night security automation',
      when: doorOpened,
      then: [checkIfNightTime, lockDoor, armAlarm],
    });

    await blocks.registry.registerAutomation(nightSecurityAutomation);

    vi.setSystemTime(new Date('2024-01-01T23:00:00'));
    hass.fireTrigger(triggerParams);

    await expect(hass).toHaveHadServiceCallWithParams({
      domain: 'lock',
      service: 'lock',
      target: { entity_id: ['lock.front_door'] },
    });

    await expect(hass).toHaveHadServiceCallWithParams({
      domain: 'alarm_control_panel',
      service: 'alarm_arm_home',
      target: { entity_id: ['alarm_control_panel.home'] },
    });
  });

  test('Energy management with temperature-based load balancing', async () => {
    const { blocks, hass } = await initialiseTestBlocks({
      states: multiRoomStates,
      services: multiRoomServices,
    });

    const triggerParams = { temperature_change: true };

    const temperatureChanged = trigger({
      name: 'Outdoor temperature changed',
      trigger: triggerParams,
    });

    const climateSystem = entity('climate.house');

    const checkTemperature = assertion({
      name: 'Check if temperature is below 18°C',
      predicate: () => {
        return true;
      },
    });

    const adjustHeating = serviceCall({
      name: 'Increase heating temperature',
      target: climateSystem,
      params: {
        domain: 'climate',
        service: 'set_temperature',
        service_data: { temperature: 22 },
      },
    });

    const energyManagement = automation({
      name: 'Smart energy management system',
      when: temperatureChanged,
      then: [checkTemperature, adjustHeating],
    });

    await blocks.registry.registerAutomation(energyManagement);
    hass.fireTrigger(triggerParams);

    await expect(hass).toHaveHadServiceCallWithParams({
      domain: 'climate',
      service: 'set_temperature',
      target: { entity_id: ['climate.house'] },
      service_data: { temperature: 22 },
    });
  });
});

describe('Advanced Building Block Combinations', () => {
  const advancedStates: State[] = [
    mock({ entity_id: 'sensor.motion_living_room', state: 'off' }),
    mock({ entity_id: 'sensor.motion_bedroom', state: 'off' }),
    mock({ entity_id: 'sensor.motion_kitchen', state: 'off' }),
    mock({ entity_id: 'light.living_room', state: 'off' }),
    mock({ entity_id: 'light.bedroom', state: 'off' }),
    mock({ entity_id: 'light.kitchen', state: 'off' }),
    mock({ entity_id: 'media_player.living_room_tv', state: 'off' }),
    mock({ entity_id: 'climate.house', state: 'heat' }),
    mock({ entity_id: 'sensor.outdoor_temp', state: '15' }),
    mock({ entity_id: 'binary_sensor.washing_machine', state: 'off' }),
    mock({ entity_id: 'switch.notification_led', state: 'off' }),
    mock({ entity_id: 'lock.front_door', state: 'locked' }),
    mock({ entity_id: 'cover.garage_door', state: 'closed' }),
    mock({ entity_id: 'vacuum.robot', state: 'docked' }),
  ];

  const advancedServices: Record<string, Record<string, Service>> = {
    light: {
      turn_on: {
        name: 'Turn On',
        description: 'Turn light on',
        response: { optional: true },
        fields: {},
      },
      turn_off: {
        name: 'Turn Off',
        description: 'Turn light off',
        response: { optional: true },
        fields: {},
      },
    },
    media_player: {
      turn_on: {
        name: 'Turn On',
        description: 'Turn on media player',
        response: { optional: true },
        fields: {},
      },
      turn_off: {
        name: 'Turn Off',
        description: 'Turn off media player',
        response: { optional: true },
        fields: {},
      },
    },
    climate: {
      set_temperature: {
        name: 'Set Temperature',
        description: 'Set thermostat temperature',
        response: { optional: true },
        fields: {},
      },
    },
    switch: {
      turn_on: {
        name: 'Turn On',
        description: 'Turn switch on',
        response: { optional: true },
        fields: {},
      },
      turn_off: {
        name: 'Turn Off',
        description: 'Turn switch off',
        response: { optional: true },
        fields: {},
      },
    },
    lock: {
      lock: {
        name: 'Lock',
        description: 'Lock the door',
        response: { optional: true },
        fields: {},
      },
      unlock: {
        name: 'Unlock',
        description: 'Unlock the door',
        response: { optional: true },
        fields: {},
      },
    },
    cover: {
      open_cover: {
        name: 'Open Cover',
        description: 'Open the cover',
        response: { optional: true },
        fields: {},
      },
      close_cover: {
        name: 'Close Cover',
        description: 'Close the cover',
        response: { optional: true },
        fields: {},
      },
    },
    vacuum: {
      start: {
        name: 'Start',
        description: 'Start vacuum',
        response: { optional: true },
        fields: {},
      },
      return_to_base: {
        name: 'Return to Base',
        description: 'Return vacuum to base',
        response: { optional: true },
        fields: {},
      },
    },
  };

  test('Nested conditional logic with multiple assertion gates', async () => {
    const { blocks, hass } = await initialiseTestBlocks({
      states: advancedStates,
      services: advancedServices,
    });

    const motionTrigger = trigger({
      name: 'Motion detected anywhere',
      trigger: { motion: true },
    });

    const isWeekday = assertion({
      name: 'Is weekday',
      predicate: () => {
        const day = new Date().getDay();
        return day >= 1 && day <= 5;
      },
    });

    const isDaytime = assertion({
      name: 'Is daytime',
      predicate: () => {
        const hour = new Date().getHours();
        return hour >= 6 && hour <= 18;
      },
    });

    const isTemperatureLow = assertion({
      name: 'Temperature is low',
      predicate: () => true,
    });

    const smartHomeSystem = automation({
      name: 'Smart conditional home system',
      when: motionTrigger,
      then: [
        isWeekday,
        when(isDaytime, {
          then: serviceCall({
            name: 'Turn on living room lights',
            target: entity('light.living_room'),
            params: { domain: 'light', service: 'turn_on' },
          }),
          else: serviceCall({
            name: 'Turn on bedroom lights',
            target: entity('light.bedroom'),
            params: { domain: 'light', service: 'turn_on' },
          }),
        }),
        isTemperatureLow,
        serviceCall({
          name: 'Increase temperature',
          target: entity('climate.house'),
          params: { domain: 'climate', service: 'set_temperature' },
        }),
      ],
    });

    await blocks.registry.registerAutomation(smartHomeSystem);

    vi.setSystemTime(new Date('2024-01-01T10:00:00'));
    hass.fireTrigger({ motion: true });

    await expect(hass).toHaveHadServiceCallWithParams({
      domain: 'light',
      service: 'turn_on',
      target: { entity_id: ['light.living_room'] },
    });

    await expect(hass).toHaveHadServiceCallWithParams({
      domain: 'climate',
      service: 'set_temperature',
      target: { entity_id: ['climate.house'] },
    });
  });

  test('Concurrent execution with executeConcurrently block', async () => {
    const { blocks, hass } = await initialiseTestBlocks({
      states: advancedStates,
      services: advancedServices,
    });

    const emergencyTrigger = trigger({
      name: 'Emergency protocol activated',
      trigger: { emergency: true },
    });

    const emergencyResponse = automation({
      name: 'Emergency response system',
      when: emergencyTrigger,
      then: [
        concurrently(
          serviceCall({
            name: 'Turn on all lights',
            target: entity('light.living_room'),
            params: { domain: 'light', service: 'turn_on' },
          }),
          serviceCall({
            name: 'Lock all doors',
            target: entity('lock.front_door'),
            params: { domain: 'lock', service: 'lock' },
          }),
          serviceCall({
            name: 'Open garage for escape route',
            target: entity('cover.garage_door'),
            params: { domain: 'cover', service: 'open_cover' },
          }),
          serviceCall({
            name: 'Turn on emergency LED',
            target: entity('switch.notification_led'),
            params: { domain: 'switch', service: 'turn_on' },
          }),
        ),
      ],
    });

    await blocks.registry.registerAutomation(emergencyResponse);
    hass.fireTrigger({ emergency: true });

    await expect(hass).toHaveHadServiceCallWithParams({
      domain: 'light',
      service: 'turn_on',
      target: { entity_id: ['light.living_room'] },
    });

    await expect(hass).toHaveHadServiceCallWithParams({
      domain: 'lock',
      service: 'lock',
      target: { entity_id: ['lock.front_door'] },
    });

    await expect(hass).toHaveHadServiceCallWithParams({
      domain: 'cover',
      service: 'open_cover',
      target: { entity_id: ['cover.garage_door'] },
    });

    await expect(hass).toHaveHadServiceCallWithParams({
      domain: 'switch',
      service: 'turn_on',
      target: { entity_id: ['switch.notification_led'] },
    });
  });

  test('Complex loop with dynamic entity combinations', async () => {
    const { blocks, hass } = await initialiseTestBlocks({
      states: advancedStates,
      services: advancedServices,
    });

    const cleaningTrigger = trigger({
      name: 'Weekly cleaning schedule',
      trigger: { cleaning_day: true },
    });

    const cleaningRoutine = automation({
      name: 'Automated cleaning routine',
      when: cleaningTrigger,
      then: [
        loop({
          name: 'Room by room cleaning prep',
          while: iterating(
            entity('light.living_room'),
            entity('light.bedroom'),
            entity('light.kitchen'),
          ),
          then: sequence(
            action<{ value: IEntity; index: number; list: IEntity[] }>({
              name: 'Map iterator output',
              callback: ({ input }) => ({ target: input.value }),
            }),
            serviceCall({
              name: 'Turn on room light for cleaning',
              params: { domain: 'light', service: 'turn_on' },
            }),
          ),
        }),
        serviceCall({
          name: 'Start vacuum cleaning',
          ignoreBlockInput: true,
          target: entity('vacuum.robot'),
          params: { domain: 'vacuum', service: 'start' },
        }),
      ],
    });

    await blocks.registry.registerAutomation(cleaningRoutine);
    hass.fireTrigger({ cleaning_day: true });

    await expect(hass).toHaveHadServiceCallWithParams({
      domain: 'light',
      service: 'turn_on',
      target: { entity_id: ['light.living_room'] },
    });

    await expect(hass).toHaveHadServiceCallWithParams({
      domain: 'light',
      service: 'turn_on',
      target: { entity_id: ['light.bedroom'] },
    });

    await expect(hass).toHaveHadServiceCallWithParams({
      domain: 'light',
      service: 'turn_on',
      target: { entity_id: ['light.kitchen'] },
    });

    await expect(hass).toHaveHadServiceCallWithParams({
      domain: 'vacuum',
      service: 'start',
      target: { entity_id: ['vacuum.robot'] },
    });
  });
});

describe('Real-World Scenario Simulations', () => {
  const advancedStates: State[] = [
    mock({ entity_id: 'sensor.motion_living_room', state: 'off' }),
    mock({ entity_id: 'sensor.motion_bedroom', state: 'off' }),
    mock({ entity_id: 'sensor.motion_kitchen', state: 'off' }),
    mock({ entity_id: 'light.living_room', state: 'off' }),
    mock({ entity_id: 'light.bedroom', state: 'off' }),
    mock({ entity_id: 'light.kitchen', state: 'off' }),
    mock({ entity_id: 'media_player.living_room_tv', state: 'off' }),
    mock({ entity_id: 'climate.house', state: 'heat' }),
    mock({ entity_id: 'sensor.outdoor_temp', state: '15' }),
    mock({ entity_id: 'binary_sensor.washing_machine', state: 'off' }),
    mock({ entity_id: 'switch.notification_led', state: 'off' }),
    mock({ entity_id: 'lock.front_door', state: 'locked' }),
    mock({ entity_id: 'cover.garage_door', state: 'closed' }),
    mock({ entity_id: 'vacuum.robot', state: 'docked' }),
  ];

  const advancedServices: Record<string, Record<string, Service>> = {
    light: {
      turn_on: {
        name: 'Turn On',
        description: 'Turn light on',
        response: { optional: true },
        fields: {},
      },
      turn_off: {
        name: 'Turn Off',
        description: 'Turn light off',
        response: { optional: true },
        fields: {},
      },
    },
    media_player: {
      turn_on: {
        name: 'Turn On',
        description: 'Turn on media player',
        response: { optional: true },
        fields: {},
      },
      turn_off: {
        name: 'Turn Off',
        description: 'Turn off media player',
        response: { optional: true },
        fields: {},
      },
    },
    climate: {
      set_temperature: {
        name: 'Set Temperature',
        description: 'Set thermostat temperature',
        response: { optional: true },
        fields: {},
      },
    },
    switch: {
      turn_on: {
        name: 'Turn On',
        description: 'Turn switch on',
        response: { optional: true },
        fields: {},
      },
      turn_off: {
        name: 'Turn Off',
        description: 'Turn switch off',
        response: { optional: true },
        fields: {},
      },
    },
    lock: {
      lock: {
        name: 'Lock',
        description: 'Lock the door',
        response: { optional: true },
        fields: {},
      },
      unlock: {
        name: 'Unlock',
        description: 'Unlock the door',
        response: { optional: true },
        fields: {},
      },
    },
    cover: {
      open_cover: {
        name: 'Open Cover',
        description: 'Open the cover',
        response: { optional: true },
        fields: {},
      },
      close_cover: {
        name: 'Close Cover',
        description: 'Close the cover',
        response: { optional: true },
        fields: {},
      },
    },
    vacuum: {
      start: {
        name: 'Start',
        description: 'Start vacuum',
        response: { optional: true },
        fields: {},
      },
      return_to_base: {
        name: 'Return to Base',
        description: 'Return vacuum to base',
        response: { optional: true },
        fields: {},
      },
    },
  };

  test('Smart morning routine with cascading wake-up sequence', async () => {
    const { blocks, hass } = await initialiseTestBlocks({
      states: advancedStates,
      services: advancedServices,
    });

    const alarmTrigger = trigger({
      name: 'Morning alarm triggered',
      trigger: { alarm_time: '07:00' },
    });

    const isWeekend = assertion({
      name: 'Is weekend',
      predicate: () => {
        const day = new Date().getDay();
        return day === 0 || day === 6;
      },
    });

    const morningRoutine = automation({
      name: 'Adaptive morning wake-up routine',
      when: alarmTrigger,
      then: [
        when(isWeekend, {
          then: sequence(
            serviceCall({
              name: 'Gentle bedroom lighting',
              target: entity('light.bedroom'),
              params: { domain: 'light', service: 'turn_on' },
            }),
          ),
          else: sequence(
            serviceCall({
              name: 'Turn on bedroom lights',
              target: entity('light.bedroom'),
              params: { domain: 'light', service: 'turn_on' },
            }),
            serviceCall({
              name: 'Turn on living room TV for news',
              target: entity('media_player.living_room_tv'),
              params: { domain: 'media_player', service: 'turn_on' },
            }),
            serviceCall({
              name: 'Set comfortable temperature',
              target: entity('climate.house'),
              params: { domain: 'climate', service: 'set_temperature' },
            }),
          ),
        }),
      ],
    });

    await blocks.registry.registerAutomation(morningRoutine);

    vi.setSystemTime(new Date('2024-01-01T07:00:00'));
    hass.fireTrigger({ alarm_time: '07:00' });

    await expect(hass).toHaveHadServiceCallWithParams({
      domain: 'light',
      service: 'turn_on',
      target: { entity_id: ['light.bedroom'] },
    });

    await expect(hass).toHaveHadServiceCallWithParams({
      domain: 'media_player',
      service: 'turn_on',
      target: { entity_id: ['media_player.living_room_tv'] },
    });

    await expect(hass).toHaveHadServiceCallWithParams({
      domain: 'climate',
      service: 'set_temperature',
      target: { entity_id: ['climate.house'] },
    });
  });

  test('Intelligent home departure detection and automation', async () => {
    const { blocks, hass } = await initialiseTestBlocks({
      states: advancedStates,
      services: advancedServices,
    });

    const departureTrigger = trigger({
      name: 'All occupants left home',
      trigger: { occupancy: 'away' },
    });

    const hasLaundryRunning = assertion({
      name: 'Washing machine is running',
      predicate: ({ hass: hassState }) => {
        const state = hassState.getState('binary_sensor.washing_machine');
        return state === 'on';
      },
    });

    const departureAutomation = automation({
      name: 'Intelligent departure management',
      when: departureTrigger,
      then: [
        concurrently(
          serviceCall({
            name: 'Turn off all lights',
            target: entity('light.living_room'),
            params: { domain: 'light', service: 'turn_off' },
          }),
          serviceCall({
            name: 'Lock front door',
            target: entity('lock.front_door'),
            params: { domain: 'lock', service: 'lock' },
          }),
          serviceCall({
            name: 'Turn off media players',
            target: entity('media_player.living_room_tv'),
            params: { domain: 'media_player', service: 'turn_off' },
          }),
        ),
        action<void[], void>({
          name: 'Discard concurrent results',
          callback: async () => {
            // NOOP
          },
        }),
        when(hasLaundryRunning, {
          then: sequence(
            serviceCall({
              name: 'Keep notification LED on',
              target: entity('switch.notification_led'),
              params: { domain: 'switch', service: 'turn_on' },
            }),
          ),
          else: sequence(
            serviceCall({
              name: 'Turn off notification LED',
              target: entity('switch.notification_led'),
              params: { domain: 'switch', service: 'turn_off' },
            }),
          ),
        }),
      ],
    });

    await blocks.registry.registerAutomation(departureAutomation);
    hass.fireTrigger({ occupancy: 'away' });

    await expect(hass).toHaveHadServiceCallWithParams({
      domain: 'light',
      service: 'turn_off',
      target: { entity_id: ['light.living_room'] },
    });

    await expect(hass).toHaveHadServiceCallWithParams({
      domain: 'lock',
      service: 'lock',
      target: { entity_id: ['lock.front_door'] },
    });

    await expect(hass).toHaveHadServiceCallWithParams({
      domain: 'media_player',
      service: 'turn_off',
      target: { entity_id: ['media_player.living_room_tv'] },
    });

    await expect(hass).toHaveHadServiceCallWithParams({
      domain: 'switch',
      service: 'turn_off',
      target: { entity_id: ['switch.notification_led'] },
    });
  });
});
