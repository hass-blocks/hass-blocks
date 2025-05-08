import { action, HassBlocksError, type IHass } from '@hass-blocks/core';
import { waitInSeconds, waitInMinutes } from '../utils/index.ts';

/**
 * @public
 *
 * An action that will cause a currently executing automation
 * to wait for a given number of minutes
 *
 * @param minutes - how many minutes to wait for
 */
export const waitMinutes = (minutes: number) =>
  action({
    name: `Wait ${minutes} minutes`,

    callback: async () => {
      await waitInMinutes(minutes);
    },
  });

/**
 * @public
 *
 * An action that will cause a currently executing automation
 * to wait for a given number of seconds
 *
 * @param minutes - how many minutes to wait for
 */
export const waitSeconds = (seconds: number) =>
  action({
    name: `Wait ${seconds} minutes`,

    callback: async () => {
      await waitInSeconds(seconds);
    },
  });

/**
 * @public
 *
 * Given an entity id and a state value, this block will pause
 * execution of a given sequence until the entity id has that state.
 *
 * @param target - The entity id to monitor
 * @param state - The targeted state
 * @param timeout - Wait timeout
 */
export const waitUntilState = (
  target: string,
  state: string,
  timeout?: number,
) => {
  const waitForState = async (
    target: string,
    client: IHass,
    expectedState: string,
  ) => {
    const state = client.getState(target);
    await waitInSeconds(1);
    if (state !== expectedState) {
      await waitForState(target, client, expectedState);
    }
  };
  return action({
    name: `Wait ${timeout} minutes until entity is in state ${state}`,
    callback: async (client) => {
      const timeoutPromise = waitInMinutes(timeout ?? 10);
      const stateWaitPromise = waitForState(target, client, state);
      await Promise.race([timeoutPromise, stateWaitPromise]);
      const finalState = client.getState(target);
      if (state !== finalState) {
        throw new HassBlocksError(
          `${target} did not get state ${state} after ${timeout} minutes`,
        );
      }
    },
  });
};

/**
 * @public
 *
 * Given an entity id and a state value, this block will pause
 * execution of a given sequence until the entity id no
 * longer has that state
 *
 * @param target - The entity id to monitor
 * @param state - The targeted state
 * @param timeout - Wait timeout
 */
export const waitUntilStateIsNot = (
  target: string,
  state: string,
  timeout?: number,
) => {
  const waitForState = async (
    target: string,
    client: IHass,
    expectedState: string,
  ) => {
    const state = client.getState(target);
    await waitInSeconds(1);
    if (state === expectedState) {
      await waitForState(target, client, expectedState);
    }
  };
  return action({
    name: `Wait ${timeout} minutes until entity is in state ${state}`,
    callback: async (client) => {
      const timeoutPromise = waitInMinutes(timeout ?? 10);
      const stateWaitPromise = waitForState(target, client, state);
      await Promise.race([timeoutPromise, stateWaitPromise]);
      const finalState = client.getState(target);
      if (state === finalState) {
        throw new HassBlocksError(
          `${target} still had state ${state} after ${timeout} minutes`,
        );
      }
    },
  });
};
