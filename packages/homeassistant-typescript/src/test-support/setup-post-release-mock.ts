import { vi } from "vitest";

import * as hassTs from "@hass-blocks/homeassistant-typescript";

vi.doMock("@test-support/package-intercept", () => hassTs);
