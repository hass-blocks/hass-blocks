import {
  action,
  HassBlocksError,
  type ITarget,
  type IHass,
  type Block,
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
  action<void, void>({
    name: `Wait ${minutes} minutes`,

    callback: async (_client, input: I) => {
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
  action<'pass', 'pass'>({
    name: `Wait ${seconds} minutes`,

    callback: async (_client, input) => {
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
  return action({
    name: `Wait ${timeout} minutes until entity is in state ${state}`,
    targets: [target],
    callback: async (client) => {
      const { entity_id } = target.targetIds;
      const ids = (Array.isArray(entity_id) ? entity_id : [entity_id]).flatMap(
        (id) => (id ? [id] : []),
      );
      await Promise.all(
        ids?.map(async (id) => {
          const timeoutPromise = waitInMinutes(timeout ?? 10);
          const stateWaitPromise = waitForState(id, client, state);
          await Promise.race([timeoutPromise, stateWaitPromise]);
          const finalState = client.getState(id);
          if (state !== finalState) {
            throw new HassBlocksError(
              `${target} did not get state ${state} after ${timeout} minutes`,
            );
          }
        }),
      );
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
  return action({
    targets: [target],
    name: `Wait ${timeout} minutes until entity is in state ${state}`,
    callback: async (client) => {
      const { entity_id } = target.targetIds;
      const ids = (Array.isArray(entity_id) ? entity_id : [entity_id]).flatMap(
        (id) => (id ? [id] : []),
      );
      await Promise.all(
        ids?.map(async (id) => {
          const timeoutPromise = waitInMinutes(timeout ?? 10);
          const stateWaitPromise = waitForState(id, client, state);
          await Promise.race([timeoutPromise, stateWaitPromise]);
          const finalState = client.getState(id);
          if (state === finalState) {
            throw new HassBlocksError(
              `${target} still had state ${state} after ${timeout} minutes`,
            );
          }
        }),
      );
    },
  });
};
