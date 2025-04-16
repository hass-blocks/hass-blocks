import { render } from "ink";
import { EventBus } from "./event-bus.ts";
import { Show } from "../show/index.ts";

/**
 * @alpha
 */
export const renderSimpleLog = (bus: EventBus, staticLog: boolean) => {
  render(<Show events={bus} staticLog={staticLog} />);
};
