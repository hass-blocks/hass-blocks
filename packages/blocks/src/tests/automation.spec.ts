import { initialiseTestBlocks } from '../test-support/index.ts';
import {
  action,
  automation,
  serviceCall,
  trigger,
} from '../building-blocks/index.ts';

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

test('test a simple automation with just a series of actions', async () => {
  const { blocks, hass } = await initialiseTestBlocks({ states: [] });

  const triggerParams = {
    foo: 'bar',
  };

  const thereIsMotionInTheLivingRoom = trigger({
    name: 'There is motion in the livdng room',
    trigger: triggerParams,
  });

  const turnLightsOn = serviceCall({
    name: 'Turn on living room lights',
    params: {
      domain: 'light',
      service: 'turn_on',
      target: {
        entity_id: 'light.living_room',
      },
    },
  });

  const turnLightsOff = serviceCall({
    name: 'Turn on living room lights',
    params: {
      domain: 'light',
      service: 'turn_off',
      target: {
        entity_id: 'light.living_room',
      },
    },
  });

  const waitForTenMinutes = action({
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

  await vi.waitFor(() => {
    expect(hass.getServiceCalls()).toHaveLength(1);
    expect(hass.getServiceCalls()[0]).toEqual({
      domain: 'light',
      service: 'turn_on',
      target: { entity_id: 'light.living_room' },
    });
  });

  await advanceTimersByTime(1_000 * 60 * 11);

  await vi.waitFor(() => {
    expect(hass.getServiceCalls()).toHaveLength(2);
    expect(hass.getServiceCalls()[1]).toEqual({
      domain: 'light',
      service: 'turn_off',
      target: { entity_id: 'light.living_room' },
    });
  });
});
