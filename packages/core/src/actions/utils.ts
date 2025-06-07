import {
  action,
  HassBlocksError,
  type ITarget,
  type IHass,
  type Pass,
} from '@hass-blocks/core';

import { waitInSeconds, waitInMinutes } from '@utils';

/**
 * @public
 *
 * An action that will cause a currently executing automation
 * to wait for a given number of minutes
 *
 * @param minutes - how many minutes to wait for
 */
export const waitMinutes = (minutes: number) =>
  action<Pass, Pass>({
    name: `Wait ${minutes} minutes`,

    callback: async ({ input }) => {
      await waitInMinutes(minutes);
      return input;
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
  action<Pass, Pass>({
    name: `Wait ${seconds} minutes`,

    callback: async ({ input }) => {
      await waitInSeconds(seconds);
      return input;
    },
  });

/**
 * @public
 *
 * Given an entity id and a state value, this block will pause
 * execution of a given sequence until the entity id has that state.
 *
 * @param target - The entity to monitor
 * @param state - The targeted state
 * @param timeout - Wait timeout
 */
export const waitUntilState = (
  target: ITarget,
  state: string,
  timeout?: number,
) => {
  if (!target.targetIds) {
    throw new HassBlocksError(
      `waitUntilState needs target to supply entity ids`,
    );
  }
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
  return action<Pass, Pass>({
    name: `Wait ${timeout} minutes until entity is in state ${state}`,
    targets: [target],
    callback: async ({ hass, input }) => {
      const { entity_id } = target.targetIds;
      const ids = (Array.isArray(entity_id) ? entity_id : [entity_id]).flatMap(
        (id) => (id ? [id] : []),
      );
      await Promise.all(
        ids?.map(async (id) => {
          const timeoutPromise = waitInMinutes(timeout ?? 10);
          const stateWaitPromise = waitForState(id, hass, state);
          await Promise.race([timeoutPromise, stateWaitPromise]);
          const finalState = hass.getState(id);
          if (state !== finalState) {
            throw new HassBlocksError(
              `${target} did not get state ${state} after ${timeout} minutes`,
            );
          }
        }),
      );
      return input;
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
  target: ITarget,
  state: string,
  timeout?: number,
) => {
  if (!target.targetIds) {
    throw new HassBlocksError(
      `waitUntilStateIsNot needs target to supply entity ids`,
    );
  }
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
  return action<Pass, Pass>({
    targets: [target],
    name: `Wait ${timeout} minutes until entity is in state ${state}`,
    callback: async ({ hass, input }) => {
      const { entity_id } = target.targetIds;
      const ids = (Array.isArray(entity_id) ? entity_id : [entity_id]).flatMap(
        (id) => (id ? [id] : []),
      );
      await Promise.all(
        ids?.map(async (id) => {
          const timeoutPromise = waitInMinutes(timeout ?? 10);
          const stateWaitPromise = waitForState(id, hass, state);
          await Promise.race([timeoutPromise, stateWaitPromise]);
          const finalState = hass.getState(id);
          if (state === finalState) {
            throw new HassBlocksError(
              `${target} still had state ${state} after ${timeout} minutes`,
            );
          }
        }),
      );
      return input;
    },
  });
};
