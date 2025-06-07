import { action, assertion } from '@hass-blocks/core';

/**
 * @public
 *
 * A factory function that keeps track of whether a gate is open or closed.
 * Returns an object containing actions to open and close the gate and an assertion
 * that checks if the gate is open
 *
 * @param name - The name of the gate
 */
export const gate = (name: string) => {
  let gateIsOpen = true;
  return {
    ifGateIsOpen: assertion({
      name: `Is ${name} open`,
      predicate: () => gateIsOpen,
    }),
    ifGateIsClosed: assertion({
      name: `Is ${name} open`,
      predicate: () => !gateIsOpen,
    }),
    open: action({
      name: `Open ${name}`,
      callback: () => {
        gateIsOpen = true;
      },
    }),

    close: action({
      name: `Open ${name}`,
      callback: () => {
        gateIsOpen = false;
      },
    }),
  };
};
