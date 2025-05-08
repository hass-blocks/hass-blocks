import type { TestHassClient } from './initialise-test-blocks.ts';
import type { CallServiceCommand } from '@hass-blocks/hass-ts';
import 'vitest';

interface CustomMatchers<R = unknown> {
  toHaveHadServiceCallWithParams: (
    params: Omit<CallServiceCommand, 'id' | 'type'>,
  ) => Promise<R>;
}

declare module 'vitest' {
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  interface Assertion<T = any> extends CustomMatchers<T> {}

  // eslint-disable-next-line @typescript-eslint/no-empty-object-type, @typescript-eslint/no-empty-interface
  interface AsymmetricMatchersContaining extends CustomMatchers {}
}

import deepEqual from 'deep-equal';

expect.extend({
  async toHaveHadServiceCallWithParams(
    received: TestHassClient,
    params: Omit<CallServiceCommand, 'id' | 'type'>,
  ) {
    const paramsString = JSON.stringify(params, null, 2);
    const { isNot } = this;
    try {
      await vi.waitFor(() => {
        const calls = received.getServiceCalls();
        const theCall = calls.find((call) => deepEqual(call, params));
        if (!theCall) {
          throw new Error(
            `Service call with params ${paramsString} wasn't made`,
          );
        }
      });
    } catch {
      return {
        pass: false,
        message: () =>
          `service call with params ${paramsString} was${isNot ? '' : ' not'} recieved`,
      };
    }

    return {
      pass: true,
      message: () =>
        `service call with params ${paramsString} was${isNot ? ' not' : ''} recieved`,
    };
  },
});
