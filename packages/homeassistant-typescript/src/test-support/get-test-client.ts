import { initialiseClient } from "./package-intercept.ts";
import { getConfig } from "../lib/core/index.ts";
import { inject } from "vitest";

export const getTestClient = async () => {
  process.env["HASS_HOST"] = 'localhost';
  process.env["HASS_PORT"] = String(inject('hassPort'))
  process.env["HASS_TOKEN"] = String(inject('hassToken'));

  const config = getConfig();

  return await initialiseClient(config);
};
